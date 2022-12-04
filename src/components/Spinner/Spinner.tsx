import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.loading}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
