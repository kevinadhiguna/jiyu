const express = require("express");
const router = express.Router();

const getUserIp = require("../controller/getuseripController");
router.get("/", getUserIp);

module.exports = router;
