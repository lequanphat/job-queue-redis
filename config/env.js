const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
};

module.exports = CONFIG;
