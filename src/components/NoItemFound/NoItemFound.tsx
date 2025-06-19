import { Box, Grid, Typography } from "@mui/material";
import noResult from "@/assets/Images/noResult.png";
import { FC } from "react";
import { NoItemFoundProps } from "./types";
const NoItemFound: FC<NoItemFoundProps> = ({ title }) => {
  return (
    <Grid size={{ xs: 12 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={300}
        textAlign="center"
        sx={{ color: "text.secondary" }}
      >
        <Box
          component="img"
          src={noResult}
          alt="No Result"
          width={250}
          height="auto"
          mb={2}
          sx={{
            objectFit: "contain",
            mixBlendMode: "darken",
            backgroundColor: "transparent",
          }}
        />
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          Try adjusting your search criteria.
        </Typography>
      </Box>
    </Grid>
  );
};

export default NoItemFound;
