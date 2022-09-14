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
            <aside class={`sidebar ${sidebar}`}>
                <div class="middle-sidebar">
                    <ul class="sidebar-list">
                        <li class="sidebar-list-item active">
                            <Link to="/activities/add" class="sidebar-link">
                                <AddIcon className="sidebar-icon"/>
                                <div class="hidden-sidebar"><p>Add a New Activity!</p></div>
                                <p class="hover">Add a New Activity!</p>
                            </Link>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="" class="sidebar-link">
                              <FavoriteIcon className="sidebar-icon"/>
                              <div class="hidden-sidebar"><p>Favorite Activities</p></div>
                              <p class="hover">Favorite Activities</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bottom-sidebar">
                    <ul class="sidebar-list">
                        <li class="sidebar-list-item">
                            <a href="" class="sidebar-link">
                                <ReloadIcon className="sidebar-icon"/>
                                <div class="hidden-sidebar"><p>Reload Countries</p></div>
                                <p class="hover">Reload Countries</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </StyledSidebar>
    )
}

export default Sidebar