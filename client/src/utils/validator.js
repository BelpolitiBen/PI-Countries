const validator = (
    activities,
    { activityName, difficulty, duration, seasons, countries }
) => {
    let errors = {};
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
    if (!countries.length) errors.countries = "Countries required";

    return errors;
};
export default validator;
