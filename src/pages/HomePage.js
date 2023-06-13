import React from 'react';
import { 
    NavigationComponent,
    AboutmeComponent, 
    ProjectsComponent, 
    TechstackComponent, 
    ContactformComponent,
    FooterComponent,
    IntroComponent } from '../components';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#748B6F', color: 'white'}}>
        <div>
            <NavigationComponent/>
        </div>

        <div>
            <IntroComponent/>
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

        <div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default HomePage