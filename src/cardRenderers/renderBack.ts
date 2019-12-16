import cfg from './cardConfig';

const renderBack = (ctx: CanvasRenderingContext2D): void => {
    ctx.lineWidth = 1.0;
    const offset = 2 * (cfg.canvasHeight / cfg.numBackLines);
    
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    for (let i = 0; i < cfg.numBackLines; ++i) {
        ctx.moveTo(0, i * offset);
        ctx.lineTo(i * offset, 0);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    for (let i = 0; i < cfg.numBackLines; ++i) {
        ctx.moveTo(cfg.canvasWidth - (i * offset), 0);
        ctx.lineTo(cfg.canvasWidth, i * offset);
    }
    ctx.closePath();
    ctx.stroke();
};

export default renderBack;