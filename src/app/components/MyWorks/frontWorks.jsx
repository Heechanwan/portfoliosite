'use client'

import { motion } from "framer-motion"
import { items } from "./FrontArr"
import classes from './frontWorks.module.css'
import Modal from "../Modal/Modal"
import { useState, useRef } from "react"


export default function FrontWorks(){
    const c = classes
    const [modal, setModal] = useState(false)
    const [hide, setHide] = useState(false)
    const [data, setData] = useState({
        type: '',
        img: '',
        title: '',
        subtitle: '',
        link: ''
    })
    const m = useRef()

    const handleClick = (item) => {
        setData({
            type: item.type,
            img: item.img.src,
            title: item.title,
            subtitle: item.subtitle,
            text: item.text,
            link: item.link
        });
        setModal(true);
    }
    const handleClose = () => {
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setModal(false)
        }, 500);
    }

    return(
        <>
            {items.map(item => (
            <div target="_blank"
            data-cursor-text="View more"
            data-cursor-size="100px"
            key={item.id}
            layoutid={item.id}
            className={item.subtitle != "" ? c.card : `${c.card} ${c.empty}`}
            onClick={() => handleClick(item)}
            >
                <div className={c.inner}>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.h5>{item.subtitle}</motion.h5>
                </div>
                
                {item.img.src != null ? <img src={item.img.src} alt="" /> : <p>SOON</p>}
            </div>
            ))}

            {modal == true ? <Modal hideMe={hide} setState={setModal} onClose={handleClose} data={data} ref={m}/> : null}

        </>
    )
}