import {useEffect} from "react";
import{useDispatch, useSelector} from "react-redux";
import { getActivities, getCountries, getCountryDetail } from "../../redux/actions";
import ActivityCards from "./ActivityCards";
import { StyledDetail } from "./styles/CountryDetail.styled";

/* 
Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
[ ] Código de país de 3 letras (id)
[ ] Capital
[ ] Subregión
[ ] Área (Mostrarla en km2 o millones de km2)
[ ] Población
[ ] Actividades turísticas con toda su información asociada */

const CountryDetails = (props) => {
  const id = props.match.params.id
  const dispatch = useDispatch()
  const {name, flag, region, capital, subregion, area, population, activities} = useSelector(state => state.countryDetail)

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getCountryDetail(id))
    dispatch(getActivities())
  }, [dispatch, id])
  

  return (
    <StyledDetail>
            <h2>{name}</h2>
            <div id="container">
                <div>
                  <img src={flag} alt="Not Found" />
                  <h3>{region}</h3>
                  <h5>Capital: {capital}</h5>
                  <p>Subregion: {subregion}</p>
                  <p>Area in km2: {area}</p>
                  <p>Population: {population}</p>
                </div>
                <ul id="activities">
                    <h4 id="activitiesLabel">Touristic Activities</h4>
                    <ActivityCards activities={activities}/>
                </ul>
            </div>
            
    </StyledDetail>
  )
}

export default CountryDetails