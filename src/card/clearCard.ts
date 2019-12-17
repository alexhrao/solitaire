import cfg from './cardConfig';

const clearCard = (ctx: CanvasRenderingContext2D, isSelected?: boolean): void => {
    ctx.clearRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
    if (isSelected) {
        ctx.fillStyle = cfg.selectedColor;
    } else {
        ctx.fillStyle = cfg.backgroundColor;
    }
    ctx.fillRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
};

export default clearCard;