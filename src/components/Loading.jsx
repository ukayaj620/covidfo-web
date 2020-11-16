import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-dark">
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;
