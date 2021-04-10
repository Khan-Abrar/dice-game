import React, { Component } from "react";
import "./RollDice.css";
class RollDice extends Component {
  sides = ["one", "two", "three", "four", "five", "six"];

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false, sum: 0 };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const index1 = Math.floor(Math.random() * 6);
    const index2 = Math.floor(Math.random() * 6);
    const newDie1 = this.sides[index1];
    const newDie2 = this.sides[index2];

    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
      sum: index1 + 1 + index2 + 1,
    });

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
          ></i>

          <i
            className={`Die ${
              this.state.rolling ? "shaking" : "txt"
            } fas fa-dice-${this.state.die2}`}
          ></i>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>

        <h1>
          {this.state.sum === 0
            ? ""
            : this.state.sum % 2 === 0
            ? "Even Roll!"
            : "Odd Roll"}
        </h1>
      </div>
    );
  }
}
export default RollDice;
