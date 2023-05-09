import React from 'react';
import christian_bork_avatar from '../assets/christian_bork_avatar.JPG';


const NavigationComponent = () => {
  return (

    <div style={{backgroundColor:'#2A403D'}}>
        <div className='flex justify-between text-sm font-extrabold md:text-xl border-b p-0 sm:p-5'>
            <div className="flex">
                <img src={christian_bork_avatar} alt='christian' className='w-16 object-cover object-top sm:rounded-full sm:left-0 rounded-none sm:w-1/4 md:w-1/4 lg:1/4 xl:1/4 m-0 sm:m-3' />
                <button 
                    className='hover:underline rounded-xl tracking-wider text-2xl top-0 left-0 m-0 sm:m-3'
                    onClick={()=>{}}>
                    <p>Christian Bork</p>
                </button>
            </div>

            <div className='md:flex-col lg:flex-row flex flex-wrap w-2/4 justify-between sm:m-0 m-3'>
                <button
                    className='hover:underline rounded-xl tracking-wide text-2xl'
                    onClick={()=>{}}>
                    <p>About me</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide text-2xl'
                    onClick={() => {
                    const element = document.getElementById("projects");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <p style={{color:'#748B6F'}}> Projects</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide text-2xl'
                    onClick={() => {
                    const element = document.getElementById("techstack");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p> Techstack</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide text-2xl'
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