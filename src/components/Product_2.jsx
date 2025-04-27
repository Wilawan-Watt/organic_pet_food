import React from 'react'
import Dog from '../assets/images/Dog_section2.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Product_2() {
  return (
    <section className='md:h-[70vh]'>
      <div className='flex justify-center items-center h-full flex-col my-10 md:flex-row mx-10'>
        <div>
            <h3 className='font-(family-name:--second-font) font-bold text-5xl mb-[1rem]'>The perfect start to life</h3>
            <p className='max-w-[500px] mb-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='uppercase'>Learn More</button>
        </div>

        <div className='flex mt-10'>
          <img src={Dog} className='w-70' />
          <img src={Vector} className='h-40 relative -left-10' />
        </div>
      </div>
    </section>
  )
}

export default Product_2
