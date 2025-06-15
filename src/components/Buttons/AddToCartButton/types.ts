export interface AddToCartButtonProps {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  text?: string;
  color?: "primary" | "error" | "secondary";
  variant?: "outlined" | "contained" | "text";
}
