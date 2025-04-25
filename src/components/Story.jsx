import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'
import DogStory from '../assets/images/Dog_Our story_section.png'
import Vector from '../assets/images/Vector Smart Object-1.png'

function Story() {
    return (
        <section>
            <div className='flex flex-col'>
                <div>
                    <img src={DogStory} className='sm:relative -top-20' />
                    <img src={Vector} className='hidden' />
                </div>

                <div className='mx-10'>
                    <h2 className='text-5xl font-bold relative -top-10'>OUR <br /> <span className='text-7xl font-bold text-[#2ea2d0]'>Story</span></h2>
                    <p className='text-2xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec  enas accumsan lacus vel facilisis. <br />
                    <span><a href="#" className='text-[#2ea2d0]'>Read more</a></span></p>
                    <img src={DogProduct} className='hidden' />
                </div>
            </div>
        </section>
    )
}

export default Story
