import React from 'react';

import HTML_logo from '../assets/TechStack/HTML5.png';
import CSS_logo from '../assets/TechStack/CSS3.png';
import JS_logo from '../assets/TechStack/JS.webp';
import Tailwind_logo from '../assets/TechStack/Tailwindcss.png';
import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import Angular_logo from '../assets/TechStack/Angular.png';
import Expo_logo from '../assets/TechStack/Expo.png';

const TechstackComponent = () => {
  return (
    <div id='techstack' className='p-5'>
      <div className='flex flex-wrap justify-evenly'>
        <img src={HTML_logo} alt="HTML5" className='h-10 mx-2 my-1'/>
        <img src={CSS_logo} alt="CSS3" className='h-10 mx-2 my-1'/>
        <img src={JS_logo} alt="JS" className='h-10 mx-2 my-1'/>
        <img src={Tailwind_logo} alt="Tailwindcss" className='h-10 mx-2 my-1'/>
        <img src={Nodejs_logo} alt="Nodejs" className='h-10 mx-2 my-1'/>
        <img src={MongoDB_logo} alt="MongoDB" className='h-10 mx-2 my-1'/>
        <img src={Firebase_logo} alt="Firebase" className='h-10 mx-2 my-1'/>
        <img src={Reactjs_logo} alt="Reactjs" className='h-10 mx-2 my-1'/>
        <img src={Angular_logo} alt="Angular" className='h-10 mx-2 my-1'/>
        <img src={Expo_logo} alt="Expo" className='h-10 mx-2 my-1'/>
      </div>
    </div>
  )
}

export default TechstackComponent
