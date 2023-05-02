import React from 'react';
import headerPic from '../assets/header_photo_kieron.png';

function NavigationComponent() {
  return (

    <div className=" bg-gray-600 w-auto">
        <div className='flex justify-between p-3 border-b text-lg text-amber-50'>
            <div>
                <button className='hover:underline rounded-xl p-1 m-1'>
                    <p>Christian Bork</p>
                </button>
            </div>
            <div>
                <button
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{}}>
                    <p>Experiences</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{}}>
                    <p>Projects</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{}}>
                    <p>Techstack</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{}}>
                    <p>Contact me</p>
                </button>
            </div>
        </div>
        <div className='m-3 pb-3'>
            <img 
                alt="header_pic_kieron" 
                src={headerPic} 
                className='w-full object-contain rounded-md border'
            />
        </div>
    </div>

  )
}

export default NavigationComponent