import * as React from "react";
import { Container, Grid } from "@mui/material";
import { formatDate } from "../../utils/helpers";
import "./Task.css";

export default function Task({ task }) {
  return (
    <Container className="task">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {task.name}
        </Grid>
        <Grid item xs={6} className="task-date">
          {formatDate(task.due_date)}
        </Grid>
      </Grid>
      <p text-align="left">{task.description}</p>
    </Container>
  );
}
