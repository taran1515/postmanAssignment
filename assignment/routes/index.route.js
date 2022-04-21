const express = require("express");
const router = express.Router();

const { addReply } = require("../controller/movie.controller.js");

router.route("/reply").post(addReply);

module.exports = router;
