import React from 'react'

import { NewsType } from '../../types'

import './NewsItem.scss'

type NewsItemProps = {
  news: NewsType
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {

  const addNullToTime = (time: string): string => {
    return time.length === 1 ? `0${time}` : time
  }

  const transformDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return `${date.toLocaleDateString()} ${addNullToTime(date.getHours().toString())}:${addNullToTime(date.getMinutes().toString())}`
  }

  return (
    <div className='news-item'>
      <img src={news.urlToImage} alt={news.title} />
      <div className='news-item__title'>
        <h2>{news.title}</h2>
      </div>
      <div className='news-item__description'>
        <p>{news.description}</p>
      </div>
      <div className='news-item__date'>
        {transformDate(news.publishedAt)}
      </div>
    </div>
  )
}