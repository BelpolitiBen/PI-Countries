import React from 'react'
import { StyledSidebar } from './styles/Sidebar.styled'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReloadIcon from './icons/ReloadIcon';
import AddIcon from './icons/AddIcon';
import FavoriteIcon from './icons/FavoriteIcon';

function Sidebar() {
    const sidebar = useSelector((state) => state?.sidebar)
    return (
        <StyledSidebar>
            <aside className={`sidebar ${sidebar}`}>
                <div className="middle-sidebar">
                    <ul className="sidebar-list">
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