import React from 'react';

import { SiHey } from 'react-icons/si';

const IntroComponent = () => {
  return (
    <div className='pt-32 px-10 w-screen h-screen'>
        <h1 className='flex text-3xl uppercase md:py-8 pb-6'>
            <SiHey className='mr-3 w-10 text-black' /> 
            Hi there, I'm Christian and I'm ...
          </h1>

          <div>
            <div>
                <p className="text-left text-3xl leading-loose">

                    a certified <span style={{color:'black', fontWeight:'bolder'}}>full-stack web developer</span> with experience, joy and passion for <span style={{color:'black', fontWeight:'bolder'}}>React</span> and other tools, dedicated to crafting meticulous, customer-centric, and cutting-edge responsive products.
                    
                </p>
            </div>
          </div>
    </div>
  )
}

export default IntroComponent