import React from 'react';
import { Deck, Suit } from './interfaces';
import { ReactCard } from './ReactCard';

interface DeckProps extends Deck {
    onDeal: () => void;
    onCardClick: () => void;
};

const ReactDeck: React.FunctionComponent<DeckProps> = ({ deck, dealt, onDeal, onCardClick }) => {
    let dealer: React.ReactNode = null;
    if (deck.length > 0) {
        dealer = <ReactCard {...deck[deck.length - 1]} onClick={onDeal} />
    } else {
        dealer = <ReactCard suit={Suit.S} type='card' value={0} onClick={onDeal} isShown={false} />;
    }
    let topDealt: React.ReactNode = null;
    if (dealt.length > 0) {
        topDealt = <ReactCard {...dealt[dealt.length - 1]} onClick={onCardClick} />
    } else {
        topDealt = <ReactCard suit={Suit.S} type='card' value={0} onClick={() => {}} isShown={false} />;
    }
    return (
        <div className="deck">
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