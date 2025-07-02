import React from "react";
import { Typography, Button, Stack, Box } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useNavigate } from "react-router-dom";
import { bounce } from "@/Animation/bounce";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      p={4}
    >
      <Stack alignItems="center" spacing={2}>
        <SentimentVeryDissatisfiedIcon
          color="error"
          sx={{
            fontSize: 80,
            animation: `${bounce} 1.5s infinite`,
          }}
        />

        <Typography variant="h3" gutterBottom textAlign="center">
          404 - Page Not Found
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 2 }} textAlign="center">
          Sorry, we couldn’t find the page you were looking for.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;
