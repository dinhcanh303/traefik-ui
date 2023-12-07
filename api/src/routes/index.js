"use strict";
const express = require("express");
const router = express.Router();

//signUp
router.use("/api/v1/http", require("./http"));
// router.use("/v1/api/services", require("./product"));
// router.use("/v1/api/middlewares", require("./discount"));

module.exports = router;