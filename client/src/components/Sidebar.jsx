import React from 'react'
import { StyledSidebar } from './styles/Sidebar.styled'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReloadIcon from './icons/ReloadIcon';
import AddIcon from './icons/AddIcon';
import FavoriteIcon from './icons/FavoriteIcon';
import MenuIcon from './icons/MenuIcon';
import HomeIcon from './icons/HomeIcon';
import { openSidebar } from '../redux/actions';

function Sidebar() {
    const sidebar = useSelector((state) => state?.sidebar)
    const dispatch = useDispatch()
    const handleSidebar = () => {
        const openOrClose = sidebar === "open" ? "" : "open"
        dispatch(openSidebar(openOrClose))
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
                        <li className="sidebar-list-item">
                            <Link to="/home" className="sidebar-link">
                                <HomeIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Home</p></div>
                                <p className="hover">Home</p>
                            </Link>
                        </li>
                        <li className="sidebar-list-item active">
                            <Link to="/activities/add" className="sidebar-link">
                                <AddIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Add a New Activity!</p></div>
                                <p className="hover">Add a New Activity!</p>
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <a href="" className="sidebar-link">
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
                            <a href="" className="sidebar-link">
                                <ReloadIcon className="sidebar-icon"/>
                                <div className="hidden-sidebar"><p>Reload Countries</p></div>
                                <p className="hover">Reload Countries</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </StyledSidebar>
    )
}

export default Sidebar