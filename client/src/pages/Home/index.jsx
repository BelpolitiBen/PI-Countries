import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayCountries, filterByActivities, filterByContinent, getActivities, getCountries, sorting } from '../../redux/actions';
import paginationHelper from '../../utils/paginationHelper';
import Cards from './Cards';
import Pagination from './Pagination';
import SearchBar from './SearchBar'
import Select from './Select'
import Dropdown from '../../components/Dropdown';
import { StyledHome } from './styles/Home.styled'
import { StyledFilterButtons } from './styles/FilterButtons.styled';
import InputButton from '../../components/InputButton';

function Home() {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state?.countries)
    const activities = useSelector((state) => state?.activities)
    const activityNames = activities?.map(a => a.activityName)
    const countriesLength = countries?.length
    const [currentPage, setCurrentPage] = useState(1)
    const [[sliceStart, sliceEnd], pageNumbers] = paginationHelper(currentPage, countriesLength)
    const [currentActivityFilters, setCurrentActivityFilters] = useState([])
    const [currentContinentFilters, setCurrentContinentFilters] = useState([])
    const [sort, setSort] = useState("")
    const currentCountries = countries?.slice(sliceStart, sliceEnd)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const setFilters = (value, name) => {
        if (name === "activities") {
            if(currentActivityFilters.includes(value)) {
                setCurrentActivityFilters(oldArr => [...oldArr.filter(a => a !== value)])
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

    const handleSort = (e) => {
        e.preventDefault()
        dispatch(sorting(e.target.value))
        setCurrentPage(currentPage)
        setSort(`Sorted by ${e.target.value}`)
        dispatch(displayCountries())
    }

    const handleFilters = (e) => {
        const {value, name} = e.target
        let filters = name === "activities" ? [...currentActivityFilters] : [...currentContinentFilters]
        if(filters.includes(value)) {
            filters = [...filters.filter(g => g !== value)]
        } else filters.push(value)
        setFilters(value, name)
        if (name === "activities") {
            dispatch(filterByActivities(filters))
        } else dispatch(filterByContinent(filters))
        setSort(`Sorted by ${value}`)
        dispatch(displayCountries())
        setCurrentPage(1)
    }

    useEffect(()=> {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    return (
      <StyledHome>
          <div className='container'> 
              <SearchBar/>
              <Select onChange={handleSort} options={["A-Z", "Z-A", "Largest Pop.", "Smallest Pop."]}/>
              <Dropdown placeholder="Enter activity name..." input={currentActivityFilters} name="activities" data={activityNames} onClick={handleFilters}/>
          </div>
          <StyledFilterButtons>
            <InputButton name="continent" onClick={handleFilters} className={currentContinentFilters.includes("Africa")  && "clicked"} value="Africa"/>
            <InputButton name="continent" onClick={handleFilters} className={currentContinentFilters.includes("Americas")  && "clicked"} value="Americas"/>
            <InputButton name="continent" onClick={handleFilters} className={currentContinentFilters.includes("Asia")  && "clicked"} value="Asia"/>
            <InputButton name="continent" onClick={handleFilters} className={currentContinentFilters.includes("Europe")  && "clicked"} value="Europe"/>
            <InputButton name="continent" onClick={handleFilters} className={currentContinentFilters.includes("Oceania")  && "clicked"} value="Oceania"/>
          </StyledFilterButtons>
          <Cards countries={currentCountries}/>
          <Pagination currentPage={currentPage} pagination={pagination} pageNumbers={pageNumbers}/>
      </StyledHome>
    )
}

export default Home