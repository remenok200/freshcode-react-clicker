import React from "react";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
      step: props.step,
    };
  }

  componentDidMount() {
    this.setState({
      counter: 0,
      step: 1,
    });
  }

  add = () => {
    this.setState((previous) => ({
      counter: previous.counter + previous.step,
    }));
  };

  changeCountInput = ({ target: { value } }) => {
    const toNumber = Number(value);
    this.setState(toNumber > 0 ? { step: toNumber } : { step: 1 });
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
