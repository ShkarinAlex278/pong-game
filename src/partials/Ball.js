import { SVG_NS } from "../settings.js";
import pongSound from "../../public/sounds/pong-01.wav";
import { color1, color2 } from "../partials/Color.js";
//import { color } from "../partials/Game";

export default class Ball {
  constructor(radius, boardWidth, boardHeight, color) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.color = color;
    //this.audio = audio;
    this.ping = new Audio(pongSound);
    //reset the ball in the middle of the board
    this.reset();
  }

  reset() {
    //code to center ball and for movement

    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    // generated random number between -5 and 5
    // makes sure number does not equal 0

    //this.vx = 0;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  paddleCollision(player1, player2) {
    // if vx is greater than 0, detect paddle 2
    // else detect paddle1
    if (this.vx > 0) {
      let paddle = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );

      let [leftX, rightX, topY, bottomY] = paddle;
      if (
        this.x + this.radius >= leftX &&
        this.x + this.radius <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.ping.play();
        this.vx = -this.vx;
      }
    } else {
      // Player #1
      let paddle = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );

      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x - this.radius <= rightX &&
        this.x - this.radius >= leftX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.ping.play();
        this.vx = -this.vx;
      }
    }
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if (hitTop) {
      this.color = getRandomColor();
    } else if (hitBottom) {
      this.color = getRandomColor();
    }

    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var colorRd = "#";
      for (var i = 0; i < 6; i++) {
        colorRd += letters[Math.floor(Math.random() * 16)];
      }
      return colorRd;
    }

    if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }

    //if wall hits left or right
    // reverse vx direction
    // else if ball hits or bottom
    // reverse vy direction
  }

  // Score by Goal method
  goal(player) {
    player.score++;
    //console.log(color1);
    this.reset;
  }

  render(svg, player1, player2) {
    this.x += this.vx;
    this.y += this.vy;
    //console.log("this.wallCollision()", this.wallCollision());
    this.wallCollision();

    this.paddleCollision(player1, player2);

    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "fill", this.color);
    // if (player1.score > player2.score) {
    //   circle.setAttributeNS(null, "fill", "green");
    // } else if (player1.score < player2.score) {
    //   circle.setAttributeNS(null, "fill", "blue");
    // } else if (player1.score === player2.score) {
    //   circle.setAttributeNS(null, "fill", "white");
    // }

    svg.appendChild(circle);

    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;

    if (rightGoal) {
      this.goal(player1);
      this.direction = 1;
      //this.color = "RED";
      this.reset();
    } else if (leftGoal) {
      this.goal(player2);
      this.direction = -1;
      //this.color = "red";
      this.reset();
      //console.log("Player 2 Goal");
      // console.log("hitTop", hitTop);
      // console.log("hitBottom", hitBottom);
      // console.log("hitLeft", hitLeft);
      // console.log("hitRight", hitRight);
    }
  }
}
