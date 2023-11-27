import { FC } from 'react'

// TYPES
import { AvatarProps as Props } from './types'

// STYLES
import classNames from 'classnames'
import styles from './styles.module.scss'

const Avatar: FC<Props> = ({ 
  className,
  name,
  image,
  size = 'md',
  backgroundColor = '#339AF0',
  fontColor = '#FFFFFF',
  ...rest 
}: Props) => {
  const getInitials = (): string => {
    const names = name.split(' ')
    const initials = (names[0] ? names[0][0] : '') + (names.length > 1 ? names[names.length -1][0] : '')
    
    return initials
  }

  const avatarInitials = getInitials()

  return (
    <div
      className={classNames(className, styles.avatar, {
        [styles.xsmall]: size === 'xs',
        [styles.small]: size === 'sm',
        [styles.medium]: size === 'md',
        [styles.large]: size === 'lg',
        [styles.xlarge]: size === 'xl',
      })}
      style={{
        backgroundColor: backgroundColor
      }} 
      {...rest} 
    >
      {image && (
        <img src={image} alt={name} />
      )}

      {!image && (
        <span style={{ color: fontColor }}>
          {avatarInitials}
        </span>
      )}
    </div>
  )
}

export { Avatar }