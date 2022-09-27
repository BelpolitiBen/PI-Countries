import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledSidebar } from './styles/Sidebar.styled'
import ReloadIcon from './icons/ReloadIcon';
import AddIcon from './icons/AddIcon';
import FavoriteIcon from './icons/FavoriteIcon';
import MenuIcon from './icons/MenuIcon';
import HomeIcon from './icons/HomeIcon';
import { clearAll, getCountries } from '../redux/actions';

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
        console.log(activeTab)
        setActive(activeTab)
    }
    const handleReload = () => {
        dispatch(clearAll())
        dispatch(getCountries())
    }
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
                        <li className={`sidebar-list-item ${active === "favorite" && "active"}`}>
                            <a href="" className="sidebar-link" name="favorite" onClick={handleActive}>
                              <FavoriteIcon className="sidebar-icon"/>
                              <div className="hidden-sidebar"><p>Favorite Activities</p></div>
                              <p className="hover">Favorite Activities</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link to="/home" className="sidebar-link" onClick={handleReload}>
                                <ReloadIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Reload Countries</p></div>
                                <p className="hover">Reload Countries</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </StyledSidebar>
    )
}

export default Sidebar