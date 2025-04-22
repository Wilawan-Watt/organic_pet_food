import React from 'react'
import Dog from '../assets/images/Dog_section2.png'
import Vector from '../assets/images/Vector Smart Object-2.png'

function Product_2() {
  return (
    <section className='h-[80vh]'>
      <div className='flex justify-center items-center'>
        <div>
            <h3>The perfect start to life</h3>
            <p className='max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Learn More</button>
        </div>

        <img src={Dog} />
        <img src={Vector} />
      </div>
    </section>
  )
}

export default Product_2
