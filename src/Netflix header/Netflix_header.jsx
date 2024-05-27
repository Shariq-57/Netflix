import React from 'react';
import logo from '../Netflix img/logo.png'

function Netflix_header() {
    return (
        <>
            <div className='flex flex-wrap'>
                <img className='text-red-600 w-40 mt-7 ms-40' src={logo} alt="logo" />

                <div className='absolute end-40 my-8'>
                    <select className='px-6 py-1 border-2 border-white text-white rounded bg-transparent'>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    <button className='bg-red-600 ms-2 text-white px-4 py-1 h-9 hover:bg-red-500  rounded'>Sing in</button>
                </div>
            </div>
        </>
    )
}

export default Netflix_header;