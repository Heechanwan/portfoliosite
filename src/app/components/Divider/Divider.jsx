import { motion } from "framer-motion";
import './Divider.css'

export default function Divider({ del = 0 }) {
 
    const dotted = {
        hidden: {width: 0, opacity: 1},
        visible: {width: 100 +'vw', opacity: 0.3, transition: { delay: del, duration: 1 }}
    }
 
    return (
        <motion.div className="dotted"
        variants={dotted}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        />
    );
}