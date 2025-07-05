import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Quiz em React',
      description: 'Quiz interativo usando React, hooks e design limpo.',
      github: 'https://github.com/Gustaavo01/Quiz-React',
      live: '',
    },
    {
      title: 'Blog React + Axios',
      description: 'Projeto de blog com consumo de API via Axios.',
      github: 'https://github.com/Gustaavo01/BlogReact-Axios',
      live: '',
    },
    {
      title: 'Portfólio React',
      description: 'Meu portfólio pessoal desenvolvido em React.',
      github: 'https://github.com/Gustaavo01/Portfolio-React',
      live: '',
    },
  ];

  return (
    <main className="projects">
      <h1 className="projects-title">Meus Projetos</h1>
      <p className="projects-subtitle">Alguns dos meus projetos a seguir</p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card no-image">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" aria-label={`Código fonte do ${p.title}`}>
                  <FaGithub /> Código
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Demo ao vivo do ${p.title}`}>
                  <FaExternalLinkAlt /> Ver Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        className="github-profile-btn"
        href="https://github.com/Gustaavo01"
        target="_blank"
        rel="noreferrer"
        aria-label="Perfil GitHub de Gustavo Gonzaga"
      >
        <FaGithub /> Meu GitHub
      </a>
    </main>
  );
}

export default Projects;