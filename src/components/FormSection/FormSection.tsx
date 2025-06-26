import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { FormSectionProps } from "./types";

const FormSection: FC<FormSectionProps> = ({ title, children }) => (
  <Box
    component="fieldset"
    sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, mb: 3 }}
  >
    <Typography
      component="legend"
      sx={{ fontWeight: 600, mb: 1, fontSize: "1.1rem" }}
    >
      {title}
    </Typography>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </Box>
);

export default FormSection