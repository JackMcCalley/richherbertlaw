import React, { forwardRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import housingthick from '../assets/housingthick.jpg'
import notebook from '../assets/notebook.jpg'
import '../styles/Specialties.css'

const Specialties = forwardRef((props, ref) => {

  const Specialty = (props) => {
    return (
      <Grid container spacing={0} 
        sx={{ 
          height: 'auto', 
          padding: 0,
          justifyContent: 'center', 
          backgroundColor: 'white', 
          lineHeight: 0,
          width: '95vw',
          margin: 0,
          }}>
        <Grid xs={12} sm={6} sx={{ margin: 0, padding: 0, border: 2, borderRight: 3, height: 'auto' }}>
          <Box sx={{}}>
            <Typography style={{margin: '2rem', fontFamily: 'Libre Baskerville', fontSize: '3.5vw'}} className="specialty-type">{props.title}</Typography>
            <Typography className="specialty-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} sx={{ margin: 0, padding: 0, borderRight: 1, borderBottom: 1, borderTop: 1}}>
          <div style={{maxHeight: '100%', minWidth: '30vw', overflow: 'hidden'}}>
            <img style={{}} alt="housing" src={props.image} />
          </div>
        </Grid>
      </Grid>
    )
  }
  return (
    <section ref={ref}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="specialty-container"
      >
        <Box sx={{ width: '100%', margin: 0 }}>
          <h1 className="specialty-title">SPECIALTIES</h1>
        </Box>
        <Specialty image={housingthick} title="HOUSING LAW" description="" />
        <br/><br/>
        <Specialty image={notebook} title="CRIMINAL DEFENSE" description="" />
        <br/>
      </Grid>
    </section>
  );
})

// const styles = {
//   specialties: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     flexDirection: 'column',
//     height: 'auto',
//   },
//   title: {
//     fontSize: '68px',

//   }
// };

export default Specialties;
