import axios from "axios";

export const getDentist = () => {
  const users = axios.get("https://jsonplaceholder.typicode.com/users");
  return users;
};

export const getDentistById = (id) => {
  const user = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return user;
};
