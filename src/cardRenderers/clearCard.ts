import cfg from './cardConfig';

const clearCard = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
    ctx.fillStyle = cfg.backgroundColor;
    ctx.fillRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
};

export default clearCard;