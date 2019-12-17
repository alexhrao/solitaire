import cfg from './cardConfig';

const renderSpade = (ctx: CanvasRenderingContext2D): void => {
    const topHeight = cfg.iconHeight * 0.7;
    const bottomHeight = cfg.iconWidth * 0.3;
    const bottomWidth = cfg.iconWidth * 0.7;
    const topHeightModifier = 1.3;
    ctx.beginPath();
        ctx.moveTo(0, 0);
        // Top left of spade
        ctx.bezierCurveTo(
            0,
            topHeight / 2,
            -cfg.iconWidth / 2,
            topHeight / 2,
            -cfg.iconWidth / 2,
            topHeight,
        );
        // bottom left of spade
        ctx.bezierCurveTo(
            -cfg.iconWidth / 2,
            topHeight * topHeightModifier,
            0,
            topHeight * topHeightModifier,
            0,
            topHeight,
        );
        // bottom right of spade
        ctx.bezierCurveTo(
            0,
            topHeight * topHeightModifier,
            cfg.iconWidth / 2,
            topHeight * topHeightModifier,
            cfg.iconWidth / 2,
            topHeight,
        );
        // top right of spade
        ctx.bezierCurveTo(
            cfg.iconWidth / 2,
            topHeight / 2,
            0,
            topHeight / 2,
            0,
            0,
        );
    ctx.closePath();
    ctx.fill();

    // Bottom
    ctx.beginPath();
        ctx.moveTo(0, topHeight);
        ctx.quadraticCurveTo(
            0,
            topHeight + bottomHeight,
            -bottomWidth / 2,
            topHeight + bottomHeight,
        );
        ctx.lineTo(bottomWidth / 2, topHeight + bottomHeight);
        ctx.quadraticCurveTo(
            0,
            topHeight + bottomHeight,
            0,
            topHeight,
        );
    ctx.closePath();
    ctx.fillStyle = cfg.spadeColor;
    ctx.fill();
};

const renderSpades = (ctx: CanvasRenderingContext2D): void => {
    ctx.fillStyle = cfg.spadeColor;
    const topX = cfg.iconWidth / 2 + cfg.offset;
    const topY = cfg.offset;
    ctx.translate(topX, topY);
    renderSpade(ctx);
    ctx.translate(-topX, -topY);

    const botX = cfg.canvasWidth - (cfg.iconWidth / 2 + cfg.offset);
    const botY = cfg.canvasHeight - cfg.iconHeight / 2;
    // Bottom spade
    ctx.translate(botX, botY);
    ctx.scale(1, -1);
    renderSpade(ctx);
    ctx.scale(1, -1);
    ctx.translate(-botX, -botY);
};

export default renderSpades;