import React from 'react'
import Dog from '../assets/images/Dog_section2.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Product_2() {
  return (
    <section className='h-[80vh] mb-[5rem]'>
      <div className='flex justify-center items-center h-full'>
        <div>
            <h3 className='font-(family-name:--second-font) font-bold text-5xl mb-[1rem]'>The perfect start to life</h3>
            <p className='max-w-[500px] mb-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='uppercase'>Learn More</button>
        </div>

        <div className='relative'>
          <img src={Dog} className='w-2xs' />
          <img src={Vector} className='absolute top-[0rem] right-[-3rem]' />
        </div>
      </div>
    </section>
  )
}

export default Product_2
