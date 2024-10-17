const express = require("express");
const schedule = require("./config/cron");
const queueRouter = require("./routes/queue");

const router = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(
  "/queues",
  (req, res, next) => {
    // config proxy
    next();
  },
  queueRouter
);

app.listen(3000, () => {
  schedule();
  console.log("Running on http://localhost:3000");
});
