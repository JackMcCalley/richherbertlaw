import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import housing from "../assets/housing.jpg";

function Specialties() {
  const Specialty = (props) => {
    return (
      <Card sx={{ maxWidth: "70%" }}>
        <CardActionArea>
          <div style={{position: 'relative'}}>
            <CardMedia
              component="img"
              height="auto"
              image={props.image}
              alt="housing"
            />
            <div style={{position: 'absolute', display: 'inline-block', color: 'white', top: '50%', left: "50%", transform: 'translate(-50%, -50%)', fontSize: '20vmin'}}>Housing</div>
          </div>
          <CardContent>
            <Typography></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  return (
    <div style={styles.specialties}>
      <Specialty image={housing} title="Housing Law" description="" />
    </div>
  );
}

const styles = {
  specialties: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "5rem",
  },
};

export default Specialties;
