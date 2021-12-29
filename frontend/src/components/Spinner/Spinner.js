import React from "react";

import { Box, CircularProgress } from "@mui/material";

import useStyles from "./Spinner.styles";

function Spinner(props) {
  const classes = useStyles();

  return (
    <Box
      className={props.contained ? classes.spinnerContained : classes.spinner}
    >
      <CircularProgress size="10vw" />
    </Box>
  );
}

export default Spinner;
