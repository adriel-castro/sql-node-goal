const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
require("colors");
const { errorHandler } = require("./middlewares/errorMiddleware");

const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running on PORT ${port}`.underline)
);
