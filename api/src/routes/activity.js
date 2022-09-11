const { Router } = require("express");
const { Activity } = require("../db.js");
const axios = require("axios");
const { Op, fn, col, where } = require("sequelize");
const postActivity = require("./controllers/postActivity.js");

const activityRouter = Router();

activityRouter.post("/add", postActivity);

module.exports = activityRouter;
