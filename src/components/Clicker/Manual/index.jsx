import classNames from "classnames";
import React from "react";
import styles from "../Clicker.module.scss";

const Manual = (props) => {
  const changeStepInput = ({ target: { value } }) => {
    const toNumber = Number(value);
    props.update(toNumber > 0 ? { step: toNumber } : { step: 1 });
  };

  const changeCounter = () => {
    let { decrementMode, counter, step } = props;
    decrementMode === "false" ? (counter += step) : (counter -= step);
    props.update({
      counter,
    });
  };

  const currentStyleClass = classNames(styles.container, {
    [styles.decrementMode]: props.decrementMode === "true",
  });

  return (
    <div className={currentStyleClass}>
      <input
        onChange={changeStepInput}
        placeholder="Введите, шаг счетчика (по дефолту - 1)"
        className={styles.inputCount}
      />
      <button onClick={changeCounter} className={styles.buttonCounter}>
        Изменить счетчик (вручную, без автокликера)
      </button>
    </div>
  );
};

export default Manual;
