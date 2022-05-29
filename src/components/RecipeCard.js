//jshint esversion:9
import arrowShortImg from '../icons/icons8-arrow-short-48.png';

export const RecipeCard = ({ recipe }) => {
  return (
    <div className='RecipeCard shadow-lg' key={recipe.id}>
      <div className='w-60 flex flex-col  '>
        <div className={`h-full flex items-end `}>
          <div className='relative h-60 w-60 bg-white bg-cover bg-no-repeat bg-origin-content ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
            <img src={arrowShortImg} alt='arrow' className='absolute bottom-0 right-0 inline-block bg-[#FFDAC9] p-1 h-12' />
            <div className='inline-flex flex-col justify-center w-20 h-20 absolute top-0 left-0 '>
              <span className='text-3xl text-white relative z-10'>4</span>
              <span className='text-white relative z-10'>SERVINGS</span>
              <span className='h-full w-full absolute top-0 left-0 bg-black opacity-[0.3] z-0'></span>
            </div>
          </div>
        </div>

        <div className='px-4 text-left w-full py-6 bg-white '>
          <h3 className='text-sm text-gray-400'>DIFFICULTY</h3>
          <h2>{recipe.title}</h2>
          <p className='paragraph text-sm h-16 '>{recipe.description}</p>
        </div>
        <p className='self-end mt-3'>USER FULL NAME</p>
      </div>
    </div>
  );
};
