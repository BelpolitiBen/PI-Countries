const { Router } = require("express");
//const { Op, fn, col, where } = require("sequelize");
const postApiCountriesToDb = require("./controllers/postApiCountriesToDb.js");
const getCountries = require("./controllers/getCountries.js");
const getCountryById = require("./controllers/getCountryById.js");

const countryRouter = Router();

countryRouter.post("/", postApiCountriesToDb);
countryRouter.get("/", getCountries);
countryRouter.get("/:id", getCountryById);

module.exports = countryRouter;
