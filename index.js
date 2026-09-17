const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

app.get("/", (req, res) => {
  console.log("This is home page");
  res.send("<h1>This is home page</h1>");
});

app.get("/about", (req, res) => {
  console.log("This is about page");
  res.send("<h1>This is about page</h1>");
});

app.get("/contact", (req, res) => {
  let { q } = req.query;
  console.log("This is contact page");
  res.send("<h1>This is contact page</h1>" + `<h2>Query: ${q}</h2>`);
});
