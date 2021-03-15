import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as WorldAPI from '../api/worlds.api';
import * as NewsAPI from '../api/news.api';
import load from '../helpers/ImageLoader';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import CovidCard from '../components/Card/CovidCard';
import { parseNumber } from '../helpers/Functions';
import Separator from '../components/Separator';
// import NewsCard from '../components/Card/NewsCard';
import Footer from '../components/Footer';

const HomeBanner = () => {
  const _history = useHistory();

  const _navigateTo = (path) => _history.push(path);

  return (
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
  );
};

const HomeWorldCases = ({ worldData, onRefresh }) => {

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
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <h2 className="dark text-center">Kasus COVID-19 Dunia Terkini</h2>
        <img
          onClick={onRefresh}
          src={load('refresh')} 
          className="w-10 ml-0 lg:ml-4 bg-white rounded-full shadow-lg p-2 my-2 lg:my-0"
          alt={'click to refresh page'}
        />
      </div>
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

// const HomeNewsCases = ({ newsData, onRefresh }) => {
//   const _history = useHistory();

//   const _navigateTo = (path) => _history.push(path);

//   return (
//     <div className="w-full flex flex-col items-center px-4 justify-center">
//       <div className="w-full flex flex-col lg:flex-row items-center justify-center">
//         <h2 className="dark text-center">Berita COVID-19 Indonesia Terkini</h2>
//         <img
//           onClick={onRefresh}
//           src={load('refresh')} 
//           className="w-10 ml-0 lg:ml-4 bg-white rounded-full shadow-lg p-2 my-2 lg:my-0"
//           alt={'click to refresh page'}
//         />
//       </div>
//       <h4 className="dark text-center">
//         Source:{' '}
//         <a 
//           href="https://covid19.go.id/p/berita"
//           className="hover:underline hover:text-primary"
//         >
//           Satgas COVID-19 Indonesia
//         </a>
//       </h4>
//       <div className="w-full flex flex-col lg:flex-row items-center mt-8">
//         {newsData.slice(0, 4).map(({ title, pubDate, link, enclosure }, index) => (
//           <div className="flex flex-wrap w-4/5 lg:w-1/4">
//             <NewsCard
//               key={`#key-${title}-${index}`}
//               urlToImage={enclosure[0].$.url}
//               source={`Satgas Covid-19 Indonesia`}
//               title={title[0]}
//               url={link[0]}
//               publishedAt={pubDate[0]}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-4">
//         <button className="btn" onClick={ () => _navigateTo('/news') }>
//           <h4>Baca Lebih Lanjut</h4>
//         </button>
//       </div>
//     </div>
//   );
// };

const Home = () => {
  const [_isLoading, _setIsLoading] = useState(true);
  const [_refreshNews, _setRefreshNews] = useState(false);
  const [_refreshCases, _setRefreshCases] = useState(false);
  const [_worldData, _setWorldData] = useState({});
  const [_newsData, _setNewsData] = useState([]);
  const [_class, _setClass] = useState('opacity-0');

  const _onRefreshCases = () => {
    _setRefreshCases(true);
    _setIsLoading(true);
  }

  // const _onRefreshNews = () => {
  //   _setRefreshNews(true);
  //   _setIsLoading(true);
  // }

  useEffect(() => {
    const bootstrapAsync = async () => {
      const responseWorldData = await WorldAPI.getWorldBasicInfo();
      _setWorldData(responseWorldData.data); 
    }
    bootstrapAsync().then(() => {
      _setIsLoading(false);
      _setRefreshCases(false);
    });
  }, [_refreshCases]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const responseNewsData = await NewsAPI.getLatestHealthInfo();
      _setNewsData(responseNewsData);
    }
    bootstrapAsync().then(() => {
      _setIsLoading(false);
      _setRefreshNews(false);
    });
  }, [_refreshNews]);

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
        <HomeWorldCases worldData={_worldData} onRefresh={_onRefreshCases} />
        <Separator />
        {/* <HomeNewsCases newsData={_newsData} onRefresh={_onRefreshNews} />
        <Separator /> */}
      </div>
      <Footer />
    </div>
  ) : <Loading type="Circles" />;
};

export default Home;
