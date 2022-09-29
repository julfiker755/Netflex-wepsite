import React from 'react';
import { GoPlay } from 'react-icons/go';

const Hero = () => {
    return (
        <div>
           <div className='relative overflow-hidden'>
           <img className='w-screen h-[600px]' src="https://assets-prd.ignimgs.com/2022/05/20/baymax-1653062894381.jpg" alt="" />
           </div>
           <div className="absolute top-40 left-[100px]">
            <h4 className='text-white text-[40px] font-bold'>Baymax 2.0!</h4>
            <button class="bg-blue-500  flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><GoPlay/>Watch Now</button>
           </div>
        </div>
    );
};

export default Hero;