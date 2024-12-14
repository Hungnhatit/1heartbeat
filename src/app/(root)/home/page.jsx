import React from 'react'
import Hero from '@/components/hero/Hero';
import Mission from '@/components/mission/Mission';
import News from '@/components/news/News'
import Event from '@/components/event/Event';

const HomePage = () => {
  return (
    <div className='homeContainer'>
      <Hero></Hero>

      <Mission />

      <News />

      <Event />
    </div>
  )
}

export default HomePage
