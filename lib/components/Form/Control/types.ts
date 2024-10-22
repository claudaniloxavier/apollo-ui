import { InputHTMLAttributes, ReactElement } from "react";

type InputOwnProps = InputHTMLAttributes<HTMLInputElement>;

export interface ControlProps extends InputOwnProps {
  asChild?: boolean;
  children?: ReactElement;
}
