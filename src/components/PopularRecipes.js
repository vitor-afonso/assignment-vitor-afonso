//jshint esversion:9

import { useEffect, useState } from 'react';
import { RecipeCard } from './RecipeCard';
import axios from 'axios';

export const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(`https://studiographene-exercise-api.herokuapp.com/foods`);
      setRecipes(response.data);
    })();
  }, []);

  return (
    <section className=' pt-20  relative z-50 bg-[#fbfbfb] space-y-10 h-screen'>
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
          <h1 className='text-3xl'>DO YOU WANT TO SHAREYOUR OWN RECIPE?</h1>
          <div>
            <button className='px-3 bg-[#FFDAC9] flex items-center h-6'>
              <span className='mt-1'> SEND IT NOW </span>
            </button>
          </div>
        </div>
      </div>
      <div className='pl-32 flex overflow-hidden space-x-4'>
        {recipes &&
          recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })}
      </div>
    </section>
  );
};
