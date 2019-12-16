import React from 'react';
import { Deck, Suit } from './interfaces';
import ReactCard from './ReactCard';

import './ReactDeck.css';

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
        topDealt = <ReactCard card={dealt[dealt.length - 1]} onClick={onCardClick} />
    } else {
        topDealt = <ReactCard card={{suit: Suit.S, type:'card', isShown: true, value: 0 }} onClick={() => {}} />;
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