import classNames from 'classnames';
import React from 'react';
import styles from '../Clicker.module.scss';

const Informer = props => {
  const { update, decrementMode, counter } = props;

  const toggleHandler = ({ target: { value } }) => {
    update({ decrementMode: value === 'decrement' });
  };

  const currentStyleClass = classNames(styles.counter, {
    [styles.decrementModeOrange]: decrementMode,
  });

  return (
    <>
      <h1 className={currentStyleClass}>{counter}</h1>

      <label>
        <input
          type='radio'
          name='toggleMode'
          value={'increment'}
          onChange={toggleHandler}
          checked={!decrementMode}
        />
        Инкремент
      </label>
      <label>
        <input
          type='radio'
          name='toggleMode'
          value={'decrement'}
          onChange={toggleHandler}
          checked={decrementMode}
        />
        Декремент
      </label>
    </>
  );
};

export default Informer;
