import React from 'react';
import classes from '../../common/styles/Container.module.css'
import s from './comp2.module.css'

type propsType = {
    title: string
}

const Comp2 = (props: propsType) => {
    return (
        <div className={classes.skillContainer}>
            <div className={s.headerSkillsBox}>
                <img className={s.iconComponent}
                     src="data:image/png;base64,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"
                     alt="Redux img"/>
            </div>

            <div className={s.compContent}>
                <h3 className={s.header}>{props.title}</h3>
                <span className={s.text}>ikdjsfjdfsfvdvcccccc</span>
            </div>

        </div>

    );
};

export default Comp2;