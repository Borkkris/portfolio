import React from 'react';

import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import expressjs_logo from '../assets/TechStack/Expressjs.png';
import RNFirebase_logo from '../assets/TechStack/RNFirebase.png.svg';


const ContactComponent = () => {
  return (
    <div className='flex justify-center p-3 pb-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
      <div>
        <h1 className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>About me</h1>
        <p className='text-left w-5/6 p-3 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd 
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos et accusam et. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et. 
          </p>

          <h1 className='text-center py-12 pb-6 sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide border-black'>Experience</h1>
          <p className='p-3 w-4/6 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd 
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos et accusam et. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
          erat, sed diam voluptua.
          </p>

          <h1 className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>Skills</h1>
          <div className="flex justify-center">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border border-white bg-slate-200 px-20 py-2">MERN</th>
                  <th className="border border-white bg-slate-200 px-20 py-2">RNFirebase</th>
                  <th className="border border-white bg-slate-200 px-20 py-2">LEVEL</th>
                  <th className="border border-white bg-slate-200 px-20 py-2">logo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-10">
                    <img src={MongoDB_logo} alt="nodejs" className="h-16" />
                  </td>
                  <td className="flex justify-center px-4 py-10">
                    <img src={RNFirebase_logo} alt="nodejs" className="h-16" />
                  </td>
                  <td className="px-4 py-10"></td>
                  <td className="px-4 py-10"></td>
                </tr>
                <tr>
                  <td className="px-4 py-10">
                    <img src={expressjs_logo} alt="nodejs" className="h-16" />
                  </td>
                  <td className="px-4 py-10"></td>
                  <td className="px-4 py-10"></td>
                  <td className="px-4 py-10"></td>
                </tr>
                <tr>
                  <td className="px-4 py-10">
                    <img src={Reactjs_logo} alt="nodejs" className="h-16" />
                  </td>
                  <td className="px-4 py-10"></td>
                  <td className="px-4 py-10"></td>
                  <td className="px-4 py-10"></td>
                </tr>
                <tr>
                  <td className=" px-4 py-10">
                    <img src={Nodejs_logo} alt="nodejs" className="h-16" />
                  </td>
                  <td className=" px-4 py-10"></td>
                </tr>
                
              </tbody>
            </table>          

          </div>



          <h1 className='text-center py-12 pb-6 sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide border-black'>Goals</h1>
          <p className='p-3 w-4/6 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd 
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos et accusam et.
          </p>
      </div>
    </div>
  )
}

export default ContactComponent