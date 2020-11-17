import React from 'react';
import NavBar from '../components/NavBar';
import Separator from '../components/Separator';

const JHUMap = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h2 className="dark text-center">Peta Dunia Penyebaran COVID-19</h2>
      <div className="mt-8 w-4/5 lg:w-7/12 shadow-2xl rounded-2xl p-4">
        <iframe className="rounded-xl w-full h-104" frameborder="0" scrolling="no" 
          marginheight="0" marginwidth="0" title="2019-nCoV" 
          src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
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
    </div>
  );
};

export default SpreadMap;
