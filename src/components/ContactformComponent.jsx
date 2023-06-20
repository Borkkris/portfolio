import React from 'react';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import emailPropType from 'email-prop-type';

import githubLogo from '../assets/github-logo.png';
import linkedInLogo from '../assets/linkedIn_logo.png';

import {CiMail} from 'react-icons/ci';

// const config = require('../config/config')


const ContactformComponent = () => {

  // // useState's
  // const [name, setName] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');

  // // useState's Error
  // const [nameError, setNameError] = useState('');
  // const [lastnameError, setLastnameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [messageError, setMessageError] = useState('');

  // error handling if input is empty or too short
  // const validate = () => {

  //   let isRequired = true;

  //   let inappropriateWords = config.INAPPROPRIATE_WORDS;

  //   if (!name) {
  //     setNameError('This field is required');
  //     isRequired = false;
  //   } else if(name.length < 2) {
  //     setNameError('Name must be at least 2 characters long');
  //     isRequired = false;
  //   }

  //   if (!lastname) {
  //     setLastnameError('This field is required');
  //     isRequired = false
  //   } else if (lastname.length < 2) {
  //     setLastnameError('Last name must be at least 2 characters long');
  //     isRequired = false;
  //   }

  //   if (!email) {
  //     setEmailError('This field is required');
  //     isRequired = false;
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //     setEmailError('Invalid email address');
  //     isRequired = false;
  //   }

  //   if (!phone) {
  //     setPhoneError('');
  //     isRequired = false;
  //     } else if (phone.length < 10 || phone.length > 15) {
  //     setPhoneError('phone number must be 10 to 15 characters long');
  //     isRequired = false;
  //   } else if (!/^[0-9]+$/.test(phone)) {
  //     setPhoneError('phone number doesn\'t exists');
  //     isRequired = false;
  //   }

  //   if (!message) {
  //     setMessageError('');
  //     isRequired = false;
  //   } else if (inappropriateWords.test(message)) {
  //     setMessageError('Please use appropriate language');
  //     isRequired = false;
  //   }
  //     return isRequired;
  // }

  // logic for form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   validate();

  //   if (nameError || lastnameError || emailError) {
  //     return;
  //   }

    // const data = {
    //   name: name,
    //   lastname: lastname,
    //   email: email,
    //   phone: phone,
    //   message: message,
    // };

  //   fetch('https://formspree.io/f/xqjzqj', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //       console.log(data);
  //       setName('');
  //       setLastname('');
  //       setEmail('');
  //       setPhone('');
  //       setMessage('');
  //     })
  //   .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // textarea message logic
  // const MAX_MESSAGE_LENGTH = 200;
  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // }
  // const messageLength = message.length;
  // const messageLengthString = `${messageLength}/${MAX_MESSAGE_LENGTH}`;
  // const maxMessageLength = () => {
  //   return (messageLength >= MAX_MESSAGE_LENGTH)
  // }

  return (
    <div className='pb-10 pt-12' id='contactform' data-aos='fade-zoom-in' data-aos-duration='1800'>

      <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center uppercase leading-loose py-12'>Contact</h1>

      <div className='flex flex-1 justify-center items-center'>
          
          <div className='md:hidden sm:hidden lg:hidden hidden xl:flex flex-1 justify-center'>
            <a href='https://github.com/Borkkris' target='_blank' rel='noopener noreferrer'>
              <img src={githubLogo} alt='GitHub' className='w-12 m-3' data-aos='fade-right' data-aos-easing="ease-in-sine" data-aos-duration='1200'/>
            </a>
          </div>

        <div className='text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase leading-loose text-center'>

          <h2 className='p-2'>Christian Bork</h2>
          <p className='pb-6'>Berlin - Germany</p>
          <div className='flex flex-col items-center'> 
            <a className=' rounded-lg py-1 px-3 hover:text-black' href='mailto:christianbork.work@gmail.com'>
              <CiMail className='text-5xl'/>
            </a>
          </div>
          <p className='text-black text-xs uppercase leading-loose text-center mt-1'>christianbork.work<b>(at)</b>gmail.com</p>
          {/* <form className='w-full max-w-lg py-6'>

            <div className='flex flex-wrap mb-3'>

              <div className='w-full md:w-1/2 mb-3 md:mb-2 px-3'>
                <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                  First Name
                </label>
                <input 
                  className='text-black appearance-none block w-full bg-gray-200 
                            border border-gray-200 rounded py-3 px-4 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500' 
                  type='text' 
                  name='name' 
                  placeholder='Jane'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {nameError && <p className='text-red-500'>{nameError}</p>}
              </div>

              <div className='w-full md:w-1/2 md:mb-0 px-3'>
                <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                  Last Name
                </label>
                <input 
                  className='text-black appearance-none block w-full bg-gray-200 
                            border border-gray-200 rounded py-3 px-4 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500' 
                  type='text' 
                  name='lastname' 
                  placeholder='Doe' 
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
                {lastnameError && <p className='text-red-500'>{lastnameError}</p>}
              </div>

            </div>

            <div className='flex flex-wrap mb-3'>
              <div className='w-full md:w-1/2 md:mb-0 px-3 mb-3'>
                <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                  Email
                </label>
                <input 
                  className='text-black appearance-none block w-full bg-gray-200 
                            border border-gray-200 rounded py-3 px-4 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500' 
                  type='email' 
                  name='Email' 
                  placeholder='janedoe@gmail.com' 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {emailError && <p className='text-red-500'>{emailError}</p>}
              </div>

              <div className='w-full md:w-1/2 mb-3 md:mb-0 px-3'>
                <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                  Phone
                </label>
                <input 
                  className='text-black appearance-none block w-full bg-gray-200 
                            border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500' 
                  type='tel' 
                  name='phone' 
                  placeholder='1234567890' 
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                {phoneError && <p className='text-red-500'>{phoneError}</p>}
              </div>
            </div>

            <div className='flex flex-wrap relative'>
              <div className='w-full mb-3 md:mb-0 px-3'>
                <label className='block uppercase tracking-wide text-sm font-bold mb-2'>
                  Message
                </label>
                <textarea 
                  className='text-black appearance-none block flex-grow h-full w-full bg-gray-200 
                            border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500' 
                  name='message' 
                  placeholder='Enter your message...'
                  maxlength='200'
                  value={message}
                  onChange={handleChange}
                  maxLength={MAX_MESSAGE_LENGTH}
                />
                {maxMessageLength()? <p className='pb-6 absolute right-2 -mt-3 text-red-600'>200/200</p> : <div className='pb-6 absolute right-2 -mt-3'>{messageLengthString}</div>}           
                {messageError && <p className='text-red-500'>{messageError}</p>}
              </div>
            </div>
            
            <div className='px-3 pt-16'>
              <button 
                className='shadow focus:shadow-outline
                          focus:outline-none text-white 
                          font-bold py-2 px-4 rounded hover:text-black' 
                style={{backgroundColor: '#D05663'}}
                type='submit'
                onClick={handleSubmit}
              >
                submit
              </button>
            </div>

          </form> */}
        </div>

        <div className='md:hidden sm:hidden lg:hidden hidden xl:flex flex-1 justify-center'>
          <a href='https://www.linkedin.com/in/christian-bork-8a809b243/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedInLogo} alt='LinkedIn' className='w-12 m-3' data-aos='fade-left' data-aos-easing="ease-in-sine" data-aos-duration='1200'/>
          </a>
        </div>

      </div>

        <div className=' xl:hidden flex justify-center py-6'>
          <div className='flex justify-center'>
              <a href='https://github.com/Borkkris' target='_blank' rel='noopener noreferrer'>
                <img src={githubLogo} alt='GitHub' className='w-10 m-3' data-aos='fade-right' data-aos-easing="ease-in-sine" data-aos-duration='1000'/>
              </a>
            </div>
            <div className='flex justify-center'>
            <a href='https://www.linkedin.com/in/christian-bork-8a809b243/' target='_blank' rel='noopener noreferrer'>
              <img src={linkedInLogo} alt='LinkedIn' className='w-10 m-3' data-aos='fade-left' data-aos-easing="ease-in-sine" data-aos-duration='1000'/>
            </a>
          </div>
        </div>

    </div>
  )
}

export default ContactformComponent

// ContactformComponent.propTypes = {
//     contactform: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       lastname: PropTypes.string.isRequired,
//       email: emailPropType.isRequired,
//       phone: PropTypes.number.isRequired,
//       subject: PropTypes.string.isRequired,
//     }),
//   onContactform: PropTypes.func.isRequired,
// };