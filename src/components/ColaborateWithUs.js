//jshint esversion:9

export const ColaborateWithUs = ({ section6 }) => {
  return (
    <section className='min-h-[50vh] flex px-32 py-16 bg-[#FFDAC9] relative z-50' ref={section6}>
      <div className='w-[50vw] space-y-6'>
        <div className='w-36 '>
          <div className='relative text-5xl flex flex-col text-left'>
            <div className=''>
              <h1 className='text-3xl'>COLABORATE</h1>
              <h1 className='relative z-20'>WITH US</h1>
            </div>
            <span className='absolute top-[48px] z-10 -left-[10px] h-2 w-full bg-white inline-block'></span>
          </div>
        </div>
        <div className='w-[270px] text-left space-y-6 paragraph'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </div>
      <div className='w-[50vw] pt-8'>
        <form className='w-full flex flex-col text-[#333]'>
          <div className='w-full flex justify-between space-x-8'>
            <div className='w-full space-y-6'>
              <label className='flex flex-col items-start space-y-3'>
                <span>NAME</span>
                <input type='text' name='name' placeholder='Name' className='bg-inherit pb-2 border-b-2 border-black placeholder-[#AAA] paragraph outline-none w-full' />
              </label>
              <label className='flex flex-col items-start space-y-3'>
                <span>PHONE</span>
                <input type='number' name='phone' placeholder='Phone' className='bg-inherit pb-2 border-b-2 border-black placeholder-[#AAA] paragraph outline-none w-full ' />
              </label>
              <label className='flex flex-col items-start space-y-3'>
                <span>EXPERIENCE</span>
                <select name='experience' className='bg-inherit pb-2 border-b-2 border-black  paragraph outline-none w-full select-selected'>
                  <option value='' disabled selected className='paragraph select-selected'>
                    Select
                  </option>
                </select>
              </label>
            </div>
            <div className='w-full space-y-6'>
              <label className='flex flex-col items-start space-y-3'>
                <span>SURNAME</span>
                <input type='text' name='surname' placeholder='Surname' className='bg-inherit pb-2 border-b-2 border-black placeholder-[#AAA] paragraph outline-none w-full' />
              </label>
              <label className='flex flex-col items-start space-y-3'>
                <span>EMAIL ADDRESS</span>
                <input type='email' name='email' placeholder='Email' className='bg-inherit pb-2 border-b-2 border-black placeholder-[#AAA] paragraph outline-none w-full' />
              </label>
              <label className='flex flex-col items-start space-y-3'>
                <span>WHERE DID YOU HEAR ABOUT US?</span>
                <select className='bg-inherit pb-2 border-b-2 border-black  paragraph outline-none w-full select-selected'>
                  <option value='' disabled selected className='paragraph select-selected'>
                    Select
                  </option>
                </select>
              </label>
            </div>
          </div>
          <div className='self-end mt-6'>
            <button className='px-4 py-4 bg-[#333] flex items-center h-6 text-[#FFDAC9] text-xl'>
              <span className='mt-1'> SEND </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
