const express = require("express");
const app = express();
const port = 9090;
const handlebars = require("express-handlebars");
const { getFirst, randomPhoto } = require("./__test__/utils");
const { getAllBlogs, postBlog, getBlog } = require("./api");
const photos = require("./photos");

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
      console.log("success");
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

app.get("/allblogs", (req, res) => {
  blogsArray = [];
  getAllBlogs()
    .then((blog) => {
      blogsArray.push(blog);
    })
    .then(() => {
      const blogs = getFirst(blogsArray[0], 300);
      res.render("allblogs", {
        layout: "index",
        blogs: randomPhoto(blogs, photos),
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("allblogs", {
        layout: "index",
      });
    });
});

app.post("/blog", (req, res) => {
  let { title } = req.body;

  getBlog(title).then((blog) => {
    res.render("blog", { blog });
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    layout: "index",
    blog: { title: "hello", content: "this is my article content" },
  });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
