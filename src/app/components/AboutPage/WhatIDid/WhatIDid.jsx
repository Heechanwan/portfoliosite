import classes from './style.module.css'

export default function WhatIDid({title, subtitle}){

    const c = classes

    return(
        <>
            <div className={c.card}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </>
    )
}