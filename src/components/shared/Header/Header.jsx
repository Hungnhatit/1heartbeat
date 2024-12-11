import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { AiFillTikTok, AiOutlineYoutube } from 'react-icons/ai';

const socials = [
  { name: "facebook", icon: <CiFacebook size={22} color='white' /> },
  { name: "instagram", icon: <FaInstagram size={22} color='white' /> },
  { name: "youtube", icon: <AiOutlineYoutube size={22} color='white' /> },
  { name: "tiktok", icon: <AiFillTikTok size={22} color='white' /> },
];

const scItems = [
  { name: "Subscribe" },
  { name: "Blog" },
  { name: "News" },
  { name: "Contact Us" }
];



const Header = () => {
  return (
    <div className="headerWrap">
      <div className="topHeader flex bg-[#06AEEF] items-center justify-between py-2 px-4">
        <div className="socialMedia flex items-center">
          <ul className='flex items-center'>
            {socials.map((social) => (
              <li key={social.name} className='px-1'>
                {social.icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="secondary flex items-center">
          <div className='flex'>
            {scItems.map((item) => (
              <Link key={item.name} href="#" className='text-white px-2'>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between px-8'>
        <div className={styles.logo}>
          <Image
            src="/assets/charity.png"
            width={0}
            height={0}
            sizes="100vh"
            alt=""
            className={styles.headerLogo}
            style={{ width: '100%', height: 'auto' }} // optional
          ></Image>
        </div>

        <div className="flex relative items-center">
          <nav className="flex">
            <Link className={styles.link} href="#">Trang chủ</Link>
            <Link className={styles.link} href="./project.html">Dự án</Link>
            <Link className={styles.link} href="#about">Về chúng tôi</Link>
            <Link className={styles.link} href="#donate">Ủng hộ</Link>

            <div id="auth-container">
              <Link className={styles.link} href="./signup.html" id="signup-link">Đăng ký</Link>|
              <Link className={styles.link} href="./login.html" id="login-link">Đăng nhập</Link>
            </div>

          </nav>
          <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
        </div>






      </div>



    </div>

  );
};

export default Header;
