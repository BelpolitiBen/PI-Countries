const { Country, Activity } = require("../../db");
const getCountryById = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await Country.findAll({
            where: { id: id },
            include: {
                model: Activity,
                through: {
                    attributes: [],
                },
            },
        });
        res.json(country);
    } catch (err) {
        console.log(err);
    }
};

module.exports = getCountryById;
