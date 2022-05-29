//jshint esversion:9

import mainBgImage from '../icons/pexels-trang-doan-793759.png';

export const MainSection = ({ section1 }) => {
  return (
    <section className='section-1 bg-[#FFDAC9] min-h-screen flex justify-center items-center bg-contain bg-center bg-no-repeat bg-origin-content p-16 relative' ref={section1}>
      <img src={mainBgImage} alt='Food plate' className='absolute bottom-52 left-0 right-0 mx-auto w-[50wh] h-auto rotate-90' />
      <div className='text-white bg-center relative z-50'>
        <>
          <h1 className='text-7xl tracking-wide'>THE BEST FOODIE</h1>
          <h1 className='text-[105px] -mt-8'>EXPERIENCE</h1>
        </>
        <h1 className='text-4xl -mt-10'>NOW IN LONDON</h1>
      </div>
    </section>
  );
};
