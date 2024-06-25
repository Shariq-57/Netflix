import React from 'react';
import image from '../assets/image.png'
import Netflix_header from '../Netflix header/Netflix_header';
import Netflix_main from '../Netflix main/Netflix_main';

function Netflix_index() {
    return (
        <div>
            <div className='w-full h-screen' style={{ backgroundImage: `url("${image}")` }}>
                <Netflix_header></Netflix_header>
                <Netflix_main></Netflix_main>
            </div>

            {/* <div className='w-full h-screen' style={{ backgroundColor: 'black' }}>
                <h1 className='mx-10 text-red-300 text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in, delectus quam eaque sed quae expedita placeat similique alias inventore totam error voluptatem sequi excepturi, magni reiciendis, dolorum eius! Illum!</h1>
            </div> */}
        </div>
    )
}

export default Netflix_index