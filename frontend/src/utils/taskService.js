import { safeFetch } from "./helpers";
import { TASKS_URL } from "./constants";

const getAllTasks = () => {
  const requestOptions = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  return safeFetch(TASKS_URL, requestOptions);
};

const addTask = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  return safeFetch(TASKS_URL, requestOptions);
};

export const taskService = {
  getAllTasks,
  addTask,
};
