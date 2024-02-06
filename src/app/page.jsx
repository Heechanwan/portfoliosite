'use client'

import classes from './Styles/HomeTab.module.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Button from './components/Button/Button'
import { FaArrowRight } from 'react-icons/fa'
import TransitionBlock from './components/TransitionBlock'
import { GiBatMask } from "react-icons/gi";
import { useEffect, useState } from 'react'

import img from '../img/full.png'

const Home = () => {
    const c = classes

    const variants = {
        mainSection: {
            hidden: { y: '20vh', opacity: 0},
            visible: { y: '0vh', opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
        },
        yellowLineVariants: {
            hidden: { x: '-70vh'},
            visible: { x: '0', transition: { duration: 0.7, delay:  1.6} },
        },
        titlesVariants: {
            hidden: { y: '10vh', opacity: 0},
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.2} }
        }, 
        buttonVariants: {
            hidden: {  opacity: 0},
            visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 2} }
        },
        photoVariants: {
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: { duration: 1, delay: 0.8 }}
        },
    }

    const [batman, setBatman] = useState(false)

    function handleClick(e){
        setBatman((prev) => !prev)
        console.log(batman)
    }


    return (
        <>
        
            <section className={`${c.home} mainSection`}>

                <div className='container'>
                    <div className={c.inner}>
                        <motion.div className={c.photoSide}
                        variants={variants.photoVariants}
                        initial="hidden"
                        animate="visible"
                        >
                            <img src={img.src} className={c.fade}/>
                        </motion.div>
                        <motion.div className={c.infoSide}
                        variants={variants.titlesVariants}
                        initial="hidden"
                        animate="visible"
                        >
                            <div className={c.textInner}>
                                <h1 className={c.title}>
                                    <strong>{batman == false ? <span>I'm Anwar</span> : <span>I'M BAT<GiBatMask/>AN</span>}</strong>
                                </h1>
                                {batman == false ? <h2 className={c.subTitle}>
                                    <TypeAnimation
                                    preRenderFirstString={true}
                                    sequence={[
                                    500,
                                    'Front-end developer',
                                    2000,
                                    'UX/UI Designer',
                                    2000,
                                    'A lover of innovation',
                                    3000,
                                    ]}
                                    speed={60}
                                    repeat={Infinity}
                                    /> 
                                </h2> : null}
                                
                                {batman == true ? <h2 className={c.subTitle}>
                                <TypeAnimation
                                    preRenderFirstString={true}
                                    sequence={[
                                    500,
                                    'I am justice',
                                    2000,
                                    'I am BATMAAAAN',
                                    3000,
                                    ]}
                                    speed={60}
                                    repeat={Infinity}
                                    />
                                </h2> : null}

                                <h2 className={c.subTitleWhite}>
                                    Welcome to my <span>website</span>
                                </h2>
                                
                                {/* <motion.div 
                                variants={variants.buttonVariants}
                                initial="hidden"
                                animate="visible" data-cursor-size="100px" data-cursor-text="Click me!">
                                    <Button><span>More about me</span> <span className={c.svgSpan}><FaArrowRight/></span></Button>
                                </motion.div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className={c.yellowLine}
                    variants={variants.yellowLineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className={c.yellowInner}>
                        <GiBatMask onClick={() => setBatman(!batman)}/>
                    </div>
                </motion.div>
            </section>

            <TransitionBlock/>
        </>
    )
}


export default Home