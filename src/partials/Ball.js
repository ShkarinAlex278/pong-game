import { SVG_NS } from "../settings.js";

export default class Ball {
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  render(svg) {
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "fill", "white");

    svg.appendChild(circle);
  }
}
