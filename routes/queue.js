const { BullAdapter } = require("bull-board/bullAdapter");
const { createBullBoard } = require("bull-board");
const { eventQueue } = require("../config/queues");

const { router } = createBullBoard([new BullAdapter(eventQueue)]);

module.exports = router;
