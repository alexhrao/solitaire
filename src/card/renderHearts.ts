import { Card } from '../interfaces';
import cfg from './cardConfig';
import renderText from './renderText';

const renderHeart = (ctx: CanvasRenderingContext2D): void => {
    const topCurveHeight = cfg.iconHeight * 0.3;
    ctx.beginPath();
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(
            0,
            0,
            -cfg.iconWidth / 2,
            0,
            -cfg.iconWidth / 2,
            topCurveHeight,
        );
        ctx.bezierCurveTo(
            -cfg.iconWidth / 2,
            (cfg.iconHeight + topCurveHeight) / 2,
            0,
            (cfg.iconHeight + topCurveHeight) / 2,
            0,
            cfg.iconHeight,
        );
        ctx.bezierCurveTo(
            0,
            (cfg.iconHeight + topCurveHeight) / 2,
            cfg.iconWidth / 2,
            (cfg.iconHeight + topCurveHeight) / 2,
            cfg.iconWidth / 2,
            topCurveHeight,
        );
        ctx.bezierCurveTo(
            cfg.iconWidth / 2,
            0,
            0,
            0,
            0,
            topCurveHeight
        );
    ctx.closePath();
    ctx.fillStyle = cfg.heartColor;
    ctx.fill();
};

const renderHearts = (ctx: CanvasRenderingContext2D): void => {

    const topX = cfg.iconWidth / 2 + cfg.offset;
    const topY = cfg.offset;
    ctx.translate(topX, topY);
    renderHeart(ctx);
    ctx.translate(-topX, -topY);

    const botX = cfg.canvasWidth - (cfg.iconWidth / 2 + cfg.offset);
    const botY = cfg.canvasHeight - cfg.iconHeight / 2;
    ctx.translate(botX, botY);
    ctx.scale(1, -1);
    renderHeart(ctx);
    ctx.scale(1, -1);
    ctx.translate(-botX, -botY);
};

export default renderHearts;