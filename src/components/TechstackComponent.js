import React from 'react';

import HTML_logo from '../assets/TechStack/HTML5.png';
import CSS_logo from '../assets/TechStack/CSS3.png';
import JS_logo from '../assets/TechStack/JS.webp';
import Tailwind_logo from '../assets/TechStack/Tailwindcss.png';
import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import Expo_logo from '../assets/TechStack/Expo.png';

const TechstackComponent = () => {
  return (
    <div id='techstack' className='flex overflow-hidden p-5'>
      <div className='animate-marquee flex'>
        <img src={HTML_logo} alt="HTML5" className='mr-10 h-28' />
        <img src={CSS_logo} alt="CSS3" className='mr-10 h-28' />
        <img src={JS_logo} alt="JS" className='mr-10 h-28' />
        <img src={Tailwind_logo} alt="Tailwindcss" className='mr-10 h-28' />
        <img src={Nodejs_logo} alt="Nodejs" className='mr-10 h-28' />
        <img src={MongoDB_logo} alt="MongoDB" className='mr-10 h-28' />
        <img src={Firebase_logo} alt="Firebase" className='mr-14 h-28' />
        <img src={Reactjs_logo} alt="Reactjs" className=' h-28' />
        <img src={Expo_logo} alt="Expo" className=' h-28' />
        <img src={HTML_logo} alt="HTML5" className='mr-10 h-28' />
        <img src={CSS_logo} alt="CSS3" className='mr-10 h-28' />
        <img src={JS_logo} alt="JS" className='mr-10 h-28' />
        <img src={Tailwind_logo} alt="Tailwindcss" className='mr-10 h-28' />
        <img src={Nodejs_logo} alt="Nodejs" className='mr-10 h-28' />
      </div>
    </div>
  )
}

export default TechstackComponent