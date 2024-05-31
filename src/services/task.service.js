import Axios from "axios";

const axios = Axios.create({
  withCredentials: true,
});

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/task/"
    : "//localhost:3030/api/task/";

export const taskService = {
  query,
  save,
  remove,
};

// Get List
async function query() {
  try {
    const { data: tasks } = await axios.get(BASE_URL);
    return tasks;
  } catch (err) {
    console.log(err);
    throw err;
  }
}


// DELETE
async function remove(taskId) {
  const url = BASE_URL + taskId;
  try {
    const { data: res } = await axios.delete(url);
    return res;
  } catch (err) {
    console.log(err);
  }
}

// PUT/POST
async function save(task) {
  const dynMethod = task._id ? "put" : "post";
  const dynPath = task._id ? BASE_URL + task._id : BASE_URL;
  try {
    const { data: savedTask } = await axios[dynMethod](dynPath, task);
    return savedTask;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
