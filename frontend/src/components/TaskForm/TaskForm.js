import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import useStyles from "./TaskForm.styles";
import AddIcon from "@mui/icons-material/Add";

function TaskModal(props) {
  const { closeHandler, addTask } = props;
  const classes = useStyles();

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    due_date: new Date(),
  });

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.id]: event.target.value,
    });
  };

  const handleAdd = () => {
    closeHandler();
    addTask(newTask);
  };

  return (
    <Modal
      open
      className={classes.root}
      onClose={closeHandler}
      aria-labelledby="order-modal"
    >
      <Box className={classes.modalStyle}>
        <Typography variant="h5" component="h2" align="center" sx={{ mb: 3 }}>
          New Task
        </Typography>
        <Divider />
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={newTask.name}
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleChange}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          value={newTask.description}
          multiline
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            id="due_date"
            label="DateTime picker"
            value={newTask.due_date}
            onChange={(newValue) => {
                setNewTask({
                    ...newTask,
                    due_date:
                        newValue
                });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          onClick={handleAdd}
          endIcon={<AddIcon />}
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default TaskModal;
