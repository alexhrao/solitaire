import cfg from './cardConfig';

const renderSpace = (ctx: CanvasRenderingContext2D): void => {
    ctx.fillStyle = cfg.spaceColor;
    ctx.fillRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
};

export default renderSpace;