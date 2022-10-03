const { Country } = require("../../db");

const deleteCountry = async (req, res) => {
    const { id } = req.params;
    try {
        Country.destroy({ where: { id: id } });
        res.sendStatus(400);
    } catch (err) {
        console.log(err);
    }
};

module.exports = deleteCountry;
