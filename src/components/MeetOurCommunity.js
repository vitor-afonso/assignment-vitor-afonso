//jshint esversion:9

import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import instaImg from '../icons/icons8-instagram-50.png';
import likeIcon from '../icons/icons8-heart-30.png';
import commentIcon from '../icons/icons8-topic-48.png';

export const MeetOurCommunity = ({ section2 }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div ref={section2}>
      <section className={`grid grid-cols-4 gap-y-4 px-32 py-20 bg-[#fbfbfb] relative z-50`} ref={ref}>
        <div></div>
        <div className='section-2-row-1-right w-48'>
          <div className='relative text-5xl flex flex-col text-left'>
            <div className='px-2'>
              <h1>MEET OUR</h1>
              <h1 className='relative z-20'>COMMUNITY</h1>
            </div>
            <span className='absolute top-[60px] z-10 left-0 h-2 w-full bg-[#FFDAC9] inline-block'></span>
          </div>
          <div className='px-2'>
            <button className='px-3 bg-[#FFDAC9] flex items-center h-6 '>
              <span className='mt-1'> KNOW MORE </span>
            </button>
          </div>
          <div className='px-2 text-left w-[150px] py-6'>
            <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
          </div>
        </div>
        <div className={`h-full flex items-end slideIn ${isVisible && 'open'} `}>
          <div className='relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2 ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
            <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
          </div>
        </div>
        <div className={`h-full flex items-end slideIn ${isVisible && 'open'}`}>
          <div className='relative h-52 w-52 bg-white p-4 flex flex-col justify-between'>
            <div>
              <h1 className='text-xl text-left'>@buzzfeedfood</h1>
              <p className='text-left text-sm mt-1 paragraph'>
                It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮 . Find the recipe from the link in our bio! 📸 : @taylormillerphoto
              </p>
            </div>
            <div className='text-right flex justify-end items-start h-5 space-x-1'>
              <img src={commentIcon} alt='like' style={{ width: '15px', height: '15px' }} /> <span className='text-sm'>152</span>
              <img src={likeIcon} alt='like' style={{ width: '15px', height: '15px' }} />
              <span className='text-sm'>18.2K</span>
            </div>
          </div>
        </div>

        <div className={`h-52 w-52 bg-white p-4 flex flex-col justify-between slideIn-2nd ${isVisible && 'open'}`}>
          <div>
            <h1 className='text-xl text-left'>@love_food</h1>
            <p className='text-left text-sm mt-1 paragraph'>
              Waffle sticks in Copenhagen! 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷 : @foodwithmichel] #lovefood
            </p>
          </div>
          <div className='text-right flex justify-end items-start h-5 space-x-1'>
            <img src={commentIcon} alt='like' style={{ width: '15px', height: '15px' }} /> <span className='text-sm'>152</span>
            <img src={likeIcon} alt='like' style={{ width: '15px', height: '15px' }} />
            <span className='text-sm'>18.2K</span>
          </div>
        </div>
        <div
          className={`relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2 slideIn-2nd ${isVisible && 'open'}`}
          style={{ backgroundImage: "url('../../pexels-any-lane-5945769.jpg')" }}
        >
          <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
        </div>

        <div></div>
        <div></div>

        <div className={`h-52 w-52 p-4 flex items-center slideIn-3rd ${isVisible && 'open'}`}>
          <p className='text-left text-sm paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
        </div>

        <div></div>

        <div className={`h-52 w-52 bg-white p-4 flex flex-col justify-between slideIn-3rd ${isVisible && 'open'}`}>
          <div>
            <h1 className='text-xl text-left'>@buzzfeedfood</h1>
            <p className='text-left text-sm mt-1 paragraph'>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
          </div>
          <div className='text-right flex justify-end items-start h-5 space-x-1'>
            <img src={commentIcon} alt='like' style={{ width: '15px', height: '15px' }} /> <span className='text-sm'>152</span>
            <img src={likeIcon} alt='like' style={{ width: '15px', height: '15px' }} />
            <span className='text-sm'>18.2K</span>
          </div>
        </div>

        <div
          className={`relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2  slideIn-3rd ${isVisible && 'open'}`}
          style={{ backgroundImage: "url('../../pexels-ahcène-brioua-10364194.jpg')" }}
        >
          <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
        </div>
      </section>
    </div>
  );
};
