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
        dealer = <ReactCard suit={Suit.S} type='card' value={0} isShown={false} onClick={onDeal} />
    } else {
        dealer = <ReactCard suit={Suit.S} type='card' value={-1} onClick={onDeal} isShown={true} />;
    }
    let topDealt: React.ReactNode = null;
    if (dealt.length > 0) {
        topDealt = <ReactCard {...dealt[dealt.length - 1]} onClick={onCardClick} />
    } else {
        topDealt = <ReactCard suit={Suit.S} type='card' value={-1} onClick={() => {}} isShown={true} />;
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