import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import SearchIcon from '../../components/icons/SearchIcon';
import { getCountriesByName } from '../../redux/actions';
import { StyledSearchBar } from './styles/SearchBar.styled';

function SearchBar() {
    const dispatch = useDispatch()
    const lastSearch = useSelector(state => state?.lastSearch)
    const [name, setName] = useState(lastSearch)
    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(name))
    }

    return (
        <StyledSearchBar>
            <input type="text" placeholder='Search...' value={name} onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>
                <SearchIcon/>
            </button>
        </StyledSearchBar>
    )
}

export default SearchBar