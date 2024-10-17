const express = require("express");

const triggerEventController = require("../controllers/event-handler");

const router = express.Router();

router.post("/trigger-event", triggerEventController.handleTriggerEvent);

module.exports = router;
