const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");
const AdminController = require("./controller/AdminController");

const router = new Router();

router.keyword("login-admin {username} {password}", [AdminController, "loginAdmin"]);
router.state("authenticated").group(() => {
    router.keyword("menu-admin", [AdminController, "showMenu"]);
    router.keyword("ubah-ketersediaan-kamar {sisaKamar}", [AdminController, "changeRoomAvalibility"]);
    router.keyword("logout-admin", [AdminController, "logout"]);
})
router.menu(f("menu.aboutUs"), [BotController, "aboutUs"]);
router.menu(f("menu.kostLocation"), [BotController, "kostLocation"]);
router.menu(f("menu.roomType"), [BotController, "roomType"]);
router.menu(f("menu.contactPerson"), [BotController, "contactPerson"]);
router.menu(f("menu.roomAvalibility"), [BotController, "roomAvalibility"]);
router.keyword("*", [BotController, "introduction"]);

module.exports = router;