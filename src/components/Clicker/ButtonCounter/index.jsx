import React from "react";
import styles from "../Clicker.module.scss";

class ButtonCounter extends React.Component {
  changeCounter = () => {
    let { decrementMode, counter, step } = this.props;
    decrementMode === "false" ? (counter += step) : (counter -= step);

    this.props.update({
      counter: counter,
    });
  };

  render() {
    return (
      <button onClick={this.changeCounter} className={styles.buttonCounter}>
        Изменить счетчик (вручную, без автокликера)
      </button>
    );
  }
}

export default ButtonCounter;
