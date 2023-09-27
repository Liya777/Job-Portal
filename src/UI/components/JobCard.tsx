import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Tooltip, capitalize } from "@mui/material";
import palette from "../Modules/Utils/theme/palette";

type JobCardProps = {
  imgPath: string;
  jobTitle: string;
  description: string;
};

const JobCard = ({ imgPath, jobTitle, description }: JobCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="194"
        image={require(`../Assets/${imgPath}`)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          textTransform="capitalize"
          sx={{ color: palette.palette.primary.main }}
        >
          {jobTitle}
        </Typography>
        <Tooltip placement="top-end" arrow title={description}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {description}
          </Typography>
        </Tooltip>
        <Button
          size="small"
          style={{ color: palette.palette.secondary.main, marginTop: "10px" }}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
