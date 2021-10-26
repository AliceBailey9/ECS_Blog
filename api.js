const axios = require("axios");

const blogsApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

const getAllBlogs = () => {
  return blogsApi.get("/blogs").then((res) => {
    return res.data;
  });
};

module.exports = getAllBlogs;
