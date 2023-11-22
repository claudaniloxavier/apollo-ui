import { FC } from 'react'

// TYPES
import { AvatarProps as Props } from './types'

// STYLES
import classNames from 'classnames'
import styles from './styles.module.scss'

const Avatar: FC<Props> = ({ 
  className,
  children,
  size = 'md',
  ...rest 
}: Props) => {
  return (
    <div
      className={classNames(className, styles.avatar, {
        [styles.xsmall]: size === 'xs',
        [styles.small]: size === 'sm',
        [styles.medium]: size === 'md',
        [styles.large]: size === 'lg',
        [styles.xlarge]: size === 'xl',
      })} 
      {...rest} 
    >
      A
    </div>
  )
}

export { Avatar }