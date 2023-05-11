import React from 'react';

import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import ExpressJs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';


const ContactComponent = () => {
  return (
    <div className='flex justify-center p-3 pb-12 sm:pt-24 md:pt-32 lg:pt-48 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
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

          <h1 className='sm:text-lg md:text-lg lg:text-2xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black' data-aos='fade-down' data-aos-duration='1000' >Stack Skill</h1>

          <div className='p-3 flex justify-center bg-white' data-aos='fade-up' data-aos-duration='1300'>
            <div className='flex justify-center bg-slate-300 rounded-xl border' style={{backgroundColor: '#748B6F', borderColor: '#2A403D'}}>

              {/* 1. col */}
              <div className='flex flex-col items-center text-center'> 
                <div className="text-white uppercase tracking-wider py-8 px-6 w-full border-b">
                  MERN
                </div>
                <div className='h-full rounded-bl-xl' style={{backgroundColor: '#e9e7e7', borderColor: '#748B6F'}}>
                  <div className='py-8 px-6 flex justify-center'>
                    <a href='https://www.mongodb.com/docs/' target='_blank' rel='noopener noreferrer'>
                      <img src={MongoDB_logo} alt="MongoDB" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                  <div className='py-8 px-6 flex justify-center'>
                    <a href='https://expressjs.com' target='_blank' rel='noopener noreferrer'>
                      <img src={ExpressJs_logo} alt="ExpressJS" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                  <div className='py-8 px-6 flex justify-center'>
                    <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt="Reactjs" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                  <div className='py-8 px-6 '>
                    <a href='https://nodejs.org/en/docs' target='_blank' rel='noopener noreferrer'>
                      <img src={Nodejs_logo} alt="Nodejs" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. col */}
              <div className='flex flex-col items-center text-center'>
                <div className="text-white uppercase tracking-wider py-8 px-6 w-full border-b">
                  RNFirebase
                </div>
                <div className='h-full rounded-br-xl border-l-2' style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
                  <div className='py-8 px-6 flex justify-center'>
                    <a href='https://reactnative.dev/docs/getting-started' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt="Reactjs" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                  <div className='py-8 px-6 flex justify-center'>
                    <a href='https://firebase.google.com/docs?hl=de' target='_blank' rel='noopener noreferrer'>
                      <img src={Firebase_logo} alt="Firebase" className='sm:h-12 md:h-16 lg:h-16 xl:h-20'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center pt-12' data-aos='fade-up' data-aos-duration='1000'>
            <a href="https://drive.google.com/file/d/1r6mvomcqPThjGZikYb1QHHUY9iS5qcn9/view?usp=sharing" target="_blank" rel='noreferrer noopener'>
              <button 
                className='shadow focus:shadow-outline
                          focus:outline-none text-white 
                          font-bold py-4 px-6 rounded uppercase 
                          tracking-widest border-2 hover:bg-transparent hover:text-black' 
                style={{backgroundColor: '#D05663'}}
                type='download'
              >
                resume 
              </button>
            </a>
          </div>

      </div>
    </div>
  )
}

export default ContactComponent