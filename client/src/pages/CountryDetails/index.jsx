import {useEffect, useState} from "react";
import{useDispatch, useSelector} from "react-redux";
import { getActivities, getCountries, getCountryDetail } from "../../redux/actions";
import ActivityCards from "./ActivityCards";
import { StyledDetail } from "./styles/CountryDetail.styled";

const CountryDetails = (props) => {
  const id = props.match.params.id
  const dispatch = useDispatch()
  const detail = useSelector(state => state?.countryDetail)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    dispatch(getCountryDetail(id))
    dispatch(getActivities())
  }, [dispatch, id])
  useEffect(() => {
    if (detail && Object.values(detail).length) setFlag(true)
  }, [detail])

  return (
    <>
        {flag ? <StyledDetail>
                <h2>{detail?.name}</h2>
                  <div id="container">
                  <div>
                    <img src={detail?.flag} alt="Not Found" />
                    <h3>{detail?.region}</h3>
                    <h5>Capital: {detail?.capital}</h5>
                    <p>Subregion: {detail?.subregion}</p>
                    <p>Area in km2: {detail?.area}</p>
                    <p>Population: {detail?.population}</p>
                  </div>
                  <ul id="activities">
                      <h4 id="activitiesLabel">Touristic Activities</h4>
                      <ActivityCards activities={detail?.activities}/>
                  </ul>
                </div>
            </StyledDetail> : <h1>Loading...</h1>
        }
    </>
  )
}

export default CountryDetails