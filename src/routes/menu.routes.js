const express = require("express");
const router = express.Router();

const menuController = require("../controller/menu.controller");

router.get("/", menuController.menuGet);
router.post("/", menuController.menuAdd);
router.delete("/:id", menuController.menuDelete);
router.put("/:id", menuController.menuEdit);

module.exports = router;
