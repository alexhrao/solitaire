import React from 'react';
import { Column, Card } from './interfaces';
import ReactCard from './ReactCard';

import './ReactColumn.css';

interface ColProps {
    column: Column;
    onClick: (index: number) => void;

};

const ReactColumn: React.FunctionComponent<ColProps> = ({ column, onClick }) => {
    const onCardClick = (card: Card): void => {
        // Find place on column stack
        const ind = cards.findIndex(c => c.value === card.value && c.suit === card.suit);
        if (ind === -1) {
            return;
        }
        onClick(ind);
    };
    const { cards } = column;
    
    const reactCards = cards.map(c => <ReactCard key={`${c.suit} ${c.value}`} {...c} onClick={onCardClick} />);
    return <div className="react-column">
        {reactCards}
    </div>;
};

export default ReactColumn;