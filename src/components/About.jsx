import React from 'react'
import Dog from '../assets/images/Dog_section3.png'
import { FaMagnifyingGlass } from "react-icons/fa6";

function About() {
    return (
        <section className='bg-[#f0f0f0] lg:h-[50vh]'>
            <div className='flex justify-between items-center h-full flex-col py-10 lg:flex-row mx-40'>
                <div className='mb-10 flex flex-col justify-center items-center'>
                    <h3 className='font-(family-name:--second-font) font-bold text-4xl mb-[2rem]'>Learn more about dog breeds</h3>

                    <form className="form relative w-full max-w-md mb-[2rem]">
                        <FaMagnifyingGlass className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <input className="pl-10 py-2 w-full border border-gray-300 rounded" placeholder="Search breeds here" required type="text" />
                    </form>

                    <button className='uppercase'>View all</button>
                </div>

                <div>
                    <img src={Dog} className='w-60 mx-5' />
                </div>

                <div className='flex flex-col justify-center items-center mt-10'>
                    <h3 className='font-(family-name:--second-font) font-bold text-4xl mb-[1rem]'>Thinking of getting a dog?</h3>
                    <p className='mb-[2rem] max-w-80 text-center'>There are many things you need to know before getting a dog.</p>
                    <button className='uppercase'>Learn more</button>
                </div>
            </div>
        </section>
    )
}

export default About
