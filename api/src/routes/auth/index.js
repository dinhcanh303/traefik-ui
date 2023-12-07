"use strict";
const express = require("express");
const AccessController = require("../../controllers/access.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const router = express.Router();
//sign up
router.post("/login", asyncHandler(AccessController.login));
//authentication
router.use(authentication);
//logout
router.post("/logout", asyncHandler(AccessController.logout));
module.exports = router;