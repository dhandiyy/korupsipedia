import React from 'react';

const Footer = () => {
    return (
        <div className='bg-custom-bg-dark flex flex-col items-center justify-center px-4 py-6 text-center text-white text-[10px] md:text-xs xl:text-[18px]'>
            <p className='font-extrabold text-center'>Berbuat baik-lah agar tidak bertemu para koruptor di Neraka!</p>
            <p className='my-4'>Database ini berisi informasi tentang kasus-kasus korupsi besar di  Indonesia. Data dikumpulkan dari berbagai sumber resmi dan media</p>
            <p>Created by <span className='font-extrabold'>rakyat sipil</span></p> 
        </div>
    );
};

export default Footer;