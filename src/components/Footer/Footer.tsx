import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Container,
  darken,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${darken(
          theme.palette.primary.contrastText,
          0.2
        )}, ${theme.palette.primary.dark})`,
        color: "#fff",
        py: 4,
        mt: "auto",
        minHeight: 100,
        borderTop: `1px solid ${theme.palette.primary.light}`,
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Basel Turkman
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
