const { Router } = require("express");
const postActivity = require("./controllers/postActivity.js");
const getActivities = require("./controllers/getActivities.js");

const activityRouter = Router();

activityRouter.get("/", getActivities);
activityRouter.post("/add", postActivity);

module.exports = activityRouter;
