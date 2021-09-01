import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">AlloMovie</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span></button>           
        <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto"></ul>
        <li className="nav-item active">
            <NavLink to="/films" className="nav-link" activeClassName="active"> Home </NavLink>
        </li>
        <li className="nav-item active">
            <NavLink to="/favoris" className="nav-link"activeClassName="active"> Favoris </NavLink>
            
        </li>
        </div>
        </header>
    );
};

export default Header;