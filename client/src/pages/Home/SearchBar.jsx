import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import SearchIcon from '../../components/icons/SearchIcon';
import { getCountriesByName } from '../../redux/actions';
import { StyledSearchBar } from './styles/SearchBar.styled';

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
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
            <input type="text" placeholder='Search...' onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>
                <SearchIcon/>
            </button>
        </StyledSearchBar>
    )
}

export default SearchBar