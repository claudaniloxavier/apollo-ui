import { FieldProps, FIELD_SIZE, FIELD_VARIANT } from "./types";

import styles from "../styles.module.scss";
import classNames from "classnames";

const Field = ({
  children,
  size = FIELD_SIZE.medium,
  variant = FIELD_VARIANT.error,
}: FieldProps) => {
  console.log(size);
  return (
    <div
      className={classNames(styles.field, {
        [styles.small]: size === FIELD_SIZE.small,
        [styles.medium]: size === FIELD_SIZE.medium,
        [styles.large]: size === FIELD_SIZE.large,

        [styles.primary]: variant === FIELD_VARIANT.primary,
        [styles.secondary]: variant === FIELD_VARIANT.secondary,
        [styles.error]: variant === FIELD_VARIANT.error,
      })}
    >
      {children}
    </div>
  );
};

export default Field;
