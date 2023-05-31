import React from 'react';

// icons
import { RiPlantLine } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { SiHey } from 'react-icons/si';

// logos
import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import ExpressJs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';


const ContactComponent = () => {
  return (
    <div id='about me' className='flex justify-center p-3 pb-12 sm:pt-24 md:pt-32 lg:pt-42 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
      
      <div className="w-full max-w-screen-lg">
          <h1 className='flex text-2xl uppercase py-8 pb-6'>
            <SiHey className='mr-3' /> 
            Hi there, I'm Christian and I'm ...
          </h1>

          <div>
            <div className="w-full">
                <p className="text-left text-3xl leading-loose">

                    a certified <b>full-stack web developer</b> with experience in <b>React</b> and a focus on detail, customer oriented, modern, responsive products.
                    <br />
                    <br />
                    I was born in Berlin and was able to gain quite a bit of different experience over the last few years. <br />
                    From gastronomy to media and science to the IT industry, I show a lot of interest and curiosity in many areas. <br />
                    I gained a certain open mindedness during my paths through Canada and the USA, where I was inspired by nature, people and traveling. <br />

                    After this trip, my return, caring for a relative, studying botany and working with plants, I longed for more creativity and flexibility. 
                    This is how the inspiration came about to develop myself further and I can think of nothing better than web development in terms of combining these two things.
                    
                </p>
            </div>
          </div>

          <div>
            <h1 className='text-3xl uppercase tracking-wide text-center py-12 pb-6 border-black'>
              What I Value
            </h1>

            <div className="mx-3 p-3 xs:flex-col sm:flex md:flex lg:flex xl:flex">

              <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border-2 rounded-xl mb-4 sm:mb-0">
                <RiPlantLine className="text-3xl" />
                <h1 className="text-2xl text-center">
                  Open-mindedness and Honesty
                </h1>
              </div>

              <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border-2 rounded-xl mb-4 sm:mb-0">
                <GiTeamIdea className="text-3xl" />
                <h1 className="text-2xl text-center">
                  Team and Cohesion
                </h1>
              </div>

              <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border-2 rounded-xl mb-4 sm:mb-0">
                <HiOutlineLightBulb className="text-3xl" />
                <h1 className="text-2xl text-center">
                  Growth and Progress
                </h1>
              </div>

              <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border-2 rounded-xl">
                <AiOutlineEye className="text-3xl" />
                <h1 className="text-2xl text-center">
                  Precision and Quality
                </h1>
              </div>

            </div>
          </div>

         

          <h1 className='text-3xl uppercase tracking-wide text-center py-12 pb-6' data-aos='fade-up' data-aos-duration='1000'>
            Stack Skill
          </h1>

          <div className='p-3 flex justify-center bg-white' data-aos='fade-up' data-aos-duration='1300'>
            <div className='flex justify-center bg-slate-300 rounded-xl lg:w-3/4 md:w-3/4 sm:w-3/4' style={{backgroundColor: '#748B6F', borderColor: '#2A403D'}}>

              {/* 1. col */}
              <div className='flex flex-col items-center text-center'> 
                <div className='text-white uppercase tracking-wider py-4 px-6 w-full border-b'>
                  MERN
                </div>
                <div className='h-full rounded-bl-xl flex flex-col justify-evenly' style={{backgroundColor: '#e9e7e7', borderColor: '#748B6F'}}>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://www.mongodb.com/docs/' target='_blank' rel='noopener noreferrer'>
                      <img src={MongoDB_logo} alt='MongoDB' className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://expressjs.com' target='_blank' rel='noopener noreferrer'>
                      <img src={ExpressJs_logo} alt='ExpressJS' className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt='Reactjs' className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center sm:py-2 py-4' 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://nodejs.org/en/docs' target='_blank' rel='noopener noreferrer'>
                      <img src={Nodejs_logo} alt='Nodejs' className='w-auto'/>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. col */}
              <div className='flex flex-col items-center text-center'>
                <div className='text-white uppercase tracking-wider py-4 px-6 w-full border-b'>
                  RNFirebase
                </div>
                <div className='h-full rounded-br-xl border-l py-4 flex flex-col justify-evenly' style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
                  <div className=' px-6 flex justify-center' 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://reactnative.dev/docs/getting-started' target='_blank' rel='noopener noreferrer'>
                      <img src={Reactjs_logo} alt='Reactjs' className='w-auto'/>
                    </a>
                  </div>
                  <div className='px-6 flex justify-center' 
                                  data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'>
                    <a href='https://firebase.google.com/docs?hl=de' target='_blank' rel='noopener noreferrer'>
                      <img src={Firebase_logo} alt='Firebase' className='w-auto'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className='flex justify-center pt-6' data-aos='fade-up' data-aos-duration='1200'>
              <a href='https://drive.google.com/file/d/1HpkfHZZgBJzcDwuPdc8p1jCIUW6gdNlD/view?usp=sharing' target='_blank' rel='noreferrer noopener'>
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

          <div>
            <h1 className='text-3xl uppercase tracking-wide text-center py-12 pb-6 border-black'>What I'am looking for</h1>
          </div>
      </div>
    </div>
  )
}

export default ContactComponent