import React from 'react';

import { SiHey } from 'react-icons/si';

const IntroComponent = () => {

  return (
    <div id='intro' className='px-3 pt-24 pb-12 lg:px-10 w-screen h-screen'>
      <div className='flex flex-col'>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-6xl uppercase tracking-wider leading-loose md:py-8 px-16 pb-6'>
            <SiHey className='w-16 h-auto text-black py-3'/> 
            Hi there,<br></br> I'm Christian,<br></br> and I'm ...
        </h1>
      </div>

      <div>
          <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose px-16">
              a certified <span style={{color:'black', fontWeight:'bolder'}}>full-stack web developer</span> with experience, 
              joy and passion for <span style={{color:'black', fontWeight:'bolder'}}>React</span> and other tools, 
              dedicated to crafting meticulous, customer-centric, and cutting-edge responsive products.
          </p>
      </div>
    </div>
  )
}

export default IntroComponent