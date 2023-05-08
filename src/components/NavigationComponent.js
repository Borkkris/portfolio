import React from 'react';

const NavigationComponent = () => {
  return (

    <div className="px-0 sm:px-5 pt-5">
        <div className='flex justify-between pb-10 text-sm font-extrabold md:text-xl border-b'>
            <div className="flex">
                <button 
                    className='hover:underline rounded-xl'
                    onClick={()=>{}}>
                    <p>Christian Bork</p>
                </button>
            </div>

            <div>
                <button
                    className='hover:underline rounded-xl px-2'
                    onClick={()=>{}}>
                    <p>About me</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl px-2'
                    onClick={() => {
                    const element = document.getElementById("projects");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <p>Projects</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl px-2'
                    onClick={() => {
                    const element = document.getElementById("techstack");
                    element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p>Techstack</p>
                </button>
                <>|</>
                <button 
                    className='hover:underline rounded-xl px-2'
                    onClick={()=>{
                        const element = document.getElementById("contactform");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <p>Contact</p>
                </button>
            </div>
        </div>
    </div>

  )
}

export default NavigationComponent