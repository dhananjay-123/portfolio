import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom';
import { NavLinks } from '../constants';
import ProgressBar from './ProgressBar/ProgressBar';

const Navbar = () => {

  const DURATION=0.25;
  const STAGGER = 0.025;

  const [active, setActive] = useState(" ")

  return (
    <nav className="flex pt-5 px-5 sm:px-10 lg:px-40 fixed bg-bg-primary w-full justify-between mx-auto items-center">


      <Link to="/"
        onClick={() => setActive("")}
        className="text-text-primary hover:text-text-muted flex">Dhananjay&nbsp;<span className='sm:block hidden'> Agrawal</span></Link>

      <div className='flex-1 mx-10'><ProgressBar /></div>
      

        <ul className='flex text-text-primary gap-10 list-none items-center h-10  overflow-hidden'>
          {
            NavLinks.map((Link, index) => (
              <li key={Link.id}
                onClick={() => setActive(Link.title)}
                className={
                  `${active === Link.title ? "text-text-secondary" : "text-text-primary"} cursor-pointer  items-center justify-center relative flex`
                }
              >


                <motion.a
                  initial="initial"
                  whileHover="hovered"
                  href={`#${Link.id}`}
                  className={`sm:hidden block ${index === 2 ? "" : "hidden"} relative h-6 overflow-hidden `}

                >
                  <div
                className='flex'>
                    {Link.title.split("").map((l,i) => {
                      return <motion.span
                      className='inline-block' 
                       variants={{
                    initial: { y: "0%" },
                    hovered: { y: "-120%" }
                  }}
                  transition={{
                    duration:DURATION,
                    ease:"easeInOut",
                    delay:STAGGER*i,
                  }}
                      
                      key={i}>{l}</motion.span>
                    })}
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center'> 
                   {Link.title.split("").map((l,i) => {
                      return <motion.span 
                      transition={{
                    duration:DURATION,
                    ease:"easeInOut",
                    delay:STAGGER*i,
                  }}
                      className='inline-block'
                      variants={{
                      initial: { y: "120%" },
                      hovered: { y: "0%" }
                    }}

                      key={i}>{l}</motion.span>
                    })}
                  </div>


                </motion.a>

                <motion.a
                  
                  initial="initial"
                  whileHover="hovered"
                  href={`#${Link.id}`}
                  className={`sm:block hidden hover:text-text-muted relative overflow-hidden h-6`}
                  

                ><div
                className='flex'>
                    {Link.title.split("").map((l,i) => {
                      return <motion.span
                      className='inline-block' 
                       variants={{
                    initial: { y: "0%" },
                    hovered: { y: "-120%" }
                  }}
                  transition={{
                    duration:DURATION,
                    ease:"easeInOut",
                    delay:STAGGER*i,
                  }}
                      
                      key={i}>{l}</motion.span>
                    })}
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center'> 
                   {Link.title.split("").map((l,i) => {
                      return <motion.span 
                      transition={{
                    duration:DURATION,
                    ease:"easeInOut",
                    delay:STAGGER*i,
                  }}
                      className='inline-block'
                      variants={{
                      initial: { y: "120%" },
                      hovered: { y: "0%" }
                    }}

                      key={i}>{l}</motion.span>
                    })}
                  </div>


                </motion.a>



              </li>
            ))
          }
        </ul>



      
    </nav>
  );

}

export default Navbar