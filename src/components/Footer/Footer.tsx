import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Container,
  darken,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          <Typography variant="body1" fontWeight="bold">
            © {new Date().getFullYear()} Basel Turkman
          </Typography>

          <Stack direction="row" spacing={1}>
            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href="https://github.com/BaselTurkman"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/basel-turkman/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram" arrow>
              <IconButton
                component="a"
                href="https://www.instagram.com/basel_turkman/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
