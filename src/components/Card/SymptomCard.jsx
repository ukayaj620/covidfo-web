import React from 'react';
import load from '../../helpers/ImageLoader';

const SymptomCard = ({ symptom, description, title }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-1/2 px-6 my-2">
      <div className="flex w-48 lg:w-2/5 p-4">
        <img 
          className="rounded-full w-40 h-40 shadow-md"
          src={load(symptom)}
          alt={title}
        />
      </div>
      <div className="flex w-4/5 lg:w-3/5 flex-col items-start rounded-xl shadow-lg p-4">
        <h4 className="dark text-center">{title}</h4>
        <h6 className="font-header text-sm lg:text-base text-justify">{description}</h6>
      </div>
    </div>
  );
};

export default SymptomCard;
