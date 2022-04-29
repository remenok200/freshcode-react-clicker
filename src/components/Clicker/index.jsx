import React from "react";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <button className={styles.buttonCounter} onClick={this.add}>
          Увеличить счетчик
        </button>
      </article>
    );
  }
}

export default Clicker;
