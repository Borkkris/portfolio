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
    <div id='about me' className='flex justify-center p-3 pb-6 sm:pt-12 md:pt-10 lg:pt-12 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>

      <div className="w-full max-w-screen-lg text-left ">
        <h1 className='flex text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase leading-loose py-12'>About me</h1>
        <div>
          <p className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose'>
            I was born in Berlin and was able to gain quite a bit of different experience over the last few years. <br />

            From gastronomy to media and science to the IT industry, I show a lot of interest and curiosity in many areas. <br /> <br />
            I gained a certain open mindedness during my paths through Canada and the USA, where I was inspired by nature, people and traveling. <br /><br />

            After this trip, my return, caring for a relative, studying botany and working with plants, I longed for more creativity and flexibility. 
            This is how the inspiration came about to develop myself further and I can think of nothing better than web development in terms of combining these two things.           
          </p>
        </div>

        <div id='values'>
          <h1 
            className='text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase tracking-wider leading-loose text-center py-12 pb-6 border-black'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            What I Value
          </h1>

          <div 
            data-aos='fade-zoom-in' 
            data-aos-duration='1800' 
            className="mx-3 xs:flex-col sm:flex md:flex lg:flex xl:flex">

            <div 
              className="w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0 bg-lime-100" 
              style={{backgroundColor: '', borderColor: '#2A403D'}}>
              <RiPlantLine className="text-3xl" />
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center">
                Open-mindedness and Honesty
              </h1>
            </div>

            <div 
              className="w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0 bg-red-100" 
              style={{borderColor: '#2A403D'}}>
              <GiTeamIdea className="text-3xl" />
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center">
                Team and Cohesion
              </h1>
            </div>

            <div 
              className="w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center border rounded-lg mb-4 sm:mb-0 bg-amber-100" 
              style={{borderColor: '#2A403D'}}>
              <HiOutlineLightBulb className="text-3xl" />
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center">
                Growth and Progress
              </h1>
            </div>

            <div 
              className="w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center border rounded-lg bg-sky-100" 
              style={{ borderColor: '#2A403D'}}>
              <AiOutlineEye className="text-3xl" />
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center">
                Precision and Quality
              </h1>
            </div>

          </div>
        </div>

        {/* Stack Skill card */}
        <div>
          <h1 
            className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center py-12 pb-6' 
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            Stack Skill
          </h1>

          <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row pb-7'>
            <div 
              className='flex justify-center w-11/12 mx-auto border rounded-lg mb-4 md:mb-0 lg:mb-0 xl:mb-0' 
              style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
              <div 
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'
              >
                <h2 
                  className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center border-b p-0 md:p-4 lg:p-4 xl:p-4' 
                  style={{borderColor: '#2A403D'}}>Mern</h2>

                <div className='p-6 flex flex-col items-center'>
                  <a 
                    href='https://www.mongodb.com/docs/' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={MongoDB_logo} 
                      alt='MongoDB'                     
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>
                  <a 
                    href='https://expressjs.com' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={ExpressJs_logo} 
                      alt='ExpressJS' 
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>
                  <a 
                    href='https://react.dev' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Reactjs_logo} 
                      alt='Reactjs' 
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>            
                  <a 
                    href='https://nodejs.org/en/docs' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Nodejs_logo} 
                      alt='Nodejs' 
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>
                </div>
              </div>
            </div>

            <div 
              className='flex justify-center w-11/12 mx-auto border rounded-lg mb-4 sm:mb-0' 
              style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}>
              <div  className='flex-col items-center'
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='1000'> 
                <h2 className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center border-b p-0 md:p-4 lg:p-4 xl:p-4' style={{borderColor: '#2A403D'}}>RNFirebase</h2>
                <div className='p-6 flex flex-col items-center'>
                  <a 
                    href='https://reactnative.dev/docs/getting-started' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Reactjs_logo} 
                      alt='Reactjs' 
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>
                  <a 
                    href='https://firebase.google.com/docs?hl=de' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                      src={Firebase_logo} 
                      alt='Firebase' 
                      className='w-40 md:w-52 lg:w-52 xl:w-52'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className='text-black rounded-xl px-5 my-12 font-extrabold tracking-wider leading-loose py-3' style={{backgroundColor:'#748B6F'}}>
            <h1 className='text-black bg-white rounded-lg px-2 text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-10 max-w-fit'>I'am looking for:</h1>
            <div className='flex flex-col py-3'>

              <div className='pb-6'>
                <p className='text-xl md:text-xl lg:text-2xl xl:text-2xl leading-loose '>
                  <span className='text-black bg-white rounded-lg px-2 uppercase'>domain:</span> 
                </p>
                <ul>
                  <li>Frontend Web Development</li>
                  <li>Backend Web Development</li>
                  <li>Full-Stack Web Development</li>
                </ul>
              </div>

              <div className='pb-6'>
                <p className='text-xl md:text-xl lg:text-2xl xl:text-2xl leading-loose '>
                  <span className='text-black bg-white rounded-lg px-2 uppercase'>frameworks/libraries:</span> 
                </p>
                <ul>
                  <li>React</li>
                  <li>React-Native</li>
                </ul>
              </div>

              <div className='pb-6'>
                <p className='text-xl md:text-xl lg:text-2xl xl:text-2xl leading-loose '>
                  <span className='text-black bg-white rounded-lg px-2 uppercase'>languages:</span>
                </p>
                <ul>
                  <li> HTML5</li>
                  <li> CSS3</li>
                  <li> JavaScript (TypeScript)</li>
                </ul>
              </div>

              <div>
                <p className='text-xl md:text-xl lg:text-2xl xl:text-2xl leading-loose '>
                  <span className='text-black bg-white rounded-lg px-2 uppercase'>area:</span> 
                </p>
                <ul>
                  <li>Company Websites</li>
                  <li>Mobile Development</li>
                  <li>Social Networks</li>
                  <li>Web applications</li>
                  <li>E-Commerce</li>
                </ul>
              </div>

            </div>

            <div  
            data-aos='fade-up'
            data-aos-duration='1200'>
            <a 
              href="https://drive.google.com/file/d/1HpkfHZZgBJzcDwuPdc8p1jCIUW6gdNlD/view?usp=sharing" 
              className="block max-w-xs mx-auto rounded-xl p-6 bg-white border shadow-lg space-y-3 hover:bg-amber-100 hover:border-orange-500 active:bg-amber-200">
              <div className="flex items-center justify-center space-x-3">
                <h1 className="text-black text-3xl font-semibold uppercase leading-loose">Resume</h1>
                <FiExternalLink />
              </div>
              <p className="text-center text-black text-sm">read/ download my resume</p>
            </a>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ContactComponent