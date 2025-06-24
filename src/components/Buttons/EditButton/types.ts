import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export interface EditButtonProps extends Omit<ButtonProps, "onClick"> {
  onClick: () => void;
  children?: ReactNode;
}
