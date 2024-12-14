import React from 'react'
import NewsCard from '@/components/NewsCard/NewsCard'
import { news } from '@/data/data'
const News = () => {
  return (
    <div className='pb-12'>
      <div className='heading py-12 text-center text-3xl'>
        Latest News
      </div>
      <div className='flex justify-around flex-1 px-5 mb-8'>
        {news.map((item, index) => (
          <NewsCard key={index} data={item} />
        ))}
      </div>
      <div className='text-center'>
        <button className='px-6 py-3 bg-[#06AEEF] text-white rounded-md hover:opacity-85 transition ease-in'>View more</button>
      </div>
    </div>
  )
}

export default News