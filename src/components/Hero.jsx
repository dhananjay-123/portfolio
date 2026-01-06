import React from 'react'
import {logo,hero} from '../assets'

function Hero() {
  return (
    <div className='w-full bg-bg-primary justify-center p-10'>
      <div className='w-full flex p-8'>
        <img src={logo} alt="" className='w-17 h-17 bg-white'  />
        <div className='text-text-primary pl-8'>
          Hi, I'm Dhananjay , designing <br /> products developing and <br /> always learning something new.
        </div>
      
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
      <div>
        <img src={hero} alt="hero" className='w-full h-50' />
        <div className='text-text-primary text-5xl lg:text-7xl'>Frontend <span className='text-text-muted'>Web</span> Developer</div>
      </div>
    </div>
    
  )
}

export default Hero