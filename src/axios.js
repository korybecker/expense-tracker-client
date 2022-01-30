import axios from "axios";

const instance = axios.create({
  baseURL: `https://expense-tracker-kb.herokuapp.com/`,
});

export default instance;
