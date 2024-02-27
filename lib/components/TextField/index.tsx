import { FC } from 'react'

// TYPES
import { TextFieldProps as Props } from './types'

// STYLES
import styles from './styles.module.scss'
import classNames from 'classnames'

// const Hint = () => {
//   return (
//     <div className={styles.hint}>
//       Hint
//     </div>
//   )
// }

const TextField: FC<Props> = ({
  block = false,
  className,
  variant = 'primary',
  height = 'medium',
  label,
  icon,
  iconPosition = 'left',
  hintMessage,
  id,
  ...rest
}: Props) => {

  return (
    <div className={classNames(styles.textFieldRoot, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.error]: variant === 'error',
      [styles.block]: block
    })} >
      <label className={classNames(className, styles.label)} htmlFor={id}>
        {label && label}

        {/* Input */}
        <div className={classNames(className, styles.inputWrapper, {
          [styles.small]: height === 'small',
          [styles.medium]: height === 'medium',
          [styles.large]: height === 'large',
          [styles.leftIcon]: iconPosition === 'left',
          [styles.rightIcon]: iconPosition === 'right'
        })} >
          {icon && (
            <div className={styles.iconWrapper}>
              {icon}
            </div>
          )}

          <input id={id} {...rest} />
        </div>
      </label>

      {/* Hint */}
      {hintMessage && (
        <p className={classNames(className, styles.hint)}>
          {hintMessage}
        </p>
      )}
    </div>
  )
}

export { TextField }