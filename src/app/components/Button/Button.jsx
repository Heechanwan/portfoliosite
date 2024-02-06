import classes from './Button.module.css'

export default function Button({children}){

    const c = classes

    return(
        <button className={c.button}>{children}</button>   
    )
}