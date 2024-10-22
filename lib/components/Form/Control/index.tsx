import { ControlProps } from "./types";

import styles from "../styles.module.scss";
import { cloneElement } from "react";

const Control = ({ asChild = false, children, ...rest }: ControlProps) => {
  if (asChild) {
    if (!children) {
      console.error("Control asChild must have children");
    }

    const childElement =
      !!children &&
      cloneElement(<div />, { className: styles.control }, children);

    // CHANGE THIS TO A ERROR BOUNDARY OR KEEP THIS WAY?
    return <>{childElement}</>;
  }

  return <input className={styles.control} {...rest} />;
};

export default Control;
