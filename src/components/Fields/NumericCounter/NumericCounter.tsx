import { Box, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { FC } from "react";
import { useField } from "formik";
import NumericInput from "../NumericInput";
import { NumericCounterProps } from "./types";

const NumericCounter: FC<NumericCounterProps> = ({
  name,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [field, , helpers] = useField(name);

  const increment = () => {
    const newVal = Math.min(Number(field.value || 0) + step, max);
    helpers.setValue(newVal);
  };

  const decrement = () => {
    const newVal = Math.max(Number(field.value || 0) - step, min);
    helpers.setValue(newVal);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={decrement}
        color="error"
        disabled={Number(field.value) <= min}
        sx={{ mr: 1 }}
      >
        <Remove />
      </IconButton>
      <NumericInput
        name={name}
        min={min}
        max={max}
        value={field.value}
        onChange={(e) => helpers.setValue(parseInt(e.target.value))}
        sx={{ width: 80 }}
      />

      <IconButton
        onClick={increment}
        color="success"
        disabled={Number(field.value) >= max}
        sx={{ ml: 1 }}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default NumericCounter;
