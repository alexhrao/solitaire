import React, { Component } from 'react';
import { Card, SelectedCard, Column, Deck, SuitSource, Suit } from './interfaces';
import ReactDeck from './ReactDeck';
import ReactColumn from './ReactColumn';
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
    console.log(cols);
    for (let i = 0; i < 7; ++i) {
        cols[i].cards[i].isShown = true;
    }
    return cols;
};

interface SolitaireState {
    deck: Deck,
    cols: Column[],
    sources: SuitSource[],
    selected: SelectedCard,
};

export default class Solitaire extends Component<{}, SolitaireState> {
    public constructor(props: {}) {
        super(props);

        // Create cards, deal, set up deck, etc.
        const cards = shuffle(createCards());
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
        };
    };

    private draw = (): void => {
        const { selected, deck } = this.state;
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
            const card: Card = deck.deck.pop()!;
            card.isShown = true;
            deck.dealt.push(card);
        }
        selected.cards = [];
        selected.source = undefined;
        this.setState({ selected, deck });
    };

    private onDeckClick = (): void => {
        const { selected, deck } = this.state;
        if (deck.dealt.length > 0) {
            selected.cards = [ deck.dealt[deck.dealt.length - 1] ];
            selected.source = deck;
        } else {
            selected.cards = [];
            selected.source = undefined;
        }
        this.setState({ selected });
    };

    private onSuitClick = (source: SuitSource): void => {
        let { selected, sources } = this.state;
        // if we have selected something, see if we can place into. If we can, then engage?
        if (selected.source !== undefined) {
            // first see if we're only holding one
            if (selected.cards.length === 1) {
                const card = selected.cards[0];
                if (this.canAppend(source, card)) {
                    // finalize, then move
                    this.finalizeSelection();
                    // refresh our view of who is selected and who the sources are!
                    selected = this.state.selected;
                    sources = this.state.sources;
                    source.cards.push(card);
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
                    // We can append! add to our column, then finalize
                    selected.cards.forEach(c => {
                        source.cards.push(c);
                    });
                    this.finalizeSelection();
                    // refresh our view of who is selected and who the sources are!
                    selected = this.state.selected;
                    cols = this.state.cols;
                }
            }
        } else if (cardIndex !== undefined) {
            // Set the flag!
            selected.cards = [];
            for (let i = cardIndex; i < source.cards.length; ++i) {
                selected.cards.push(source.cards[i]);
            }
            selected.source = source;
        }
        console.log(selected);
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
                return true;
            }
            const card = target.cards[target.cards.length - 1];
            return check.suit === card.suit && check.value === card.value + 1;
        }
        return false;
    };

    private finalizeSelection = (): void => {
        const { selected, sources, deck, cols } = this.state;
        if (selected.source === undefined) {
            return;
        }
        if (selected.source.type === 'deck') {
            deck.dealt.pop();
        } else if (selected.source.type === 'column') {
            // pop for the number of cards we have selected
            selected.source.cards.forEach(() => {
                cols[(selected.source as Column).index].cards.pop();
            });
        } else if (selected.source.type === 'suitSource') {
            sources[selected.source.index].cards.pop();
        }
        selected.cards = [];
        selected.source = undefined;
        this.setState({ selected, deck, sources, cols });
    };

    public render = (): React.ReactNode => {
        const { deck, cols, sources, selected } = this.state;
        const columns = cols.map(c => {
            return <ReactColumn key={c.index} column={c} onClick={(index: number) => this.onColumnClick(c, index)} />
        });
        return <div>
            <div className="solitaire-deck">
                <ReactDeck
                    type="deck"
                    deck={deck.deck}
                    dealt={deck.dealt}
                    onDeal={this.draw}
                    onCardClick={this.onDeckClick}
                />
            </div>
            <div className="solitaire-cols">
                {columns}
            </div>
        </div>;
    };
};