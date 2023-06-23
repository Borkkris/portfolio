import React from 'react';

import { SiHey } from 'react-icons/si';

const IntroComponent = () => {

  return (
    <div id='intro' className='px-3 md:px-3 lg:px-12 xl:px-16 py-24 w-screen h-max uppercase tracking-wide'>
      <div className='text-right md:text-left lg:text-left xl:text-left flex flex-row md:flex-col lg:md:flex-col xl:md:flex-col justify-between border-b pb-3 md:pb-12 lg:pb-12 xl:pb-12'>
        <SiHey className='w-24 h-auto text-black pr-3'/>
        <h1 className='text-2xl md:text-5xl lg:text-6xl xl:text-6xl  md:leading-snug'> 
            Hi there,<br></br> I'm Christian,<br></br> and I'm ...
        </h1>
      </div>

      <div>
          <p className="text-xl md:text-4xl lg:text-4xl xl:text-4xl pt-3 md:pt-12 lg:pt-12 xl:pt-12 leading-relaxed md:leading-relaxed lg:leading-loose xl:leading-loose">
              a certified <span style={{color:'black', fontWeight:'bolder'}}>full-stack web developer</span> with experience, 
              joy and passion for <span style={{color:'black', fontWeight:'bolder'}}>React</span> and other tools, 
              dedicated to crafting meticulous, customer-centric, and cutting-edge responsive products.
          </p>
      </div>
    </div>
  )
}

export default IntroComponent