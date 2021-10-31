import React from "react";
import { Grid } from "@mui/material";
import ClassCard from "./ClassCard";

export default function ClassGrid({ classes }) {
  return (
    <Grid
      className="flex flex-wrap"
      container
      spacing={2}
      sx={{
        width: "100%",
        mx: "auto",
        my: 1,
      }}>
      {classes &&
        classes.map((cls) => (
          <Grid item xs={3} key={cls._id} sx={{ my: 1 }}>
            <ClassCard className={cls.className} section={cls.section} />
          </Grid>
        ))}
    </Grid>
  );
}
