import { taskService } from "../../services/task.service";
import {
  ADD_TASK,
  REMOVE_TASK,
  SET_TASKS,
  UPDATE_TASK,
} from "../reducers/task.reducer";
import { store } from "../store";

export const taskActions = {
  loadTasks,
  removeTask,
  saveTask,
};

async function loadTasks() {
  try {
    const tasks = await taskService.query();
    store.dispatch({ type: SET_TASKS, tasks });
  } catch (err) {
    console.log("Had issues loading tasks", err);
    throw err;
  }
}

async function removeTask(id) {
  try {
    await taskService.remove(id);
    store.dispatch({ type: REMOVE_TASK, id });
  } catch (err) {
    console.log("Had issues delete task", err);
    throw err;
  }
}

async function saveTask(task) {
  try {
    const type = task._id ? UPDATE_TASK : ADD_TASK;
    const savedTask = await taskService.save(task);
    store.dispatch({ type, task: savedTask });
    return savedTask;
  } catch (err) {
    console.log("Had issues loading tasks", err);
    throw err;
  }
}

