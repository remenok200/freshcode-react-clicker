import React from "react";
import ManageStep from "./ManageStep";
import ToggleMode from "./ToggleMode";
import ButtonCounter from "./ButtonCounter";
import WorkTime from "./Autoclicker/WorkTime";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      time: 1000,
      workTime: 0,
      workTimeAll: 0,
      timeoutIDfirst: null,
      decrementMode: "false",
      intervalID: null,
      intervalIDtimer: null,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }
    this.isRendered = true;
    if (!this.state.intervalID) {
      this.start();

      // для того, чтобы остановить автоматически запускаемый таймер через 30 секунд
      const timeoutIDfirst = setTimeout(() => {
        this.stop();
      }, 30000);
      this.setState({
        timeoutIDfirst,
      });
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    if (!this.state.intervalID) {
      this.setState({ workTime: 0 });

      const intervalIDtimer = setInterval(() => {
        this.setState({
          workTime: this.state.workTime + 1,
          workTimeAll: this.state.workTimeAll + 1,
          intervalIDtimer,
        });
      }, 1000);

      const intervalID = setInterval(() => {
        this.setState({
          counter:
            this.state.decrementMode === "false"
              ? this.state.counter + this.state.step
              : this.state.counter - this.state.step,
          intervalID,
        });
      }, this.state.time);
    }
  };

  stop = () => {
    clearInterval(this.state.intervalIDtimer);
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: null });
  };

  reset = () => {
    this.stop();
    this.setState({ counter: 0 });
  };

  changeTimeInput = ({ target: { value } }) => {
    let toNumber = Number(value);
    toNumber *= 1000;
    this.setState(toNumber > 0 ? { time: toNumber } : { time: 1000 });
    this.stop();
    clearTimeout(this.state.timeoutIDfirst);
  };

  updateStep = ({ step }) => {
    this.setState({ step: step });
  };

  updateMode = ({ decrementMode }) => {
    this.setState({ decrementMode: decrementMode });
  };

  updateCounter = ({ counter }) => {
    this.setState({ counter: counter });
  };

  render() {
    const { counter } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.counter}>{counter}</h1>
        <ToggleMode
          updateMode={this.updateMode}
          decrementMode={this.state.decrementMode}
        />
        <div className={styles.container}>
          <ManageStep updateStep={this.updateStep} />
          <ButtonCounter
            decrementMode={this.state.decrementMode}
            counter={this.state.counter}
            step={this.state.step}
            updateCounter={this.updateCounter}
          />
        </div>

        <div className={styles.container}>
          <WorkTime workTimeAll={this.state.workTimeAll} workTime={this.state.workTime} />
          {/* <p
            className={styles.workTime}
          >{`Общее время работы автокликера: ${this.state.workTimeAll} секунд`}</p>
          <p
            className={styles.workTime}
          >{`Время работы последнего автокликера: ${this.state.workTime} секунд`}</p> */}
          <input
            onChange={this.changeTimeInput}
            placeholder="Задайте время интервала в СЕКУНДАХ (по дефолту - 1 секунда)"
            className={styles.inputCount}
          />
          <div>
            <button className={styles.buttonCounter} onClick={this.start}>
              Старт
            </button>
            <button className={styles.buttonCounter} onClick={this.stop}>
              Стоп
            </button>
            <button className={styles.buttonCounter} onClick={this.reset}>
              Сбросить
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Clicker;
