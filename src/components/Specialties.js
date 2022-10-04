import React, { forwardRef } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import housing from "../assets/housing.jpg";
import notebook from '../assets/notebook.jpg'
import '../styles/Specialties.css'

const Specialties = forwardRef((props, ref) => {
  const Specialty = (props) => {
    return (
      <Grid2 item xs={12} align='center' marginBottom='2rem'>
        <Card raised sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <div style={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="auto"
                image={props.image}
                alt="housing"
              />
              <div style={{ position: 'absolute', display: 'inline-block', color: 'white', top: '50%', left: "50%", transform: 'translate(-50%, -50%)', fontSize: '15vmin' }}>
                {props.title}
              </div>
            </div>
            <CardContent>
              <Typography sx={{fontSize: '1.5rem'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>

      </Grid2 >
    );
  };

const Specialty2 = (props) => {
  return (
    <Box sx={{ width: '100vw', margin: 0, backgroundColor: 'black' }}>
      Specialties
    </Box>
  )
}
return (
  <section ref={ref}>
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box sx={{ width: '100%', margin: '0px' }}>
        <h1 className="specialty-title">SPECIALTIES</h1>
      </Box>
      <Specialty image={housing} title="HOUSING LAW" description="" />
      <Specialty image={notebook} title="Criminal Defense" description="" />
    </Grid2>
  </section>
);
})

const styles = {
  specialties: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    height: 'auto',
  },
  title: {
    fontSize: '68px',

  }
};

export default Specialties;
