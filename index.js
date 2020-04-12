const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { handleError, ErrorHandler } = require("./helpers/error");
const app = express();

var { PORT } = require("./config");

module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.options("*", cors());

app.get("/", (request, response) => {
  response.send("Api works");
});

const previewController = require("./preview");
app.use("/v1", previewController);


app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
