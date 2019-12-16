import cfg from './cardConfig';

const renderDiamond = (ctx: CanvasRenderingContext2D): void => {
    ctx.beginPath();
        ctx.fillStyle = cfg.diamondColor;
        ctx.moveTo(cfg.iconWidth / 2, 0);
        ctx.lineTo(0, cfg.iconHeight / 2);
        ctx.lineTo(cfg.iconWidth / 2, cfg.iconHeight);
        ctx.lineTo(cfg.iconWidth, cfg.iconHeight / 2);
        ctx.lineTo(cfg.iconWidth / 2, 0);
        ctx.fill();
    ctx.closePath();
};

const renderDiamonds = (ctx: CanvasRenderingContext2D): void => {
    ctx.translate(cfg.offset, cfg.offset);
    renderDiamond(ctx);
    ctx.translate(-cfg.offset, -cfg.offset);

    const botX = cfg.canvasWidth - cfg.iconWidth - cfg.offset;
    const botY = cfg.canvasHeight - cfg.iconHeight / 2;
    ctx.translate(botX, botY);
    ctx.scale(1, -1);
    renderDiamond(ctx);
    ctx.scale(1, -1);
    ctx.translate(-botX, -botY);
};

export default renderDiamonds;