import React from 'react';
import style from '../CSSModule.module.css'

const CSSModule = () => {
    return (
        <div className={`${style.wrapper} ${style.inverted}`}>
            hello <span className="something"> CSS Module</span>
        </div>
    );
};

export default CSSModule;
