import React from 'react'
import Cards from "./Cards"
import styles from "./motion/styleDes"
import {motion} from "framer-motion"
import { fadeIn} from './motion/motion'

const Landing = () => {
  return (
    <div  className="bg-[#0d1117]">
    <div className="relative">
    <div className='h-[100vh] w-full relative'>
        <div className='flex flex-col justify-center items-center absolute top-0 w-[inherit] h-[inherit] bg-gradient-to-b from-[rgba(36,42,46,0.8)] to-[rgba(36,42,46,0.8)]'>
            <motion.div variants={fadeIn("up","easeInOut",0.2,1)} initial={{display:"hidden",y:"5vh"}} whileInView={{display:"show",y:"-5vh"}} className='flex justify-center items-center'>
            <div className={`${styles.heroCText}`}></div>
              <h1 className={`${styles.heroHeading}`}>RBAN</h1>
            </motion.div>
            <motion.h1 className={`${styles.heroHeading}`} variants={fadeIn("down","easeInOut",0.2,1)} initial={{display:"hidden",y:"-5vh"}} whileInView={{display:"show",y:"5vh"}}>Glide</motion.h1>
        </div>
        <img src={"./src/assets/image.png"} className='h-[100vh] w-full'  />
    </div>
    <Cards />
  </div>
  </div>
  )

}

export default Landing