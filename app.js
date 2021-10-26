const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const getAllBlogs = require("./api");

//Sets our app to use the handlebars engine
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

//Serves static files (we need it to import a css file)
app.use(express.static("public"));

app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", { layout: "index" });
  //res.render("main");
});

app.get("/postblog", (req, res) => {
  res.render("postblog", { layout: "index" });
});

const fakeBlogs = [{ blog: "content 1" }, { blog: "content 2" }];

app.get("/allblogs", (req, res) => {
  blogsArray = [];
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
    });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
