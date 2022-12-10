import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [ toggleBar, setToggleBar ] = useState(false);
  const handleClick = () => {
    setToggleBar(!toggleBar);
  }
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SCG.</h1>
            </div>
            <div className='hidden md:flex justify-end ml-auto right-0'>
                <ul className='flex items-center'>
                    <Link to='main' smooth={true} offset={50} duration={500}><li>Home</li></Link>
                    <Link to='running-projects' smooth={true} offset={50} duration={500}><li>Running Projects</li></Link>
                    <Link to='services' smooth={true} offset={50} duration={500}><li>Services</li></Link>
                    <Link to='about-us' smooth={true} offset={50} duration={500}><li>About Us</li></Link>
                </ul>
            </div>
            <div className='md:hidden'>
                {!toggleBar && (
                    <Bars3Icon className='w-12' onClick={handleClick}/>
                )}
                {toggleBar && (
                    <XMarkIcon className='w-12' onClick={handleClick}/>
                )}
            </div>
        </div>
        {toggleBar && (
            <div className='md:hidden'>
                <ul className='absolute bg-zinc-200 w-full px-8'>
                    <Link to='main' smooth={true} offset={50} duration={500}><li className='border-b-2 border-zinc-300 w-full'>Home</li></Link>
                    <Link to='running-projects' smooth={true} offset={50} duration={500}><li className='border-b-2 border-zinc-300 w-full'>Running Projects</li></Link>
                    <Link to='services' smooth={true} offset={50} duration={500}><li className='border-b-2 border-zinc-300 w-full'>Services</li></Link>
                    <Link to='about-us' smooth={true} offset={50} duration={500}><li className='border-b-2 border-zinc-300 w-full'>About Us</li></Link>
                </ul>
            </div>
        )}
    </div>
  )
};

export default Navbar;

