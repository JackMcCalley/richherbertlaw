import React, { forwardRef } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import '../styles/Testimonials.css'

const Testimonials = forwardRef((props, ref) => {
  const Testimonial = ({ text, name }) => {
    return (
      <Grid
        container
        sx={{
          width: '80%',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '5%',
          marginBottom: '5%',
          height: 'auto',
          fontSize: 28
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography sx={{}}><i>"{text}"</i></Typography>
          <Typography sx={{}}><b> ~ {name}</b></Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <div ref={ref}>
      <h1 className="testimonial-title">TESTIMONIALS</h1>
      <Testimonial
        name="Skiye via Avvo.com"
        text="He was personable, professional and extremely knowledgeable. Organized, direct and honest. Aggressive and dedicated individual - what other lawyer would reach out to you at all hours of the night to discuss case details? None other...only this gentleman. Highly recommended. Very."
      />
    </div>
  );
})

export default Testimonials;
