import React from 'react';
import { GoChevronRight } from "react-icons/go";

function Netflix_main() {
    return (
        <div>
            <div className='text-white font-extrabold text-6xl text-center mt-56'>
                Unlimited movies, <br /> TV shows and more
            </div>

            <div className='text-white font-bold text-xl text-center mt-6'>
                Starts at ₹149. Cancel anytime.
            </div>

            <div className='text-white text-center mt-6'>
                Ready to watch? Enter your email to create or restart your membership.
            </div>

            <div className='flex flex-wrap mt-4 absolute left-96'>
                <input type="text" className='bg-transparent ms-16 w-96 h-14 text-white ps-2 border-2 border-white rounded' placeholder='Email address' />

                <button type='button' className='text-white ms-2 w-60 bg-red-700 rounded'>
                    <h1 className='text-2xl font-bold flex ms-10'>Get Started
                        <span className='mt-1'><GoChevronRight /></span>
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default Netflix_main