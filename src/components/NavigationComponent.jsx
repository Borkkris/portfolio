import React, { useState } from 'react';
import christian_bork_avatar from '../assets/christian_bork_avatar.JPG';
import HamburgerMenuComponent from './HamburgerMenuComponent';

import { FiArrowUp } from 'react-icons/fi';

const NavigationComponent = () => {

    const [ifClicked, setIfClicked] = useState(false);

    const handleClick = () => {
        setIfClicked(!ifClicked);
    };

    const handleCloseMenu = () => {
        setIfClicked(false);
    };

    const showScrollButton = () => {
        const scrollButton = document.getElementById('scrollButton');

        const scrollPosition = window.scrollY || window.pageYOffset;

        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const halfPageHeight = windowHeight * 2;

        if (scrollPosition >= halfPageHeight) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
    }
}

window.addEventListener('scroll', showScrollButton);

  return (

    <div>
        <div style={{backgroundColor:'#2A403D'}} className='fixed flex justify-between font-extrabold border-b w-full h-20 z-50'>

            <div className="px-3 flex justify-between">
                <img 
                    src={christian_bork_avatar} alt='christian' 
                    className='flex object-cover object-top max-h-full max-w-full rounded-full sm:left-0 p-3'/>
                <div className='flex items-center left-2 sm:m-0 m-3'>
                    <p className='tracking-wider text-2xl uppercase'>Christian <br/><span>Bork</span></p>
                </div>
            </div>

            <div className='md:flex-row lg:flex flex-wrap flex-1 justify-end sm:m-0 px-5 text-2xl hidden md:hidden sm:hidden'>
                
                <button
                    className='hover:underline rounded-xl tracking-wide'                   
                    onClick={()=> {
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
            </div>

            {/* hamburger menu */}
            <div 
                className="my-auto mx-7 space-y-2 lg:hidden  xl:hidden cursor-pointer"
                onClick={handleClick}>
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
            </div>

            {ifClicked && <HamburgerMenuComponent onCloseMenu={handleCloseMenu} />}

            <div>
                <button 
                    id='scrollButton' 
                    style={{ display: 'none'}}
                >
                    <FiArrowUp 
                        className='fixed w-10 h-10 m-2 bottom-36 -right-2 rounded-l-3xl bg-gray-600 active:bg-slate-400 opacity-80'
                        onClick={()=> {
                        const element = document.getElementById('intro');
                        element.scrollIntoView({behavior:'smooth'});
                    }} />
                </button>
            </div>

        </div>
    </div>

  )
}

export default NavigationComponent