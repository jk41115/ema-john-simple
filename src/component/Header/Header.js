import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=''></img>
           <nav>
                <a href="/shop">Shop</a>
                <a href="/Review">Review</a>
                <a href="/Manage">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;