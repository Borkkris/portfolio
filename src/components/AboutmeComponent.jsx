import React, { useState } from 'react';

// icons
import { RiPlantLine } from 'react-icons/ri';
import { GiTeamIdea } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// logos
import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import ExpressJs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';




const ContactComponent = () => {

  const [domainVisible, setDomainVisible] = useState(false);
  const [frameworksVisible, setFrameworksVisible] = useState(false);
  const [languageVisible, setLanguageVisible] = useState(false);
  const [areaVisible, setAreaVisible] = useState(false);

  const toggleDomainVisibility = () => {
    setDomainVisible(!domainVisible);
  }

  const toggleFrameworksVisibility = () => {
    setFrameworksVisible(!frameworksVisible);
  }

  const toggleLanguageVisibility = () => {
    setLanguageVisible(!languageVisible);
  }

  const toggleAreaVisibility = () => {
    setAreaVisible(!areaVisible);
  }
  
  return (
    <div id='about me' className='flex justify-center p-3 pb-6 sm:pt-12 md:pt-10 lg:pt-12 pt-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>

      <div className='w-full max-w-screen-lg text-left '>
        <h1 className='flex text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase leading-loose py-8'>About me</h1>
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
            className='text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase tracking-wider leading-loose text-center pb-3 pt-10'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            What I Value
          </h1>

          <div 
            data-aos='fade-zoom-in' 
            data-aos-duration='1800' 
            className='mx-3 xs:flex-col sm:flex md:flex lg:flex xl:flex'>

            <div className='w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center rounded-lg mb-4 sm:mb-0 bg-lime-100'>
              <RiPlantLine className='text-3xl' />
              <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center'>
                Open-mindedness and Honesty
              </h1>
            </div>

            <div className='w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center rounded-lg mb-4 sm:mb-0 bg-red-100' >
              <GiTeamIdea className='text-3xl' />
              <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center'>
                Team and Cohesion
              </h1>
            </div>

            <div className='w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center rounded-lg mb-4 sm:mb-0 bg-amber-100' >
              <HiOutlineLightBulb className='text-3xl' />
              <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center'>
                Growth and Progress
              </h1>
            </div>

            <div className='w-11/12 mx-3 px-3 py-2 flex flex-col justify-center items-center rounded-lg bg-sky-100' >
              <AiOutlineEye className='text-3xl' />
              <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl leading-loose text-center'>
                Precision and Quality
              </h1>
            </div>

          </div>
        </div>

        {/* Stack Skill card */}
        <div>
          <h1 
            className='text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase tracking-wider leading-loose text-center pb-3 pt-10 border-black' 
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='1000'>
            Stack Skill
          </h1>

          <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row'>
            <div 
              className='flex justify-center w-full mx-auto border rounded-lg mb-4 md:mb-0 lg:mb-0 xl:mb-0 border-slate-300' 
              style={{backgroundColor: '#e9e7e7'}}>
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
              className='flex justify-center w-full mx-auto border rounded-lg sm:mb-0 border-slate-300' 
              style={{backgroundColor: '#e9e7e7'}}>
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

         <div  
         className='w-full'
          data-aos='fade-up'
          data-aos-duration='1200'>
            <a 
              target='_blank'rel='noreferrer noopener'
              href='https://drive.google.com/file/d/18r2D84g5Ho3K-fhly2UOkazrr22K2uE5/view?usp=sharing' 
              className='block mx-auto rounded-xl p-6 bg-amber-200 border shadow-lg space-y-3 hover:bg-amber-200 hover:border-orange-500 active:bg-amber-300 mt-6'>
                <div className='flex flex-col items-center justify-center '>

                  <FiExternalLink className='w-8 h-auto ml-3'/>
                  <h1 className='text-black text-3xl font-semibold uppercase leading-loose'>Resume</h1>
                  
                </div>
              <p className='text-center text-black text-sm'>read & download</p>
            </a>
          </div> 

        {/* grid  */}
        <h1 
            className='text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase tracking-wider leading-loose text-center pb-3 pt-10 border-black' 
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine' 
            data-aos-duration='2000'>
            I'm currently looking for a position in:
          </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1 lg:gap-2 xl:gap-3 mb-5'>

          {/* domain */}
          <div 
            className='border rounded-xl p-3 text-white' 
            style={{backgroundColor:'#748B6F'}}
            data-aos='zoom-in'
            data-aos-duration='1800'>
              <h1 className='flex justify-between text-lg uppercase text-black font-bold border-b'>Domain: 
                <span className='text-white'>Web Dev</span>
              </h1>
            <div className='flex justify-center'>
              <FiChevronDown 
                className={`w-6 h-auto cursor-pointer text-black rounded-full bg-white mt-1 ${domainVisible ? 'hidden' : ''}`}
                onClick={toggleDomainVisibility} />
              <FiChevronUp 
                className={`w-6 h-auto cursor-pointer text-white rounded-full bg-black mt-1 ${!domainVisible ? 'hidden' : ''}`}
                onClick={toggleDomainVisibility} />
            </div>
            { domainVisible && (
            <ul 
              className='text-center list-none leading-loose mt-3'
              data-aos='fade-down'>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Full-Stack</li>
            </ul>
            )}
          </div>
          
          {/* frameworks */}
          <div
            className='border rounded-xl p-3 text-white' 
            style={{backgroundColor:'#748B6F'}} 
            data-aos='zoom-in' 
            data-aos-duration='1600'>
            
            <h1 
              className='flex justify-between text-lg uppercase text-black font-bold border-b'>Framework: 
                <span className='text-white'>modern</span>
              </h1>
            <div className='flex justify-center'>
              <FiChevronDown 
                className={`w-6 h-auto cursor-pointer text-black rounded-full bg-white mt-1 ${frameworksVisible ? 'hidden' : ''}`}
                onClick={toggleFrameworksVisibility}  />
              <FiChevronUp className={`w-6 h-auto cursor-pointer text-white rounded-full bg-black mt-1 ${!frameworksVisible ? 'hidden' : ''}`}
              onClick={toggleFrameworksVisibility} />
            </div>
            { frameworksVisible && (
            <ul 
              className='text-center list-none leading-loose mt-3'
              data-aos='fade-down'>
              <li>React</li>
              <li>React-Native</li>
              <li>Angular [next learning target]</li>
            </ul>
            )}
          </div>

          {/* languages */}
          <div 
            className='border rounded-xl p-3 text-white' 
            style={{backgroundColor:'#748B6F'}} 
            data-aos='zoom-in' 
            data-aos-duration='1400'>
              <h1 className=' flex justify-between text-lg uppercase text-black font-bold border-b'>Language: 
                <span className='text-white'>versatile</span>
              </h1>
            <div className='flex justify-center'>
              <FiChevronDown 
                className={`w-6 h-auto cursor-pointer text-black rounded-full bg-white mt-1 ${languageVisible ? 'hidden' : ''}`}
                onClick={toggleLanguageVisibility}/>
              <FiChevronUp 
                className={`w-6 h-auto cursor-pointer text-white rounded-full bg-black mt-1 ${!languageVisible ? 'hidden' : ''}`}
                onClick={toggleLanguageVisibility} />
            </div>
            {languageVisible && (
            <ul 
              className='text-center list-none leading-loose mt-3'
              data-aos='fade-down'>
              <li> HTML5</li>
              <li> CSS3</li>
              <li> JavaScript [learning TypeScript]</li>
            </ul>
            )}
          </div>

          {/* area */}
          <div 
            className='border rounded-xl p-3 text-white' 
            style={{backgroundColor:'#748B6F'}} 
            data-aos='zoom-in' 
            data-aos-duration='1200'>
              <h1 className='flex justify-between text-lg uppercase text-black font-bold border-b'>Area: 
                <span className='text-white'>diverse</span>
              </h1>
            <div className='flex justify-center'>
              <FiChevronDown className={`w-6 h-auto cursor-pointer text-black rounded-full bg-white mt-1 ${areaVisible ? 'hidden' : ''}`} onClick={toggleAreaVisibility} />
              <FiChevronUp className={`w-6 h-auto cursor-pointer text-white rounded-full bg-black mt-1 ${!areaVisible ? 'hidden' : ''}`} onClick={toggleAreaVisibility} />
            </div>
            {areaVisible && (
            <ul 
              className='text-center list-none leading-loose mt-3'
              data-aos='fade-down'>
              <li>Company Websites</li>
              <li>Mobile Development</li>
              <li>Social Networks</li>
              <li>Web applications</li>
              <li>E-Commerce</li>
            </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent