import { Box, Button, TextField } from "@mui/material";

const SearchCity = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        minWidth: 300,
      }}
    >
      <TextField
        label="City"
        placeholder="Enter a city name"
        size="small"
        fullWidth
      />
      <Button variant="contained">Search</Button>
    </Box>
  );
};

export default SearchCity;
