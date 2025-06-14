import {
  Typography,
  Divider,
  Skeleton,
  Paper,
  FormGroup,
  Checkbox,
  Box,
} from "@mui/material";

const FilterAmenitiesSkeleton = () => {
  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        <Skeleton variant="rounded" width="40%" height={24} />
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <FormGroup>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Checkbox disabled />
          <Skeleton variant="text" width="30%" height={20} />
        </Box>

        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <Checkbox disabled />
            <Skeleton variant="text" width="60%" height={20} />
          </Box>
        ))}
      </FormGroup>
    </Paper>
  );
};

export default FilterAmenitiesSkeleton;
