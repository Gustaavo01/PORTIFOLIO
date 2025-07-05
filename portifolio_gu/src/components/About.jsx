import React from 'react';
import './About.css';
import { FaUser, FaBullseye, FaLightbulb } from 'react-icons/fa';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

function About() {
  const techs = [
    { icon: <FaReact className="icon icon-react" />, name: 'React' },
    { icon: <SiJavascript className="icon icon-js" />, name: 'JavaScript' },
    { icon: <FaHtml5 className="icon icon-html" />, name: 'HTML' },
    { icon: <FaCss3Alt className="icon icon-css" />, name: 'CSS' },
    { icon: <FaNodeJs className="icon icon-node" />, name: 'Node.js' },
    { icon: <SiTypescript className="icon icon-Type" />, name: 'Typescript' },
  ];

  return (
    <section className="about">
      <h1 className="about-title">Sobre Mim</h1>

      <div className="about-grid">
        <div className="about-box">
          <FaUser className="section-icon" />
          <h2>Quem Sou</h2>
          <p>
            Meu nome é <strong>Gustavo Gonzaga</strong>, tenho 19 anos e sou estudante de <strong>Tecnologia da Informação</strong>. Apaixonado por desenvolvimento web, estou sempre em busca de evoluir como desenvolvedor front-end.
          </p>
        </div>

        <div className="about-box">
          <FaBullseye className="section-icon" />
          <h2>Meus Objetivos</h2>
          <p>
            Quero <strong>aprimorar minhas habilidades</strong>, me desafiar em projetos reais e <strong>adquirir mais experiência</strong> no mercado de tecnologia. Estou focado em crescer como desenvolvedor e contribuir com soluções inteligentes.
          </p>
        </div>

        <div className="about-box">
          <FaLightbulb className="section-icon" />
          <h2>Meu Perfil</h2>
          <p>
            Tenho facilidade em <strong>me adaptar a novas tecnologias</strong>, sou <strong>organizado</strong>, atento aos detalhes e movido pela <strong>vontade constante de aprender</strong>.
          </p>
        </div>
      </div>

      <div className="tech-section">
        <h2>Minhas Habilidades Técnicas</h2>
        <div className="tech-stack">
          {techs.map(({ icon, name }, idx) => (
            <div className="tech-card" key={idx}>
              {icon}
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
