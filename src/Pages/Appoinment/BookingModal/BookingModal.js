import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ date,booking, openBooking, handleBookingClose }) => {
  const { name, time } = booking;

    const handleBookingSubmit = e =>{
    
        alert('Submitted')
        //collect data
        handleBookingClose()
        e.preventDefault();
    }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography sx={{mb:3}} id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
            sx={{width:'90%',p:2,m:1}}
              id="outlined-size-small"
              defaultValue={time}
              disabled
              size="small"
            />
            <TextField
            sx={{width:'90%',p:2,m:1}}
              id="outlined-size-small"
              defaultValue="Your Email"
              size="small"
            />
            <TextField
            sx={{width:'90%',p:2,m:1}}
              id="outlined-size-small"
              defaultValue="Your Name"
              size="small"
            />
            <TextField
            sx={{width:'90%',p:2,m:1}}
              id="outlined-size-small"
              defaultValue="Your Phone No."
              size="small"
            />
            <TextField
            sx={{width:'90%',p:2,m:1}}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              disabled
              size="small"
            />
            <Button type="submit" npvariant='contained'>Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
