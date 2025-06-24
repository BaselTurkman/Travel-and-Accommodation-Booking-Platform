import { TextField } from "@mui/material";
import { FC } from "react";
import { useField } from "formik";
import { NumericInputProps } from "./types";

const NumericInput: FC<NumericInputProps> = ({ name, max, min, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      type="number"
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      slotProps={{
        input: {
          inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            max,
            min,
          },
        },
      }}
    />
  );
};

export default NumericInput;
