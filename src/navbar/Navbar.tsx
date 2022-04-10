import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.container}>
            <a href="">HOME</a>
            <a href="">ABOUT ME</a>
            <a href="">PROJECTS</a>
            <a href="">SKILLS</a>
            <a href="">CONTACT</a>
        </div>
    );
};

export default Navbar;