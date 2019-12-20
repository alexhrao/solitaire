import React, { Component } from 'react';
import Cookie from 'js-cookie';
import { Card, SelectedCard, Column, Deck, SuitSource, Suit } from './interfaces';
import ReactDeck from './Deck';
import ReactColumn from './Column';
import ReactSuitSource from './SuitSource';
import SelectedContext from './SelectedContext';
import './Solitaire.css';

function shuffle(cards: Card[]): Card[] {
    let curr = cards.length;
    const shuffled: Card[] = [...cards];

    while (curr) {
        const ind = Math.floor(Math.random() * curr--);
        const temp = shuffled[curr];
        shuffled[curr] = shuffled[ind];
        shuffled[ind] = temp;
    }
    return shuffled;
};

function createCards(): Card[] {
    const cards: Card[] = [];
    Object.values(Suit).forEach(s => {
        for (let i = 1; i <= 13; ++i) {
            const card: Card = {
                type: 'card',
                value: i,
                suit: s,
                isShown: false,
            };
            cards.push(card);
        }
    });
    return cards;
};

function createColumns(cards: Card[]): Column[] {
    const cols: Column[] = [];
    for (let i = 0; i < 7; ++i) {
        cols.push({
            type: 'column',
            cards: [],
            index: i,
        });
    }
    let ind = 0;
    while (ind++ < 7) {
        for (let i = ind - 1; i < 7; ++i) {
            cols[i].cards.push(cards.pop()!);
        }
    }
    for (let i = 0; i < 7; ++i) {
        cols[i].cards[i].isShown = true;
    }
    return cols;
};

interface GameState {
    deck: Deck;
    cols: Column[];
    sources: SuitSource[];
};

interface Stats {
    moves: number;
    ticks: number;
}

interface SolitaireState extends GameState {
    selected: SelectedCard;
    cardsPerDeal: number;
    moves: number;
    ticks: number;
    readonly ticker: number;
};

const history: GameState[] = [];

export default class Solitaire extends Component<{}, SolitaireState> {
    public constructor(props: {}) {
        super(props);

        // Create cards, deal, set up deck, etc.
        const cards = shuffle(shuffle(createCards()));
        // Create columns. This should edit our cards array accordingly
        const cols = createColumns(cards);
        // Create deck
        const deck: Deck = {
            type: 'deck',
            deck: cards,
            dealt: [],
        };
        const sources: SuitSource[] = Object.keys(Suit).map((_, i) => {
            return {
                type: 'suitSource',
                index: i,
                cards: [],
            };
        });

        this.state = {
            deck,
            cols,
            sources,
            selected: {
                type: 'selected',
                cards: [],
                source: undefined,
            },
            cardsPerDeal: 1,
            moves: 0,
            ticks: 0,
            ticker: window.setInterval(() => {
                const { ticks } = this.state;
                this.setState({ ticks: ticks + 1 });
            }, 1000),
        };
    };

    private isFinished = (): boolean => {
        const { sources } = this.state;
        return sources.every(src => {
            return (
                src.cards.length > 0 &&
                src.cards[src.cards.length - 1].value === 13
            );
        });
    }

    private pushHistory = (): void => {
        const { deck, sources, cols } = this.state;
        // create deep copies; copy the cards!

        const newDeck: Deck = {
            dealt: deck.dealt.map(c => {return {...c}}),
            deck: deck.deck.map(c => {return {...c}}),
            type: 'deck',
        };
        const newSources: SuitSource[] = sources.map(s => {
            const src: SuitSource = {
                cards: s.cards.map(c => {return {...c}}),
                index: s.index,
                type: 'suitSource',
            };
            return src;
        });
        const newCols: Column[] = cols.map(col => {
            const cl: Column = {
                cards: col.cards.map(c => {return {...c}}),
                index: col.index,
                type: 'column',
            };
            return cl;
        })

        const game: GameState = {
            deck: newDeck,
            sources: newSources,
            cols: newCols,
        };
        history.push(game);
        const { moves } = this.state;
        this.setState({ moves: moves + 1 });
    };

    private undo = (): void => {
        const { selected } = this.state;
        const newState = history.pop();
        if (newState) {
            selected.cards = [];
            selected.source = undefined;
            this.setState({ ...newState, selected });
        }
        const { moves } = this.state;
        this.setState({ moves: moves + 1 });
    };

