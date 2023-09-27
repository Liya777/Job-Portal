import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import palette from "../Modules/Utils/theme/palette";

const TestimonialCard = () => {
  return (
    <Card sx={{ display: "flex", width: "500px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require(`../Assets/avathar.png`)}
        alt="Avathar"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ color: palette.palette.secondary.main }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: palette.palette.primary.main }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus
            sed deleniti id et!"
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
