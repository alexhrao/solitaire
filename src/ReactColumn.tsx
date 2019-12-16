import React from 'react';
import { Column, Card, Suit } from './interfaces';
import ReactCard from './ReactCard';

import './ReactColumn.css';

interface ColProps {
    column: Column;
    onClick: (index?: number) => void;

};

const ReactColumn: React.FunctionComponent<ColProps> = ({ column, onClick }) => {
    const { cards } = column;
    const handler = createHandler(cards, onClick);
    const reactCards = cards.length === 0
        ? [ <ReactCard card={{type: 'card', value: -1, suit: Suit.S, isShown: true}} onClick={handler} /> ]
        : cards.map(c => <ReactCard key={`${c.suit} ${c.value}`} card={c} onClick={handler} />);
    return <div className="react-column">
        {reactCards}
    </div>;
};

const createHandler = (cards: Card[], onClick: (index?: number) => void): (card: Card) => void => {
    return (card: Card): void => {
        const ind = cards.findIndex(c => c.value === card.value && c.suit === card.suit);
        console.log("trying to find card:");
        console.log(card);
        if (ind === -1) {
            onClick(undefined);
        } else {
            onClick(ind);
        }
    };
}

export default ReactColumn;