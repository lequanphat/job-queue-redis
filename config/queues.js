const Queue = require("bull");
const CONFIG = require("./env");

const eventQueue = new Queue("event-queue", {
  redis: {
    port: CONFIG.REDIS_PORT,
    host: CONFIG.REDIS_HOST,
  },
});

eventQueue.process(async (job) => {
  const {
    id,
    data: { signal },
  } = job;
  console.log(`Event ${id}-${signal} is running...`);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Promise.resolve();
});

eventQueue.on("completed", (job) => {
  console.log(`Event ${job.data.signal} run successfully`);
});

eventQueue.on("failed", (job, err) => {
  console.error(`Failed to trigger ${job.data.signal}`, err);
});

module.exports = { eventQueue };
