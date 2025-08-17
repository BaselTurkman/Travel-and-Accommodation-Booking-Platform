import { ReactNode } from "react";

export interface WithRetryProps {
  isError: boolean;
  children: ReactNode;
  handleRetry: () => void;
  retryCount: number;
}