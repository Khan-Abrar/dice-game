import React, { Component } from "react";
import "./RollDice.css";
class RollDice extends Component {
  sides = ["one", "two", "three", "four", "five", "six"];

  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
      isWin: false,
      default: true,
    };
    this.roll = this.roll.bind(this);
  }
  roll(isEven) {
    const index1 = Math.floor(Math.random() * 6);
    const index2 = Math.floor(Math.random() * 6);
    const newDie1 = this.sides[index1];
    const newDie2 = this.sides[index2];
    const sum = index1 + 1 + index2 + 1;
    let isAnsEven = sum % 2 === 0 ? true : false;

    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
      isWin: isEven === isAnsEven,
      default: false,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <h1>Dice Roll</h1>

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
        <h3>Predict your next move from below and roll the dice!</h3>
        <div className="RollDice-button">
          <button onClick={() => this.roll(true)} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Even Roll"}
          </button>
          <button
            onClick={() => this.roll(false)}
            disabled={this.state.rolling}
          >
            {this.state.rolling ? "Rolling..." : "Odd Roll"}
          </button>
        </div>
        <h1>
          {this.state.default
            ? ""
            : this.state.isWin
            ? "You Win!"
            : "You Loose!"}
        </h1>
      </div>
    );
  }
}
export default RollDice;
