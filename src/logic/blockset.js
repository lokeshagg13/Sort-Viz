import appConfig from "./config";
import Block from "./block";

class BlockSet {
  constructor(
    numBlocks = 0,
    blocks = [],
    blockWidth = 20,
    blockUnitHeight = 20,
    blockOffset = 0
  ) {
    this.numBlocks = numBlocks;
    this.blockWidth = blockWidth;
    this.blockUnitHeight = blockUnitHeight;
    this.blockOffset = blockOffset;
    this.blocks = blocks || [];
  }

  static generateRandomPermutation(N) {
    const permutation = Array.from({ length: N }, (_, i) => i + 1);
    for (let i = N - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }
    return permutation;
  }

  createNewBlocks(canvasHeight = 500) {
    const randomPerm = BlockSet.generateRandomPermutation(this.numBlocks);
    for (let i = 0; i < this.numBlocks; i++) {
      const index = randomPerm[i];
      const block = new Block(
        i * this.blockWidth + this.blockOffset,
        canvasHeight - index * this.blockUnitHeight,
        this.blockWidth,
        index * this.blockUnitHeight,
        index
      );
      this.blocks.push(block);
    }
  }

  drawBlocks(ctx, blockColors = []) {
    for (let i = 0; i < this.numBlocks; i++) {
      const color = blockColors[i] || appConfig.COLORS.WHITE;
      this.blocks[i].draw(ctx, color);
    }
  }

  printBlocks() {
    let blockStr = [];
    for (let i = 0; i < this.numBlocks; i++) {
      blockStr.push("" + this.blocks[i].index);
    }
    console.log(blockStr.join(", "));
  }
}

export default BlockSet;
