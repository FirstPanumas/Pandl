const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");

const {readdirSync} = require("fs");
const connetDB = require("./ConfigDB/connectdb");

const app = express();
connetDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({limit: "10mb"}));
const port = 8000;

app.get("/", (req, res) =>
  res.send("Hello World!")
);app.listen(port, () =>
  console.log(
    `Example app listening on port http://localhost:${port}/`
  )
);