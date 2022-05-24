//jshint esversion:9

import './App.css';
import { Menu } from './components/Menu';
import instaImg from './icons/icons8-instagram-50.png';

function App() {
  return (
    <div className='App'>
      <Menu />
      <h1 className='fixed inline-block top-[50vh] -right-1 -rotate-90 bg-white p-2'>Request Info</h1>
      <section
        className='section-1 bg-[#FFDAC9] min-h-screen flex justify-center items-center bg-contain bg-center bg-no-repeat bg-origin-content p-12'
        style={{ backgroundImage: "url('./pexels-trang-doan-793759.jpg')" }}
      >
        <div className='text-white bg-center'>
          <>
            <h1 className='text-5xl tracking-wide'>THE BEST FOODIE</h1>
            <h1 className='text-7xl'>EXPERIENCE</h1>
          </>
          <h1 className='text-2xl '>NOW IN LONDON</h1>
        </div>
      </section>
      <section className='grid grid-cols-4 gap-y-4 p-16 bg-[#EEE] '>
        <div></div>
        <div className='section-2-row-1-right w-52'>
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
        <div className='h-full flex items-end'>
          <div className='relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2 ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
            <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
          </div>
        </div>
        <div className='h-full flex items-end'>
          <div className='relative h-52 w-52 bg-white p-4 flex flex-col justify-between'>
            <h1 className='text-xl text-left'>@buzzfeedfood</h1>
            <p className='text-left text-sm'>
              It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮 . Find the recipe from the link in our bio! 📸 : @taylormillerphoto
            </p>
            <div className='text-right'>
              <span>Comments icon</span>
              <span> Like icon</span>
            </div>
          </div>
        </div>

        <div className='h-52 w-52 bg-white p-4 flex flex-col justify-between'>
          <h1 className='text-xl text-left'>@love_food</h1>
          <p className='text-left text-sm'>
            Waffle sticks in Copenhagen! 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷 : @foodwithmichel] #lovefood
          </p>
          <div className='text-right'>
            <span>Comments icon</span>
            <span> Like icon</span>
          </div>
        </div>
        <div className='relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2 ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
          <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
        </div>

        <div></div>
        <div></div>

        <div className='h-52 w-52 p-4 flex items-center'>
          <p className='text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
        </div>

        <div></div>

        <div className='h-52 w-52 bg-white p-4 flex flex-col justify-between'>
          <h1 className='text-xl text-left'>@buzzfeedfood</h1>
          <p className='text-left text-sm'>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
          <div className='text-right'>
            <span>Comments icon</span>
            <span> Like icon</span>
          </div>
        </div>

        <div className='relative h-52 w-52 bg-white bg-cover bg-no-repeat bg-origin-content p-2 ' style={{ backgroundImage: "url('./pexels-trang-doan-793765.jpg')" }}>
          <img src={instaImg} alt='instagram' className='absolute top-0 right-0 inline-block bg-[#FFDAC9]' />
        </div>
      </section>

      <section className='section-3 h-60'>
        <h1>Locations</h1>
      </section>
    </div>
  );
}

export default App;
