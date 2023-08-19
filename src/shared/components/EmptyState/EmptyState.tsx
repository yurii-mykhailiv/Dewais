import styles from "./style.module.scss";
import { EmptyStateProps } from "./types";

const EmptyState = ({
  title,
  icon,
  subTitle,
}: EmptyStateProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export default EmptyState;
