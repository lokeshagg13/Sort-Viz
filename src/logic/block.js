class Block {
  constructor(x, y, width, height, index) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.index = index;
  }

  draw(ctx, color) {
    ctx.save();
    ctx.fillStyle = color.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = color.borderStyle;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}

export default Block;
