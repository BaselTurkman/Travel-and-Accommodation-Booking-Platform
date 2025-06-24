import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export interface DeleteButtonProps extends Omit<ButtonProps, "onClick"> {
  onClick: () => void;
  children?: ReactNode;
}
