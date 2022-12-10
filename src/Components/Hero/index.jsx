import React from 'react'


import bgImage from '../../assets/image.jpg';

const Hero = () => {
  return (
    <div className='w-full md:h-screen bg-zinc-200 flex flex-col justify-between h-auto' name="main">
        <div className='grid my-20 md:my-auto md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Architectural Planning & Construction</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Complete Building Solution</h1>
                <p className='text-2xl'>Shreedhar Consulting Group</p>
                <button className='py-3 px-8 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div className='block'>
                <img className='w-full block' src={bgImage} alt="/" />
            </div>
        </div>
    </div>
  )
};

export default Hero;
