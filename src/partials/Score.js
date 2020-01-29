import { SVG_NS } from "../settings.js";

export default class Score {
  constructor(x, y, size) {
    this.text = this.text;
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, score) {
    let text = document.createElementNS(SVG_NS, "text");
    text.setAttributeNS(null, "x", this.x);
    text.setAttributeNS(null, "y", this.y);
    text.setAttributeNS(null, "font-family", "Silkscreen Web, monotopy");
    text.setAttributeNS(null, "font-size", this.size);
    text.setAttributeNS(null, "fill", "white");
    text.textContent = score;
    svg.appendChild(text);
  }
}
