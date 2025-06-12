import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FC } from "react";
import { DatePickerFieldProps } from "./types";

const DatePickerField: FC<DatePickerFieldProps> = ({
  name,
  label,
  minDate,
  maxDate,
  disabled,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <DatePicker
      value={field.value ? dayjs(field.value) : null}
      onChange={(val) => {
        if (!disabled) {
          setFieldValue(name, val?.format("YYYY-MM-DD"));
        }
      }}
      minDate={minDate}
      maxDate={maxDate}
      label={label}
      disabled={disabled}
      slotProps={{
        textField: {
          fullWidth: true,
          size: "small",
          error: !!(meta.touched && meta.error),
          helperText: meta.touched,
          disabled,
        },
      }}
    />
  );
};

export default DatePickerField;
