'use client'
import Image from 'next/image';
import React from 'react';
import styles from './home.module.css';

const Hero = () => {
  return (
    <div className={`${styles.content} relative`}>
      <div className={styles.imgContainer}>
        <Image
          src="/assets/images/nau-an-cho-em.jpg"
          fill
          className={styles.heroImg}
          alt='hero-image'
        ></Image>
      </div>

      <div className="flex flex-col absolute w-full h-full top-0 items-center justify-center">
        <div className='heading text-center max-w-[75%] mb-12'>
          <p className='text-6xl text-white font-semibold mb-4'>Give a meal, change a life</p>
          <p className='text-white text-2xl font-light leading-8'>Kids living on the streets and people returning from <br /> slavery feel tired, hungry and hopeless. <br /> You can change their life with a hot meal. </p>
        </div>
        <button className='bg-[#F58220] px-6 py-3 text-white rounded-md'>Donate</button>
        <div className='content'>

        </div>
      </div>
    </div>

  )
}

export default Hero