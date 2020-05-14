import React from 'react';
import {NavLink} from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => {
    return (
        <header className="main-nav">
            <div className="main-logo">
                <h1>Auth</h1>
            </div>
            < nav className="main-nav-items">
                <ul>
                    <li><NavLink to="/auth">Login</NavLink></li>  
                </ul>
            </nav>
        </header>
    )
}

export default mainNavigation;