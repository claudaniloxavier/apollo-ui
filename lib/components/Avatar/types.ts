import { HTMLAttributes } from 'react'

type DivOwnProps = HTMLAttributes<HTMLDivElement>

export interface AvatarProps extends DivOwnProps {
  backgroundColor?: string
  doubleInitials?: boolean
  fontColor?: string
  image?: string
  name: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'rounded' | 'square'
  withTitle?: boolean
}