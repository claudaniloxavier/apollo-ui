import { FC, useRef } from 'react'

// HOOKS
import useRipple from '../../hooks/useRipple'

// TYPES
import { ButtonProps as Props } from './types'

// STYLES
import classNames from 'classnames'
import styles from './styles.module.scss'

const Button: FC<Props> = ({
  className,
  children,
  shape = 'solid',
  variant = 'primary',
  size = 'medium',
  radius = 'default',
  raised = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  onClick,
  ...rest
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const ripples = useRipple(buttonRef)

  return (
    <button
      ref={buttonRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={classNames(className, styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.success]: variant === 'success',
        [styles.error]: variant === 'error',
        [styles.warning]: variant === 'warning',

        [styles.solid]: shape === 'solid',
        [styles.outlined]: shape === 'outlined',
        [styles.text]: shape === 'text',

        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.xlarge]: size === 'x-large',

        [styles.radius]: radius === 'default',
        [styles.pill]: radius === 'pill',

        [styles.raised]: raised === true && shape === 'solid',

        [styles.row]: iconPosition === 'left',
        [styles.rowReverse]: iconPosition === 'right'
      })}
      {...rest}
    >
      {ripples}

      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}

      <span className={styles.label}>
        {children}
      </span>
    </button>
  )
}

export { Button }