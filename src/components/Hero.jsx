import React,{useRef} from 'react'
import {logo,hero} from '../assets'
import {motion , useScroll} from 'framer-motion'
import { Description } from '../constants'
import AnimatedText from './TextVariations/AnimatedText'
import Paragraph from './TextVariations/Paragraph'

function Hero() {
  return (
    <div className='w-full bg-bg-primary justify-center p-10 sm:px-33 lg:px-40 '>
      <div className='w-full flex px-7 py-15'>
        <motion.img src={logo} alt="" className='w-17 h-17 bg-white'
        initial={{width:0}}
        animate={{width:"68px"}}
        transition={{
          duration:2,ease:"easeInOut"
        }}
        
        />
        <AnimatedText
  className="text-text-primary pl-8 text-lg sm:text-xl lg:text-xl"
  text={`Hi, I'm Dhananjay, designing
products developing and
always learning something new`}
/>
      
      </div>
      <div className='pl-5 pr-5'>
        <img src={hero} alt="hero" className='w-full h-50' />
        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>

      <div className='text-accent-success pt-7 flex flex-col lg:flex-row gap-y-3 lg:items-center justify-center'>
        <div className=''>OPEN TO WORK</div>
        <div className='w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500'></div>
        <div className='text-text-muted'>Gwalior , india</div>
        <div className='w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500'></div>
        <div className='text-text-muted'>IST (UTC+05:30)</div>
      </div>
       <div>
        
       <Paragraph 
       value={Description} />
      </div>
       <div>
        <img src={hero} alt="hero" className='w-full h-50' />
        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>
      <div>
        <img src={hero} alt="hero" className='w-full h-50' />
        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>
      <div>
        <img src={hero} alt="hero" className='w-full h-50' />
        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>
    </div>
    
  )
}

export default Hero