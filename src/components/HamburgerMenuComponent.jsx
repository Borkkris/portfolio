import React from 'react';

const HamburgerMenuComponent = ({ onCloseMenu }) => {

    const handleButtonClick = () => {
        onCloseMenu();
    };

  return (
    <div>
        <div 
        data-aos='fade-left'
        className='fixed top-0 right-0 bottom-0 w-screen flex flex-col justify-center align-middle h-screen md:w-auto text-3xl sm:p-0 md:px-10 lg:hidden xl:hidden z-50' 
        style={{backgroundColor:'#2A403D'}}>
            <button
                className='hover:underline rounded-xl tracking-wide'                   
                onClick={()=>{
                    const element = document.getElementById('about me');
                    element.scrollIntoView({behavior:'smooth'});
                    handleButtonClick();
                }}
            >
                <p>About me</p>
            </button>
                
            <button 
                className='hover:underline rounded-xl tracking-wide py-10'
                onClick={() => {
                    const element = document.getElementById("projects");                    
                    element.scrollIntoView({ behavior: "smooth" });
                    handleButtonClick();
                }}
            >
                <p style={{color:'#748B6F'}}> Projects</p>
            </button>
                
            <button 
                className='hover:underline rounded-xl tracking-wide'
                onClick={() => {
                    const element = document.getElementById("techstack");
                    element.scrollIntoView({ behavior: "smooth" });
                    handleButtonClick();
                }}
            >
                <p>Techstack</p>
            </button>
                
            <button 
                className='hover:underline rounded-xl tracking-wide py-10'
                onClick={()=>{
                    const element = document.getElementById("contactform");
                    element.scrollIntoView({ behavior: "smooth" });
                    handleButtonClick();
                }}
            >
                <p style={{color:'#748B6F'}}> Contact</p>
            </button>


            <div className='flex justify-center'>
                <button
                    className='border rounded-full w-16 h-16 text-xl'
                    onClick={() => handleButtonClick()}>
                    <p>X</p>
                </button>
            </div>
        </div>
    </div>
    )
}

export default HamburgerMenuComponent