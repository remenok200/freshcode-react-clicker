import React from "react";
import styles from "../../Clicker.module.scss";

class ManageTimeInput extends React.Component {
  changeTimeInput = ({ target: { value } }) => {
    let toNumber = Number(value);
    toNumber *= 1000;
    this.props.update(
      toNumber > 0 ? { time: toNumber } : { time: 1000 }
    );
    this.props.stop();
    clearTimeout(this.props.timeoutIDfirst);
  };

  render() {
    return (
      <input
        onChange={this.changeTimeInput}
        placeholder="Задайте время интервала в СЕКУНДАХ (по дефолту - 1 секунда)"
        className={styles.inputCount}
      />
    );
  }
}

export default ManageTimeInput;
