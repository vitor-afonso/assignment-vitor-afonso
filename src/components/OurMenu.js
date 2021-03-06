// jshint esversion:9
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

export const OurMenu = ({ section4 }) => {
  const [recipes, setRecipes] = useState([]);
  const [starters, setStarters] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [sides, setSides] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(`https://studiographene-exercise-api.herokuapp.com/foods`);
        setRecipes(response.data);
        setStarters(response.data.filter((recipe) => recipe.type === 'starters'));
        setMainCourses(response.data.filter((recipe) => recipe.type === 'main_courses'));
        setSides(response.data.filter((recipe) => recipe.type === 'sides'));
        setDesserts(response.data.filter((recipe) => recipe.type === 'desserts'));
      } catch (error) {
        console.log('Something went wrong while trying to get recipes.');
      }
    })();
  }, []);

  return (
    <section className='h-screen relative grid grid-cols-6 bg-[#EEE]' ref={section4}>
      {recipes ? (
        <>
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
              {starters.map((starter) => {
                return (
                  <div className='w-40 text-left space-y-4' key={starter.id}>
                    <h1 className='uppercase'>{starter.title}</h1>
                    <p className='paragraph text-sm'>{starter.description}</p>
                    <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>{starter.price}</span>
                  </div>
                );
              })}
            </Parallax>
          </div>

          <div className='border-r-[1px] border-black h-full pb-10 bg-[#EEE] z-30 overflow-hidden'>
            <Parallax translateY={[-200, 200]} className={`space-y-12 flex flex-col items-end  justify-center pt-60 relative `}>
              <h1 className='text-5xl absolute top-40 -left-2 text-left'>
                MAIN <br /> COURSES
              </h1>
              {mainCourses.map((mainCourse) => {
                return (
                  <div className='w-full text-left space-y-4 px-5' key={mainCourse.id}>
                    <h1 className='uppercase'>{mainCourse.title}</h1>
                    <p className='paragraph text-sm'> {mainCourse.description}</p>
                    <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>{mainCourse.price}</span>
                  </div>
                );
              })}
            </Parallax>
          </div>

          <div className='border-r-[1px] border-black h-full pb-20 bg-[#EEE] z-20'>
            <Parallax translateY={[170, -170]} className={`space-y-12 flex flex-col items-end h-full justify-center pt-44 relative  `}>
              <h1 className='text-5xl absolute top-60 -left-2 text-left'>SIDES</h1>
              {sides.map((side) => {
                return (
                  <div className='w-full text-left space-y-4 px-5' key={side.id}>
                    <h1 className='uppercase'>{side.title}</h1>
                    <p className='paragraph text-sm'> {side.description}</p>
                    <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>{side.price}</span>
                  </div>
                );
              })}
            </Parallax>
          </div>

          <div className='h-full col-span-2  bg-[#EEE] z-10 overflow-hidden'>
            <Parallax translateY={[-200, 200]} className={`space-y-12 flex py-20 flex-col items-start justify-center pt-48 relative px-5 `}>
              <h1 className='text-5xl -ml-7 text-left '>DESSERTS</h1>
              {desserts.map((dessert) => {
                return (
                  <div className='w-40 text-left space-y-4' key={dessert.id}>
                    <h1 className='uppercase'>{dessert.title}</h1>
                    <p className='paragraph text-sm'>{dessert.description}</p>
                    <span className='px-3 py-1 border-2 border-[#FFDAC9] inline-block'>{dessert.price}</span>
                  </div>
                );
              })}
            </Parallax>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};
