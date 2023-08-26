import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/api-santucm/public/api",
  headers: {
    "Content-type": "application/json"
  }
});