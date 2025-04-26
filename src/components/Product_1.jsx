import React from 'react'
import Chicken from '../assets/images/Chicken Background.png'

function Product_1() {
    return (
        <section className='h-[50vh] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Chicken})` }}>
            <div className='flex justify-center items-center h-full'>
                <div className='text-center'>
                    <h2 className='font-(family-name:--second-font) font-bold text-4xl text-white'>Our no.1 Ingradient: <br /> <span className='text-6xl'>Real chicken & egg</span></h2>
                    <p className='mx-5 max-w-[750px] mt-[4rem] text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </section>
    )
}

export default Product_1
