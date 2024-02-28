import { FC, useRef } from 'react'

// HOOKS
import useRipple from '../../hooks/useRipple'

// TYPES
import { IconButtonProps as Props } from './types'

// STYLES
import classNames from 'classnames'
import styles from './styles.module.scss'

const IconButton: FC<Props> = ({
  className,
  children,
  shape = 'solid',
  variant = 'default',
  size = 'medium',
  raised = false,
  disabled = false,
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
      className={classNames(className, styles.iconButton, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.success]: variant === 'success',
        [styles.error]: variant === 'error',
        [styles.warning]: variant === 'warning',
        [styles.default]: variant === 'default',

        [styles.solid]: shape === 'solid',
        [styles.outlined]: shape === 'outlined',
        [styles.clear]: shape === 'clear',

        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.xlarge]: size === 'x-large',


        [styles.raised]: raised === true && shape === 'solid',
      })}
      {...rest}
    >
      {ripples}

      <div className={styles.content}>
        {children}
      </div>
    </button>
  )
}

export { IconButton }