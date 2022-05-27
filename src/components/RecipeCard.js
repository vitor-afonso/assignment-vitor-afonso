//jshint esversion:9
import arrowImg from '../icons/icons8-arrow-48.png';

export const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <div className='w-60'>
        <div className={`h-full flex items-end `}>
          <div className='relative h-60 w-60 bg-white bg-cover bg-no-repeat bg-origin-content ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
            <img src={arrowImg} alt='instagram' className='absolute bottom-0 right-0 inline-block bg-[#FFDAC9] p-1' />
            <div className='inline-flex flex-col justify-center w-20 h-20 absolute top-0 left-0 '>
              <span className='text-3xl text-white relative z-10'>4</span>
              <span className='text-white relative z-10'>SERVINGS</span>
              <span className='h-full w-full absolute top-0 left-0 bg-black opacity-[0.3] z-0'></span>
            </div>
          </div>
        </div>

        <div className='px-4 text-left w-full py-6 bg-white'>
          <h3 className='text-sm text-gray-400'>DIFFICULTY</h3>
          <h2>{recipe.title}</h2>
          <p className='paragraph text-sm'>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};
