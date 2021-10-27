const axios = require("axios");

const blogsApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

const getAllBlogs = () => {
  return blogsApi.get("/blogs").then((res) => {
    return res.data;
  });
};

const postBlog = (blog) => {
  return blogsApi.post("/blogs", blog).then((res) => {
    return res.data;
  });
};

const getBlog = (title) => {
  return blogsApi.get(`/blogs/${title}`).then((res) => {
    return res.data;
  });
};

module.exports = { getAllBlogs, postBlog, getBlog };
