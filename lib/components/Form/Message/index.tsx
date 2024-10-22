import { MessageProps } from "./types";

import styles from "../styles.module.scss";

const Message = ({ children }: MessageProps) => {
  return <div className={styles.message}>{children}</div>;
};

export default Message;
