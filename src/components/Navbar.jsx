import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { NavLinks } from '../constants';
import ProgressBar from './ProgressBar/ProgressBar';

const Navbar = () => {

  const [active, setActive] = useState(" ")

  return (
    <nav className="flex pt-5 px-5 sm:px-10 lg:px-40 fixed bg-bg-primary w-full justify-around mx-auto items-center">


      <Link to="/"
        onClick={() => setActive("")}
        className="text-text-primary hover:text-text-muted flex">Dhananjay&nbsp;<span className='sm:block hidden'> Agrawal</span></Link>

      <div className='w-full mx-10'><ProgressBar /></div>
      <div className='flex space-x-10 '>

        <ul className='flex text-text-primary gap-10 list-none'>
          {
            NavLinks.map((Link, index) => (
              <li key={Link.id}
                onClick={() => setActive(Link.title)}
                className={
                  `${active === Link.title ? "text-text-secondary" : "text-text-primary"} cursor-pointer hover:text-text-muted`
                }
              >


                <a href={`#${Link.id}`}
                  className={`sm:hidden block ${index === 2 ? "" : "hidden"} `}

                >{Link.title}</a>

                <a href={`#${Link.id}`}
                  className={`sm:block hidden`}

                >{Link.title}</a>



              </li>
            ))
          }
        </ul>



      </div>
    </nav>
  );

}

export default Navbar