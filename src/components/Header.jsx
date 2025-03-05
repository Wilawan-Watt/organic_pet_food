import React from 'react'
import NavigationBar from './NavigationBar';
import Background from '../assets/images/Header Background.png';
import DogProduct from '../assets/images/Dog-Product.png'
import TextBox from '../assets/images/Text-box-1.png'
import Dog from '../assets/images/Dog-Header_section.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Header() {
    return (
        <div className="h-full lg:h-[100vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>

            <NavigationBar />

            <header>
                <div className='flex justify-center items-center flex-col relative lg:flex-row]'>
                    <img src={DogProduct} className='lg:absolute top-10 left-0' />

                    <div className='font-(family-name:--second-font)'>
                        <h1 className='text-center font-[700] text-5xl lg:relative left-1/2 xl:left-0'>Help your dog maintain <br /> A <span className='text-[#0072a8]'>healthier weight</span> with</h1>
                        <div className='relative flex md:left-1/2 xl:left-0'>
                            <img src={TextBox} className='hidden lg:block absolute inset-y-10' />
                            <img src={Vector} className='hidden lg:block absolute left-85' />
                            <img src={Vector} className='hidden lg:block scale-x-[-1] absolute -left-25 top-25' />
                            <h2 className='hidden lg:block text-center font-[700] text-6xl text-[#0072a8] rotate-340 absolute top-25 left-10'>100% Organic <br /> pet food</h2></div>
                        </div>

                    <img src={Dog} className='hidden xl:block w-sm absolute right-0 top-10 2xl:w-[500px]' />
                </div>
            </header>
        </div>
    )
}

export default Header
