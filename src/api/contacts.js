import axios from "axios";

export default axios.create({
  baseURL: "https://contact-collector-app.herokuapp.com/api",
});
