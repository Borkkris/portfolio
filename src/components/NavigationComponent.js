import React from 'react';
import headerPic from '../assets/header_photo_kieron.png';
import avatar from '../assets/christian_bork_avatar.JPG';

const NavigationComponent = () => {
  return (

    <div className="bg-white w-auto">
        <div className='flex justify-between p-3 text-sm font-extrabold md:text-lg text-black border-b-2 border-yellow-700'>
            <div className="flex">
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
        <div className='sm:p-5'>
            <img 
                alt="header_pic_kieroń" 
                src={headerPic} 
                className='w-full object-contain'
            />
        </div>
    </div>

  )
}

export default NavigationComponent