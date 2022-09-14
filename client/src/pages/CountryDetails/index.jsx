import {useEffect} from "react";
import{useDispatch, useSelector} from "react-redux";
import { getActivities, getCountries, getCountryDetail } from "../../redux/actions";
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
            <div>
                <img src={flag} alt="Not Found" />
                <ul>
                    <h4>Touristic Activities</h4>
                    {activities?.map(a => <h5>{a.activityName}</h5>)}
                </ul>
            </div>
            <h3>{region}</h3>
            <h5>{capital}</h5>
            <p>{subregion}</p>
            <p>{area}</p>
            <p>{population}</p>
    </StyledDetail>
  )
}

export default CountryDetails