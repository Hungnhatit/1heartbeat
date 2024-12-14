import React from 'react';
import { socials } from '../../../data/data.js';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { AiFillTikTok, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link.js';

const Footer = () => {
  return (
    <div className='flex'>
      {/* Contact */}
      <div>
        <span>Contact us</span>
        <div>
          <span>
            48 Cao Thang, <br />
            Thanh Binh, <br />
            Hai Chau <br />
            Da Nang
          </span>

          <span>
            +84 3 306 7858
          </span>

          <span>
            nhatpro204@gmail.com
          </span>

          <div>
            {socials.map(item => (
              <span>{item.icon}</span>
            ))}
          </div>
        </div>

        <div>

        </div>


      </div>



      {/* Quick Links */}
      <div>
        <span>Quick Links</span>
        <div>
          <Link>Donate</Link>
          <Link>Sponsorship</Link>
          <Link>Give Monthly</Link>
          <Link>Leave a Gift in Your Will</Link>
          <Link>Annual Reports</Link>
          <Link>News & Publication</Link>
          <Link>Contact Us</Link>
          <Link>Sitemap</Link>
        </div>
      </div>



      {/* Sign up for newsletter */}
      <div>
<button>Sign up for our newsletter</button>
      </div>
    </div>
  )
}

export default Footer