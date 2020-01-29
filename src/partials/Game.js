import { SVG_NS, KEYS } from "../settings.js";
import Board from "./Board.js";
import Paddle from "./Paddle.js";
import Ball from "./Ball.js";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    // Other code goes here...
    this.gameElement = document.getElementById(this.element);

    this.board = new Board(this.width, this.height);
    this.paddWidth = 8;
    this.paddHeight = 56;
    this.boardGap = 10;

    this.player1 = new Paddle(
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.a,
      KEYS.z
    );

    this.player2 = new Paddle(
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.width - this.paddWidth - this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.up,
      KEYS.down
    );

    this.radius = 8;
    this.ball = new Ball(this.radius, this.width, this.height);
  }

  render() {
    // More code goes here....

    this.gameElement.innerHTML = "";

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    this.gameElement.appendChild(svg);

    this.board.render(svg);

    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg);
  }
}
