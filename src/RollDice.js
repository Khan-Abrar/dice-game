import React, { Component } from "react";
import "./RollDice.css";
class RollDice extends Component {
  sides = ["one", "two", "three", "four", "five", "six"];

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.sides[Math.floor(Math.random() * 6)];
    const newDie2 = this.sides[Math.floor(Math.random() * 6)];
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <i
            className={`Die ${
              this.state.rolling ? "shaking" : "txt"
            } fas fa-dice-${this.state.die1}`}
          >
            {console.log(this.state.rolling)}
          </i>

          <i
            className={`Die ${
              this.state.rolling ? "shaking" : "txt"
            } fas fa-dice-${this.state.die2}`}
          ></i>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
export default RollDice;
