import React from "react";
import styles from "../Clicker.module.scss";
import classNames from "classnames";

const Automatically = (props) => {
  const changeTimeInput = ({ target: { value } }) => {
    let toNumber = Number(value);
    toNumber *= 1000;
    props.update(toNumber > 0 ? { time: toNumber } : { time: 1000 });
    props.stop();
    clearTimeout(props.timeoutIDfirst);
  };

  const currentStyleClass = classNames(styles.container, {
    [styles.decrementMode]: props.decrementMode === "true",
  });

  return (
    <div className={currentStyleClass}>
      <p
        className={styles.workTime}
      >{`Общее время работы автокликера: ${props.workTimeAll} секунд`}</p>
      <p
        className={styles.workTime}
      >{`Время работы последнего автокликера: ${props.workTime} секунд`}</p>

      <input
        onChange={changeTimeInput}
        placeholder="Задайте время интервала в СЕКУНДАХ (по дефолту - 1 секунда)"
        className={styles.inputCount}
      />

      <div>
        <button className={styles.buttonCounter} onClick={props.start}>
          Старт
        </button>
        <button className={styles.buttonCounter} onClick={props.stop}>
          Стоп
        </button>
        <button className={styles.buttonCounter} onClick={props.reset}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default Automatically;
