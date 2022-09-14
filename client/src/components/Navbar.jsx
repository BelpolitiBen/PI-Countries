import React from 'react'
import {Link} from 'react-router-dom'
import {StyledNavbar} from "./styles/Navbar.styled.js"
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from '../redux/actions.js';
import MenuIcon from './icons/MenuIcon.jsx';



export default function Navbar() {
const sidebar = useSelector((state) => state?.sidebar)
const dispatch = useDispatch()

const handleSidebar = () => {
    const openOrClose = sidebar === "open" ? "" : "open"
    dispatch(openSidebar(openOrClose))
}
return (
    <StyledNavbar>
        <ul>
            <li className='one'>
                <button onClick={handleSidebar}>
                    <MenuIcon/>
                </button>
            </li>
            <li className='two'><Link to='/home'>Home</Link></li>
            <li className='three'><h1 >Henry Countries</h1></li>
        </ul>
    </StyledNavbar>
)};