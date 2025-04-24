import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'
import DogStory from '../assets/images/Dog_Our story_section.png'
import Vector from '../assets/images/Vector Smart Object-1.png'

function Story() {
    return (
        <section>
            <div className='h-[60vh] flex justify-center items-center'>
                <div>
                    <img src={DogStory} className='w-md relative top-35' />
                    <img src={Vector} className='w-40 relative top-20 left-15' />
                </div>

                <div className='flex relative top-10'>
                    <h2 className='text-5xl font-bold relative -left-40'>OUR <br /> <span className='text-7xl font-bold text-[#2ea2d0]'>Story</span></h2>
                    <p className='max-w-150 relative -left-15'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec  enas accumsan lacus vel facilisis. <br />
                    <span><a href="#" className='text-[#2ea2d0]'>Read more</a></span></p>
                    <img src={DogProduct} className='w-xs relative -top-10 mr-30' />
                </div>
            </div>
        </section>
    )
}

export default Story
