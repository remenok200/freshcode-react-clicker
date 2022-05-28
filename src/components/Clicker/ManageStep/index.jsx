import React from "react";
import styles from "../Clicker.module.scss";

class ManageStep extends React.Component {
  changeStepInput = ({ target: { value } }) => {
    const toNumber = Number(value);
    this.props.update(toNumber > 0 ? { step: toNumber } : { step: 1 });
  };

  render() {
    return (
      <input
        onChange={this.changeStepInput}
        placeholder="Введите, шаг счетчика (по дефолту - 1)"
        className={styles.inputCount}
      />
    );
  }
}

export default ManageStep;
