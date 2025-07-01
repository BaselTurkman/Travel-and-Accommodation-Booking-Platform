import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E88E5", // Blue
      contrastText: "#fff",
    },
    secondary: {
      main: "#43A047", // Green
      contrastText: "#fff",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          padding: "8px 20px",
        },
        containedPrimary: {
          backgroundColor: "#1E88E5",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        },
        containedSecondary: {
          backgroundColor: "#43A047",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2e7d32",
          },
        },
        outlinedPrimary: {
          borderColor: "#1565c0",
          color: "#1565c0",
          "&:hover": {
            backgroundColor: "rgba(30, 136, 229, 0.08)",
          },
        },
        outlinedSecondary: {
          borderColor: "#43A047",
          color: "#43A047",
          "&:hover": {
            backgroundColor: "rgba(67, 160, 71, 0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#1565c0",
          color: "#ffffff",
        },
        colorSecondary: {
          backgroundColor: "#2e7d32",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
