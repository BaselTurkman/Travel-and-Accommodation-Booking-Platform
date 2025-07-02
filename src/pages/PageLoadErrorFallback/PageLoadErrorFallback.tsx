// src/components/fallbacks/PageLoadErrorFallback.tsx
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FC } from "react";
import { bounce } from "@/Animation/bounce";

const PageLoadErrorFallback: FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={2}
    >
      <ErrorOutlineIcon
        color="error"
        sx={{ fontSize: 64, mb: 2, animation: `${bounce} 1.5s infinite` }}
      />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Failed to load the page
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Please check your internet connection or try reloading the page.
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={handleReload}
        color="error"
      >
        Reload Page
      </Button>
    </Box>
  );
};

export default PageLoadErrorFallback;
