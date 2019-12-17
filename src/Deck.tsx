import React from 'react';
import { Deck, Suit } from './interfaces';
import ReactCard from './card/ReactCard';
import SelectedContext from './SelectedContext';
import './Deck.css';

interface DeckProps extends Deck {
    onDeal: () => void;
    onCardClick: () => void;
};

const ReactDeck: React.FunctionComponent<DeckProps> = ({ deck, dealt, onDeal, onCardClick }) => {
    let dealer: React.ReactNode = null;
    if (deck.length > 0) {
        dealer = <ReactCard card={{suit: Suit.S, type:'card', isShown: false, value: 0 }} onClick={onDeal} />
    } else {
        dealer = <ReactCard card={{suit: Suit.S, type:'card', isShown: true, value: -1 }} onClick={onDeal} />;
    }
    let topDealt: React.ReactNode = null;
    if (dealt.length > 0) {
        topDealt = <SelectedContext.Consumer>
            { selected => {
                const card = dealt[dealt.length - 1];
                const isSelected = (
                    selected.length === 1
                    && card.suit === selected[0].suit
                    && card.value === selected[0].value
                );
                return <ReactCard card={card} onClick={onCardClick} isSelected={isSelected} />;
            }}
        </SelectedContext.Consumer>
        
    } else {
        topDealt = <ReactCard card={{suit: Suit.S, type:'card', isShown: true, value: -1 }} onClick={() => {}} />;
    }
    return (
        <div className="react-deck">
            <div className="deck-dealer">
                {dealer}
            </div>
            <div className="deck-dealt">
                {topDealt}
            </div>
        </div>
    );
};

export default ReactDeck;