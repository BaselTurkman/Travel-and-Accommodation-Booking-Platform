import { Box, Grid } from "@mui/material";
import noResult from "@/assets/Images/NoItems.png";
const NoItemsFound = () => {
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
      </Box>
    </Grid>
  );
};

export default NoItemsFound;
