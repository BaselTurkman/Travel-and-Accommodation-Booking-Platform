import { FC } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HotelIcon from "@mui/icons-material/Hotel";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import useGetBookingAPI from "./hooks/useGetBookingAPI";
import NavigationButton from "@/components/Buttons/NavigationButton/NavigationButton";
import BookingConfirmationSkeleton from "@/components/Skeletons/BookingConfirmationSkeleton/BookingConfirmationSkeleton";

const ConformationBooking: FC = () => {
  const { bookingId } = useParams();
  const { bookingData, isLoading } = useGetBookingAPI(bookingId ?? "0");

  if (isLoading || !bookingData) {
    return <BookingConfirmationSkeleton />;
  }

  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 600, width: "100%", p: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <CheckCircleIcon color="success" sx={{ fontSize: 50 }} />
            <Typography variant="h5" fontWeight="bold">
              Booking Confirmed
            </Typography>
            <Chip
              label={`Confirmation #: ${bookingData.confirmationNumber}`}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: "bold" }}
            />
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <PersonIcon color="action" />
              <Typography>{bookingData.customerName}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <HotelIcon color="action" />
              <Typography>
                {bookingData.hotelName} — Room {bookingData.roomNumber} (
                {bookingData.roomType})
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon color="action" />
              <Typography>
                {new Date(bookingData.bookingDateTime).toLocaleString()}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <CreditCardIcon color="action" />
              <Typography>{bookingData.paymentMethod}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography variant="subtitle2" fontWeight="bold">
                Total Cost:
              </Typography>
              <Typography variant="subtitle2">
                ${bookingData.totalCost.toFixed(2)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2" fontWeight="bold">
                Status:
              </Typography>
              <Chip
                label={bookingData.bookingStatus}
                color={
                  bookingData.bookingStatus === "confirmed"
                    ? "success"
                    : "warning"
                }
                size="small"
              />
            </Box>
          </Stack>
        </CardContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <NavigationButton caption="Home" to="/me" />
        </Box>
      </Card>
    </Box>
  );
};

export default ConformationBooking;
