import React from 'react';

import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import ExpressJs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';


const ContactComponent = () => {
  return (
    <div id='about me' className='flex justify-center p-3 pb-12 sm:pt-24 md:pt-32 lg:pt-42 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
      <div>
        <h1 className='sm:text-lg md:text-lg lg:text-2xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>About me</h1>
        <p className='text-left w-5/6 p-3 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum.
          </p>

          <h1 className='sm:text-lg md:text-lg lg:text-2xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>Experience</h1>
          <p className='p-3 w-4/6 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd 
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua.
          </p>

          <div className='flex justify-center pt-6' data-aos='fade-up' data-aos-duration='1200'>
            <a href="https://drive.google.com/file/d/1r6mvomcqPThjGZikYb1QHHUY9iS5qcn9/view?usp=sharing" target="_blank" rel='noreferrer noopener'>
              <button 
                className='shadow focus:shadow-outline
                          focus:outline-none text-white 
                          font-bold py-3 px-14 rounded-xl uppercase 
                          tracking-widest border-2 hover:bg-transparent hover:text-black' 
                style={{backgroundColor: '#D05663'}}
                type='download'
              >
                 <p className='p-2 text-extrabold'>CV</p>       
                 </button>
            </a>
          </div>

          <h1 className='sm:text-lg md:text-lg lg:text-2xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6' data-aos='fade-up' data-aos-duration='1000' >Stack Skill</h1>

          <div className='p-3 flex justify-center bg-white' data-aos='fade-up' data-aos-duration='1300'>
            <div className='flex justify-center bg-slate-300 rounded-xl lg:w-1/3 md:w-1/2 sm:w-3/5' style={{backgroundColor: '#748B6F', borderColor: '#2A403D'}}>

              {/* 1. col */}
              <div className='flex flex-col items-center text-center'> 
                <div className="text-white uppercase tracking-wider py-4 px-6 w-full border-b">
                  MERN
                </div>
                <div className='h-full rounded-bl-xl flex flex-col justify-evenly' style={{backgroundColor: '#e9e7e7', borderColor: '#748B6F'}}>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://www.mongodb.com/docs/' target='_blank' rel='noopener noreferrer'>
                      <img src={MongoDB_logo} alt="MongoDB" className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://expressjs.com' target='_blank' rel='noopener noreferrer'>
                      <img src={ExpressJs_logo} alt="ExpressJS" className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt="Reactjs" className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://nodejs.org/en/docs' target='_blank' rel='noopener noreferrer'>
                      <img src={Nodejs_logo} alt="Nodejs" className='w-auto'/>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. col */}
              <div className='flex flex-col items-center text-center'>
                <div className="text-white uppercase tracking-wider py-4 px-6 w-full border-b">
                  RNFirebase
                </div>
                <div className='h-full rounded-br-xl border-l py-4 flex flex-col justify-evenly' style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
                  <div className=' px-6 flex justify-center' 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://reactnative.dev/docs/getting-started' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt="Reactjs" className='w-auto'/>
                    </a>
                  </div>
                  <div className=' px-6 flex justify-center' 
                                  data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <a href='https://firebase.google.com/docs?hl=de' target='_blank' rel='noopener noreferrer'>
                      <img src={Firebase_logo} alt="Firebase" className='w-auto'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactComponent