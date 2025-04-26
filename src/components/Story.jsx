import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'
import DogStory from '../assets/images/Dog_Our story_section.png'
import Vector from '../assets/images/Vector Smart Object-1.png'

function Story() {
    return (
        <section>
            <div className='flex lg:flex-row my-15 xl:my-10 xl:justify-center items-center'>
                <div className=''>
                    <img src={DogStory} className='xl:w-lg relative top-50' />
                    <img src={Vector} className='hidden lg:block w-40 xl:relative top-35 left-15' />
                </div>

                <div className='mx-10 xl:flex'>
                    <h2 className='text-5xl font-bold mb-10'>OUR <br /> <span className='text-7xl font-bold text-[#2ea2d0]'>Story</span></h2>
                    <p className='text-2xl max-w-150 xl:mx-10 max-w-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec  enas accumsan lacus vel facilisis. <br />
                    <span><a href="#" className='text-[#2ea2d0]'>Read more</a></span></p>
                    <img src={DogProduct} className='hidden xl:block xl:w-xs' />
                </div>
            </div>
        </section>
    )
}

export default Story
