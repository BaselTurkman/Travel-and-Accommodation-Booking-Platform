import {
  Box,
  Card,
  CardContent,
  Stack,
  Divider,
  Skeleton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BookingConfirmationSkeleton = () => {
  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 600, width: "100%", p: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <CheckCircleIcon color="disabled" sx={{ fontSize: 50 }} />
            <Skeleton variant="text" width={180} height={30} />
            <Skeleton
              variant="rectangular"
              width={200}
              height={32}
              sx={{ borderRadius: 2 }}
            />
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="40%" />
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="60%" />
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="50%" />
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="30%" />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="text" width="30%" />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Skeleton variant="text" width="30%" />
              <Skeleton
                variant="rectangular"
                width={80}
                height={24}
                sx={{ borderRadius: 1 }}
              />
            </Box>
          </Stack>
        </CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={36}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default BookingConfirmationSkeleton;
