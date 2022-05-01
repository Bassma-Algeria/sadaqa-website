import styles from '../../../styles/spinner.module.scss';

const Spinner = ({ style }) => {
  return (
    <div className={styles.loader} style={style}>
      Loading...
    </div>
  );
};

export default Spinner;
