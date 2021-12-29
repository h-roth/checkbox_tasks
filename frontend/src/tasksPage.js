import React, { useState, useEffect, useCallback } from "react";
import { Container, Button } from "@mui/material";
import Spinner from "./components/Spinner/Spinner";
import TaskForm from "./components/TaskForm/TaskForm";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task/Task";
import { taskService } from "./utils/taskService";

function TasksPage() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getTasks = useCallback(() => {
    setLoading(true);
    taskService.getAllTasks().then((data) => {
      if (data) {
        console.log(data.data);
        setTasks(data.data);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const addTask = (newTask) => {
    taskService.addTask(newTask);
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleOpenModal = (row) => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (loading) return <Spinner />;

  return (
    <Container component="main">
      <h1>Checkbox Tasks</h1>

      <Button
        variant="outlined"
        color="inherit"
        onClick={handleOpenModal}
        endIcon={<AddIcon />}
      >
        Add Task
      </Button>

      {openModal && (
        <TaskForm closeHandler={handleCloseModal} addTask={addTask} />
      )}

      {/* List over tasks */}
      <Container>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} />
        ))}
      </Container>
    </Container>
  );
}

export default TasksPage;
