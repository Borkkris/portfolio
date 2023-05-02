import React from 'react';
import headerPic from '../assets/header_photo_kieron.png';

const NavigationComponent = () => {
  return (

    <div className="bg-white w-auto pb-20 pl-5 pr-5">
        <div className='flex justify-between text-sm font-extrabold md:text-lg text-black border-b'>
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
                    onClick={() => {
                    const element = document.getElementById("techstack");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p>Techstack</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl p-1 m-1'
                    onClick={()=>{
                        const element = document.getElementById("contactform");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p>Contact me</p>
                </button>
            </div>
        </div>
        <div>
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