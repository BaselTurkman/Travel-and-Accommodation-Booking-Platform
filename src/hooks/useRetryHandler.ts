import { useState } from "react";
import { MAX_RETRIES } from "@/constants";

const useRetryHandler = (refetch: () => void) => {
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  };

  return { retryCount, handleRetry };
};

export default useRetryHandler;
