"use strict";
const express = require("express");
const { asyncHandler } = require("../../helpers/asyncHandler");
const HttpController = require("../../controllers/http.controller");
const router = express.Router();

router.get("/routers", asyncHandler(HttpController.getAllRouter));

module.exports = router;