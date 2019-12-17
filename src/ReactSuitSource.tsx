import React from 'react';
import { SuitSource, Suit } from './interfaces';
import ReactCard from './card/ReactCard';
import SelectedContext from './SelectedContext';

interface SuitSourceParams {
    source: SuitSource;
    onClick: (source: SuitSource) => void;
};

const ReactSuitSource: React.FunctionComponent<SuitSourceParams> = ({ source, onClick }) => {

    const card = source.cards.length === 0
    ? <ReactCard card={{type: 'card', value: -1, suit: Suit.S, isShown: true}} onClick={() => onClick(source)} />
    : (
        <SelectedContext.Consumer>
            {selected => {
                const myCard = source.cards[source.cards.length - 1];
                const isSelected = selected.findIndex(c => c.value === myCard.value && c.suit === myCard.suit) !== -1;
                return <ReactCard card={source.cards[source.cards.length - 1]} onClick={() => onClick(source)} isSelected={isSelected} />
            }}
        </SelectedContext.Consumer>
    );
    return <div>
        {card}
    </div>;
};

export default ReactSuitSource;