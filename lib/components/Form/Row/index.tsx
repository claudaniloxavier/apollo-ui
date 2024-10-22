interface RowProps {
  children: React.ReactNode;
}

import styles from "../styles.module.scss";

const Row = ({ children }: RowProps) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
