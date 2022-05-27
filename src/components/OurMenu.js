// jshint esversion:9
import { useRef } from 'react';

import { Parallax } from 'react-scroll-parallax';
import useOnScreen from '../hooks/useOnScreen';

export const OurMenu = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section className='h-screen relative grid grid-cols-6 bg-[#EEE] ' ref={ref}>
      <div className='w-44 flex flex-col items-center absolute top-20 left-0 right-0 mx-auto z-50'>
        <div className='relative text-5xl flex flex-col text-left'>
          <div className='px-2'>
            <h1 className='relative z-20'>OUR MENU</h1>
          </div>
          <span className='absolute top-[12px] z-10 left-0 h-2 w-full bg-[#FFDAC9] inline-block'></span>
        </div>
        <div className='px-2'>
          <button className='px-3 bg-[#FFDAC9] flex items-center h-6 '>
            <span className='mt-1'> KNOW MORE </span>
          </button>
        </div>
      </div>

      <div className={`border-r-[1px] border-black h-full col-span-2 pr-5 py-20 bg-[#EEE] z-40`}>
        <Parallax translateY={[200, -200]} className={`space-y-12 flex flex-col items-end  justify-center py-10 `}>
          <h1 className='text-5xl mr-12'>STARTERS</h1>
          <div className='w-40 text-left space-y-4'>
            <h1>OUNDA CROQUETTAS</h1>
            <p className='paragraph text-sm'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CHIFA CHCHARRONES</h1>
            <p className='paragraph text-sm'> Slow cooked, crispy pork belly with sweet soy sauce</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CALAMARES</h1>
            <p className='paragraph text-sm'> Crispy baby squid with pickled jalapeño miso salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>
        </Parallax>
      </div>
      <div className='border-r-[1px] border-black h-full py-10 bg-[#EEE] z-30 overflow-hidden'>
        <Parallax translateY={[-200, 200]} className={`space-y-12 flex flex-col items-end  justify-center mt-80 relative `}>
          <h1 className='text-5xl relative -left-20 text-left'>
            MAIN <br /> COURSES
          </h1>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>EL CLASSICO</h1>
            <p className='paragraph text-sm'> Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn,red onion, coriander & plantain (gf)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£8.95</span>
          </div>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>TIRADITO CALLAO</h1>
            <p className='paragraph text-sm'> Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£8.95</span>
          </div>
        </Parallax>
      </div>

      <div className='border-r-[1px] border-black h-full py-20 bg-[#EEE] z-20'>
        <Parallax translateY={[170, -170]} speed={-10} className={`space-y-12 flex flex-col items-end h-full justify-center pt-24 relative  `}>
          <h1 className='text-5xl absolute top-48 -left-2 text-left'>SIDES</h1>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>SUPER POLLO</h1>
            <p className='paragraph text-sm'> Marinated corn fed chicken pieces with rocotto salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>PATATAS FRITAS</h1>
            <p className='paragraph text-sm'> Sweet potato fries with aji rocotto mayonnaise (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£3.95</span>
          </div>
        </Parallax>
      </div>

      <div className='h-full col-span-2  bg-[#EEE] z-10 overflow-hidden'>
        <Parallax translateY={[-200, 200]} className={`space-y-12 flex py-20 flex-col items-start justify-center pt-48 relative px-5 `}>
          <h1 className='text-5xl -ml-7 text-left '>DESSERTS</h1>
          <div className='w-40 text-left space-y-4'>
            <h1>OUNDA CROQUETTAS</h1>
            <p className='paragraph text-sm'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CHIFA CHCHARRONES</h1>
            <p className='paragraph text-sm'> Slow cooked, crispy pork belly with sweet soy sauce</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CALAMARES</h1>
            <p className='paragraph text-sm'> Crispy baby squid with pickled jalapeño miso salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>
        </Parallax>
      </div>
    </section>
  );

  /* return (
    <section className='h-screen relative grid grid-cols-6  ' ref={ref}>
      <div className='w-44 flex flex-col items-center absolute top-20 left-0 right-0 mx-auto z-50'>
        <div className='relative text-5xl flex flex-col text-left'>
          <div className='px-2'>
            <h1 className='relative z-20'>OUR MENU</h1>
          </div>
          <span className='absolute top-[12px] z-10 left-0 h-2 w-full bg-[#FFDAC9] inline-block'></span>
        </div>
        <div className='px-2'>
          <button className='px-3 bg-[#FFDAC9] flex items-center h-6 '>
            <span className='mt-1'> KNOW MORE </span>
          </button>
        </div>
      </div>

      <div className={`border-r-[1px] border-black h-full col-span-2 pr-5 py-20 bg-[#EEE] z-40`}>
        <div className={`space-y-12 flex flex-col items-end h-full justify-center pt-20 slide-up ${isVisible && 'open'}`}>
          <h1 className='text-5xl mr-12'>STARTERS</h1>
          <div className='w-40 text-left space-y-4'>
            <h1>OUNDA CROQUETTAS</h1>
            <p className='paragraph text-sm'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CHIFA CHCHARRONES</h1>
            <p className='paragraph text-sm'> Slow cooked, crispy pork belly with sweet soy sauce</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CALAMARES</h1>
            <p className='paragraph text-sm'> Crispy baby squid with pickled jalapeño miso salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>
        </div>
      </div>

      <div className='border-r-[1px] border-black h-full py-20 bg-[#EEE] z-30'>
        <div className={`space-y-12 flex flex-col items-end h-full justify-center pt-80 relative slide-down ${isVisible && 'open'}`}>
          <h1 className='text-5xl absolute top-56 -left-2 text-left'>
            MAIN <br /> COURSES
          </h1>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>EL CLASSICO</h1>
            <p className='paragraph text-sm'> Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn,red onion, coriander & plantain (gf)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£8.95</span>
          </div>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>TIRADITO CALLAO</h1>
            <p className='paragraph text-sm'> Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£8.95</span>
          </div>
        </div>
      </div>

      <div className='border-r-[1px] border-black h-full py-20 bg-[#EEE] z-20'>
        <div className={`space-y-12 flex flex-col items-end h-full justify-center pt-24 relative slide-up ${isVisible && 'open'}`}>
          <h1 className='text-5xl absolute top-48 -left-2 text-left'>SIDES</h1>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>SUPER POLLO</h1>
            <p className='paragraph text-sm'> Marinated corn fed chicken pieces with rocotto salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-full text-left space-y-4 px-5'>
            <h1>PATATAS FRITAS</h1>
            <p className='paragraph text-sm'> Sweet potato fries with aji rocotto mayonnaise (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£3.95</span>
          </div>
        </div>
      </div>

      <div className='h-full col-span-2 py-20 bg-[#EEE] z-10'>
        <div className={`space-y-12 flex flex-col items-start h-full justify-center pt-28 relative px-5 slide-down ${isVisible && 'open'}`}>
          <h1 className='text-5xl absolute top-28 -left-2 text-left '>DESSERTS</h1>
          <div className='w-40 text-left space-y-4'>
            <h1>OUNDA CROQUETTAS</h1>
            <p className='paragraph text-sm'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£4.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CHIFA CHCHARRONES</h1>
            <p className='paragraph text-sm'> Slow cooked, crispy pork belly with sweet soy sauce</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>

          <div className='w-40 text-left space-y-4'>
            <h1>CALAMARES</h1>
            <p className='paragraph text-sm'> Crispy baby squid with pickled jalapeño miso salsa</p>
            <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>£6.95</span>
          </div>
        </div>
      </div>
    </section>
  ); */
};
