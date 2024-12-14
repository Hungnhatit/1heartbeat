import Image from 'next/image'
import React from 'react';
import styles from './mission.module.css';

const Mission = () => {
  return (
    <div className='relative'>
      <div className='missionHeading py-10 text-center'>
        <p className='text-3xl uppercase mb-2'>Our mission</p>
        <p className='text-xl font-light tracking-[0.5px]'>
          1HeartBeat Foundation is here to end human trafficking and save children.
        </p>
      </div>

      <div className='flex items-center relative justify-around px-14 py-12 bg-[#E4F6FD]'>
        <div className={`${styles.imgContainer} px-10`}>
          <Image
            src="/assets/images/nau-an-cho-em.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.heroImg}
            alt='hero-image'
          ></Image>
        </div>

        <div className='flex flex-col items-start'>
          <div className='mb-12'>
            <p className='text-4xl mb-5'>
              It’s 1HeartBeat’s 20th birthday!
            </p>
            <p className='text-2xl font-light mb-5'>
              This year marks 1HeartBeat’s twenty years of transforming lives.
            </p>
            <p className='text-2xl font-light'>
              Thank you for being a part of this journey.
            </p>
          </div>

          <button className='px-4 py-4 text-white uppercase bg-[#06AEEF] rounded-md'>Join our celebration</button>
        </div>
      </div>
    </div>
  )
}

export default Mission