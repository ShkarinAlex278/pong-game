import { SVG_NS } from "../settings.js";
import { color } from "../partials/Ball";

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(svg, player1, player2) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    // console.log("Player 1", player1.color);
    // console.log("Player 2", player1);

    if (player1.score > player2.score) {
      rect.setAttributeNS(null, "fill", "#34583a");
    } else if (player1.score < player2.score) {
      rect.setAttributeNS(null, "fill", "#4b5c79");
    } else {
      rect.setAttributeNS(null, "fill", "#545727");
      //rect.setAttributeNS(null, "fill", "#353535");
    }

    //rect.setAttributeNS(null, "fill", "#353535");

    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "y1", 0);
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y2", this.height);

    if (player1.score > player2.score) {
      line.setAttributeNS(null, "stroke", "green");
    } else if (player1.score < player2.score) {
      line.setAttributeNS(null, "stroke", "blue");
    } else {
      line.setAttributeNS(null, "stroke", "white");
    }
    //line.setAttributeNS(null, "stroke", "white");

    line.setAttributeNS(null, "stroke-dasharray", "20, 15");
    line.setAttributeNS(null, "stroke-width", "4");

    svg.appendChild(rect);
    svg.appendChild(line);

    // console.log("this.color", color);
  }
}
