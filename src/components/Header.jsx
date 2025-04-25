import React from 'react'
import NavigationBar from './NavigationBar';
import Background from '../assets/images/Header Background.png';
import DogProduct from '../assets/images/Dog-Product.png'
import TextBox from '../assets/images/Text-box-1.png'
import Dog from '../assets/images/Dog-Header_section.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Header() {
    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${Background})` }}>

            <NavigationBar />

            <header>
                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-end'>
                    <img src={DogProduct} className='mt-10 lg:relative top-20' />

                    <div className='font-(family-name:--second-font) lg:relative -top-20 -left-10'>
                        <h1 className='text-center font-[700] text-5xl mb-10'>Help your dog maintain <br /> A <span>healthier weight</span> with</h1>

                        <div className='xl:flex'>
                            <img src={Vector} className='hidden xl:block scale-x-[-1] h-40 relative top-20' />
                            <img src={TextBox} className='hidden xl:block' />
                            <img src={Vector} className='hidden xl:block h-50 relative -top-10' />
                            <h2 className='text-center font-[700] text-[#ffff] text-6xl hidden lg:block xl:absolute left-40 top-55 xl:rotate-340'>100% Organic <br /> pet food</h2>
                        </div>
                    </div>

                    <div className='hidden lg:block'><img src={Dog} /></div>
                </div>
            </header>
        </div>
    )
}

export default Header
