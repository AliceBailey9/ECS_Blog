const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const { getAllBlogs, postBlog } = require("./api");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.post("/postblog", (req, res) => {
  console.log(req.body);
  postBlog(req.body)
    .then((msg) => {
      console.log(msg);
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.render("allblogs", {
  //     layout: "index",
  //     blogs: blogsArray[0],
  //   });
});

app.get("/postblog", (req, res) => {
  res.render("postblog", { layout: "index" });
});

blogsArray = [];

app.get("/allblogs", (req, res) => {
  getAllBlogs()
    .then((blog) => {
      blogsArray.push(blog);
    })
    .then(() => {
      res.render("allblogs", {
        layout: "index",
        blogs: blogsArray[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("allblogs", {
        layout: "index",
      });
    });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
