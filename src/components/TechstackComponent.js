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
import VSC_logo from '../assets/TechStack/VSC.png';

const TechstackComponent = () => {
  return (
    <div id='techstack' className='p-3 border-b bg-white py-3 sm:py-16'>
      <div className='flex flex-wrap justify-evenly'>

        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noopener noreferrer'>
          <img src={HTML_logo} alt="HTML5" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noopener noreferrer'>
          <img src={CSS_logo} alt="CSS3" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer'>
          <img src={JS_logo} alt="JS" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://v2.tailwindcss.com/docs' target='_blank' rel='noopener noreferrer'>
          <img src={Tailwind_logo} alt="Tailwindcss" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://nodejs.org/en/docs' target='_blank' rel='noopener noreferrer'>
          <img src={Nodejs_logo} alt="Nodejs" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://www.mongodb.com/docs/' target='_blank' rel='noopener noreferrer'>
          <img src={MongoDB_logo} alt="MongoDB" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://firebase.google.com/docs?hl=de' target='_blank' rel='noopener noreferrer'>
          <img src={Firebase_logo} alt="Firebase" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
          <img src={Reactjs_logo} alt="Reactjs" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://angular.io/docs' target='_blank' rel='noopener noreferrer'>
          <img src={Angular_logo} alt="Angular" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://docs.expo.dev' target='_blank' rel='noopener noreferrer'>
          <img src={Expo_logo} alt="Expo" className='h-16 mx-2 my-1'/>
        </a>
        <a href='https://code.visualstudio.com/docs' target='_blank' rel='noopener noreferrer'>
          <img src={VSC_logo} alt="VSC" className='h-16 mx-2 my-1'/>
        </a>

      </div>
    </div>
  )
}

export default TechstackComponent
