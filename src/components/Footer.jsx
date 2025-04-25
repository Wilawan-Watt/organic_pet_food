import React from 'react'
import FooterImage from '../assets/images/Footer Background.png'
import TextBox from '../assets/images/Text-box-2.png'
import DogLogo from '../assets/images/Dog-Logo.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-[70vh] bg-cover' style={{ backgroundImage: `url(${FooterImage})` }}>
      <div className='flex justify-end items-end mr-20'>
        <div className='relative right-40'>
          <div className='relative top-10'>
            <img src={TextBox} className='w-100' />
            <img src={DogLogo} className='relative -top-45 left-20 relative z-10' />
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-2 uppercase font-bold relative z-10">
              <li><a href="#">shop for dog</a></li>
              <li><a href="#">shop for cat</a></li>
              <li><a href="#">our story</a></li>
              <li><a href="#">contact us</a></li>
            </ul>
            <p className='mt-4'>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          </div>
        </div>

        <div className='flex'>
          <a href="#" className='mx-2'><FaInstagram size={28} color='#2ea2d0' /></a>
          <a href="#" className='mx-2'><FaFacebookF size={28} color='#2ea2d0' /></a>
          <a href="#" className='mx-2'><FaTwitter size={28} color='#2ea2d0' /></a>
          <a href="#" className='mx-2'><FaWhatsapp size={28} color='#2ea2d0' /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
