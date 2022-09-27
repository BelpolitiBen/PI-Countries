const reverseDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    let dayString = "";

    if (days === 1 && (remainingMinutes > 0 || remainingHours > 0))
        dayString = `${days} day, `;
    else if (days > 1 && (remainingMinutes > 0 || remainingHours > 0))
        dayString = `${days} days, `;
    else if (days === 1) dayString = `${days} day`;
    else if (days > 1) dayString = `${days} days`;

    let hoursString = "";
    if (remainingHours === 1 && remainingMinutes > 0)
        hoursString = `${remainingHours} hour, `;
    else if (remainingHours > 1 && remainingMinutes > 0)
        hoursString = `${remainingHours} hours, `;
    else if (remainingHours === 1) hoursString = `${remainingHours} hour`;
    else if (remainingHours > 1) hoursString = `${remainingHours} hours`;

    let minutesString = "";
    if (remainingMinutes === 1) minutesString = `${remainingMinutes} minute`;
    else if (remainingMinutes > 1)
        minutesString = `${remainingMinutes} minutes`;
    return `${dayString}${hoursString}${minutesString}`;
};

export default reverseDuration;
