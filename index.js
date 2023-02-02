require("dotenv").config();
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const con = require("./src/database/sql.connection");

const getDataRoute = require("./src/routes/getData.routes");
const menuRoute = require("./src/routes/menu.routes");
const visaRoute = require("./src/routes/visa.routes");

con.connect(function (err) {
  if (err) throw err;
  console.log("Database connected successfully.");
});

app.use(bodyParser.json({ limit: "16mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/templates"));
app.use("/", express.static(path.join(__dirname, "./src/templates")));

app.use("/api/v1/menus", menuRoute);
app.use("/api/v1/visas", visaRoute);
app.use("/", getDataRoute);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
