import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';

const ContactformComponent = (props) => {

  // useState's
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  // useState's Error
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // error handling if input is empty or too short
  const validate = () => {

    let isRequired = true;

    if (!name) {
      setNameError('This field is required');
      isRequired = false;
    } else if(name.length < 2) {
      setNameError('Name must be at least 2 characters long');
      isRequired = false;
    }

    if (!lastname) {
      setLastnameError('This field is required');
      isRequired = false
    } else if (lastname.length < 2) {
      setLastnameError('Last name must be at least 2 characters long');
      isRequired = false;
    }

    if (!email) {
      setEmailError('This field is required');
      isRequired = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError('Invalid email address');
      isRequired = false;
    }
    return isRequired;
  }

  // logic for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    validate();

    if (nameError || lastnameError || emailError) {
      return;
    }

    const data = {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      message: message,
    };

    fetch('https://formspree.io/f/xqjzqj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
    .catch((error) => {
        console.log(error);
      });
  }

  // textarea message logic
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
    <div className='p-3 py-3 sm:py-16' id='contactform'>

      <h1 className='font-extrabold sm:text-md md:text-lg lg:text-xl xl:text-2xl justify-center flex'>Contact</h1>

      <div className='flex justify-center'>
        <form className='w-full max-w-lg py-6'>

          <div className='flex flex-wrap mb-3'>
            <div className='w-full md:w-1/2 mb-3 md:mb-2 px-3'>
              <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                First Name
              </label>
              <input 
                className='text-black appearance-none block w-full bg-gray-200 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                          focus:outline-none focus:bg-white focus:border-gray-500' 
                type='text' 
                name='name' 
                placeholder='Jane'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {nameError && <p className='text-red-500'>{nameError}</p>}
            </div>
            <div className='w-full md:w-1/2 mb-3 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                Last Name
              </label>
              <input 
                className='text-black appearance-none block w-full bg-gray-200 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
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
            <div className='w-full md:w-1/2 mb-3 md:mb-0 px-3'>
              <label className='block uppercase tracking-wide text-sm font-bold mb-2 '>
                Email
              </label>
              <input 
                className='text-black appearance-none block w-full bg-gray-200 
                          border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
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
              {maxMessageLength()? <p className='pb-6 absolute right-2 -mt-3 text-red-600'>200/200</p> : <div className='pb-6 absolute right-2 -mt-3'>{messageLengthString}</div>}            </div>
          </div>

          <div className='px-3 pt-12'>
            <button 
              className='shadow focus:shadow-outline
                        focus:outline-none text-white font-bold py-2 px-4 rounded' 
              style={{backgroundColor: '#D05663'}}
              type='submit'
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default ContactformComponent

ContactformComponent.propTypes = {
    contactform: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: emailPropType.isRequired,
      phone: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    }),
  onContactform: PropTypes.func.isRequired,
};