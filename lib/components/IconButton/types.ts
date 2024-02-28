import { ButtonHTMLAttributes } from 'react'


type IconButtonOwnProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface IconButtonProps extends IconButtonOwnProps {
  shape?: 'solid' | 'outlined' | 'clear'
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'default'
  size?: 'small' | 'medium' | 'large' | 'x-large'
  raised?: boolean
}