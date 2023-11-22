import { ButtonHTMLAttributes } from 'react'

type ButtonOwnProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends ButtonOwnProps {
  shape?: 'solid' | 'outlined' | 'text'
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  size?: 'small' | 'medium' | 'large' | 'x-large',
  radius?: 'default' | 'pill',
  raised?: boolean,
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
}