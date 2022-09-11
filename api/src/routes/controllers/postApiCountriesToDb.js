const { Country } = require("../../db");
const axios = require("axios");

const postApiCountriesToDb = async (req, res) => {
    try {
        const response = await axios(`https://restcountries.com/v2/all`);
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        response.data.forEach((e) =>
            Country.findOrCreate({
                where: {
                    id: e.alpha3Code,
                    name: e.name,
                    flag: e.flag,
                    capital: e.capital ? e.capital : "No capital",
                    region: e.region,
                    subregion: e.subregion,
                    area: e.area ? e.area : 0,
                    population: e.population,
                },
            })
        );
        console.log(response.status);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
    }
};

module.exports = postApiCountriesToDb;
