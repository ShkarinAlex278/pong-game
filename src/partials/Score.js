import { SVG_NS } from "../settings.js";

export default class Score {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  render(svg) {
    // let rect = document.createElementNS(SVG_NS, "rect");
    // rect.setAttributeNS(null, "width", this.width);
    // rect.setAttributeNS(null, "height", this.height);
    // rect.setAttributeNS(null, "fill", "#353535");
  }
}