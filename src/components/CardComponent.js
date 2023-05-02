import React from 'react';


const CardComponent = ({project}) => {

  return (
    <div 
    className='p-5'
    onClick={()=>{}}>
        <div className='w-72 h-96 border border-yellow-700 bg-white
            rounded-2xl hover:text-white hover:bg-yellow-800 hover:bg-opacity-70 
            hover:scale-105 transition-transform duration-500
            cursor-pointer shadow-card hover:shadow-cardhover'
        >
            <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-72 object-cover rounded-t-2xl' />
            <div className='p-2'>
                <h1 className='font-extrabold text-md border-b '>{project.title}</h1>
                <p className='text-sm'>{project.description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardComponent