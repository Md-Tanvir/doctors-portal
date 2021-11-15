import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import img1 from "../../../images/fluoride.png";
import img2 from "../../../images/cavity.png";
import img3 from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ab magnam facere nam fuga est quidem eum delectus fugit harum! Ipsum beatae quas non ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam.",
    img: img1,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ab magnam facere nam fuga est quidem eum delectus fugit harum! Ipsum beatae quas non ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam.",
    img: img2,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ab magnam facere nam fuga est quidem eum delectus fugit harum! Ipsum beatae quas non ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam.",
    img: img3,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight:500,m:2,color:'success.main'}} variant="h6" component="div">
        OUR SERVICES
        </Typography>
      <Typography sx={{fontWeight:600,m:3}} variant="h4" component="div">
        SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service service={service} key={service.name}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
