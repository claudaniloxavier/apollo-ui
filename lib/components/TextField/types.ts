import { InputHTMLAttributes } from 'react'

type TextFieldOwnProps = InputHTMLAttributes<HTMLInputElement>

export interface TextFieldProps extends TextFieldOwnProps {
  variant?: 'primary' | 'secondary' | 'error'
  height?: 'small' | 'medium' | 'large',
  hintMessage?: string
  label?: string
}