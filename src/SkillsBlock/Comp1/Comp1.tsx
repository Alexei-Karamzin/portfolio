import React from 'react';
import classes from '../../common/styles/Container.module.css'
import s from './comp1.module.css'

const Comp1 = () => {
    return (
        <div className={classes.skillContainer}>
            <div className={s.iconDIv}>

                <img ></img>
            </div>
            <div className={s.comp1Content}>
                <h5 className={s.header}>React</h5>
                <p className={s.p}>описание</p>
            </div>
        </div>
    );
};

export default Comp1;