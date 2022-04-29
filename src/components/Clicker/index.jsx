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
      decrementMode: "false",
    };
  }

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
      </article>
    );
  }
}

export default Clicker;
