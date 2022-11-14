import React, { forwardRef, useState, useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { TbSend } from 'react-icons/tb'
import {
  Typography,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { send } from "emailjs-com";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Rich",
    category: "",
    message: "",
    reply_to: "",
  });
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    send("service_hn6eqan", "template_ee1v0kp", toSend, "324KO5UWf8BvjGUUF")
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setSent(true)
      })
      .catch((err) => {
        console.log("Failed to send...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref}>
      <Grid sx={{
        width: "60%",
        marginLeft: '20%',
        marginRight: '20%',
        marginBottom: '3rem',
        height: "auto",
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <Box
          sx={{
            boxShadow: 6,
            padding: "50px",
            width: '100vmin',
            height: 'auto'
          }}
        >
          <form ref={form} onSubmit={handleSubmit}>
            <Grid xs={12}>
              <TextField
                onChange={handleChange}
                type="text"
                name="from_name"
                label="Your Name"
                variant="outlined"
              />
              <FormControl required>
                <FormLabel>Specialty</FormLabel>
                <RadioGroup row name="category" onChange={handleChange}>
                  <FormControlLabel
                    value="Housing"
                    control={<Radio />}
                    label="Housing"
                  />
                  <FormControlLabel
                    value="Criminal Defense"
                    control={<Radio />}
                    label="Criminal Defense"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <TextField
                onChange={handleChange}
                type="text"
                name="message"
                label="Write message here"
                variant="outlined"
                multiline
                rows="6"
                sx={{ width: "80%", height: '30%' }}
              />
            </Grid>
            {sent ? (
              <div>Sent!</div>
            ) : (
              <button style={{
                textDecoration: 'none',
                backgroundColor: 'rgb(48, 48, 48)',
                color: 'white',
                width: '20vmin',
                height: '5rem',
                margin: '1rem',
                fontSize: '1.3rem'
              }}
                type="submit">
                SUBMIT <TbSend />
              </button>
            )

            }

          </form>
        </Box>
      </Grid>
    </section>
  );
});

export default Contact;
