import React, { useState } from 'react';
import './Contact.css';
import { FaArrowLeft, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:gustavogonzaga1225@gmail.com?subject=Contato de ${form.name}&body=Nome: ${form.name}%0AEmail: ${form.email}%0AMensagem: ${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="contact">
      <h1 className="contact-title">Entre em Contato</h1>

      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-message">
            Estou interessado em oportunidades para colaborar em projetos. <br />
            Se você tem alguma proposta ou deseja conversar, fique à vontade para me enviar uma mensagem!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Sua mensagem"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Enviar Mensagem</button>
        </form>
      </div>

      <div className="contact-footer">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft /> Voltar para Home
        </button>

        <div className="contact-icons">
          <a href="https://wa.me/5511982158962" target="_blank" rel="noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:gustavogonzaga1225@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;