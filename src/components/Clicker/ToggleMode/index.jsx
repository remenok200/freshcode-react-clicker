import React from "react";

class ToggleMode extends React.Component {
  toggleHandler = ({ target: { name, value } }) => {
    this.props.update({decrementMode: value});
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
            checked={this.props.decrementMode === "false" ? true : false}
          />
          Инкремент
        </label>
        <label>
          <input
            type="radio"
            name="toggleMode"
            value={true}
            onChange={this.toggleHandler}
            checked={this.props.decrementMode === "true" ? true : false}
          />
          Декремент
        </label>
      </>
    );
  }
}

export default ToggleMode;
