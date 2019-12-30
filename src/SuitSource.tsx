import React from 'react';
import { SuitSource, Suit } from './interfaces';
import ReactCard from './card/ReactCard';
import SelectedContext from './SelectedContext';

import './SuitSource.css';

interface SuitSourceProps {
    source: SuitSource;
    onClick: (source: SuitSource) => void;
    currMoveInd: number;
    moveInd: number;
};

const ReactSuitSource: React.FunctionComponent<SuitSourceProps> = ({ source, onClick, moveInd, currMoveInd }) => {

    const placeHolder = <ReactCard card={{type: 'card', value: -1, suit: Suit.S, isShown: true}} onClick={() => onClick(source)} />;
    const card = source.cards.map((sc, i) => {
        return (
            <SelectedContext.Consumer key={`${sc.value} ${sc.suit}`}>
                {selected => {
                    let moveState: number|undefined = undefined;
                    if (moveInd < i) {
                        // we've passed; 1
                        moveState = 1;
                    } else if (moveInd === i && currMoveInd >= source.index) {
                        // animate!
                        moveState = 0;
                    }
                    const isSelected = selected.findIndex(c => c.value === sc.value && c.suit === sc.suit) !== -1;
                    return <ReactCard key={`${sc.value} ${sc.suit}`} moveState={moveState} card={sc} onClick={() => onClick(source)} isSelected={isSelected} />
                }}
            </SelectedContext.Consumer>
        );
    });
    return <div className="suit-source-container">
        <div className="placeholder-suit-card">
            {placeHolder}
        </div>
        {card}
    </div>;
};

export default ReactSuitSource;