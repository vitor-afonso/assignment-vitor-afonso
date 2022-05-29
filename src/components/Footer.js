//jshint esversion:9
import { IconContext } from 'react-icons';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className='flex px-32 py-16 bg-[#333] min-h-[40vh] justify-between'>
      <div className='flex flex-col justify-between'>
        <div className='flex space-x-14 text-left'>
          <div>
            <h1 className='text-[#FFDAC9] text-sm'>SECTION 1</h1>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
          </div>
          <div>
            <h1 className='text-[#FFDAC9]'>SECTION 2</h1>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
          </div>
          <div>
            <h1 className='text-[#FFDAC9]'>SECTION 3</h1>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
          </div>
          <div>
            <h1 className='text-[#FFDAC9]'>SECTION 4</h1>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
          </div>
          <div>
            <h1 className='text-[#FFDAC9]'>SECTION 5</h1>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
            <p className='paragraph text-[14px]'>Subsection</p>
          </div>
        </div>
        <small className='paragraph text-left'>
          <p className='text-[12px]'>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </small>
      </div>
      <div className='w-52 flex flex-col justify-between'>
        <div className='w-36 text-white self-end'>
          <div className='relative text-5xl flex flex-col text-right'>
            <div className=''>
              <h1 className='text-3xl'>THIS IS THE</h1>
              <h1 className='relative z-20'>LOGO</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-between w-full'>
          <IconContext.Provider value={{ color: 'white' }}>
            <FiFacebook></FiFacebook>
            <FiTwitter></FiTwitter>
            <FiInstagram></FiInstagram>
            <FiLinkedin></FiLinkedin>
            <FiDribbble></FiDribbble>
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
};
