const validateActivities = (
    activityName,
    difficulty,
    duration,
    seasons,
    countries
) => {
    const errors = {};
    if (!activityName) errors.activityName = "Name required";

    if (!difficulty) errors.difficulty = "Difficulty rating required";
    else if (difficulty < 0) errors.difficulty = "Difficulty rating required";
    else if (typeof difficulty !== "number")
        errors.difficulty = "Must be a number";

    if (!duration) errors.duration = "Duration required";
    else if (duration < 0) errors.duration = "Duration required";
    else if (typeof duration !== "number") errors.duration = "Must be a number";

    if (!seasons.length) errors.seasons = "Seasons required";
    else if (!Array.isArray(seasons)) {
        errors.seasons = "Seasons must be an array!";
    }

    if (!countries.length) errors.countries = "Countries required";
    else if (!Array.isArray(countries)) {
        errors.countries = "Countries must be an array!";
    }
    return errors;
};

module.exports = validateActivities;
