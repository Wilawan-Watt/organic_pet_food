import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'

function FindProduct() {
  return (
    <section className='h-auto md:h-[70vh]'>
      <div className='flex justify-center items-center h-full flex-col my-10 md:my-10 lg:flex-row'>
        <div>
            <img src={DogProduct} className='w-sm mb-10 lg:mb-0' />
        </div>

        <div className='text-center mx-10 lg:text-start'>
            <h3 className='font-(family-name:--second-font) font-bold text-5xl mb-[2rem]'>Find the right food for your dog</h3>
            <p className='max-w-170 mb-[2rem]'>Each formula has been created to deliver nutrition tailored to your dog's health needs whatever their size, breed, age, or lifestyle.</p>
            <button className='uppercase'>View all</button>
        </div>
      </div>
    </section>
  )
}

export default FindProduct
