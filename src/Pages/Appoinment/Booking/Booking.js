import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking,date }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);  
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption">{space} SPACES AVAILABLE</Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal date={date} booking={booking} handleBookingClose={handleBookingClose} openBooking={openBooking}></BookingModal>
    </>
  );
};

export default Booking;
