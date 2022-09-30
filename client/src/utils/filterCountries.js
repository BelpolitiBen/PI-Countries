const filterCountries = (country, filters, type) => {
    let flag = false;
    if (type === "activities") {
        /* La propiedad activities es un array de objetos, haciendo de esta una función algo "lenta" 
        ya que estamos iterando dentro de un .filter. No se me ocurrió una forma de mejorarla. */
        country.activities.forEach((activity) => {
            if (!flag) flag = filters.includes(activity.activityName);
        });
    } else {
        flag = filters.includes(country.region);
    }
    return flag;
};
export default filterCountries;
