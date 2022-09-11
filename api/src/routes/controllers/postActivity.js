const { Activity, Country } = require("../../db");
const validateActivities = require("../utils/validateActivities");
const { Op } = require("sequelize");

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    const errors = validateActivities(name, difficulty, duration, season);
    if (Object.values(errors).length) return res.send(errors).sendStatus(400);
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        const foundCountries = await Country.findAll({
            where: { name: { [Op.in]: countries } },
        });
        newActivity.addCountry(foundCountries);
        return res.status(201).send("Game added successfully!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = postActivity;
