import React, { useState } from 'react'
import DogLogo from '../assets/images/Dog-Logo.png'
import { FaBarsStaggered } from "react-icons/fa6";

function NavigationBar() {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav>
            <div className="mx-auto max-w-[1350px] relative flex flex-col p-10 lg:flex-row justify-between">
                <a href="#">
                    <img src={DogLogo} alt=""/>
                </a>

                <ul className=
                {`${!toggle ? 'hidden' : 'flex'} uppercase font-bold flex flex-col mt-[1rem] md:my-auto lg:flex lg:flex-row`}>
                    <li className='text-center my-[.5rem]'><a href="#">Shop for dog</a></li>
                    <li className='text-center my-[.5rem] md:mx-[1.2rem]'><a href="#">Shop for cat</a></li>
                    <li className='text-center my-[.5rem] md:mx-[1.2rem]'><a href="#">Our story</a></li>
                    <li className='text-center my-[.5rem]'><a href="#">Contact us</a></li>
                </ul>

                {/* Hamburger icon */}
                <FaBarsStaggered onClick={updateToggle} className='absolute right-8 top-8 text-3xl cursor-pointer lg:hidden' />
            </div>
        </nav>
    )
}

export default NavigationBar
