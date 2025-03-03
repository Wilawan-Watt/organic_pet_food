import React from 'react'
import NavigationBar from './NavigationBar';
import Background from '../assets/images/Header Background.png';
import DogProduct from '../assets/images/Dog-Product.png'
import TextBox from '../assets/images/Text-box-1.png'
import Dog from '../assets/images/Dog-Header_section.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Header() {
    return (
        <div className="h-full lg:h-[85vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>

            <NavigationBar />

            <header>
                <div className='flex justify-center flex-col my-[3rem] relative lg:flex-row'>
                    <img src={DogProduct} className='lg:absolute top-[5rem] left-[0]' />

                    <div className='font-(family-name:--second-font) mt-[-3rem]'>
                        <h1 className='text-center font-[700] text-5xl my-[3rem] lg:my-[0]'>Help your dog maintain <br /> A <span className='text-[#0072a8]'>healthier weight</span> with</h1>
                        <img src={TextBox} className='hidden lg:block my-[1.5rem]' />
                        <img src={Vector} className='hidden lg:block absolute top-[3rem] left-[62%] translate-x-1/2' />
                        <img src={Vector} className='hidden lg:block scale-x-[-1] absolute top-[12rem] left-[30%]' />
                        <h2 className='hidden lg:block text-center font-[700] text-7xl text-[#0072a8] rotate-340 absolute top-[9rem] left-[40%]'>100% Organic <br /> pet food</h2>
                    </div>

                    <img src={Dog} className='hidden lg:block absolute right-[0] top-[-3.3rem]' />
                </div>
            </header>
        </div>
    )
}

export default Header
