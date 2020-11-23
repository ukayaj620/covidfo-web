import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Separator from '../components/Separator';

const JHUMap = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h2 className="dark text-center">Peta Dunia Penyebaran COVID-19</h2>
      <h4 className="dark text-center">Source: Here Maps API</h4>
      <div className="mt-8 w-4/5 lg:w-3/4 shadow-2xl rounded-2xl p-4">
      <iframe
        title="Peta Dunia Penyebaran COVID-19"
        className="w-full"
        height="480px" 
        src="https://app.developer.here.com/coronavirus/"
        frameborder="0" 
      />
      </div>
    </div>
  );
}

const SpreadMap = () => {

  return (
    <div className="bg-accent">
      <NavBar />
      <div className="flex flex-col w-full items-center justify-center">
        <JHUMap />
        <Separator />
      </div>
      <Footer /> 
    </div>
  );
};

export default SpreadMap;
