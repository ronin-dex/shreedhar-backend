import React, { useState, useEffect, useRef } from 'react'


const Projects = () => {

  const carouselImages = [
    "/project/image1.jpg",
    "/project/image2.jpg",
    "/project/image3.jpg"
  ];

  const [ imageIndex, setImageIndex ] = useState(0);
  let count = 0;

  const handleNextClick = () => {
    count = (count + 1) % carouselImages.length;
    setImageIndex(count);
    // imageIndex = nextIndex;
  }

  const handlePrevClick = () => {
    count = ( carouselImages.length - 1 + imageIndex ) % carouselImages.length;
    setImageIndex(count);
  }

  const setSlider = () => {
    setInterval(() => {
        handleNextClick();
    }, 3000);
  }
  useEffect(() => {
    setSlider();
  }, []);


  return (
    <div name = "running-projects" className='w-full md:h-screen bg-zinc-200 flex flex-col justify-between h-auto'>
        <div className='justify-center flex'>
            <h1 className='text-2xl'>Running Projects</h1>
        </div>
        <div className='select-none relative justify-between items-center flex'>
            <div className=''>
                <img className='' src={carouselImages[imageIndex]} alt="" />
            </div>
            <div className='absolute w-full top-1/2 transform translate-y-1/2 px-2 flex justify-between items-center'>
                <button
                    onClick={handlePrevClick}
                >Previous</button>
                <button
                    onClick={handleNextClick}
                >Next</button>
            </div>
        </div>
    </div>
  )
};

export default Projects;
