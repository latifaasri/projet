import React, {Component} from 'react';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">AlloMovie</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span></button>           
        <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto"></ul>
        <li className="nav-item active">
            <a className="na-link" href="/">Home</a>
        </li>
        <li className="nav-item active">
            <a className="na-link" href="/">Favoris</a>
        </li>
        </div>
        </header>
    );
};

export default Header;