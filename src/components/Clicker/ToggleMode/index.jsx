import React from "react";
import styles from "../Clicker.module.scss";

class ToggleMode extends React.Component {
    
  toggleHandler = ({ target: { name, value } }) => {
    this.props.updateMode({ decrementMode: value });
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default ToggleMode;
