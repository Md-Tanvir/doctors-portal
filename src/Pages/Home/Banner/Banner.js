import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
  backgorund: `url(${bg})`,

};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 450,
};

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container style={{ bannerBg }}>
        <Grid container spacing={2}>
          <Grid style={{ ...verticalCenter,textAlign: "left" }} item xs={12} md={6}>
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: 300, color: "gray",my:3 }}
                variant="h6"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolor consectetur beatae, quam veritatis reprehenderit!
              </Typography>
              <Button variant="contained">GET APPOINMENT</Button>
            </Box>
          </Grid>
          <Grid style={verticalCenter} item xs={12} md={6}>
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
