import React from 'react';
import classNames from 'classnames/bind';
import style from '../scss/CSSModule.module.scss'

const cx = classNames.bind(style);

const CSSModule = () => {
    return (
        <div className={cx('wrapper','inverted')}>
            hello <span className="something"> CSS Module</span>
        </div>
    );
};

export default CSSModule;
