import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { SiC } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { TbSql } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiStreamlit } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(3)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiCss3 className='text-7xl text-blue-400'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiHtml5 className='text-7xl text-red-500'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(7)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiC className='text-7xl text-sky-700'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(5.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiCplusplus className='text-7xl text-blue-700'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(8)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiPython className='text-7xl text-yellow-300'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiJavascript className='text-7xl text-yellow-600'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiJava className='text-7xl text-orange-400'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-7xl text-green-500'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(9)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <TbSql className='text-7xl text-blue-400'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(3.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className='text-7xl text-green-500'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(5.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiStreamlit className='text-7xl text-red-500'/>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
