import { motion } from "framer-motion"

export default function TransitionBlock(){
    const variants = {
        overlay:{
            hidden: {opacity: 1},
            visible: {opacity: 0, zIndex: -1, transition: { duration: 0.3, delay: 0.3 }}
        }
    }

    return(
        <motion.div
            className='slideBlock'
            variants={variants.overlay}
            initial="hidden"
            animate="visible"
        ></motion.div>
    )
}