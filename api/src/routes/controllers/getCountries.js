const { Country, Activity } = require("../../db");
const { fn, col, where } = require("sequelize");

const getCountries = async (req, res) => {
    const { name } = req.query;
    if (name) {
        try {
            let lcName = name.toLowerCase();
            console.log(lcName);
            const countries = await Country.findAll({
                where: {
                    name: where(
                        fn("lower", col("name")),
                        "LIKE",
                        "%" + lcName + "%"
                    ),
                },
                include: {
                    model: Activity,
                    attributes: ["activityName"],
                    through: {
                        attributes: [],
                    },
                },
            });
            res.json(countries);
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const response = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ["activityName"],
                    through: {
                        attributes: [],
                    },
                },
            });
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = getCountries;
