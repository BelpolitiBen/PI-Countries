import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, displayCountries, filterByActivities, filterByContinent, getActivities, getCountries, sorting } from '../../redux/actions';
import paginationHelper from '../../utils/paginationHelper';
import Cards from './Cards';
import Pagination from './Pagination';
import SearchBar from './SearchBar'
import Select from './Select'
import { StyledHome } from './styles/Home.styled'
import { StyledFilterButtons } from './styles/FilterButtons.styled';
import InputButton from '../../components/InputButton';
import CustomSelect from '../../components/CustomSelect';
function Home() {

    /* Todas las variables y estados... siento que tendría que haber modularizado y refactorizado mas. */
    const dispatch = useDispatch()
    const countries = useSelector((state) => state?.countries)
    const activities = useSelector((state) => state?.activities)
    const activityNames = activities?.map(a => a.activityName) //Debería ordenarlas alfabéticamente...
    
    /* Estos tres estados de redux los hice en los ultimos días, para poder mostrar los filtros y el sort bien al ir y volver de distintas partes de la aplicación. 
    Estoy seguro que podría refactorizar el Home para utilizarlos mas veces y no necesitar mas los estados locales, peró ya no quiero romper nada*/
    const filtersActivities = useSelector((state) => state?.filtersActivities) 
    const filtersContinent = useSelector((state) => state?.filtersContinent)
    const currentSort = useSelector((state) => state?.sorting)


    /* Estados de filtros que hice en los primeros días, no me animé a cambiarlos porque había muchas otras cosas mas importantes que pulir y arreglar antes */
    const [currentActivityFilters, setCurrentActivityFilters] = useState([])
    const [currentContinentFilters, setCurrentContinentFilters] = useState(filtersContinent?.length ? [...filtersContinent] : [])
    
    /* Todo lo que necesita la paginación y las cards */
    const countriesLength = countries?.length
    const [currentPage, setCurrentPage] = useState(1)
    const [[sliceStart, sliceEnd], pageNumbers] = paginationHelper(currentPage, countriesLength)
    const currentCountries = countries?.slice(sliceStart, sliceEnd)
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //Estado  para que muestre un loading especificamente cuando se carga la página inicialmente, y no cuando se usa el SearchBar o cuando el usuario hace una busqueda sin resultados.
    const [pageLoaded, setPageLoaded] = useState(false)

    useEffect(() => {
        if (countries && countries.length) setPageLoaded(true)
    }, [countries])

    /* Al montar el componente, limpia el estado de Detail (debería haber hecho eso desde el componente de CountryDetail)
     y despacha getCountries para poder renderizar los paises y el paginado, y getActivities para poder filtrar por actividades */
    useEffect(()=> {
        dispatch(clearDetail())
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    /* Funciones de los filtros.  */

    const clearFilters = () => { // Limpia el filtro de actividades cuando se hace click en la cruz.
        setCurrentActivityFilters([])
        dispatch(filterByActivities([]))
        dispatch(displayCountries())
    }

    const setFilters = (value, name) => { //Setea los estados locales de los filtros
        if (name === "activities") {
            if(currentActivityFilters.includes(value)) {
                setCurrentActivityFilters(oldArr => [...oldArr.filter(a => a !== value)]) //Saca el filtro si ya se encuentra en el array
            } else {
                setCurrentActivityFilters(oldArr => [...oldArr, value])
        }
        }
        else {
            if(currentContinentFilters.includes(value)) {
                setCurrentContinentFilters(oldArr => [...oldArr.filter(a => a !== value)])
            } else {
                setCurrentContinentFilters(oldArr => [...oldArr, value])
        }
        } 
    }
    
    /* Esta funcion es de antes de que hubiera estados globales de filtros y que existiera displayCountries. Las actions hacian que el reducer filtara el estado countries. 
    Cuando cambié el funcionamiento, simplemente le agregué el displayCountries y siguió andando. */
    const handleFilters = (e) => { 
        const {value, name} = e.target
        let filters = name === "activities" ? [...currentActivityFilters] : [...currentContinentFilters] //Filters es un array con los filtros actuales.
        if(filters.includes(value)) {
            filters = [...filters.filter(g => g !== value)]
        } else filters.push(value) // Le filtro el valor si ya lo tiene, y de lo contrario se lo pusheo.
        setFilters(value, name) //Despues llamo a setFilters, así se guarda en el estado local para la proxima vez que se llame la función.
        if (name === "activities") { //Y despacho las actions con filters, porque setFilters es asincrónico y el estado local todavía no tiene los filtros cuando se dispara la action.
            dispatch(filterByActivities(filters)) 
        } else dispatch(filterByContinent(filters))
        dispatch(displayCountries())
        setCurrentPage(1) //el setCurrentPage a la primera página es necesario porque cambia la cantidad de países una vez se filtran.
    }

    const handleSort = (e) => {
        e.preventDefault() //Siento que no fuí consistente con ponerle e.preventDefault a las cosas. Por lo menos acá lo hice.
        dispatch(sorting(e.target.value))
        dispatch(displayCountries())
    }

    return (
        <StyledHome>
            <h1>Henry Countries</h1>
            {pageLoaded ? 
                <>
                    <Pagination currentPage={currentPage} pagination={pagination} pageNumbers={pageNumbers}/>
                    <div className='container'> 
                        <SearchBar pagination={pagination}/>
                        <Select onChange={handleSort} selectedOption={currentSort ? currentSort : "Sort by..."} options={["A-Z", "Z-A", "Largest Pop.", "Smallest Pop."]}/>
                        <CustomSelect options={activityNames} placeholder="Touristic activities" clear={clearFilters} values={filtersActivities ? filtersActivities : []} onClick={handleFilters} name="activities"/>
                    </div>
                    <StyledFilterButtons>
                      <InputButton name="continent" onClick={handleFilters} className={filtersContinent?.includes("Africa") && "clicked"} value="Africa"/>
                      <InputButton name="continent" onClick={handleFilters} className={filtersContinent?.includes("Americas")  && "clicked"} value="Americas"/>
                      <InputButton name="continent" onClick={handleFilters} className={filtersContinent?.includes("Asia")  && "clicked"} value="Asia"/>
                      <InputButton name="continent" onClick={handleFilters} className={filtersContinent?.includes("Europe")  && "clicked"} value="Europe"/>
                      <InputButton name="continent" onClick={handleFilters} className={filtersContinent?.includes("Oceania")  && "clicked"} value="Oceania"/>
                    </StyledFilterButtons>
                    <Cards countries={currentCountries}/>
                </>
            : <h2>Loading...</h2>
            }
            {pageLoaded && !countriesLength ? <button type='button' className='reload' onClick={() => dispatch(displayCountries())}>Reload</button> : <></>}
        </StyledHome>
    )
}

export default Home