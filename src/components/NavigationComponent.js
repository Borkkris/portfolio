import React from 'react';
import headerPic from '../assets/header_photo_kieron.png';

const NavigationComponent = () => {
  return (

    <div className="bg-white w-auto pb-5">
        <div className='flex justify-between p-3 text-sm font-extrabold md:text-lg text-black border-b'>
            <div className="flex">
                <button 
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{}}>
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
                    onClick={() => {
                    const element = document.getElementById("projects");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
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