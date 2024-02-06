'use client'

import FrontWorks from "@/app/components/MyWorks/frontWorks"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import classes from './myWorks.module.css'
import TransitionBlock from "@/app/components/TransitionBlock"
import DesignWorks from "@/app/components/DesignWorks/DesignWorks"

export default function MyWorks(){
    const c = classes
    const title = "MY WORKS"

    const [tab, setTab] = useState('front')

    const container = {
        hidden: { opacity: 0, x: 120},
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.7,
          }
        },
        exit:{
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.5,
              }
        }
    }  
    
    const anims = {
        title: {
            hidden: {opacity: 0, scale: 0.9 },
            visible: {opacity: 1, scale: 1, transition: {duration: 1.2, delay: 1.2}},
            exit: {opacity: 0}
        },
        subtitle: {
            hidden: {opacity: 0, scaleX: 0.8 },
            visible: {opacity: 0.1, scaleX: 1, transition: {duration: 1.2, delay: 2}},
            exit: {opacity: 0}
        },
    }

    return(
        <>
            <section className={c.mainSection}>
                <div className="container">
                    <div className={c.inner}>
                    <h1>
                        <motion.span className={c.title}
                        variants={anims.title}
                        initial='hidden'
                        animate='visible'
                        >{title}</motion.span>
                        <motion.span className={`${c.title} ${c.subTitle}`}
                        variants={anims.subtitle}
                        initial='hidden'
                        animate='visible'
                        >{title}</motion.span>
                    </h1>
                        <div className={c.tabs}>
                            <ul>
                                <li data-cursor-text="View more" data-cursor-size="100px" onClick={() => setTab("front")} className={tab == 'front' ? c.active : "list"}>Front-end</li>
                                <li data-cursor-text="View more" data-cursor-size="100px" onClick={() => setTab("design")} className={tab == 'design' ? c.active : "list"}>UX/UI</li>
                            </ul>
                        </div>
                        <div className={c.tabContent}>
                            <AnimatePresence>
                                    {tab == 'front' ? <motion.div
                                    key={tab}
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={c.gridCards}
                                    id="gridCards"
                                    >
                                        <FrontWorks/>
                                    </motion.div> : null}
                                    {tab == 'design' ? <motion.div
                                    key={tab}
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={c.gridCards}
                                    id="gridCards"
                                    >
                                        <DesignWorks/>
                                    </motion.div> : null}
                                
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            <TransitionBlock/>
        </>
    )
}
