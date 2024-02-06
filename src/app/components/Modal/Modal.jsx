import Link from 'next/link';
import classes from './Modal.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import { motion } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';

const Modal = React.forwardRef(({ onClose, data, hideMe }, ref) => {
    const c = classes;
    const modalV = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: 0
            }
        },
        exit:{
            opacity: 0,
            transition: {
                duration: 0.2,
            }
        }
    }
    const modalInner = {
        hidden: {
            opacity: 0,
            y: -150
        },
        visible: {
            opacity: 1,
            y: 1,
            transition: {
                duration: 0.2,
                delay: 0.3
            }
        },
    }


    return createPortal(
        <motion.div className={hideMe == true ? `${c.modal} ${c.hide}` : c.modal}
            variants={modalV}
            initial="hidden"
            animate="visible"
            ref={ref}
        >
            <motion.div className={c.inner}
                variants={modalInner}
                initial="hidden"
                animate="visible"
            >
                <h2>{ data.title }</h2>
                

                { data.type === 'front' ? 
                    <div>
                        <h4>Project info:</h4>
                    {
                        data.type === 'front' ? 
                        <ul>
                            {Object.values(data.text).map((el,i) => {
                                return <li key={i}>{el}</li>
                            })}
                        </ul> : null
                        
                    }
    
                    {
                        (data.link != "" && data.type == 'front')  ? <Link target='_blank' href={data.link}>View Website</Link> : <p className={c.alert}>Website is undergoing scheduled maintenance or updates <span><GoAlertFill/></span> </p>
                    }
                    </div> :
                    null
                }

                {
                    data.type === 'design' ?
                    <img src={data.img} alt="" className={c.innerImg}/> : null
                }

                <button className={c.close} onClick={onClose}><IoIosCloseCircleOutline/></button>
            </motion.div>
        </motion.div>,
        document.querySelector(".modalSpawn")
    );
});

export default Modal;
