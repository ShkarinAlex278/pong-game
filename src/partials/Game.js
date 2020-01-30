import { SVG_NS, KEYS } from "../settings.js";
import Board from "./Board.js";
import Paddle from "./Paddle.js";
import Ball from "./Ball.js";
import Score from "./Score.js";
import { color1, color2 } from "./Color.js";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    // Other code goes here...
    this.gameElement = document.getElementById(this.element);

    this.board = new Board(this.width, this.height);
    this.radius = 8;
    this.ball = new Ball(this.radius, this.width, this.height, this.color);

    this.paddWidth = 8;
    this.paddHeight = 56;
    this.boardGap = 10;

    // Player objects
    this.player1 = new Paddle(
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.a,
      KEYS.z,
      (this.color = "green")
    );

    this.player2 = new Paddle(
      this.height,
      this.paddWidth,
      this.paddHeight,
      this.width - this.paddWidth - this.boardGap,
      (this.height - this.paddHeight) / 2,
      KEYS.up,
      KEYS.down,
      (this.color = "blue")
    );

    //Score
    this.score1 = new Score(this.width / 2 - 50, 30, 30, "green");
    this.score2 = new Score(this.width / 2 + 25, 30, 30, "blue");

    // Method Pause
    document.addEventListener("keydown", evetn => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });
  }

  render() {
    // More code goes here....
    if (this.pause) {
      this.player1.speed = 0;
      this.player2.speed = 0;
      return;
    } else {
      this.player1.speed = 10;
      this.player2.speed = 10;
      //return;
    }

    this.gameElement.innerHTML = "";

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    this.gameElement.appendChild(svg);

    //console.log("This.color", this.color);

    this.board.render(svg, this.player1, this.player2);

    this.player1.render(svg);
    this.player2.render(svg);

    this.score1.render(svg, this.player1.score, this.color);
    this.score2.render(svg, this.player2.score, this.color);

    this.ball.render(svg, this.player1, this.player2);

    // this.ball.render(svg, this.player1, this.player2);
  }
}
