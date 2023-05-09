import React from 'react';
import { CardComponent } from '.';

// Projects
import project_youtube from '../assets/project_youtube.png';
import project_dashboard from '../assets/project_dashboard.png';
import project_movie from '../assets/project_movie.png';
import project_movie_angular from '../assets/project_movie_angular.png';
import project_dalle from '../assets/project_dalle.png';
import project_pokedex from '../assets/project_pokedex.png';
import project_chatapp from '../assets/project_chatapp.png';
import project_meet from '../assets/project_meet.png';

const ProjectsComponent = () => {

    const projects = [
      { title: 'youTube clone', 
        description: 'youTube clone created with ReactJS and the youTube API v3', 
        image: project_youtube, 
        demo: 'https://youtubeclone-cb.netlify.app',
        gitHub: 'https://github.com/Borkkris/youtube_clone'
      },
      { title: 'Dashboard', 
        description: 'Dashboard created with ReactJS and Synfcusion', 
        image: project_dashboard, 
        demo: 'https://modern-dashboard-syncfusion.netlify.app',
        gitHub: 'https://github.com/Borkkris/professional_Dashboard'
      },
      { title: 'Dalle clone', 
        description: 'Dalle clone created with ReactJS and the OpenAI-API', 
        image: project_dalle, 
        demo: 'https://dalle-clone.netlify.app',
        gitHub: 'https://github.com/Borkkris/dalle_clone'
      },
      { title: 'Meet App', 
        description: 'Meet App created with React', 
        image: project_meet, 
        demo: 'https://borkkris.github.io/meet/',
        gitHub: 'https://github.com/Borkkris/meet'
      },
      { title: 'Pokedéx', 
        description: 'Pokedéx App created with HTML, CSS and JS', 
        image: project_pokedex, 
        demo: 'https://borkkris.github.io/simple-js-app/',
        gitHub: 'https://github.com/Borkkris/simple-js-app'
      },
      { title: 'Movie (React)', 
        description: 'Movie library created with ReactJS and MongoDB', 
        image: project_movie, 
        demo: 'https://app-my-flix.netlify.app',
        gitHub: 'https://github.com/Borkkris/myFlix-client'
      },
      { title: 'Movie (Angular)', 
        description: 'Movie library created with Angular and MongoDB', 
        image: project_movie_angular, 
        gitHub: 'https://github.com/Borkkris/myFlix-Angular-client'
      },
      { title: 'Chat App', 
        description: 'Chat App created with React Native and Firebase', 
        image: project_chatapp, 
        gitHub: 'https://github.com/Borkkris/hello-world' 
      },
    ];

  return (
    <div 
      id='projects' 
      className='border-t border-b p-3 py-3 sm:py-16'
    >
      <h1 className='font-extrabold text-xl justify-center flex'>Projects</h1>
      <div className='sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4'>
        {projects.map((project, index) => (
          <CardComponent key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsComponent