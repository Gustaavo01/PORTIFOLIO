import React from 'react';
import './Home.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaArrowRight } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const stacks = [
    { icon: <FaReact className="icon icon-react" />, name: 'React' },
    { icon: <SiJavascript className="icon icon-js" />, name: 'JavaScript' },
    { icon: <FaHtml5 className="icon icon-html" />, name: 'HTML' },
    { icon: <FaCss3Alt className="icon icon-css" />, name: 'CSS' },
    { icon: <FaNodeJs className="icon icon-node" />, name: 'Node.js' },
    { icon: <SiTypescript className="icon icon-Type" />, name: 'Typescript' },
  ];

  return (
    <main className="home">
      <h1 className="home-title">
        Olá, sou <span className="highlight">Gustavo Gonzaga</span><br />
        Desenvolvedor Front-End
      </h1>

      <p className="home-subtitle">
        Criando interfaces modernas e funcionais com tecnologias web.
      </p>

      <div className="tech-stack">
        {stacks.map(({ icon, name }, index) => (
          <div className="tech-card" key={index}>
            {icon}
            <span>{name}</span>
          </div>
        ))}
      </div>

      <button className="home-btn" onClick={() => navigate('/projetos')}>
        Ver Projetos <FaArrowRight />
      </button>
    </main>
  );
}

export default Home;
