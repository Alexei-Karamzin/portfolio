import React from 'react';
import Header from "./header/Header";
import {Main} from "./main/Main";
import classes from './App.module.css';
import SkillsBlock from './SkillsBlock/SkillsBlock';
import Works from './Works/Works';

function App() {
    return (
        <div /*className={classes.rootContainer}*/>
            <Header />
            <Main />
            <SkillsBlock />
            <Works />
        </div>
    );
}

export default App;





