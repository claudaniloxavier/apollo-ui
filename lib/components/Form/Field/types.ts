export enum FIELD_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum FIELD_VARIANT {
  primary = "primary",
  secondary = "secondary",
  error = "error",
}

export interface FieldProps {
  children: React.ReactNode;
  size?: keyof typeof FIELD_SIZE;
  variant?: keyof typeof FIELD_VARIANT;
}
