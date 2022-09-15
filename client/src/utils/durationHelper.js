const durationHelper = (time) => {
    const days = parseInt(time.days);
    const hours = parseInt(time.hours);
    const minutes = parseInt(time.minutes);
    let totalMinutes = days * 24 * 60 + hours * 60 + minutes;
    return totalMinutes;
};

export default durationHelper;

console.log(durationHelper({ days: 1, hours: 1, minutes: 0 }));
