const validator = (
    activities,
    { activityName, difficulty, duration, seasons, countries }
) => {
    let errors = {};
    const regex = /^[A-Za-z0-9 ]*$/;
    console.log(duration);
    if (!activityName) errors.activityName = "Name required";
    else if (!regex.test(activityName))
        errors.activityName = "Name can't contain special characters";
    else if (activities.includes(activityName))
        errors.activityName = "This activity already exists";

    if (!difficulty) errors.difficulty = "Difficulty rating required";
    else if (difficulty < 0) errors.difficulty = "Difficulty rating required";
    else if (typeof difficulty !== "number")
        errors.difficulty = "Must be a number";

    if (!duration) errors.duration = "Duration required";
    else if (duration < 0) errors.duration = "Duration required";
    else if (duration > 86400)
        errors.duration = "Duration can't be over 60 days";
    else if (typeof duration !== "number") errors.duration = "Must be a number";

    if (!seasons.length) errors.seasons = "Seasons required";
    if (!countries.length) errors.countries = "Countries required";

    return errors;
};
export default validator;
