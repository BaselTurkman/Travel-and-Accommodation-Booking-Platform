import { Button } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FC } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Booking } from "@/types";
import BookingPDF from "@/components/PDF";

interface PDFButton {
  bookingData: Booking;
}

const PDFButton: FC<PDFButton> = ({ bookingData }) => {
  return (
    <PDFDownloadLink
      document={<BookingPDF booking={bookingData} />}
      fileName={`booking-${bookingData.confirmationNumber}.pdf`}
    >
      {({ loading }) => (
        <Button
          variant="contained"
          color="warning"
          startIcon={<PictureAsPdfIcon />}
          sx={{ borderRadius: 3, px: 2, fontWeight: "bold" }}
        >
          {loading ? "Generating PDF..." : "Download PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFButton;
