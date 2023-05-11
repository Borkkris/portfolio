import React from 'react';
import githubLogo from '../assets/github-logo.png';


const CardComponent = ({project}) => {

  return (
    <div 
      className='p-3 sm:p-5'
      onClick={()=>{}}
      data-aos="fade-zoom-in"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000"
    >
        <div className='w-auto h-full border text-black
            rounded-2xl hover:bg-opacity-70 
            hover:scale-105 transition-transform duration-500
            cursor-pointer shadow-card hover:shadow-cardhover'
            style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            onClick={() => window.open(project.demo, '_blank')}
            className='w-full h-72 object-cover object-top rounded-t-2xl' 
          />
            <div className='p-2'>
              <h1 className='uppercase tracking-wide font-extrabold text-lg border-b-2'>{project.title}</h1>
              <p className='text-sm'>{project.description}</p>

              {project.gitHub && (
              <div className="mt-2">
                <a 
                  href={project.gitHub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src={githubLogo} 
                    alt="GitHub" 
                    className="w-10"
                  />
                </a>
              </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default CardComponent