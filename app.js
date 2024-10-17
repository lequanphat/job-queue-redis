const express = require("express");
const schedule = require("./config/cron");

const router = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  schedule();
  console.log("Running on http://localhost:3000");
});
