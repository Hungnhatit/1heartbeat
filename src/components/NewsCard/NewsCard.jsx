import Image from 'next/image'
import React from 'react';
import styles from './newsCard.module.css';
import Link from 'next/link';

const NewsCard = ({ data }) => {
  return (
    <div className={`${styles.cardContainer} shadow-xl shadow-slate-300 rounded-lg overflow-hidden h-fit cursor-pointer hover:scale-105 transition ease-in-out duration-500`}>
      <div className={`${styles.imgContainer} mb-8`}>
        <Image
          src="/assets/images/vietnam-landscape.jpg"
          width={0}
          height={0}
          sizes='100vw'
          className={styles.image}
          alt='vietnam-landscape'
        ></Image>
      </div>

      <div className={`${styles.content} px-4 pb-5 flex flex-col justify-center`}>
        <span className='text-2xl text-center mb-3'>{data.title}</span>
        <span className='text-[15px] text-center font-extralight mb-4'>{data.date}</span>
        <p className='mb-5'>
          {data.desc}
        </p>
        <Link href="" className='font-medium text-[#0186FF] cursor-pointer text-center'>Read more</Link>
      </div>
    </div>
  )
}

export default NewsCard