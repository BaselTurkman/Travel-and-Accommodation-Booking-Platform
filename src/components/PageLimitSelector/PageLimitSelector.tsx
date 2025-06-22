import { Autocomplete, TextField } from "@mui/material";
import { PageLimitSelectorProps } from "./types";
import { options } from "./constants";

const PageLimitSelector = ({ value, onChange }: PageLimitSelectorProps) => {
  const selected = options.find((opt) => opt.value === value) ?? options[0];

  return (
    <Autocomplete
      options={options}
      value={selected}
      onChange={(_, newValue) => {
        if (newValue) {
          onChange(newValue.value);
        }
      }}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(a, b) => a.value === b.value}
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Per Page" />}
    />
  );
};

export default PageLimitSelector;
