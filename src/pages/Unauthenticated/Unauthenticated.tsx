import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Unauthenticated = () => {
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
      <LockOutlinedIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        You are not logged in
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please log in to access this page.
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={() => navigate("/")}>
        Log in
      </Button>
    </Box>
  );
};

export default Unauthenticated;
