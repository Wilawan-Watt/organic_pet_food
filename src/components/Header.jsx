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
                <div className='flex flex-col lg:flex-row justify-between items-end'>
                    <img src={DogProduct} className='relative top-[5rem]' />

                    <div className='font-(family-name:--second-font) flex-1 relative -top-10'>
                        <h1 className='text-center font-[700] text-5xl absolute -top-30 left-30'>Help your dog maintain <br /> A <span className='text-[#0072a8]'>healthier weight</span> with</h1>
                        <div className='flex relative -right-20'>
                            <img src={Vector} className='scale-x-[-1] absolute -left-25 top-15' />
                            <img src={TextBox} />
                            <img src={Vector} className='absolute right-5' />
                            <h2 className='text-center font-[700] text-6xl text-[#0072a8] absolute left-20 top-20 rotate-340'>100% Organic <br /> pet food</h2>
                        </div>
                    </div>

                    <div className='flex-1 flex items-end justify-end'><img src={Dog} className='w-[400px]' /></div>
                </div>
            </header>
        </div>
    )
}

export default Header
