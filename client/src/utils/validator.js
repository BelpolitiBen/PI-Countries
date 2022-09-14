const validator = (input) => {
    let errors = {};
    if (!input.activityName) errors.activityName = "Name required";
    if (!input.difficulty) errors.difficulty = "Difficulty rating required";
    if (!input.duration) errors.duration = "Duration required";
    if (!input.seasons.length) errors.seasons = "Seasons required";
    if (!input.countries.length) errors.countries = "Countries required";

    return errors;
};
export default validator;
