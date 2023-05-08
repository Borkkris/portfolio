import React, { useState } from 'react';


const ContactformComponent = () => {

  const [message, setMessage] = useState('');
  const MAX_MESSAGE_LENGTH = 200;

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const messageLength = message.length;
  const messageLengthString = `${messageLength}/${MAX_MESSAGE_LENGTH}`;

  const maxMessageLength = () => {
    return (messageLength >= MAX_MESSAGE_LENGTH)
  }

  return (
    <div className='py-20' id='contactform'>

      <h1 className='font-extrabold text-xl justify-center flex'>Contact</h1>

      <div className='flex justify-center'>
        <form className='w-full max-w-lg py-6'>

          <div className='flex flex-wrap mb-6'>
            <div className='w-full md:w-1/2 mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 '>
                First Name
              </label>
              <input 
                className='appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='text' 
                name='name' 
                placeholder='Jane' />
            </div>
            <div className='w-full md:w-1/2 mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 '>
                Last Name
              </label>
              <input 
                className='appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='text' 
                name='lastname' 
                placeholder='Doe' 
              />
            </div>
          </div>

          <div className='flex flex-wrap mb-6'>
            <div className='w-full md:w-1/2 mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 '>
                Email
              </label>
              <input 
                className='appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='email' 
                name='Email' 
                placeholder='janedoe@gmail.com' 
              />
            </div>
            <div className='w-full md:w-1/2 mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 '>
                Telephone
              </label>
              <input 
                className='appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='tel' 
                name='telephone' 
                placeholder='1234567890' 
              />
            </div>
          </div>

          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 '>
                Subject
              </label>
              <input 
                className='appearance-none block w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='text' 
                name='subject' 
              />
            </div>
          </div>

          <div className='flex flex-wrap relative'>
            <div className='w-full mb-6 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2'>
                Message
              </label>
              <textarea 
                className='appearance-none block flex-grow h-full w-full bg-gray-200 text-gray-700 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                name='message' 
                placeholder='type here...'
                maxlength='200'
                value={message}
                onChange={handleChange}
                maxLength={MAX_MESSAGE_LENGTH}
              />
              {maxMessageLength()? <p className='pb-6 absolute right-2 -mt-3 text-red-600'>200/200</p> : <div className='pb-6 absolute right-2 -mt-3'>{messageLengthString}</div>}
              
            </div>
          </div>

          <div className='px-3 pt-12'>
            <button 
              className='shadow bg-sky-500 hover:bg-sky-600 focus:shadow-outline 
                        focus:outline-none text-white font-bold py-2 px-4 rounded' 
              type='button'
              onClick={()=>{}}
            >
              send
            </button>
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default ContactformComponent