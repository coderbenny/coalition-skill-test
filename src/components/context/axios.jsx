import axios from "axios";

// Encode credentials to Base64
const username = "coalition";
const password = "skills-test";
const credentials = btoa(`${username}:${password}`);

const axiosConfig = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${credentials}`,
  },
});

export default axiosConfig;
