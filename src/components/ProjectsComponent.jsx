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
        description_1: 'ReactJS', 
        description_2: 'youtubeAPIv3',
        description_3: 'MaterialUI',
        image: project_youtube, 
        demo: 'https://youtubeclone-cb.netlify.app',
        gitHub: 'https://github.com/Borkkris/youtube_clone'
      },
      { title: 'Dashboard', 
        description_1: 'ReactJS ', 
        description_2: 'Synfcusion',
        description_3: 'responsive',
        image: project_dashboard, 
        demo: 'https://modern-dashboard-syncfusion.netlify.app',
        gitHub: 'https://github.com/Borkkris/professional_Dashboard'
      },
      { title: 'Dalle clone', 
        description_1: 'ReactJS', 
        description_2: 'OpenAI-API',
        description_3: 'MongoDB',
        image: project_dalle, 
        demo: 'https://dalle-clone.netlify.app',
        gitHub: 'https://github.com/Borkkris/dalle_clone'
      },
      { title: 'Meet App', 
        description_1: 'React', 
        description_2: 'AWS Lambda',
        description_3: 'Serverless',
        image: project_meet, 
        demo: 'https://borkkris.github.io/meet/',
        gitHub: 'https://github.com/Borkkris/meet'
      },
      { title: 'Pokedéx', 
        description_1: 'HTML',
        description_2: 'CSS', 
        description_3: 'JS',
        image: project_pokedex, 
        demo: 'https://borkkris.github.io/simple-js-app/',
        gitHub: 'https://github.com/Borkkris/simple-js-app'
      },
      { title: 'Movie (React)', 
        description_1: 'ReactJS', 
        description_2: 'MongoDB',
        description_3: 'Redux',
        image: project_movie, 
        demo: 'https://app-my-flix.netlify.app',
        gitHub: 'https://github.com/Borkkris/myFlix-client'
      },
      { title: 'Movie (Angular)', 
        description_1: 'Angular',
        description_2: 'TypeScript',
        description_3: 'SCSS',
        image: project_movie_angular, 
        gitHub: 'https://github.com/Borkkris/myFlix-Angular-client'
      },
      { title: 'Chat App (React Native)', 
        description_1: 'React-Native',
        description_2: 'Firebase',
        description_3: 'Expo',
        image: project_chatapp, 
        gitHub: 'https://github.com/Borkkris/hello-world' 
      },
    ];

  return (
    <div id='projects' className='border-t border-b p-3 pb-12 pt-12'
    >
      <h1 className='font-extrabold text-3xl justify-center flex uppercase tracking-wide py-12'>Projects</h1>
      <div className='sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4'>
        {projects.map((project, index) => (
          <CardComponent key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsComponent