import { RootProps } from "./types";

import styles from "../styles.module.scss";

const Root = ({ children, ...rest }: RootProps) => {
  return (
    <form className={styles.form} {...rest}>
      {children}
    </form>
  );
};

export default Root;
