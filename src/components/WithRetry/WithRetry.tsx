import { FC } from "react";
import RequestErrorFallback from "../RequestErrorFallback";
import { MAX_RETRIES } from "@/constants";
import { WithRetryProps } from "./types";

const WithRetry: FC<WithRetryProps> = ({
  isError,
  children,
  handleRetry,
  retryCount,
}) => {

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  return <>{children}</>;
};

export default WithRetry;
