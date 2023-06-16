import React, { useState } from 'react';

import certificate from '../assets/certificate/CareerFoundry_Certificate_Christian Bork.png';

import { SiHey } from 'react-icons/si';

const IntroComponent = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  return (
    <div className='px-3 pt-28 pb-12 lg:px-10 w-screen h-full'>
        <h1 className='flex text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase md:py-8 pb-6'>
            <SiHey className='mr-3 w-20 h-auto text-black'/> 
            Hi there, I'm Christian and I'm ...
        </h1>

        <div>
            <p className="text-left text-lg md:text-xl  leading-loose">
                a certified <span style={{color:'black', fontWeight:'bolder'}}>full-stack web developer</span> with experience, joy and passion for <span style={{color:'black', fontWeight:'bolder'}}>React</span> and other tools, dedicated to crafting meticulous, customer-centric, and cutting-edge responsive products.
            </p>
        </div>

        <div>
            <img className='items-center cursor-zoom-in h-full rounded-md mt-10' src={certificate} alt='certificate_full_stack' onClick={handleClick} />

            {showModal && (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '9999',
            }}
            onClick={handleCloseModal}
          >
            <img
                data-aos='zoom-in'
                src={certificate}
                alt='certificate_full_stack'
                className='cursor-zoom-out items-center w-screen lg:w-2/3 rounded-md'
            />
          </div>
        )}
        </div>
    </div>
  )
}

export default IntroComponent