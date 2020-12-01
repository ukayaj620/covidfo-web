import React, { useState, useEffect } from 'react';
import * as NewsAPI from '../api/news.api';
import NewsCard from '../components/Card/NewsCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';

const News = () => {
  const [_refreshNews, _setRefreshNews] = useState(false);
  const [_newsData, _setNewsData] = useState([]);
  const [_isLoading, _setIsLoading] = useState(true);
  const [_class, _setClass] = useState('opacity-0');

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
      <h2 className="dark text-center">Berita COVID-19 Indonesia Selengkapnya</h2>
      <div className="flex flex-col lg:flex-wrap lg:flex-row w-full items-center justify-center my-8 lg:px-4">
        {_newsData.map(({ title, pubDate, link, enclosure }, index) => (
          <div className="flex flex-wrap w-4/5 lg:w-1/4">
            <NewsCard
              key={`#key-${title}-${index}`}
              urlToImage={enclosure[0].$.url}
              source={`Satgas Covid-19 Indonesia`}
              title={title[0]}
              url={link[0]}
              publishedAt={pubDate[0]}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  ) : <Loading type="Bars" />;
};

export default News;
