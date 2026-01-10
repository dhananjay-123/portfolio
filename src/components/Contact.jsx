import React from 'react'

function Contact() {
  return (
    <div className='bg-bg-primary  px-7 sm:px-24 lg:px-40 '>
        <div className='flex flex-col gap-20 h-[60vh]'>
          <h1 className='text-text-muted text-5xl'>Let's <span className='text-text-primary text-5xl'>Connect</span></h1>
        <div className='text-text-muted text-3xl'>Let's build something cool together</div>
        
        </div>
        <div className='flex lg:flex-row flex-col text-text-primary text-4xl py-10 items-center'>
          <div className=' py-5 w-full flex justify-center bg-bg-tertiary'><a href="">Connect on LinkedIn</a></div>
          <div className='py-5 w-full flex bg-bg-tertiary justify-center'><a href="">Send an Email</a></div>
          <div className='py-5 w-full flex justify-center bg-bg-tertiary'><a href="">Follow on Instagram</a></div>
        </div>
    </div>
  )
}

export default Contact