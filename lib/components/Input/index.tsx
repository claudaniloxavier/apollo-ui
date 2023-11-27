import { FC, InputHTMLAttributes } from "react";

// STYLES
import styles from './styles.module.scss'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props
  
  return <input className={`${className} ${styles.input}`} {...rest} />
}