import { FormHTMLAttributes } from "react";

type formOwnProps = FormHTMLAttributes<HTMLFormElement>;

export interface RootProps extends formOwnProps {
  children: React.ReactNode;
}
