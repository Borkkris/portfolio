import React from 'react';


const ContactformComponent = () => {
  return (
    <div id='contactform'>
      <form className='w-full md:w-1/2 max-w-lg'>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full px-3'>
            <label className='block uppercase tracking-wide'>
              First Name
            </label>
            <input className='bg-slate-200 rounded appearance-none' type='text' name='name' placeholder="Jane" />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide'>
              Last Name
            </label>
            <input className='w-30 h5 bg-slate-200 rounded' type='text' name='lastname' placeholder="Doe" />
          </div>
        </div>
        <div className='flex flex-wrap mb-12'>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide'>
              Email
            </label>
            <input className='w-30 h5 bg-slate-200 rounded' type='email' name='Email' placeholder="janedoe@gmail.com" />
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 px-3 mb-3'>
            <label className='block uppercase tracking-wide'>
              Subject
            </label>
            <input className='w-30 h5 bg-slate-200 rounded' type='text' name='subject' />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide'>
              Message
            </label>
            <textarea className='h5 bg-slate-200 rounded' name='message' placeholder="type here..."/>
          </div>
        </div>
        <div className='px-3'>
          <button className="shadow bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactformComponent