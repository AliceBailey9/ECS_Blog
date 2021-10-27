const express = require("express");
const app = express();
const port = 9090;
const handlebars = require("express-handlebars");
const getFirst = require("./__test__/utils");
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
  res.render("main");
});

app.post("/postblog", (req, res) => {
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

app.post("/blog", (req, res) => {
  console.log(req.body);
  //add api call using title
  res.render("blog", { blog: req.body });
  //   res.redirect(status: 200, "/blog", { blogTitle: req.body });
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
        blogs: getFirst(blogsArray[0], 10),
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("allblogs", {
        layout: "index",
      });
    });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    layout: "index",
    blog: { title: "hello", content: "this is my article content" },
  });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
