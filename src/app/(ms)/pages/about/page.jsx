'use client'

import { IoLogoWordpress, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoJavascript, BiLogoJquery, IoLogoNodejs, IoLogoNpm, IoLogoReact, IoLogoVue,  } from "react-icons/io5";
import { SiAdobephotoshop, SiAdobeillustrator, SiUbuntu, SiManjaro } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { motion } from "framer-motion"
import classes from './about.module.css'
import TransitionBlock from "@/app/components/TransitionBlock"
import WhatIDid from "@/app/components/AboutPage/WhatIDid/WhatIDid"
import TimeCard from "@/app/components/AboutPage/TimeCard/TimeCard";
import Link from "next/link";
import { data } from './data.js'
import Divider from "@/app/components/Divider/Divider";

export default function About(){
    const c = classes
    const title = "About me"
    
    
    const anims = {
        title: {
            hidden: {opacity: 0, scale: 0.9 },
            visible: {opacity: 1, scale: 1, transition: {duration: 0.7, delay: 1}},
            exit: {opacity: 0}
        },
        subtitle: {
            hidden: {opacity: 0, scaleX: 0.8 },
            visible: {opacity: 0.1, scaleX: 1, transition: {duration: 0.7, delay: 1.5}},
            exit: {opacity: 0}
        },
        skillsTitle : {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7, delay: 2.5 }}
        },
        info: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: {duration: 0.8, delay: 2.5 }},
        },
        stats: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: {duration: 0.8, delay: 2.5 }},
        },
    }

    const variants = {
        hidden: { opacity: 0 },
        show: (i) => ({
          opacity: 1,
          transition: {
            delay: 2.5 + i * 0.1,
            duration: i * 0.1
          },
        }),
      };
    
    const icons = [IoLogoHtml5, IoLogoCss3, IoLogoJavascript, SiAdobephotoshop, SiAdobeillustrator, IoLogoWordpress, IoLogoSass, DiJqueryLogo, IoLogoNodejs, IoLogoNpm, IoLogoReact, IoLogoVue, FaFigma, SiUbuntu, SiManjaro]

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

                        <div className={c.info}>
                            <motion.div className={c.personal}
                            variants={anims.info}
                            initial="hidden"
                            animate="visible"
                            >
                                <h3>Personal infos:</h3>

                                <div className={c.compositions}>
                                    <h4>Firstname: <span>Anwar</span></h4>
                                    <h4>Surname: <span>Kuldashev</span></h4>
                                    <h4>Age: <span>26</span></h4>
                                    <h4>Freelance: <span className={c.greenText}>Available</span></h4>
                                    <h4>Address: <span>Uzbekistan</span></h4>
                                    <h4>Languages: <span>Rus, Eng, Kor</span></h4>
                                    <h4>Email: <span className={c.link} data-cursor-text="Write me" data-cursor-size="100px"><Link href="mailto:hicchancom@gmail.com">Contact me</Link></span></h4>
                                    <h4>Telegram: <span className={c.link} data-cursor-text="Write me" data-cursor-size="100px"><Link href="https://t.me/heechanwan">Contact me</Link></span></h4>
                                </div>
                            </motion.div>

                            <motion.div className={c.whatIDid}
                            variants={anims.stats}
                            initial="hidden"
                            animate="visible"
                            >
                                <WhatIDid title={"10"} subtitle="Years of experience"/>
                                <WhatIDid title={"15"} subtitle="Completed projects"/>
                                <WhatIDid title={"20"} subtitle="Trained students"/>
                                <WhatIDid title={"40"} subtitle="Complex algorithms created"/>
                            </motion.div>
                        </div>

                        <Divider del={1.2}/>

                        <div className={c.stacks}>

                            <motion.h3 className={c.centeredTitle}
                            variants={anims.skillsTitle}
                            initial="hidden"
                            animate="visible"
                            >My skills</motion.h3>

                            <div className={c.stacksInner}>
                            {icons.map((Icon, i) => (
                                <motion.div
                                key={i}
                                custom={i}
                                variants={variants}
                                initial="hidden"
                                animate="show"
                                >
                                <Icon />
                                </motion.div>
                            ))}
                            </div>
                        </div>

                        <Divider/>

                        <div className={c.timeline}>
                            <h3 className={c.centeredTitle}>EXPERIENCE</h3>
                            <motion.div className={c.experience}>
                            {
                                data.map((el, index) =>(
                                    <TimeCard key={index} timeLine={el.timeLine} title={el.title} text={el.text} />
                                ))
                            }
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <TransitionBlock/>
        </>
    )
}