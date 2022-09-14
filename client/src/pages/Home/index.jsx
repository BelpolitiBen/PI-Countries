import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../redux/actions';
import paginationHelper from '../../utils/paginationHelper';
import Cards from './Cards';
import FilterButtons from './FilterButtons'
import Pagination from './Pagination';
import SearchBar from './SearchBar'
import Select from './Select'
import { StyledHome } from './styles/Home.styled'

function Home() {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state?.countries)
    const countriesLength = countries?.length
    const [currentPage, setCurrentPage] = useState(1)
    const [[sliceStart, sliceEnd], pageNumbers] = paginationHelper(currentPage, countriesLength)
    const currentCountries = countries?.slice(sliceStart, sliceEnd)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])

    return (
      <StyledHome>
          <div className='container'> 
              <SearchBar/>
              <Select options={["A-Z", "Z-A", "Largest Pop.", "Smallest Pop."]}/>
          </div>
          <FilterButtons/>
          <Cards countries={currentCountries}/>
          <Pagination currentPage={currentPage} pagination={pagination} pageNumbers={pageNumbers}/>
      </StyledHome>
    )
}

export default Home