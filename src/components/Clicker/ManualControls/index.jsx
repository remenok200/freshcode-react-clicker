import classNames from 'classnames'
import React from 'react'
import styles from '../Clicker.module.scss'

const ManualControls = props => {
  const changeStepInput = ({ target: { value } }) => {
    const toNumber = Number(value)
    props.update(toNumber > 0 ? { step: toNumber } : { step: 1 })
  }

  const changeCounter = () => {
    const { decrementMode, counter, step } = props
    const newCounter = !decrementMode ? counter + step : counter - step
    props.update({
      counter: newCounter
    })
  }

  const currentStyleClass = classNames(styles.container, {
    [styles.decrementMode]: props.decrementMode
  })

  return (
    <div className={currentStyleClass}>
      <input
        onChange={changeStepInput}
        placeholder='Введите, шаг счетчика (по дефолту - 1)'
        className={styles.inputCount}
      />
      <button onClick={changeCounter} className={styles.buttonCounter}>
        Изменить счетчик (вручную, без автокликера)
      </button>
    </div>
  )
}

export default ManualControls
