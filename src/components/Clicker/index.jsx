import React from "react";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      count: 1,
    };
  }

  add = () => {
    this.setState({ counter: this.state.counter + this.state.count });
  };

  changeCountInput = ({ target: { value } }) => {
    const valueToNumber = Number(value);
    this.setState(valueToNumber > 0 ? { count: valueToNumber } : { count: 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <input
          onChange={this.changeCountInput}
          placeholder="Введите, на сколько должен увеличится счетчик (по дефолту - 1)"
          className={styles.inputCount}
        />
        <button onClick={this.add} className={styles.buttonCounter}>
          Увеличить счетчик
        </button>
      </article>
    );
  }
}

export default Clicker;
