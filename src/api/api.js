import axios from "axios";

export const api = axios.create({
  baseURL: "https://zenbit-task-back.onrender.com",
  // baseURL: "http://localhost:4000/",
});

export function setToken(token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function clearToken() {
  api.defaults.headers.authorization = ``;
}
