import React from "react";
import ManageStep from "./ManageStep";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
      step: props.step,
      decrementMode: props.decrement,
    };
  }

  componentDidMount() {
    this.setState({
      counter: 0,
      step: 1,
      decrementMode: "false",
    });
  }

  add = () => {
    this.setState((previous) => ({
      counter: previous.counter + previous.step,
    }));
  };

  sub = () => {
    this.setState((previous) => ({
      counter: previous.counter - previous.step,
    }));
  };

  updateStep = ({ step }) => {
    console.log(step);
    this.setState({ step: step });
  };

  toggleHandler = ({ target: { name, value } }) => {
    this.setState({ decrementMode: value });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <label>
          <input
            type="radio"
            name="toggleMode"
            value={false}
            onChange={this.toggleHandler}
          />
          Инкремент
        </label>
        <label>
          <input
            type="radio"
            name="toggleMode"
            value={true}
            onChange={this.toggleHandler}
          />
          Декремент
        </label>
        <ManageStep updateStep={this.updateStep} />
        <button
          onClick={this.state.decrementMode === "false" ? this.add : this.sub}
          className={styles.buttonCounter}
        >
          Изменить счетчик
        </button>
      </article>
    );
  }
}

export default Clicker;
