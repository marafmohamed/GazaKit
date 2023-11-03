const express = require("express");
const mongoose = require("mongoose");
const  DuaaRoutes=require("./Routes/DuaaRoutes")
const BrandRoutes=require("./Routes/BrandRoutes")
const CommentRoutes=require("./Routes/CommentRoutes")
const HashtagRoutes=require("./Routes/HashtagsRoutes")
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/api/",DuaaRoutes)
app.use("/api/",BrandRoutes)
app.use("/api/",CommentRoutes)
app.use("/api/",HashtagRoutes)
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
