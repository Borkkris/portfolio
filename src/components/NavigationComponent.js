import React from 'react';

const NavigationComponent = () => {
  return (

    <div className="bg-white px-0 sm:px-5 pt-5">
        <div className='flex justify-between pb-10 text-sm font-extrabold md:text-xl text-black border-b'>
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
                    <p>Contact me</p>
                </button>

                <button 
                    id='dropdownMenuIconHorizontalButton' 
                    data-dropdown-toggle='dropdownDotsHorizontal' 
                    class='inline-flex items-center p-2 text-sm 
                        font-medium text-center text- bg-white 
                        rounded-lg hover:bg-gray-100 focus:ring-1 
                        focus:outline-none dark:text-black focus:ring-black 
                        dark:hover:bg-gray dark:bg-gray dark:focus:ring-gray-600' 
                        type='button'> 
                    <svg 
                        class='w-6 h-6' 
                        aria-hidden='true' 
                        fill='currentColor' 
                        viewBox='0 0 20 20' 
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                    </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="{experiences}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Experiences</a>
                    </li>
                    <li>
                        <a href="{projects}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
                    </li>
                    <li>
                        <a href="{techstack}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Techstack</a>
                    </li>
                    <li>
                        <a href="{contactform}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact me</a>
                    </li>
                    </ul>
                    <div class="py-2">
                    </div>
                </div>
            </div>
        </div>
        {/* <div>
            <img 
                alt="header_pic_kieroń" 
                src={headerPic} 
                className='w-full object-contain'
            />
        </div> */}
    </div>

  )
}

export default NavigationComponent