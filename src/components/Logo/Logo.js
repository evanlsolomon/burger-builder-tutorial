import React from 'react';
import classes from './Logo.module.css'

import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} stylet={{height: props.height}}>
        <img src={burgerLogo} alt="burgerLogo"/>
    </div>
);

export default logo;