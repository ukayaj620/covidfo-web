import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as World from '../api/worlds.api';
import image from '../helpers/ImageLoader';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import CovidCard from '../components/CovidCard';
import { parseNumber } from '../helpers/Functions';

const HomeBanner = () => {
  const _history = useHistory();

  const _navigateTo = (path) => _history.push(path);

  return (
    <div className="flex lg:flex-row flex-col items-start justify-between bg-accent px-8">
      <div className="flex flex-col lg:mr-4 w-full lg:w-2/3 items-center lg:items-start justify-between mt-4 pt-4">
        <h1 className="dark leading-snug text-center lg:text-left">
          AYO! Bersama Putuskan Rantai Penyebaran
          <span className="text-red-700"> COVID-19</span>
        </h1>
        <h5 className="my-4 text-center lg:text-left">
          Tidak pernah lebih jelas bahwa kita semua adalah warga dunia,
          dan kita semua memiliki peran. Ketegangan novel
          coronavirus, secara resmi telah mencapai proporsi pandemi. 
        </h5>
        <button className="btn" onClick={ () => _navigateTo('/edu') }>
          <h4>Pelajari Lebih Lanjut</h4>
        </button>
      </div>
      <img
        className="hidden lg:block w-1/3"
        src={image.load('war')}
        alt="War againts COVID-19"
      />
    </div>
  );
};

const HomeWorldCases = ({ worldData }) => {

  const WorldCasesData = [
    {
      label: 'KONFIRMASI',
      color: 'primary',
      today: `+${parseNumber(worldData.todayCases)}`,
      accumulate: worldData.cases,
      icon: 'confirm',
    },
    {
      label: 'AKTIF',
      color: 'caution',
      today: `${(worldData.active / worldData.cases).toFixed(4) * 100} %`,
      accumulate: worldData.active,
      icon: 'aid',
    },
    {
      label: 'SEMBUH',
      color: 'safe',
      today: `+${parseNumber(worldData.todayRecovered)}`,
      accumulate: worldData.recovered,
      icon: 'healthy',
    },
    {
      label: 'MENINGGAL',
      color: 'danger',
      today: `+${parseNumber(worldData.todayDeaths)}`,
      accumulate: worldData.deaths,
      icon: 'dead',
    }
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row px-4 mt-8 items-center">
      {WorldCasesData.map(({ label, today, accumulate, color, icon }, index) => (
        <CovidCard
          key={`#covid-card-${index}-${label}`}
          accumulate={accumulate} 
          today={today} 
          label={label} 
          color={color}
          icon={icon}
        />
      ))}
    </div>
  );
}

const Home = () => {
  const [_isLoading, _setIsLoading] = useState(true);
  const [_worldData, _setWorldData] = useState({});

  useEffect(() => {
    const bootstrapAsync = async () => {
      const response = await World.getWorldBasicInfo();
      if (response.status === 200) {
        _setWorldData(response.data);
        _setIsLoading(false);
      } 
    }
    bootstrapAsync().then();
  }, []);

  return !_isLoading ? (
    <div className="bg-accent">
      <NavBar />
      <div className="flex flex-col w-full items-start justify-center">
        <HomeBanner />
        <HomeWorldCases worldData={_worldData} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
