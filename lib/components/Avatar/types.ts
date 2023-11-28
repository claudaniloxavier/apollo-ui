import { HTMLAttributes } from 'react'

type DivOwnProps = HTMLAttributes<HTMLDivElement>

export interface AvatarProps extends DivOwnProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  name: string
  image?: string
  backgroundColor?: string
  fontColor?: string
  withTitle?: boolean
  doubleInitials?: boolean
}