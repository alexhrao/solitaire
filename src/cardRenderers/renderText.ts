import cfg from './cardConfig';
import { Card, Suit } from '../interfaces';

const fillText = (ctx: CanvasRenderingContext2D, value: number): void => {
    if (value === 1) {
        ctx.fillText('A', 0, 0);
    } else if (value < 11) {
        ctx.fillText(`${value}`, 0, 0);
    } else if (value === 11) {
        ctx.fillText('J', 0, 0);
    } else if (value === 12) {
        ctx.fillText('Q', 0, 0);
    } else {
        ctx.fillText('K', 0, 0);
    }
};

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
    fillText(ctx, card.value);
    ctx.translate(-cfg.canvasWidth / 2, -cfg.canvasHeight / 2);

    const topCornerX = cfg.canvasWidth - 2 * cfg.offset;
    const topCornerY = 3 * cfg.offset;
    ctx.translate(topCornerX, topCornerY);
    ctx.font = cfg.cornerFontStyle;
    fillText(ctx, card.value);
    ctx.translate(-topCornerX, -topCornerY);

    const botCornerX = 2 * cfg.offset;
    const botCornerY = cfg.canvasHeight - 1.5 * cfg.offset;
    ctx.translate(botCornerX, botCornerY);
    ctx.font = cfg.cornerFontStyle;
    fillText(ctx, card.value);
    ctx.translate(-botCornerX, -botCornerY);
};

export default renderText;