    private draw = (): void => {
        const { selected, deck, cardsPerDeal } = this.state;
        if (deck.deck.length === 0) {
            // reset
            let card: Card|undefined = deck.dealt.pop();
            while (card !== undefined) {
                card.isShown = false;
                deck.deck.push(card);
                card = deck.dealt.pop();
            }
        } else {
            // move
            // if one per draw, just engage
            if (cardsPerDeal === 1) {
                const card: Card = deck.deck.pop()!;
                card.isShown = true;
                deck.dealt.push(card);
            } else {
                // see how many cards we have
                const cardsToGet = deck.deck.length > 3 ? 3 : deck.deck.length;
                for (let i = 0; i < cardsToGet; ++i) {
                    const card: Card = deck.deck.pop()!;
                    card.isShown = true;
                    deck.dealt.push(card);
                }
            }
        }
        selected.cards = [];
        selected.source = undefined;
        this.setState({ selected, deck });
    };

    private changeDraw = (): void => {
        const { cardsPerDeal } = this.state;
        this.setState({
            cardsPerDeal: cardsPerDeal === 3 ? 1 : 3,
        });
    }

    private onDeckClick = (): void => {
        const { selected, deck } = this.state;
        if (selected.source) {
            selected.cards = [];
            selected.source = undefined;
        } else if (deck.dealt.length > 0) {
            selected.cards = [ deck.dealt[deck.dealt.length - 1] ];
            selected.source = deck;
        } else {
            selected.cards = [];
            selected.source = undefined;
        }
        this.setState({ selected });
    };

    private onSuitClick = (source: SuitSource): void => {
        let { selected, sources} = this.state;
        // if we have selected something, see if we can place into. If we can, then engage?
        if (selected.source !== undefined) {
            // first see if we're only holding one
            if (selected.cards.length === 1) {
                const card = selected.cards[0];
                if (this.canAppend(source, card)) {
                    this.pushHistory();
                    // finalize, then move
                    this.finalizeSelection();
                    // refresh our view of who is selected and who the sources are!
                    selected = this.state.selected;
                    sources = this.state.sources;
                    source.cards.push(card);
                } else {
                    selected.source = undefined;
                    selected.cards = [];
                }
            }
        } else {
            // we are selecting FROM this suitSource
            if (source.cards.length > 0) {
                selected.source = source;
                selected.cards = [ source.cards[source.cards.length - 1] ];
            }
        }
        sources[source.index] = source;
        this.setState({ selected, sources });
    };

    private onColumnClick = (source: Column, cardIndex?: number): void => {
        let { selected, cols } = this.state;
        if (selected.source !== undefined) {
            // We are trying to append onto our column. Do the checks!
            if (selected.source.type === 'column') {
                // check that suit is compatible and number is correct, then engage
                if (this.canAppend(source, selected.cards[0])) {
                    this.pushHistory();
                    // We can append! add to our column, then finalize
                    selected.cards.forEach(c => {
                        source.cards.push(c);
                    });
                    this.finalizeSelection();
                    // refresh our view of who is selected and who the sources are!
                    selected = this.state.selected;
                    cols = this.state.cols;
                } else {
                    selected.cards = [];
                    selected.source = undefined;
                }
            } else if (selected.source.type === 'deck') {
                if (this.canAppend(source, selected.cards[0])) {
                    this.pushHistory();
                    source.cards.push(selected.cards[0]);
                    this.finalizeSelection();
                    selected = this.state.selected;
                    cols = this.state.cols;
                }
            } else if (selected.source.type === 'suitSource') {
                if (this.canAppend(source, selected.cards[0])) {
                    this.pushHistory();
                    source.cards.push(selected.cards[0]);
                    this.finalizeSelection();
                    selected = this.state.selected;
                    cols = this.state.cols;
                }
            }
        } else if (cardIndex !== undefined) {
            // Set the flag!
            // check that the selected card is shown
            selected.cards = [];
            selected.source = undefined;
            if (source.cards[cardIndex].isShown) {
                selected.cards = [];
                for (let i = cardIndex; i < source.cards.length; ++i) {
                    selected.cards.push(source.cards[i]);
                }
                selected.source = source;
            }
        }
        this.setState({ selected, cols });
    };

    private canAppend = (target: Column|Deck|SuitSource, check: Card): boolean => {
        if (target.type === 'deck') {
            // can never append to deck
            return false;
        } else if (target.type === 'column') {
            // compatible suit, decrement number
            if (target.cards.length === 0) {
                // has to be king!
                return check.value === 13;
            }
            const card = target.cards[target.cards.length - 1];
            if (
                ((card.suit === Suit.C || card.suit === Suit.S) && (check.suit === Suit.H || check.suit === Suit.D))
                ||
                ((card.suit === Suit.H || card.suit === Suit.D) && (check.suit === Suit.C || check.suit === Suit.S))
            ) {
                // suits are compatible - check the number
                return check.value === card.value - 1;
            }
        } else if (target.type === 'suitSource') {
            // same suit, increment number
            if (target.cards.length === 0) {
                return check.value === 1;
            }
            const card = target.cards[target.cards.length - 1];
            return check.suit === card.suit && check.value === card.value + 1;
        }
        return false;
    };

