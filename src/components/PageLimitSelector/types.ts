export interface PageLimitOption {
  label: string;
  value: number;
}

export interface PageLimitSelectorProps {
  value: number;
  onChange: (value: number) => void;
}
