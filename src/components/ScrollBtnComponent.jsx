import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

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

const ScrollBtnComponent = () => {
  return (

            <div>
                <button 
                    id='scrollButton' 
                    style={{ display: 'none'}}
                >
                    <FiArrowUp 
                        className='fixed w-10 h-12 m-2 bottom-36 -right-2 rounded-l-3xl bg-gray-600 active:bg-slate-400 opacity-80'
                        onClick={()=> {
                        const element = document.getElementById('intro');
                        element.scrollIntoView({behavior:'smooth'});
                    }} />
                </button>
            </div>
  )
}

export default ScrollBtnComponent