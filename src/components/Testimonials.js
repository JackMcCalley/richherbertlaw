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
          fontSize: 28,
        }}
      >
        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: 4,
          padding: '50px',
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
      <Testimonial
        name="Cristibal"
        text="Our outcome was accomplished and I was able to recover my money, including the interest up! Attorney Richard went above and beyond in my case, thanks to his quick response and action we were able to place a lien before the sale of the property. Extremely grateful."
      />
      <Testimonial
        name="Hector"
        text="Kindness, wisdom, expert knowledge, and the ability to mediate and negotiate to bring about our favorable outcome. We could never thank him enough."
      />
      <Testimonial
        name="Alicia"
        text="Successful people never forget the ones who helped them when they needed it the most. Attorney Richard was part of making my dreams come true. Really thankful."
      />
      <Testimonial
        name="Shirley"
        text="Couldn’t be more than grateful. Attorney Richard was there for me in my darkest hours dealing with a professional tenant, couldn’t be more grateful. "
      />
      <Testimonial
        name="Alicia"
        text="I can’t be more than thankful I had such a professional and knowledgeable attorney to represent me. Attorney Rich gave me the confidence and assurance he would deal with the headaches of the tenants and their persuasive tactics. He gave me the advice to sell, it was the best thing I could have done."
      />
    </div>
  );
})

export default Testimonials;
