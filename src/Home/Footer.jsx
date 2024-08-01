import React from 'react';

const Footer = () => {
    return (
       <div className='bg-[#042C54]'>
         <div  className='mx-auto container text-animation '>
               <h1 className='flex justify-center pt-32 pb-3  text-6xl font-bold text-one'>Do you want to step in to the </h1>
               <h1 className='flex justify-center   text-6xl font-bold text-one'> future before others</h1>

              <div className='flex justify-center mt-16'>
              <button className='border  border-white-200 px-5 py-4 font-bold text-white'>
                 Request Early Access
               </button>
              </div>
        </div>
        {/* **** */}
        <div className='bg-[#042C54]'>
            <div className='container mx-auto mt-16 md:mt-28 pb-8 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold'>GPT-3</h1>
                    <h3 className='text-white mt-3'>Crechterwoord k12 182 DK Alknjkcb, All Rights Reserved</h3>
                </div>

                <div>
                    <ul>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Links</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Overons</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Social Media</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Counters</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Contact</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Company</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Terms & Conditions</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Privacy Policy</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Contact</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Get In Touch</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>Crechterwoord k12 182 DK Alknjkcb</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>5766764321</li>
                        <li className='text-white text-lg md:text-xl mb-2 md:mb-5'>info@payme.com</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-center mt-12 md:mt-24 pb-5'>
                <h2 className='text-white text-center text-sm md:text-base'>
                    @ 2022 GPT-3 Copyright, All Rights Are Reserved
                </h2>
            </div>
        </div>
       </div>
    );
};

export default Footer;