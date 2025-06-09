import logo from "@/assets/images/logoV2.png";
import loginImg from "@/assets/images/unnamed.png";
import {
  Card,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const theme = useTheme();
  const isTabletOrLess = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 4,
          width: "100%",
          minHeight: { xs: "auto", md: 600 },
        }}
      >
        {!isTabletOrLess && (
          <Box
          flex={1}
            sx={{
              backgroundImage: `url(${loginImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={1}
        p={1}
          sx={{
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box my={5}>
            <Stack spacing={2} alignItems="center">
              <Box component="img" src={logo} alt="logo" width="50%" />
              <Typography variant="h5" fontWeight="600" textAlign="center">
                Welcome Back
              </Typography>
              <LoginForm />
            </Stack>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
