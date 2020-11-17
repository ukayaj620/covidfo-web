import React from 'react';

const NewsCard = ({ title, urlToImage, url, source, publishedAt }) => {
  console.log(source);
  return (
    <a className="news-cards" href={url}>
      <img className="w-full h-44 rounded-t-xl" src={urlToImage} />
      <div className="w-full flex flex-col items-start h-40 rounded-b-xl px-3 py-2">
        <h6>{source}</h6>
        <a className="news my-2" href={url}>{title}</a>
        <h6 className="font-normal">Published At: {publishedAt}</h6>
      </div>
    </a>
  );
};

export default NewsCard;
