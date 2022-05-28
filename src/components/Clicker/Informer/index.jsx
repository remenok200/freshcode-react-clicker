import classNames from "classnames";
import React from "react";
import styles from "../Clicker.module.scss";

const Informer = (props) => {
  const toggleHandler = ({ target: { name, value } }) => {
    props.update({ decrementMode: value });
  };

  const currentStyleClass = classNames(styles.counter, {
    [styles.decrementModeOrange]: props.decrementMode === "true",
  });

  return (
    <>
      <h1 className={currentStyleClass}>{props.counter}</h1>
      
      <label>
        <input
          type="radio"
          name="toggleMode"
          value={false}
          onChange={toggleHandler}
          checked={props.decrementMode === "false" ? true : false}
        />
        Инкремент
      </label>
      <label>
        <input
          type="radio"
          name="toggleMode"
          value={true}
          onChange={toggleHandler}
          checked={props.decrementMode === "true" ? true : false}
        />
        Декремент
      </label>
    </>
  );
};

export default Informer;
