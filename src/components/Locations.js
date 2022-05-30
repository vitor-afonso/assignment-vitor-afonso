//jshint esversion:9

export const Locations = ({ section3 }) => {
  return (
    <section className='section-3 relative z-50 bg-no-repeat bg-left-top bg-cover min-w-fit h-[50vh]' style={{ backgroundImage: 'url(../../snazzy-image-2.png)' }} ref={section3}>
      <h1 className='absolute z-40 top-[65px] left-[180px] text-4xl'>LOCATION</h1>
      <div className='address-location absolute z-30 top-20 left-40 h-20 w-[150px] bg-white p-2'>
        <p className='mt-5 text-left paragraph text-xs'>
          12 Upper ST. Martin's Lane <br /> WC2H 9FB, London
        </p>
      </div>
    </section>
  );
};
