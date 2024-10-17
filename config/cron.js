const cron = require("node-cron");

const schedule = () => {
  cron.schedule("1 0 * * *", () => {
    console.log("Hello guy, it's", new Date().toLocaleString());
  });
};

module.exports = schedule;
