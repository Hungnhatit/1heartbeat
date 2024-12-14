import React from 'react'
import { events } from '../../data/events';
import EventCard from './EventCard';
import styles from './event.module.css';
import Image from 'next/image';


const Event = () => {
  return (
    <div className="flex flex-col relative py-8">
      <div className={styles.imgContainer}>
        <Image
          src="/assets/images/vietnamese-blossom.jpeg"
          fill
          className={styles.overlay}
          alt='hero-image'
        ></Image>
      </div>

      <div className='flex flex-col absolute w-full'>
        <span className='text-center text-3xl font-semibold text-white py-10'>Upcoming Events</span>
        <div className='text-center mb-8'>
          <button className='px-6 py-4 bg-[#06AEEF] text-white rounded-md'>See all events</button>
        </div>

        {/* Event list */}
        <div className='flex justify-center'>
          <div className={`flex items-center justify-center w-[80%]`}>
            {events.map((item, index) => (
              <EventCard key={index} data={item} />
            ))}
          </div>
        </div>

      </div>



    </div>
  )
}

export default Event