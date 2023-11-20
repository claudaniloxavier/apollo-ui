import { ButtonHTMLAttributes } from 'react'

type buttonOwnProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends buttonOwnProps {
  shape?: 'solid' | 'outlined' | 'text'
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
}