import { FC } from 'react'

// STYLES
import classNames from 'classnames'
import styles from './styles.module.scss'

// TYPES
import { ButtonProps as Props } from './types'

const Button: FC<Props> = ({ 
  className,
  shape = 'solid',
  variant = 'primary',
  ...rest 
}: Props) => {
  return (
    <button 
      disabled
      className={classNames(className, styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.success]: variant === 'success',
        [styles.error]: variant === 'error',
        [styles.warning]: variant === 'warning',

        [styles.solid]: shape === 'solid',
        [styles.outlined]: shape === 'outlined',
        [styles.text]: shape === 'text'
      })} 
      {...rest} 
    />
  )
}

export { Button }