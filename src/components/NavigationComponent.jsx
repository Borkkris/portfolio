import React from 'react';
import christian_bork_avatar from '../assets/christian_bork_avatar.JPG';

const NavigationComponent = () => {

  return (

    <div style={{backgroundColor:'#2A403D'}}>
        <div style={{backgroundColor:'#2A403D'}} className='flex fixed font-extrabold border-b w-full h-24 z-50'>
            <div className="border-r-2 px-3 flex justify-between">
                <img 
                    src={christian_bork_avatar} alt='christian' 
                    className='flex object-cover object-top max-h-full max-w-full rounded-full sm:left-0 p-3'/>
                <div className='flex items-center left-2 sm:m-0 m-3'>
                    <p className='tracking-wider text-2xl uppercase'>Christian <span style={{color:'#748B6F'}}>Bork</span></p>
                </div>
            </div>

           

            <div className='md:flex-row lg:flex flex-wrap flex-1 justify-end sm:m-0 px-5 text-2xl md:hidden sm:hidden'>
                
                <button
                    className='hover:underline rounded-xl tracking-wide'                   
                    onClick={()=>{
                        const element = document.getElementById('about me');
                        element.scrollIntoView({behavior:'smooth'});
                    }}
                >
                    <p>About me</p>
                </button>
                
                <button 
                    className='hover:underline rounded-xl tracking-wide px-6'
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
                    className='hover:underline rounded-xl tracking-wide px-6'
                    onClick={()=>{
                        const element = document.getElementById("contactform");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p style={{color:'#748B6F'}}> Contact</p>
                </button>
                
                {/* hamburger menu */}

            </div>
        </div>
    </div>

  )
}

export default NavigationComponent