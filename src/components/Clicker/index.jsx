import React from "react";
import classNames from "classnames";
import styles from "./Clicker.module.scss";
import ManageStep from "./ManageStep";
import ToggleMode from "./ToggleMode";
import ButtonCounter from "./ButtonCounter";
import WorkTime from "./Autoclicker/WorkTime";
import ManageTimeInput from "./Autoclicker/ManageTimeInput";
import ControlButtons from "./Autoclicker/ControlButtons";

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

  update = (obj) => {
    this.setState(obj);
  };

  render() {
    const { counter } = this.state;

    return (
      <article
        className={classNames(styles.container, {
          [styles.decrementMode]: this.state.decrementMode === "true",
        })}
      >
        <h1
          className={classNames(styles.counter, {
            [styles.decrementModeOrange]: this.state.decrementMode === "true",
          })}
        >
          {counter}
        </h1>
        <ToggleMode
          update={this.update}
          decrementMode={this.state.decrementMode}
        />
        <div
          className={classNames(styles.container, {
            [styles.decrementMode]: this.state.decrementMode === "true",
          })}
        >
          <ManageStep update={this.update} />
          <ButtonCounter
            decrementMode={this.state.decrementMode}
            counter={this.state.counter}
            step={this.state.step}
            update={this.update}
          />
        </div>

        <div
          className={classNames(styles.container, {
            [styles.decrementMode]: this.state.decrementMode === "true",
          })}
        >
          <WorkTime
            workTimeAll={this.state.workTimeAll}
            workTime={this.state.workTime}
          />
          <ManageTimeInput
            stop={this.stop}
            timeoutIDfirst={this.state.timeoutIDfirst}
            update={this.update}
          />
          <div>
            <ControlButtons
              start={this.start}
              stop={this.stop}
              reset={this.reset}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Clicker;
