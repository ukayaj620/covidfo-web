import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as World from '../api/worlds.api';
import * as News from '../api/news.api';
import load from '../helpers/ImageLoader';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import CovidCard from '../components/Card/CovidCard';
import { parseNumber } from '../helpers/Functions';
import Separator from '../components/Separator';
import NewsCard from '../components/Card/NewsCard';
import FadeIn from '../components/FadeIn';

const HomeBanner = () => {
  const _history = useHistory();

  const _navigateTo = (path) => _history.push(path);

  return (
    <FadeIn direction="left">
      <div className="flex lg:flex-row flex-col items-start justify-between bg-accent px-8">
        <div className="flex flex-col lg:mr-4 w-full lg:w-2/3 items-center lg:items-start justify-between mt-4 pt-4">
          <h1 className="dark leading-snug text-center lg:text-left">
            AYO! Bersama Putuskan Rantai Penyebaran
            <span className="text-danger"> COVID-19</span>
          </h1>
          <h5 className="my-4 text-center lg:text-justify">
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
          src={load('war')}
          alt="War againts COVID-19"
        />
      </div>
    </FadeIn>
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
      today: `${((worldData.active / worldData.cases) * 100).toPrecision(4)} %`,
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
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="dark text-center">Kasus COVID-19 Dunia Terkini</h2>
      <h4 className="dark text-center">Update Terakhir: {(new Date(worldData.updated)).toString()}</h4>
      <div className="w-full flex flex-col lg:flex-row items-center mt-8">
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
    </div>
  );
};

const HomeNewsCases = ({ newsData }) => {
  return (
    <div className="w-full flex flex-col items-center px-4 justify-center">
      <h2 className="dark text-center">Berita COVID-19 Indonesia Terkini</h2>
      <div className="w-full flex flex-col lg:flex-row items-center mt-8">
        {newsData.filter(news => news.urlToImage).slice(0, 4).map((news, index) => (
          <NewsCard 
            urlToImage={news.urlToImage}
            source={news.source.name}
            title={news.title}
            url={news.url}
            publishedAt={(new Date(news.publishedAt)).toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [_isLoading, _setIsLoading] = useState(true);
  const [_worldData, _setWorldData] = useState({});
  const [_newsData, _setNewsData] = useState([]);
  const [_class, _setClass] = useState('opacity-0');

  useEffect(() => {
    const bootstrapAsync = async () => {
      const responseWorldData = await World.getWorldBasicInfo();
      const responseNewsData = await News.getLatestHealthInfo();
      _setWorldData(responseWorldData.data); 
      _setNewsData(responseNewsData.data.articles);
    }
    bootstrapAsync().then(() => _setIsLoading(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      _setClass('transition opacity-100 ease-in-out duration-100')
    }, 1000);
    return () => clearTimeout(timer);
  }, [_isLoading]);

  return !_isLoading ? (
    <div className={`bg-accent ${_class}`}>
      <NavBar />
      <div className="flex flex-col w-full items-center justify-center">
        <HomeBanner />
        <Separator />
        <HomeWorldCases worldData={_worldData} />
        <Separator />
        <HomeNewsCases newsData={_newsData} />
        <Separator />
      </div>
    </div>
  ) : <Loading />;
};

export default Home;
