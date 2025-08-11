import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { RequestErrorFallbackProps } from "./types";
import ErrorIcon from "@mui/icons-material/Error";
import { bounce } from "@/Animation/bounce";

const RequestErrorFallback: FC<RequestErrorFallbackProps> = ({
  message = "Something went wrong.",
  onRetry,
  retryCount = 0,
  maxRetries = 3,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={5}
      px={2}
      gap={2}
    >
      <ErrorIcon
        color="error"
        sx={{ fontSize: 64, animation: `${bounce} 1.5s infinite` }}
      />

      <Typography variant="h6" color="error" gutterBottom>
        {message}
      </Typography>

      {retryCount < maxRetries ? (
        <Button variant="outlined" color="error" onClick={onRetry}>
          Retry ({retryCount + 1}/{maxRetries})
        </Button>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Something’s still wrong. Please try again later.
        </Typography>
      )}
    </Box>
  );
};

export default RequestErrorFallback;
