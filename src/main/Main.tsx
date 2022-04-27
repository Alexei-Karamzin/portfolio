import React from 'react';
import classes from './Main.module.css'
import ContainerStyles from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={ContainerStyles.mainContainer}>
            <div className={classes.rootBlock}>
                <h1 className={classes.rootText}>Hello,<br/>I am Aleksei Karamzin<br/>frontend developer</h1>
                <div className={classes.photo}>photo</div>
            </div>
            <div className={classes.navbarSocialIcons}>




                <a href="#">F</a>
                <a href="#">I</a>
                <a href="#">VK</a>
                <a href="#">X</a>
            </div>
        </div>
    );
};



