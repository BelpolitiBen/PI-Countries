const validator = ({
    activityName,
    difficulty,
    duration,
    seasons,
    countries,
}) => {
    let errors = {};
    console.log(duration);
    if (!activityName) errors.activityName = "Name required";
    if (!difficulty) errors.difficulty = "Difficulty rating required";
    if (!duration) errors.duration = "Duration required";
    else if (duration < 0) errors.duration = "Duration required";
    else if (typeof duration !== "number") errors.duration = "Must be a number";
    if (!seasons.length) errors.seasons = "Seasons required";
    if (!countries.length) errors.countries = "Countries required";

    return errors;
};
export default validator;
