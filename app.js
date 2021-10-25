const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");

//Sets our app to use the handlebars engine
app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "planB",
  })
);

//Serves static files (we need it to import a css file)
app.use(express.static("public"));

app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  // res.render("main", { layout: "index" });
  res.render("main");
});

app.listen(port, () => console.log(`App listening to port ${port}`));
