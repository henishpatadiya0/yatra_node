const express = require("express");
const router = express.Router();

const visaController = require("../controller/visa.controller");

router.get("/", visaController.visaGet);
router.post("/", visaController.visaAdd);
router.delete("/:id", visaController.visaDelete);
router.put("/:id", visaController.visaEdit);

module.exports = router;