    private finalizeSelection = (): void => {
        const { selected, sources, deck, cols } = this.state;
        //const { deck, sources, cols } = this.state;
        if (selected.source === undefined) {
            return;
        }
        if (selected.source.type === 'deck') {
            deck.dealt.pop();
        } else if (selected.source.type === 'column') {
            // pop for the number of cards we have selected
            selected.cards.forEach(() => {
                cols[(selected.source as Column).index].cards.pop();
            });
            // if there are any cards left, flip the last one
            if (cols[(selected.source as Column).index].cards.length > 0) {
                cols[(selected.source as Column).index].cards[
                    cols[(selected.source as Column).index].cards.length - 1
                ].isShown = true;
            }
        } else if (selected.source.type === 'suitSource') {
            sources[selected.source.index].cards.pop();
        }
        selected.cards = [];
        selected.source = undefined;
        this.setState({ selected, deck, sources, cols });
    };

    public render = () => {
        const { deck, cols, sources, selected, cardsPerDeal, moves, ticks, ticker } = this.state;
        const time = new Date(ticks * 1000).toISOString().substr(11, 8);
        //const { deck, sources, cols } = this.state;
        const columns = cols.map(c => {
            return <ReactColumn key={c.index} column={c} onClick={(index?: number) => this.onColumnClick(c, index)} />
        });
        const srcs = sources.map(s => {
            return <ReactSuitSource key={s.index} source={s} onClick={this.onSuitClick} />;
        });
        let stats: React.ReactNode = null;
        if (this.isFinished()) {
            if (Cookie.getJSON('stats') !== undefined) {
                const statistics: Stats = Cookie.getJSON('stats') as Stats;
                const pastMoves = statistics.moves < moves ? statistics.moves : moves;
                const pastTicks = statistics.ticks < ticks ? statistics.ticks : ticks;
                stats = (
                    <React.Fragment>
                        <h1>Congratulations! Finished in {time} time with {moves} moves!</h1>
                        <h1>Best: {pastMoves} moves | {new Date(pastTicks * 1000).toISOString().substr(11, 8)} Time</h1>
                    </React.Fragment>
                );
                Cookie.set('stats', { moves: pastMoves, ticks: pastTicks });
            } else {
                stats = <h1>Congratulations! Finished in {time} time with {moves} moves!</h1>
                Cookie.set('stats', { moves: moves, ticks: ticks });
            }
            window.clearInterval(ticker);
        } else {
            stats = <React.Fragment>
                <p>{moves} {moves === 1 ? 'Move' : 'Moves'} Made</p>
                <p>{time} Time Elapsed</p>
            </React.Fragment>;
        }
        return (
            <SelectedContext.Provider value={selected.cards}>
                <div className="solitaire-board">
                    <div className="solitaire-header">
                        <div className="solitaire-stats">
                            {stats}
                        </div>
                    </div>
                    <div className="solitaire-dealer">
                        <div className="solitaire-deck">
                            <ReactDeck
                                type="deck"
                                deck={deck.deck}
                                dealt={deck.dealt}
                                onDeal={this.draw}
                                onCardClick={this.onDeckClick}
                            />
                            <button
                                type="button"
                                className="change-deal"
                                onClick={this.changeDraw}
                            >
                                Deal {cardsPerDeal === 3 ? '1' : '3'} per draw
                            </button>
                        </div>
                        <div className="solitaire-source-mat">
                            <div className="solitaire-sources">
                                {srcs}
                            </div>
                            <div className="solitaire-buttons">
                                <button
                                    type="button"
                                    className="solitaire-undo"
                                    onClick={this.undo}
                                >
                                    Undo
                                </button>
                                <button
                                    type="button"
                                    className="solitaire-reset"
                                    onClick={() => {
                                        // check all are done OR ask
                                        if (this.isFinished() || window.confirm('Are you sure you would like to start a new game?')) {
                                            window.location.reload();
                                        }
                                    }}
                                >
                                    New Game
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="solitaire-cols">
                        {columns}
                    </div>
                </div>
            </SelectedContext.Provider>
        );
    };
};