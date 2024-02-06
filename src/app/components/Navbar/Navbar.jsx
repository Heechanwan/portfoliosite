'use client'

import './Navbar.css'
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function Navbar(){
    const pathname = usePathname();
    const liVariants = {
        v1: {
            hidden: { x: '20vh'},
            visible: { x: '0vh', transition: { duration: 0.3 } }
        },
        v2: {
            hidden: { x: '20vh'},
            visible: { x: '0vh', transition: { duration: 0.3, delay: 0.1 } }
        },
        v3: {
            hidden: { x: '20vh'},
            visible: { x: '0vh', transition: { duration: 0.3, delay: 0.2 } }
        },
    }
    return(
        <nav className='flex center-center'>
            <ul>
                <motion.li  variants={liVariants.v1} initial="hidden" animate="visible" className={pathname == '/' ? `li active` : 'li'}>
                <Link href='/' data-cursor-text="Home page" data-cursor-size="100px"><p data-cursor-color="#000000" id="stick-title">Main page</p><FaHome className='center-center'/></Link>
                </motion.li>
                <motion.li  variants={liVariants.v2} initial="hidden" animate="visible" className={pathname == '/pages/about' ? `li active` : 'li'}>
                <Link href='/pages/about' data-cursor-text="About me" data-cursor-size="100px"><p data-cursor-color="#000000" id="stick-title">About me</p><FaUser className='center-center'/></Link>
                </motion.li>
                <motion.li  variants={liVariants.v3} initial="hidden" animate="visible" className={pathname == '/pages/my-works' ? `li active` : 'li'}>
                <Link href='/pages/my-works' data-cursor-text="Porfolio" data-cursor-size="100px"><p data-cursor-color="#000000" id="stick-title">My works</p><FaBriefcase className='center-center'/></Link>
                </motion.li>
            </ul>
        </nav>
    )
}
