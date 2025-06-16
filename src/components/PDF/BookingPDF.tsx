import { Document, Page, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { BookingPDFProps } from "./types";
import { styles } from "./styles";

const BookingPDF: FC<BookingPDFProps> = ({ booking }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Booking Confirmation</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Confirmation Number</Text>
          <Text style={styles.value}>{booking.confirmationNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Customer Name</Text>
          <Text style={styles.value}>{booking.customerName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Hotel & Room</Text>
          <Text style={styles.value}>
            {booking.hotelName} — Room {booking.roomNumber} ({booking.roomType})
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Booking Date</Text>
          <Text style={styles.value}>
            {new Date(booking.bookingDateTime).toLocaleString()}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Payment Method</Text>
          <Text style={styles.value}>{booking.paymentMethod}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.bold}>Total Cost:</Text>
          <Text style={styles.bold}>${booking.totalCost.toFixed(2)}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.bold}>Booking Status:</Text>
          <Text style={styles.bold}>{booking.bookingStatus.toUpperCase()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default BookingPDF;
