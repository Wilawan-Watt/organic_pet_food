import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'
import DogStory from '../assets/images/Dog_Our story_section.png'

function Story() {
    return (
        <section>
            <div className="h-[80vh] flex justify-center items-center relative">
                <img src={DogStory} className='w-sm absolute -bottom-[5rem] left-0' />

                <div className="flex justify-between">
                    <h2 className='text-4xl font-bold'>OUR <br /> <span className='text-7xl font-bold text-[#2ea2d0]'>Story</span></h2>
                    <p className='max-w-[380px] ml-[5rem] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec  enas accumsan lacus vel facilisis. <br /><a href="#">Read more</a></p>
                    <img src={DogProduct} className='w-xs' />
                </div>
            </div>
        </section>
    )
}

export default Story
