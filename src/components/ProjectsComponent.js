import React from 'react';
import { CardComponent } from '.';

// Projects
import project_youtube from '../assets/project_youtube.png';
import project_movie from '../assets/project_movie.png';
import project_movie_angular from '../assets/project_movie_angular.png';
import project_dalle from '../assets/project_dalle.png';
import project_pokedex from '../assets/project_pokedex.png';
import project_chatapp from '../assets/project_chatapp.png';
import project_meet from '../assets/project_meet.png';

const ProjectsComponent = () => {

      const projects = [
    { title: 'youTube clone', description: 'youTube clone created with ReactJS and the youTube API v3', image: project_youtube },
    { title: 'Movie (React)', description: 'Movie library created with ReactJS and MongoDB', image: project_movie },
    { title: 'Movie (Angular)', description: 'Movie library created with Angular and MongoDB', image: project_movie_angular },
    { title: 'Dalle clone', description: 'Dalle clone created with ReactJS and the OpenAI-API', image: project_dalle },
    { title: 'Pokedéx', description: 'Pokedéx App created with HTML, CSS and JS', image: project_pokedex},
    { title: 'Chat App', description: 'Chat App created with React Native and Firebase', image: project_chatapp },
    { title: 'Meet App', description: 'Meet App created with React', image: project_meet  },
  ];

  return (
    <div id='projects' className='border-t border-b pb-20 pt-10'>
      <h1 className='p-3 font-extrabold text-lg justify-center flex'>Projects</h1>
      <div className='flex overflow-x-scroll pl-10'>
        {projects.map((project, index) => (
          <CardComponent key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsComponent