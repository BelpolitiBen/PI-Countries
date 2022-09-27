const { Activity, Country } = require("../../db");
const validateActivities = require("../utils/validateActivities");
const { Op } = require("sequelize");

const postActivity = async (req, res) => {
    const { activityName, difficulty, duration, seasons, countries } = req.body;
    const errors = validateActivities(
        activityName,
        difficulty,
        duration,
        seasons,
        countries
    );
    console.log(activityName);
    if (Object.values(errors).length) return res.status(400).json(errors);
    console.log(seasons);
    console.log(countries);
    try {
        const newActivity = await Activity.create({
            activityName,
            difficulty,
            duration,
            seasons,
        });
        const foundCountries = await Country.findAll({
            where: { name: { [Op.in]: countries } },
        });
        newActivity.addCountry(foundCountries);
        res.status(201).send("Activity added successfully!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
};

module.exports = postActivity;
