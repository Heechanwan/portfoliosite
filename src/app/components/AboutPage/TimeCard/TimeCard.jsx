import classes from './TimeCard.module.css'
import { motion } from 'framer-motion';
import { IoBriefcase } from "react-icons/io5";

export default function TimeCard({ timeLine, title, text }) {

    const c = classes
    const variants = {
      hidden: {opacity: 0},
      visible: {opacity: 1, transition:{duration: 0.8}}
    }

 return (
   <motion.div
   className={c.card}
   variants={variants}
   initial="hidden"
   whileInView="visible"
   viewport={{once: true}}
   >
        <div className={c.icon}><IoBriefcase /></div>

        <div className={c.inner}>
            <p className={c.timeLine}>{ timeLine }</p>
            <h3 className={c.title}>{ title }</h3>
            <p className={c.text}>{ text }</p>
        </div>
   </motion.div>
 );
}