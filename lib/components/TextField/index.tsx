import { FC } from 'react'

// TYPES
import { TextFieldProps as Props } from './types'

// STYLES
import styles from './styles.module.scss'
import classNames from 'classnames'

const TextField: FC<Props> = ({
  className,
  variant = 'primary',
  height = 'medium',
  label,
  hintMessage,
  ...rest
}: Props) => {
  
  return (
    <div className={classNames(styles.textFieldRoot, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.error]: variant === 'error'
    })} >
      {label && (
        <label className={classNames(className, styles.label)} htmlFor="">
          {label}
        </label>
      )}

      <input className={classNames(className, styles.input, {
        [styles.small]: height === 'small',
        [styles.medium]: height === 'medium',
        [styles.large]: height === 'large',
      })} {...rest} />

      {hintMessage && (
        <p className={classNames(className, styles.hint)}>
          {hintMessage}
        </p>
      )}
    </div>
  )
}

export { TextField }