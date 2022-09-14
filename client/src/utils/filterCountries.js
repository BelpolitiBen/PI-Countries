const filterCountries = (country, payload, type) => {
    let flag = false;
    if (type === "activities") {
        country.activities.forEach((activity) => {
            if (!flag) flag = payload.includes(activity.activityName);
        });
    } else {
        flag = payload.includes(country.region);
    }
    return flag;
};
export default filterCountries;
