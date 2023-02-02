const express = require("express");
const router = express.Router();

const dataController = require("../controller/getData.controller");

router.get("/dubai-visa-online", dataController.getAllData);

module.exports = router;
