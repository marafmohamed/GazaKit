const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT=process.env.PORT ||4000;
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "connected to the db and listening at port : ",
        PORT
      );
    });
  })
  .catch((error) => console.log(error.message));
