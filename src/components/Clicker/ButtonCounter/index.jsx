import React from "react";
import styles from "../Clicker.module.scss";

class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decrementMode: this.props.decrementMode,
      counter: this.props.counter,
      step: this.props.step,
    };
  }

  changeCounter = () => {
    let { decrementMode, counter, step } = this.props;
    decrementMode === "false" ? (counter += step) : (counter -= step);

    this.props.updateCounter({
      counter: counter,
    });
  };

  render() {
    return (
      <button onClick={this.changeCounter} className={styles.buttonCounter}>
        Изменить счетчик
      </button>
    );
  }
}

export default ButtonCounter;
