import React from 'react';
import cfg from './cardConfig';
import { Card } from '../interfaces';

const initCard = (card: Card): React.ReactComponentElement<"canvas"> => {
    return <canvas id={`canvas${card.suit}-${card.value}`} className={`react-card ${card.isShown ? '' : 'no-click'}`} ref="canvas" width={cfg.canvasWidth} height={cfg.canvasHeight} />
};

export default initCard;