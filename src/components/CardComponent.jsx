import React from 'react';
import githubLogo from '../assets/github-logo.png';


const CardComponent = ({project}) => {

  return (
    <div 
      className='p-3 sm:p-5'
      onClick={()=>{}}
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-sine'
      data-aos-duration='1000'
    >
        <div className='w-auto h-full border text-black
            rounded-2xl hover:bg-opacity-70 
            
            cursor-pointer shadow-card hover:shadow-cardhover'
            style={{backgroundColor: '#e9e7e7', borderColor: '#2A403D'}}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            onClick={() => window.open(project.demo, '_blank')}
            className='w-full h-72 object-cover object-top rounded-t-2xl'
          />
          
            <div className='p-2 cursor-default'>
              <h1 className='uppercase tracking-wide font-extrabold text-lg border-b-2'>{project.title}</h1>
              <p className='px-1 text-sm rounded-md inline-block bg-white'><b>#</b>{project.description_1}</p>
              <p className='px-1 mx-1 text-sm rounded-md inline-block bg-white'><b>#</b>{project.description_2}</p>
              <p className='px-1 text-sm rounded-md inline-block bg-white'><b>#</b>{project.description_3}</p>

              <div className=' flex flex-row justify-between items-center mt-2'>
                
                <div className=' flex justify-between items-end'>
                  <div>
                    <a 
                      href={project.gitHub} 
                      target='_blankhttp://localhost:3001/static/media/project_pokedex.2c3d0e24553301ae310c.png' 
                      rel='noopener noreferrer'
                      className='p-1 inline-block border rounded-lg hover:bg-slate-300 bg-white'
                      style={{ borderColor: '#2A403D'}}
                    >
                      <button className='flex items-center text-md'>
                        <img 
                          src={githubLogo} 
                          alt='GitHub' 
                          className='w-6'
                        />
                        <p className='pl-2 uppercase'>Code</p>
                      </button>
                    </a>
                  </div>
                </div>

                <div>
                  <a 
                    href={project.demo}
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='p-1 inline-block border rounded-lg hover:bg-slate-300 bg-white'
                    style={{ borderColor: '#2A403D'}}
                  >
                    <button className='flex items-center text-md'>
                      <p className='pl-2 uppercase'>Live Demo</p>
                    </button>
                  </a>
                </div>

              </div>

            </div>
        </div>
    </div>
  )
}

export default CardComponent