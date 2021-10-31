import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CLASS_BANNER_IMAGE } from "../../util/config";

export default function ActionAreaCard({ className, section }) {
  return (
    <Card sx={{ height: "16rem", width: "20rem" }}>
      <CardActionArea>
        <CardMedia component="img" height="9rem" image={CLASS_BANNER_IMAGE} alt="class banner" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {className}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {section}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
