import React, { forwardRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ContactForm from './ContactForm'

const Contact = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <Grid sx={{ width: "100%", height: "50vh" }}>
                <Box>
                    <Typography>Contact Me</Typography>
                </Box>
                <Box>
                    <ContactForm />
                </Box>
            </Grid>
        </section>
    );
});

export default Contact;
