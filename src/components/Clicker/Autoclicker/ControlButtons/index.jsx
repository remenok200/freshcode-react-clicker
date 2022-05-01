import styles from "../../Clicker.module.scss";

function ControlButtons(props) {
  return (
    <>
      <button className={styles.buttonCounter} onClick={props.start}>
        Старт
      </button>
      <button className={styles.buttonCounter} onClick={props.stop}>
        Стоп
      </button>
      <button className={styles.buttonCounter} onClick={props.reset}>
        Сбросить
      </button>
    </>
  );
}

export default ControlButtons;