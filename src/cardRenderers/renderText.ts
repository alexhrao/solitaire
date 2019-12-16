import cfg from './cardConfig';
import { Card, Suit } from '../interfaces';

const renderText = (ctx: CanvasRenderingContext2D, card: Card): void => {
    // Text in the middle
    ctx.font = cfg.fontStyle;
    switch (card.suit) {
        case Suit.S:
            ctx.fillStyle = cfg.spadeColor;
            break;
        case Suit.C:
            ctx.fillStyle = cfg.clubColor;
            break;
        case Suit.D:
            ctx.fillStyle = cfg.diamondColor;
            break;
        case Suit.H:
            ctx.fillStyle = cfg.heartColor;
            break;
    }
    ctx.textAlign = 'center';
    ctx.translate(cfg.canvasWidth / 2, cfg.canvasHeight / 2);
    if (card.value === 1) {
        ctx.fillText('A', 0, 0);
    } else if (card.value < 11) {
        ctx.fillText(`${card.value}`, 0, 0);
    } else if (card.value === 11) {
        ctx.fillText('J', 0, 0);
    } else if (card.value === 12) {
        ctx.fillText('Q', 0, 0);
    } else {
        ctx.fillText('K', 0, 0);
    }
    ctx.translate(-cfg.canvasWidth / 2, -cfg.canvasHeight / 2);
};

export default renderText;