import * as React from 'react';
import { Component } from 'react';

import style from "./LandingPage.module.css"
import clsx from 'clsx';

const title = "[your name here]"
const description = "We use AI to generate your own personal portfolio. Just tell us all about you and we will improve your hiring changes three-fold!"
const linkText = "Try for free"

function LandingPage() {
    return ( 
    <div className={clsx(style.pageDiv)}>
        <div className={clsx(style.pictureDiv)}>
            <img 
                className={style.image}
                src={require("../images/pexels-andrea-piacquadio-3772623.jpg") }
            />
        </div>
        <div className={clsx(style.textDiv)}>
            <div className={clsx(style.textSection)}>
                <h1 className={clsx(style.title, style.glow)}>{title}</h1>
            </div>
            <div className={clsx(style.textSection)}>{description}</div>
            <div className={clsx(style.tryMe)}>{linkText}</div>
        </div>
        
    </div>
    );
}

export default LandingPage;