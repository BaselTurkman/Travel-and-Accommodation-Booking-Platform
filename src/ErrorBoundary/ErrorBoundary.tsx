import UnexpectedError from "@/pages/UnexpectedError";
import { FC, PropsWithChildren, useState } from "react";
import {
  ErrorBoundary as ErrorBoundaryComponent,
  ErrorBoundaryProps,
} from "react-error-boundary";

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  const [someKey, setSomeKey] = useState(null);

  const resetErrorBoundary: ErrorBoundaryProps["onReset"] = () =>
    setSomeKey(null);

  const logErrorToService: ErrorBoundaryProps["onError"] = (error, info) => {
    console.error("Caught an error:", error, info);
  };

  return (
    <ErrorBoundaryComponent
      FallbackComponent={UnexpectedError}
      onError={logErrorToService}
      onReset={resetErrorBoundary} 
      resetKeys={[someKey]}
    >
      {children}
    </ErrorBoundaryComponent>
  );
};

export default ErrorBoundary;
