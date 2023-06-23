import React from 'react';

import { SiHey } from 'react-icons/si';

const IntroComponent = () => {

  return (
    <div id='intro' className='px-10 py-24 w-screen h-screen uppercase tracking-wide'>
      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-6xl pb-6 md:pb-12 lg:pb-12 xl:pb-12 border-b md:leading-snug leading-tight'>
            <SiHey className='w-16 h-auto text-black py-3'/> 
            Hi there,<br></br> I'm Christian,<br></br> and I'm ...
        </h1>
      </div>

      <div>
          <p className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl pt-6 md:pt-12 lg:pt-12 xl:pt-12 leading-relaxed md:leading-loose lg:leading-loose xl:leading-loose">
              a certified <span style={{color:'black', fontWeight:'bolder'}}>full-stack web developer</span> with experience, 
              joy and passion for <span style={{color:'black', fontWeight:'bolder'}}>React</span> and other tools, 
              dedicated to crafting meticulous, customer-centric, and cutting-edge responsive products.
          </p>
      </div>
    </div>
  )
}

export default IntroComponent