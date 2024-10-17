const { eventQueue } = require("../config/queues");

const handleTriggerEvent = async (signal) => {
  eventQueue.add({
    signal,
  });
  return { message: "Event triggered successfully" };
};

module.exports = {
  handleTriggerEvent,
};
