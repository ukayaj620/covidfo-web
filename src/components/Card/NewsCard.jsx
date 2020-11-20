import React from 'react';

const NewsCard = ({ title, urlToImage, url, source, publishedAt }) => {
  return (
    <a className="news-cards" href={url}>
      <img className="w-full h-36 lg:h-44 rounded-t-xl" src={urlToImage} alt={title} />
      <div className="w-full flex flex-col items-start justify-between h-40 lg:h-56 rounded-b-xl px-3 py-4">
        <h6>{source}</h6>
        <a className="news my-2" href={url}>{title}</a>
        <h6 className="font-normal">Published At: {publishedAt}</h6>
      </div>
    </a>
  );
};

export default NewsCard;
