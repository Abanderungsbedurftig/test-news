import React, { useState, useEffect } from 'react'

import { fetchNews } from '../../utils/request'
import { NewsType } from '../../types'
import { loaderUrl } from '../../const'
import { NewsItem } from '../NewsItem/NewsItem'

import './News.scss'

export const News: React.FC = () => {
  const [news, setNews] = useState<NewsType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getNews = async () => {
    setIsLoading(true)
    const lastNews = await fetchNews()
    setNews(lastNews)
    setIsLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className='news-container'>
      { news.map((n) => <NewsItem key={n.publishedAt} news={n}/>) }
      { isLoading && <div className='preloader'><img src={loaderUrl} alt='preloader' /></div>}
    </div>
  )
}