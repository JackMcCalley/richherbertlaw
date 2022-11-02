import React, { forwardRef, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
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
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    category: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_hn6eqan", "TEMPLATE ID", toSend, "User ID")
      .then((response) => {
        console.log("Success!", response.status, response.text);
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
      <Grid sx={{ width: "40%", height: "50vh" }}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            boxShadow: 4,
            padding: "50px",
          }}
        >
          <form>
            <TextField
              onChange={handleChange}
              type="text"
              name="from_name"
              label="Your Name"
              variant="outlined"
            />
            <FormControl required>
              <FormLabel>Specialty</FormLabel>
              <RadioGroup name="category" onChange={handleChange}>
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
            <TextField
              onChange={handleChange}
              type="text"
              name="to_name"
              label="Your Name"
              variant="outlined"
            />
            <button type="submit">Submit</button>
          </form>
        </Box>
      </Grid>
    </section>
  );
});

export default Contact;
