import React from "react";
import styles from "../../Clicker.module.scss";

class WorkTime extends React.Component {
  render() {
    return (
      <>
        <p
          className={styles.workTime}
        >{`Общее время работы автокликера: ${this.props.workTimeAll} секунд`}</p>
        <p
          className={styles.workTime}
        >{`Время работы последнего автокликера: ${this.props.workTime} секунд`}</p>
      </>
    );
  }
}

export default WorkTime;
