import { Dayjs } from "dayjs";

export interface DatePickerFieldProps {
  name: string;
  label?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disabled?: boolean;
}
