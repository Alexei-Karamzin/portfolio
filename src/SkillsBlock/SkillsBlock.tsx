import React from 'react';
import classes from './SkillsBlock.module.css';
import Comp3 from "./Comp3/Comp3";
import Comp1 from "./Comp1/Comp1";
import Comp2 from "./Comp2/Comp2";

const SkillsBlock = () => {
    return (
        <div className={classes.SkillsBlockRootContainer}>
            <div className={classes.SkillsBlockContainer}>
                <div className={classes.headerSkillsBlock}>
                    <h2>My services</h2>
                </div>
                <div className={classes.content}>
                    <Comp1 />
                    <Comp2 />
                    <Comp3 />
                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;