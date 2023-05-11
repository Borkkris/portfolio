import React from 'react';
import christian_bork_avatar from '../assets/christian_bork_avatar.JPG';


const NavigationComponent = () => {
  return (

    <div style={{backgroundColor:'#2A403D'}}>
        <div style={{backgroundColor:'#2A403D'}} className='flex fixed font-extrabold border-b w-full p-0 sm:p-3 z-10'>
            <div className="flex justify-start">
                <img src={christian_bork_avatar} alt='christian' className='w-16 object-cover object-top sm:rounded-full sm:left-0 rounded-none sm:w-1/6 md:w-1/6 lg:1/6 xl:1/6 m-0' />
                <div className='flex items-center left-2 sm:m-0 m-3'>
                    <p className='tracking-wider sm:m-3'>Christian Bork</p>
                </div>
            </div>

           

            <div className='md:flex-col lg:flex-row flex flex-wrap w-2/4 justify-around sm:m-0 m-3 text-xs sm:text-lg md:text-lg lg:text-xl xl:text-2xl'>
                <button
                    className='hover:underline rounded-xl tracking-wide '
                    onClick={()=>{}}>
                    <p>About me</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide '
                    onClick={() => {
                    const element = document.getElementById("projects");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <p style={{color:'#748B6F'}}> Projects</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide '
                    onClick={() => {
                    const element = document.getElementById("techstack");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p> Techstack</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide '
                    onClick={()=>{
                        const element = document.getElementById("contactform");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p style={{color:'#748B6F'}}> Contact</p>
                </button>
            </div>
        </div>
    </div>

  )
}

export default NavigationComponent