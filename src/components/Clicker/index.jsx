import React from "react";
import ManageStep from "./ManageStep";
import ToggleMode from "./ToggleMode";
import ButtonCounter from "./ButtonCounter";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      time: 1000,
      decrementMode: "false",
      intervalID: null,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }
    this.isRendered = true;
    if (!this.state.intervalID) {
      this.start();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    if (!this.state.intervalID) {
      const intervalID = setInterval(() => {
        this.setState({
          counter: this.state.counter + this.state.step,
          intervalID,
        });
      }, this.state.time);
    }
  };

  stop = () => {
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: null });
  };

  reset = () => {
    this.stop();
    this.setState({ counter: 0 });
  };

  changeTimeInput = ({ target: { value } }) => {
    let toNumber = Number(value);
    toNumber *= 1000;
    this.setState(toNumber > 0 ? { time: toNumber } : { time: 1000 });
    this.stop();
  };

  updateStep = ({ step }) => {
    this.setState({ step: step });
  };

  updateMode = ({ decrementMode }) => {
    this.setState({ decrementMode: decrementMode });
  };

  updateCounter = ({ counter }) => {
    this.setState({ counter: counter });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <ToggleMode updateMode={this.updateMode} />
        <ManageStep updateStep={this.updateStep} />
        <ButtonCounter
          decrementMode={this.state.decrementMode}
          counter={this.state.counter}
          step={this.state.step}
          updateCounter={this.updateCounter}
        />

        <input
          onChange={this.changeTimeInput}
          placeholder="Задайте время интервала в СЕКУНДАХ (по дефолту - 1 секунда)"
          className={styles.inputCount}
        />
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </article>
    );
  }
}

export default Clicker;
