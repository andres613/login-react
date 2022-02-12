import React from 'react'
import error404img from './error-404.jpg'
import style from './Multi.module.css'

export const Error404 = ({ error }) => {
    return (
        <img
            className={style.multi}
            width={626}
            height={626}
            src={error404img}
            alt={error} />
    );
}
