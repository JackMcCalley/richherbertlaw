import React, {forwardRef} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Testimonials = forwardRef((props, ref) => {
  const Testimonial = ({ text, name }) => {
    return (
      <Container
      sx={{
        width: '75vw',
        height: 'auto',
        fontSize: 28
      }}
      >
      <Box>
        <span>"{text}"</span>
        <div> ~ {name}</div>
      </Box>
      </Container>
    );
  };

  return (
    <div ref={ref}>
      <h1 >Testimonials</h1>
      <Testimonial
        name="Skiye via Avvo.com"
        text="He was personable, professional and extremely knowledgeable. Organized, direct and honest. Aggressive and dedicated individual - what other lawyer would reach out to you at all hours of the night to discuss case details? None other...only this gentleman. Highly recommended. Very."
      />
    </div>
  );
})

export default Testimonials;
