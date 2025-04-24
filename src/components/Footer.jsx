import React from 'react'
import FooterImage from '../assets/images/Footer Background.png'
import TextBox from '../assets/images/Text-box-2.png'
import DogLogo from '../assets/images/Dog-Logo.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-[70vh] bg-cover' style={{ backgroundImage: `url(${FooterImage})` }}>
      <div className='flex'>
        <div>
            <img src={TextBox} />
            <img src={DogLogo} />
            <div>
                <img src="" alt="" />
                <li><a href="">shop for dog</a></li>
                <li><a href=""></a>shop for cat</li>
                <li><a href=""></a>our story</li>
                <li><a href=""></a>contact us</li>
                <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
            </div>
        </div>

        <div>
            <a href=""><FaInstagram /></a>
            <a href=""><FaFacebookF /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
