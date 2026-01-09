import React, { useRef } from 'react'
import { workExperience } from '../constants'
import {useScroll,useTransform,motion,useSpring} from 'framer-motion'

function Work() {

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start start", "end end"],
})

  const smoothScroll = useSpring(scrollYProgress, {
  stiffness: 80,
  damping: 20,
  mass: 0.6,
})

  

  const sectionHeight = 200 + workExperience.length * 280
  const stickyOffset = 80 / sectionHeight

  const cardTimeline = workExperience.map((_,i)=>{
    const start = 200 + i*280
    const end = 200 + (i+1)*280 

    return[start,end]
    
  })
  const timeline=[[0,150],...cardTimeline]

  const animation = timeline.map(([start, end],index) => {
    if (index === timeline.length - 1) {
    return {
      scale: 1,
      opacity: 1,
    }
  }

  const startP = start / sectionHeight + stickyOffset
  const endP   = end   / sectionHeight + stickyOffset

  return {
    scale: useTransform(
      smoothScroll,
      [startP, endP],
      [1, 0.8]
    ),
    opacity: useTransform(
  smoothScroll,
  [startP, endP, endP + 0.05],
  [1, 0.4, 0]
)
,
  }
})


  return(
    <div ref={targetRef} className='w-full pt-1 bg-bg-primary justify-center px-7 sm:px-24 lg:px-40 relative pb-[18px] '>
      <motion.div 
      style={{scale:animation[0].scale , opacity:animation[0].opacity}}
      className='text-text-primary text-5xl sticky top-20 lg:text-7xl overflow-clip items-center uppercase h-[200px] z-10 flex  justify-center'>
        <h1 className='w-full h-max'>My Past <br />
        <span className='ml-20 lg:ml-52'>Experiences</span>
        </h1>
      </motion.div>
      <div>
        {
          workExperience.map((item,index) => {
             return (<motion.div
             style={{scale:animation[index+1].scale,opacity:animation[index+1].opacity}}
             className='z-1 w-full h-70 mb-30 justify-center bg-bg-tertiary rounded-4xl sticky top-20' key={index}>

              <h1 className='justify-center text-accent-success flex bg-bg-secondary text-4xl pb-4 rounded-4xl'>{item.position}</h1>
              <img 
              className=' object-cover h-full w-full'
              src={item.img} alt="" />
             </motion.div>)
          })
        }
      </div>
    </div>
    
  )
}

export default Work