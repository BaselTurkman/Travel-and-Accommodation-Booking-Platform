export interface RequestErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
  retryCount: number,
  maxRetries: number
}