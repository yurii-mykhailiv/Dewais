import styles from './styles.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}>
      </div>
    </div>
  );
}

export default Spinner;