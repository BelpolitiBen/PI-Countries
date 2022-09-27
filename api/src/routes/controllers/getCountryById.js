const axios = require("axios");
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
        /* const response = await axios(
            `https://restcountries.com/v3/alpha/${id}`
        );
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        const country = response.data[0];
        const name = await country.name.common;
        const flag = await country.flags[0];
        const { cca3, region, capital, subregion, area, population } = country;
        const usefulData = {
            id: cca3,
            name: name,
            flag: flag,
            region: region,
            capital: capital[0],
            subregion: subregion,
            area: area,
            population: population,
        };
        res.json(usefulData); */
    } catch (err) {
        console.log(err);
    }
};

module.exports = getCountryById;
