import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import dr from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: "140px",
  backgroundPosition: "center",
  backgroundColor: "rgba(45,58,74,0.7)",
  backgroundBlendMode: "darken,luminosity",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container style={appointmentBanner}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img
              src={dr}
              style={{ width: "400px", marginTop: "-120px" }}
              alt=""
            />
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            item
            xs={12}
            md={7}
          >
            <Box>
              <Typography sx={{ mb: 4 }} style={{ color: "#5ce7ed" }} variant="h6">
                APPOINMENT
              </Typography>
              <Typography
                sx={{ my: 4 }}
                variant="h4"
                style={{ color: "white" }}
              >
                Make An Appoinment Today
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "white", fontSize: "16px", }}
                sx={{mb:4}}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam blanditiis ad ipsam commodi cum molestiae!
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
