const { Activity, Country } = require("../../db");

const getActivities = async (req, res) => {
    try {
        const response = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getActivities;
