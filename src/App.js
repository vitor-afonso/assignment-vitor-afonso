//jshint esversion:9

import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { NavBarMenu } from './components/NavBarMenu';
import { MainSection } from './components/MainSection';
import { MeetOurCommunity } from './components/MeetOurCommunity';
import { Locations } from './components/Locations';
import { OurMenu } from './components/OurMenu';
import { PopularRecipes } from './components/PopularRecipes';
import { ColaborateWithUs } from './components/ColaborateWithUs';
import { Footer } from './components/Footer';
import { useRef } from 'react';

function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <ParallaxProvider>
      <div className='App bg-[#ececec]'>
        {/* <NavBarMenu /> */}
        <nav className='fixed z-[99] top-0 left-0 w-full p-4'>
          <ul className='flex justify-between'>
            <div className='flex space-x-10 items-center'>
              <li className='text-xl' onClick={() => scrollToSection(section1)}>
                LOGO
              </li>
              <li onClick={() => scrollToSection(section1)}>ABOUT</li>
              <li onClick={() => scrollToSection(section2)}>COMMUNITY</li>
              <li onClick={() => scrollToSection(section3)}>LOCATION</li>
              <li onClick={() => scrollToSection(section4)}>OUR MENU</li>
              <li onClick={() => scrollToSection(section5)}>RECEPIES</li>
            </div>
            <div className='flex space-x-10 items-center'>
              <li onClick={() => scrollToSection(section6)}>CONTACT</li>
              <li onClick={() => scrollToSection(section6)}>LOGIN</li>
            </div>
          </ul>
        </nav>
        <h1 className='fixed inline-block top-[50vh] -right-1 -rotate-90 bg-white px-2 uppercase pt-1 cursor-pointer z-[99]'> Request Info</h1>
        <MainSection section1={section1} />
        <MeetOurCommunity section2={section2} />
        <Locations section3={section3} />
        <OurMenu section4={section4} />
        <PopularRecipes section5={section5} />
        <ColaborateWithUs section6={section6} />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
