const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.kostLocation"), [BotController, "kostLocation"]);
router.menu(f("menu.roomType"), [BotController, "roomType"]);
router.menu(f("menu.contactPerson"), [BotController, "contactPerson"]);
router.keyword("*", [BotController, "introduction"]);

module.exports = router;