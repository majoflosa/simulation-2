import React from 'react';

import logo from '../../houser_logo.png'

function Header() {
    return (
        <div className="header-wrap">
            <div className="inner-header">
                <img src={logo} alt="Houser logo"/>
                <span className="site-title">Houser</span>
            </div>
        </div>
    );
}

export default Header;