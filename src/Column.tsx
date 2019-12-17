import React from 'react';
import { Column, Card, Suit } from './interfaces';
import ReactCard from './card/ReactCard';
import SelectedContext from './SelectedContext';

import './ReactColumn.css';

interface ColProps {
    column: Column;
    onClick: (index?: number) => void;

};



const ReactColumn: React.FunctionComponent<ColProps> = ({ column, onClick }) => {
    const { cards } = column;
    const handler = createHandler(cards, onClick);
    const checkSelection = (selected: Card[], card: Card): React.ReactNode => {
        const isSelected = selected.findIndex(c => c.suit === card.suit && c.value === card.value) !== -1;
        return <ReactCard key={`${card.suit} ${card.value}`} card={card} onClick={handler} isSelected={isSelected} />;
    }
    const reactCards = cards.length === 0
        ? [ <ReactCard card={{type: 'card', value: -1, suit: Suit.S, isShown: true}} onClick={handler} /> ]
        : cards.map(c => <SelectedContext.Consumer>
            {selected => checkSelection(selected, c)}
        </SelectedContext.Consumer>);
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