import React from "react";
import ManageStep from "./ManageStep";
import ToggleMode from "./ToggleMode";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      decrementMode: "false",
    };
  }

  changeCounter = () => {
    this.setState((previous) => ({
      counter:
        this.state.decrementMode === "false"
          ? previous.counter + previous.step
          : previous.counter - previous.step,
    }));
  };

  updateStep = ({ step }) => {
    this.setState({ step: step });
  };

  updateMode = ({ decrementMode }) => {
    this.setState({ decrementMode: decrementMode });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <ToggleMode updateMode={this.updateMode} />
        <ManageStep updateStep={this.updateStep} />
        <button
          onClick={this.changeCounter}
          className={styles.buttonCounter}
        >
          Изменить счетчик
        </button>
      </article>
    );
  }
}

export default Clicker;
