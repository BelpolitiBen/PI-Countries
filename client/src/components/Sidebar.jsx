import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledSidebar } from './styles/Sidebar.styled'
import AddIcon from './icons/AddIcon';
import MenuIcon from './icons/MenuIcon';
import HomeIcon from './icons/HomeIcon';
import { changeTheme} from '../redux/actions';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

function Sidebar() {
    const dispatch = useDispatch()
    const [sidebar, setSidebar] = useState("")
    const [active, setActive] = useState("")
    const handleSidebar = () => {
        const openOrClose = sidebar === "open" ? "" : "open"
        setSidebar(openOrClose)
        return openOrClose
    }
    const handleActive = (e) => {
        const activeTab = e.currentTarget.name
        setActive(activeTab)
    }
    const handleTheme = () => {
        dispatch(changeTheme())
    }
    const theme = useSelector(state => state?.theme)
    return (
        <StyledSidebar>
            <aside className={`sidebar ${sidebar}`}>
                <div className="middle-sidebar">
                    <ul className="sidebar-list">
                        <li className='sidebar-list-item'>
                            <button className='sidebar-link menu' onClick={handleSidebar}>
                                <MenuIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Close Sidebar</p></div>
                                <p className="hover">Close Sidebar</p>
                            </button>
                        </li>
                        <li className={`sidebar-list-item ${active === "home" && "active"}`}>
                            <Link to="/home" className="sidebar-link" name="home" onClick={handleActive}>
                                <HomeIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Home</p></div>
                                <p className="hover">Home</p>
                            </Link>
                        </li>
                        <li className={`sidebar-list-item ${active === "add" && "active"}`}>
                            <Link to="/activities/add" className="sidebar-link" name="add" onClick={handleActive}>
                                <AddIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Add a New Activity!</p></div>
                                <p className="hover">Add a New Activity!</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom-sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <div className="sidebar-link" onClick={handleTheme}>
                                {theme === "dark" ?  <MoonIcon className="sidebar-icon"/> : <SunIcon className="sidebar-icon"/>}
                                <div className="hidden-sidebar"><p>Change Theme</p></div>
                                <p className="hover">Change Theme</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </StyledSidebar>
    )
}

export default Sidebar