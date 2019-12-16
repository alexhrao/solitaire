import cfg from './cardConfig';

const renderClub = (ctx: CanvasRenderingContext2D): void => {
    // Top left
    const clubCenterX = cfg.iconWidth / 2;
    const clubCenterY = cfg.iconHeight / 2;
    const clubOffset = clubCenterX / 10;
    const clubRadius = clubCenterX / 2;
    // draw the club
    ctx.beginPath();
        ctx.fillStyle = cfg.clubColor;
        ctx.moveTo(clubCenterX, clubCenterY);
        ctx.arc(clubCenterX - clubRadius + clubOffset, clubCenterY, clubRadius, 0, 2 * Math.PI);
        ctx.moveTo(clubCenterX, clubCenterY);
        ctx.arc(clubCenterX + clubRadius - clubOffset, clubCenterY, clubRadius, 0, 2 * Math.PI);
        ctx.moveTo(clubCenterX, clubCenterY);
        ctx.arc(clubCenterX, clubCenterY - clubRadius + clubOffset, clubRadius, 0, 2 * Math.PI);
        ctx.moveTo(clubCenterX, clubCenterY);
        ctx.lineTo(clubCenterX - clubCenterX / 2, clubCenterY * 2);
        ctx.lineTo(clubCenterX + clubCenterX / 2, clubCenterY * 2);
        ctx.fill();
    ctx.closePath();
    ctx.stroke();
};

const renderClubs = (ctx: CanvasRenderingContext2D): void => {
    ctx.translate(cfg.offset, cfg.offset);
    renderClub(ctx);
    ctx.translate(-cfg.offset, -cfg.offset);

    const botX = cfg.canvasWidth - cfg.iconWidth - cfg.offset;
    const botY = cfg.canvasHeight - cfg.iconHeight / 2;
    ctx.translate(botX, botY);
    ctx.scale(1, -1);
    renderClub(ctx);
    ctx.scale(1, -1);
    ctx.translate(-botX, -botY);
};

export default renderClubs;