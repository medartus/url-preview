const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const { handleError } = require("./helpers/error");
const { generateDocs } = require("./docs");
const app = express();

var { PORT } = require("./config");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.options("*", cors());

app.get("/", (request, response) => {
  response.send(generateDocs());
});

const previewController = require("./preview");
app.use("/api/v1", previewController);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = PORT || 80;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
