// index.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




  


// Route to render other pages (home, dashboard, etc.)
app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/mycourse", (req, res) => {
  res.render("mycourse.ejs");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
