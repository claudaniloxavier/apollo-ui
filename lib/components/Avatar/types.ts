import { HTMLAttributes } from 'react'

type DivOwnProps = HTMLAttributes<HTMLDivElement>

export interface AvatarProps extends DivOwnProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}