import React from 'react';
import classNames from 'classnames';
import styles from './Clicker.module.scss';
import Informer from './Informer';
import ManualControls from './ManualControls';
import Automatically from './Automatically';

class Clicker extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      time: 1000,
      workTime: 0,
      workTimeAll: 0,
      timeoutIDfirst: null,
      decrementMode: false,
      intervalID: null,
      intervalIDtimer: null,
    };
  }

  componentDidMount () {
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

  componentWillUnmount () {
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
          counter: !this.state.decrementMode
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

  update = obj => {
    this.setState(obj);
  };

  render () {
    const currentStyleClass = classNames(styles.container, {
      [styles.decrementMode]: this.state.decrementMode,
    });
    return (
      <article className={currentStyleClass}>
        <Informer
          counter={this.state.counter}
          decrementMode={this.state.decrementMode}
          update={this.update}
        />

        <ManualControls
          counter={this.state.counter}
          step={this.state.step}
          update={this.update}
          decrementMode={this.state.decrementMode}
        />

        <Automatically
          update={this.update}
          start={this.start}
          stop={this.stop}
          reset={this.reset}
          timeoutIDfirst={this.state.timeoutIDfirst}
          decrementMode={this.state.decrementMode}
          workTime={this.state.workTime}
          workTimeAll={this.state.workTimeAll}
        />
      </article>
    );
  }
}

export default Clicker;
