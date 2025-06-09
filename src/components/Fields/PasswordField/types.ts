import { type TextFieldProps } from "@mui/material";

export type PasswordFieldProps = Omit<TextFieldProps, "name" | "type"> & {
  name: string;
};
