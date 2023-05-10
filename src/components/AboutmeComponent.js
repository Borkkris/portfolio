import React from 'react';

import Nodejs_logo from '../assets/TechStack/Nodejs.png';
import MongoDB_logo from '../assets/TechStack/MongoDB.png';
import Reactjs_logo from '../assets/TechStack/Reactjs.png';
import expressjs_logo from '../assets/TechStack/Expressjs.png';
import Firebase_logo from '../assets/TechStack/Firebase.png';


const ContactComponent = () => {
  return (
    <div className='flex justify-center p-3 pb-12 text-black bg-white sm:text-md md:text-lg lg:text-xl xl:text-xl'>
      <div>
        <h1 className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>About me</h1>
        <p className='text-left w-5/6 p-3 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum.
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
          aliquyam erat, sed diam voluptua.
          </p>

          {/* Stack Skill Table */}
          <h1 className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide text-center py-12 pb-6 border-black'>Stack Skills</h1>
          <div className="flex justify-center">
            <table className="table-auto w-5/6">
              <thead>
                <tr>
                  <th className="uppercase tracking-wider py-4 w-1/2" style={{ backgroundColor: '#748B6F', color: 'white'}}>MERN</th>
                  <th className="uppercase tracking-wider py-4 w-1/2" style={{ backgroundColor: '#748B6F', color: 'white'}}>RNFirebase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex justify-center px-4 py-10">
                    <img src={MongoDB_logo} alt="nodejs" className=" sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                  </td>
                  <td className="px-4 py-10 border-slate-200 border-l-4 ">
                    <div className='flex justify-center'>
                      <img src={Reactjs_logo} alt="nodejs" className="sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-center px-4 py-10">
                    <img src={expressjs_logo} alt="nodejs" className=" sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                  </td>
                  <td className="px-4 py-10 border-slate-200 border-l-4 ">
                    <div className='flex justify-center'>
                      <img src={Firebase_logo} alt="nodejs" className=" sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-center px-4 py-10">
                    <img src={Reactjs_logo} alt="nodejs" className=" sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                  </td>
                  <td className="px-4 py-10 border-slate-200 border-l-4 "></td>
                </tr>
                <tr>
                  <td className="flex justify-center px-4 py-10">
                    <img src={Nodejs_logo} alt="nodejs" className="h:20 sm:h-12 md:h-16 lg:h-16 xl:h-20" />
                  </td>
                  <td className="px-4 py-10 border-slate-200 border-l-4 "></td>
                </tr>
                
              </tbody>
            </table>          

          </div>



          <h1 className='text-center py-12 pb-6 sm:text-lg md:text-lg lg:text-xl xl:text-2xl uppercase tracking-wide border-black'>Goals</h1>
          <p className='p-3 w-5/6 mx-auto'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum.
          </p>
      </div>
    </div>
  )
}

export default ContactComponent