import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Oral Surgery 1",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 2,
    name: "Oral Surgery 2",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 3,
    name: "Oral Surgery 3",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Oral Surgery 4",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 5,
    name: "Oral Surgery 5",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery 6",
    time: "05.00 PM - 07.00 PM",
    space: 10,
  },
];

const AvaiableAppointment = ({ date }) => {
  return (
    <Container>
      <Typography variant='h4' sx={{color:'info.main',fontWeight:500,my:4}}>Avaiable Appointment: {date.toDateString()}</Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking date={date} booking={booking} key={booking.id}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvaiableAppointment;
