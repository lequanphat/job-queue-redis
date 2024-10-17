const triggerEventService = require("../services/event-handler");

const handleTriggerEvent = async (req, res) => {
  const { signal } = req.body;

  const result = await triggerEventService.handleTriggerEvent(signal);

  res.json(result);
};

module.exports = {
  handleTriggerEvent,
};
