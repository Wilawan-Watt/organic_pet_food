import React from 'react'
import DogProduct from '../assets/images/Dog-Product.png'

function FindProduct() {
  return (
    <section className='h-[70vh]'>
      <div className='flex justify-center items-center h-full'>
        <div>
            <img src={DogProduct} className='w-sm' />
        </div>

        <div className='ml-10'>
            <h3 className='font-(family-name:--second-font) font-bold text-5xl mb-[2rem]'>Find the right food for your dog</h3>
            <p className='max-w-170 mb-[2rem]'>Each formula has been created to deliver nutrition tailored to your dog's health needs whatever their size, breed, age, or lifestyle.</p>
            <button className='uppercase'>View all</button>
        </div>
      </div>
    </section>
  )
}

export default FindProduct
