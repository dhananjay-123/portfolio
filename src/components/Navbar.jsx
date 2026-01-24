import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NavLinks } from '../constants'
import ProgressBar from './ProgressBar/ProgressBar'
import ThemeToggle from './ThemeToggle'

import Parallax from './Parallax/Parallax'
//hello

const Navbar = () => {
  const DURATION = 0.25
  const STAGGER = 0.025

  const [active, setActive] = useState(" ")

  return (

    <div className='h-full w-full overflow-hidden flex justify-center' >
    <nav className="flex pt-5 pb-5 px-4 sm:px-10 lg:px-40 fixed bg-bg-primary w-full z-60 justify-between mx-auto items-center ">

      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}
        className="text-text-primary hover:text-text-muted flex font-[Inter]"
      >
        Dhananjay&nbsp;<span className='sm:block hidden'> Agrawal</span>
      </Link>

      {/* Horizontal Progress Bar */}
      <div className='flex-1 mx-10'>
        <ProgressBar />
      </div>

      {/* Nav Links */}
      <ul className='flex text-text-primary gap-10 list-none items-center h-10 overflow-hidden uppercase font-mono font-bold'>
        {NavLinks.map((LinkItem, index) => {
          const isContact = LinkItem.title.toLowerCase() === "contact"

          return (
            <li
              key={LinkItem.id}
              onClick={() => setActive(LinkItem.title)}
              className={`${active === LinkItem.title ? "text-text-secondary" : "text-text-primary"} cursor-pointer items-center justify-center relative flex`}
            >

              {/* Mobile: only Contact */}
              {isContact && (
                <motion.a
                  initial="initial"
                  whileHover="hovered"
                  href={`#${LinkItem.id}`}
                  className="sm:hidden block relative h-6"
                >
                  <div className='flex'>
                    {LinkItem.title.split("").map((l,i) => (
                      <motion.span
                        key={i}
                        className='inline-block'
                        variants={{ initial: { y: "0%" }, hovered: { y: "-120%" } }}
                        transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER*i }}
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    {LinkItem.title.split("").map((l,i) => (
                      <motion.span
                        key={i}
                        className='inline-block'
                        variants={{ initial: { y: "120%" }, hovered: { y: "0%" } }}
                        transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER*i }}
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                </motion.a>
              )}

              {/* Desktop / Tablet: all links */}
              <motion.a
                initial="initial"
                whileHover="hovered"
                href={`#${LinkItem.id}`}
                className="sm:block hidden hover:text-text-muted relative overflow-hidden h-6"
              >
                <div className='flex'>
                  {LinkItem.title.split("").map((l,i) => (
                    <motion.span
                      key={i}
                      className='inline-block'
                      variants={{ initial: { y: "0%" }, hovered: { y: "-120%" } }}
                      transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER*i }}
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  {LinkItem.title.split("").map((l,i) => (
                    <motion.span
                      key={i}
                      className='inline-block'
                      variants={{ initial: { y: "120%" }, hovered: { y: "0%" } }}
                      transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER*i }}
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
              </motion.a>

            </li>
          )
        })}
      </ul>

      {/* Theme Toggle */}
      <div className="ml-5">
        <ThemeToggle />
      </div>

    </nav>

        <Parallax />
    </div>
  )
}

export default Navbar
