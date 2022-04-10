import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.headerContainer}>
            <Navbar />
        </div>
    );
};

export default Header;