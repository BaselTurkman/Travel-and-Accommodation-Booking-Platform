import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

export type BaseAutoCompleteItem = Record<string, unknown>

export interface AutocompleteFieldProps<T extends BaseAutoCompleteItem>
  extends Omit<
    MuiAutocompleteProps<T, boolean, boolean, boolean>,
    "renderInput"
  > {
  name: string;
  placeholder: string;
}