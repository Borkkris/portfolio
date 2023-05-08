import React from 'react';
import { 
    NavigationComponent,
    AboutmeComponent, 
    ProjectsComponent, 
    TechstackComponent, 
    ContactformComponent } from '../components';

const HomePage = () => {
  return (
    <div className='bg-#748B6F'>
        <div>
            <NavigationComponent />
        </div>

        <div>
            <AboutmeComponent />
        </div>

        <div>
            <ProjectsComponent />
        </div>

        <div>
            <TechstackComponent />
        </div>

        <div>
            <ContactformComponent />
        </div>
    </div>
  )
}

export default HomePage