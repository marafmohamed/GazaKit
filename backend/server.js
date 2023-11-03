const express = require("express");
const mongoose = require("mongoose");
const DuaaRoutes = require("./Routes/DuaaRoutes");
const BrandRoutes = require("./Routes/BrandRoutes");
const CommentRoutes = require("./Routes/CommentRoutes");
const HashtagRoutes = require("./Routes/HashtagsRoutes");
const AccountsRoutes = require("./Routes/AccountRoutes");
const InstructionsRoutes = require("./Routes/InstructionsRoutes");
const UserRoutes = require("./Routes/userRoute");
const { requireAuth } = require("./requireAuth/requireAuth");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/api/", UserRoutes);
app.use(requireAuth)
app.use("/api/", DuaaRoutes);
app.use("/api/", BrandRoutes);
app.use("/api/", CommentRoutes);
app.use("/api/", HashtagRoutes);
app.use("/api/", AccountsRoutes);
app.use("/api/", InstructionsRoutes);
const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to the db and listening at port : ", PORT);
    });
  })
  .catch((error) => console.log(error.message));
