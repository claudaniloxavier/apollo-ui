import { FC, ButtonHTMLAttributes } from "react";

// STYLES
import styles from './styles.module.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...rest } = props
  
  return <button className={`${className} ${styles.button}`} {...rest} />
}

export { Button }