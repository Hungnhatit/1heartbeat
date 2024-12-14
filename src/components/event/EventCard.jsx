import React from 'react';
import styles from './event.module.css';
import Image from 'next/image';

const EventCard = ({ data }) => {
  const splitDate = data.date.split(",");
  console.log(splitDate);
  return (
    <div className={`${styles.cardItem} flex flex-col items-center justify-center w-[30%]`}>
      <div className={`flex w-[180px] h-[180px] flex-col items-center justify-center rounded-full bg-[#F58220] mb-12`}>
        <span className='text-white font-normal text-2xl text-center'>{splitDate.map((date) => (date))}</span>
      </div>

      {/* Event Content */}
      <div className='flex flex-col w-full text-center bg-white py-12 rounded-lg'>
        <span className='text-3xl mb-4 text-[#009FDB] font-medium'>
          {data.eventName}
        </span>

        <span className='text-xl'>
          {data.location}
        </span>

      </div>

    </div>



  )
}

export default EventCard