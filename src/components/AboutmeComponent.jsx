import React from 'react';

// icons
import { RiPlantLine } from 'react-icons/ri';
import { GiTeamIdea } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

// logos
import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import ExpressJs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';


const ContactComponent = () => {
  return (
    <div id='about me' className='flex justify-center p-3 pb-12 sm:pt-24 md:pt-32 lg:pt-42 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
      
      <div className="w-full max-w-screen-lg text-left text-lg md:text-xl lg:text-2xl xl:text-3xl lg:leading-loose xl:leading-loose">
        <div>
          <p>
            I was born in Berlin and was able to gain quite a bit of different experience over the last few years. <br />
            From gastronomy to media and science to the IT industry, I show a lot of interest and curiosity in many areas. <br />
            I gained a certain open mindedness during my paths through Canada and the USA, where I was inspired by nature, people and traveling. <br />

            After this trip, my return, caring for a relative, studying botany and working with plants, I longed for more creativity and flexibility. 
            This is how the inspiration came about to develop myself further and I can think of nothing better than web development in terms of combining these two things.           
          </p>
        </div>

        <div>
          <h1 
            className='text-3xl uppercase tracking-wide text-center py-12 pb-6 border-black'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            What I Value
          </h1>

          <div 
            data-aos='fade-zoom-in' 
            data-aos-duration='1800' 
            className="mx-3 xs:flex-col sm:flex md:flex lg:flex xl:flex">

            <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0" style={{borderColor: '#2A403D'}}>
              <RiPlantLine className="text-3xl" />
              <h1 className="text-2xl text-center">
                Open-mindedness and Honesty
              </h1>
            </div>

            <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0" style={{borderColor: '#2A403D'}}>
              <GiTeamIdea className="text-3xl" />
              <h1 className="text-2xl text-center">
                Team and Cohesion
              </h1>
            </div>

            <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0" style={{borderColor: '#2A403D'}}>
              <HiOutlineLightBulb className="text-3xl" />
              <h1 className="text-2xl text-center">
                Growth and Progress
              </h1>
            </div>

            <div className="w-11/12 mx-3 px-2 flex flex-col justify-center items-center border rounded-lg" style={{borderColor: '#2A403D'}}>
              <AiOutlineEye className="text-3xl" />
              <h1 className="text-2xl text-center">
                Precision and Quality
              </h1>
            </div>

          </div>
        </div>

        {/* Stack Skill card */}
        <div>
          <h1 
            className='text-3xl uppercase tracking-wide text-center py-12 pb-6' 
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            Stack Skill
          </h1>

          <div className='px-2 flex flex-col md:flex-row lg:flex-row xl:flex-row pb-7' >
            <div className='w-11/12 mx-3 border-2 rounded-lg mb-4 md:mb-0 lg:mb-0 xl:mb-0' style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
              <div 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'
              > 

                <h2 className='text-center uppercase tracking-wide border-b p-2' style={{borderColor: '#2A403D'}}>Mern</h2>

                <div className='p-2 flex flex-col items-center'>
                  <a 
                    href='https://www.mongodb.com/docs/' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={MongoDB_logo} 
                      alt='MongoDB'                     
                      className='w-52'/>
                  </a>
                  <a 
                    href='https://expressjs.com' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={ExpressJs_logo} 
                      alt='ExpressJS' 
                      className='w-52'/>
                  </a>
                  <a 
                    href='https://react.dev' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Reactjs_logo} 
                      alt='Reactjs' 
                      className='w-52'/>
                  </a>            
                  <a 
                    href='https://nodejs.org/en/docs' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Nodejs_logo} 
                      alt='Nodejs' 
                      className='w-52'/>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-11/12 mx-3 border-2 rounded-lg mb-4 sm:mb-0' style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
              <div  className='flex-col items-center'
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'> 
                <h2 className='text-center uppercase tracking-wide border-b p-2' style={{borderColor: '#2A403D'}}>RNFirebase</h2>
                <div className='p-2 flex flex-col items-center'>
                  <a 
                    href='https://reactnative.dev/docs/getting-started' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Reactjs_logo} 
                      alt='Reactjs' 
                      className='w-52'/>
                  </a>
                  <a 
                    href='https://firebase.google.com/docs?hl=de' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Firebase_logo} 
                      alt='Firebase' 
                      className='w-52'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

            <div 
              className='flex justify-center pt-6' 
              data-aos='fade-up' 
              data-aos-duration='1200'>
              <a href='https://drive.google.com/file/d/1HpkfHZZgBJzcDwuPdc8p1jCIUW6gdNlD/view?usp=sharing' target='_blank' rel='noreferrer noopener'>
                <button 
                  className='shadow focus:shadow-outline
                            border-black 
                            font-bold py-3 px-14 rounded-xl uppercase 
                            tracking-widest border hover:bg-slate-300' 
                  type='download'
                >
                  <p className='items-center flex p-2 text-extrabold text-2xl'>Resume <FiExternalLink className='ml-1 w-13' /> </p>
                  </button>
              </a>
            </div>

          <div>
            <h1 className='text-3xl uppercase tracking-wide text-center py-12 pb-6 border-black'>I'am looking for ... </h1>
            <div>
              <p className='text-3xl text-left '>
                an entry position as a Full-Stack-, Frontend- or Backend-Developer
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactComponent