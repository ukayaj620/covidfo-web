import React from 'react';
import image from '../../helpers/ImageLoader';
import { parseNumber } from '../../helpers/Functions';

const CovidCard = ({ label, accumulate, today, color, icon }) => {

  return (
    <div className={`covid-cards bg-${color}`}>
      <div className="flex flex-col w-3/4">
        <h3 className="font-header font-bold text-305xl text-white">{parseNumber(accumulate)}</h3>
        <h4>{label}</h4>
        <h4>{today}</h4>
      </div>
      <img className="ml-4 w-1/4" src={image.load(icon)} alt={label} />
    </div>
  );
};

export default CovidCard;
