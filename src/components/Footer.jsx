import React from 'react'
import FooterImage from '../assets/images/Footer Background.png'
import DogLogo from '../assets/images/Dog-Logo.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='bg-cover h-[25vh] lg:h-[40vh] flex justify-end items-center xl:h-[70vh]' style={{ backgroundImage: `url(${FooterImage})` }}>
      <div className='flex flex-col items-end p-5 text-center md:p-15 xl:mr-40'>
        <div>
          <div className='flex justify-center'>
            <img src={DogLogo} className='mb-5' />
          </div>

          <div>
            <ul className='grid grid-cols-2 gap-2 uppercase font-bold'>
              <li><a href="#">shop for dog</a></li>
              <li><a href="#">shop for cat</a></li>
              <li><a href="#">our story</a></li>
              <li><a href="#">contact us</a></li>
            </ul>
            <p className='mt-4'>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          </div>
        </div>

        <div className='flex mt-5'>
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
