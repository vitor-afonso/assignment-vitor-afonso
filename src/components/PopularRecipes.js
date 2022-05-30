//jshint esversion:9

import { useRef, useState } from 'react';
import { RecipeCards } from './RecipeCard';

import arrowImg from '../icons/icons8-arrow-48.png';
import arrowGrayImg from '../icons/icons8-arrow-gray-48.png';

export const PopularRecipes = ({ section5 }) => {
  const [rightArrow, setRightArrow] = useState(arrowImg);
  const [leftArrow, setLeftArrow] = useState(arrowGrayImg);
  const carousel = useRef(null);

  const slideLeft = (e) => {
    e.preventDefault();

    let carouselWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft -= carouselWidth - 300;
    setRightArrow(arrowImg);

    if (carousel.current.scrollLeft !== 1392 && carousel.current.scrollLeft !== 0) {
      setLeftArrow(arrowImg);
    }

    if (carousel.current.scrollLeft === 0) {
      setLeftArrow(arrowGrayImg);
    }
  };

  const slideRight = (e) => {
    e.preventDefault();

    let carouselWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft += carouselWidth - 300;
    setLeftArrow(arrowImg);

    if (carousel.current.scrollLeft < 1392 && carousel.current.scrollLeft > 0) {
      setRightArrow(arrowGrayImg);
    }
    if (carousel.current.scrollLeft === 1392) {
      setRightArrow(arrowGrayImg);
    }
  };

  return (
    <section className=' pt-20  relative z-50 bg-[#fbfbfb] space-y-10 h-screen flex flex-col' ref={section5}>
      <div className='flex justify-between px-32'>
        <div className='w-36 '>
          <div className='relative text-5xl flex flex-col text-left'>
            <div className=''>
              <h1 className='text-3xl'>POPULAR</h1>
              <h1 className='relative z-20'>RECIPES</h1>
            </div>
            <span className='absolute top-[48px] z-10 -left-[10px] h-2 w-full bg-[#FFDAC9] inline-block'></span>
          </div>
          <div className=''>
            <button className='px-3 bg-[#FFDAC9] flex items-center h-6 '>
              <span className='mt-1'> SEE ALL </span>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-end self-end'>
          <h1 className='text-3xl'>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h1>
          <div>
            <button className='px-3 bg-[#FFDAC9] flex items-center h-6'>
              <span className='mt-1'> SEND IT NOW </span>
            </button>
          </div>
        </div>
      </div>
      <div className='pl-32 pr-4 flex overflow-hidden scroll-smooth' ref={carousel}>
        <RecipeCards />
      </div>
      <div className='self-end pr-32'>
        <button className='cursor-pointer' onClick={(e) => slideLeft(e)}>
          <img src={leftArrow} alt='Arrow left' className='rotate-180' />
        </button>
        <button className='cursor-pointer' onClick={(e) => slideRight(e)}>
          <img src={rightArrow} alt='Arrow right' />
        </button>
      </div>
    </section>
  );
};
