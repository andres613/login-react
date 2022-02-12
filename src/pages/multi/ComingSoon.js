import React from 'react'
import comingSoonImg from './ComingSoon.jpg'
import style from './Multi.module.css'

export const ComingSoon = () => {
    return (
        <img
            className={style.multi}
            width={626}
            height={626}
            src={comingSoonImg}
            alt="Imagen de Proximamente"
            />
    );
}
