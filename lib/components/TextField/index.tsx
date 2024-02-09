import { FC } from 'react'

// TYPES
import { TextFieldProps as Props } from './types'

// STYLES
import styles from './styles.module.scss'
import classNames from 'classnames'

const TextField: FC<Props> = ({
  block = false,
  className,
  variant = 'primary',
  height = 'small',
  label,
  icon,
  iconPosition = 'left',
  hintMessage,
  ...rest
}: Props) => {
  
  return (
    <div className={classNames(styles.textFieldRoot, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.error]: variant === 'error',
    })} >
      {label && (
        <label className={classNames(className, styles.label)} htmlFor="">
          {label}
        </label>
      )}

      <div className={classNames(className, styles.inputWrapper, {
        [styles.small]: height === 'small',
        [styles.medium]: height === 'medium',
        [styles.large]: height === 'large',
        [styles.block]: block,
        [styles.leftIcon]: iconPosition === 'left',
        [styles.rightIcon]: iconPosition === 'right'
      })} >
        {icon && (
          <div className={styles.iconWrapper}>
            {icon}
          </div>
        )}
        
        <input {...rest}/>
      </div>

      {hintMessage && (
        <p className={classNames(className, styles.hint)}>
          {hintMessage}
        </p>
      )}
    </div>
  )
}

export { TextField }