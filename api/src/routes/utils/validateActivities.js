const validateActivities = (
    activityName,
    difficulty,
    duration,
    seasons,
    countries
) => {
    const errors = {};
    const regex = /^[A-Za-z0-9 ]*$/;
    if (!activityName) errors.activityName = "Name required";
    else if (!regex.test(activityName))
        errors.activityName = "Name can't contain special characters";
    else if (activityName.length > 40)
        errors.activityName = "This name is too long!";

    if (!difficulty) errors.difficulty = "Difficulty rating required";
    else if (difficulty <= 0)
        errors.difficulty = "Difficulty rating must be positive";
    else if (typeof difficulty !== "number")
        errors.difficulty = "Difficulty rating must be a number";
    else if (difficulty > 5)
        errors.difficulty = "Difficulty rating must be between 1 and 5";

    if (!duration) errors.duration = "Duration required";
    else if (typeof duration !== "number")
        errors.duration = "Duration must be a number";
    else if (duration <= 0)
        errors.duration = "Duration must be a positive number";
    else if (duration > 525600)
        errors.duration = "Duration can't be over a year";

    if (!seasons.length) errors.seasons = "Seasons required";
    else if (!Array.isArray(seasons)) {
        errors.seasons = "Seasons must be an array!";
    } else if (
        seasons.filter(
            (s) =>
                s !== "Summer" &&
                s !== "Winter" &&
                s !== "Fall" &&
                s !== "Spring"
        ).length
    ) {
        errors.seasons = "Seasons must include only seasons!";
    }

    if (!countries.length) errors.countries = "Countries required";
    else if (!Array.isArray(countries)) {
        errors.countries = "Countries must be an array!";
    }
    return errors;
};

module.exports = validateActivities;

/*     let errors = {};
    const regex = /^[A-Za-z0-9 ]*$/;
    if (!activityName) errors.activityName = "Name required";
    else if (!regex.test(activityName))
        errors.activityName = "Name can't contain special characters";
    else if (activities.includes(activityName))
        errors.activityName = "This activity already exists";
    else if (activityName.length > 40)
        errors.activityName = "This name is too long!";

    if (!difficulty) errors.difficulty = "Difficulty rating required";
    else if (difficulty < 0) errors.difficulty = "Difficulty rating required";
    else if (typeof difficulty !== "number")
        errors.difficulty = "Must be a number";

    if (!duration) errors.duration = "Duration required";
    else if (duration < 0) errors.duration = "Duration required";
    else if (duration > 525600)
        errors.duration = "Duration can't be over a year";
    else if (typeof duration !== "number") errors.duration = "Must be a number";

    if (!seasons.length) errors.seasons = "Seasons required";
    if (!countries.length) errors.countries = "Countries required"; */
