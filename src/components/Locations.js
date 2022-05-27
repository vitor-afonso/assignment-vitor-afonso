//jshint esversion:9

import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import markerIcon from '../icons/icons8-marker-storm-30.png';

export const Locations = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_MAPS_API });
  const centerMarker = useMemo(() => ({ lat: 51.512591, lng: -0.124704 }), []);

  return (
    <>
      {isLoaded ? (
        <section className='section-3 relative'>
          <h1 className='absolute z-40 top-[65px] left-[180px] text-4xl'>LOCATION</h1>
          <div className='address-location absolute z-30 top-20 left-40 h-20 w-[150px] bg-white p-2'>
            <p className='mt-5 text-left paragraph text-xs'>
              12 Upper ST. Martin's Lane <br /> WC2H 9FB, London
            </p>
          </div>
          <GoogleMap zoom={13} center={centerMarker} mapContainerClassName='w-full h-[50vh] map' options={{ mapId: 'd5822cb2914a8860' }}>
            <Marker position={centerMarker} icon={markerIcon} />
          </GoogleMap>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
