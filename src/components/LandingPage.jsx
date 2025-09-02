import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Participe do Edital de Compras Públicas</h1>
          <p>Envie sua proposta de forma simples, rápida e segura.</p>
          <button className="primary-button hero-cta" onClick={onStart}>
            Enviar proposta
          </button>
        </div>
      </section>
      
      <section id="como-funciona" className="how-it-works-section">
        <h2 className="section-title">Como funciona</h2>
        <div className="how-it-works-cards">
          <div className="card-item">
            <span role="img" aria-label="download">📄</span>
            <h3>Entenda o edital</h3>
            <p>Baixe o PDF disponível</p>
          </div>
          <div className="card-item">
            <span role="img" aria-label="form">📝</span>
            <h3>Preencha os dados</h3>
            <p>Formulário intuitivo</p>
          </div>
          <div className="card-item">
            <span role="img" aria-label="send">✅</span>
            <h3>Envie sua proposta</h3>
            <p>Receba confirmação</p>
          </div>
        </div>
      </section>

      <section className="featured-ad-section">
        <h2 className="section-title">Confira o edital em destaque</h2>
        <div className="featured-ad-card">
          <h3>Aquisição de Materiais de Escritório 2025</h3>
          <p className="process-info">N° do processo: 001/2025</p>
          <p className="process-info">Prazo final: 15/09/2025</p>
          <a href="#" className="secondary-button">Baixar edital</a>
        </div>
      </section>

      <section id="faq" className="faq-contact-section">
        <div className="faq-container">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-item">
            <h4>Quais arquivos posso enviar?</h4>
            <p>PDFs, PNGs, JPGs e DOCX. O limite é de 10 MB por arquivo e você pode anexar até 5 arquivos.</p>
          </div>
          <div className="faq-item">
            <h4>Posso editar minha proposta após o envio?</h4>
            <p>Não, o envio é final. Revise todas as informações antes de confirmar.</p>
          </div>
          <div className="faq-item">
            <h4>Onde vejo os detalhes do edital?</h4>
            <p>Você pode baixar o documento completo na seção "Edital em Destaque" desta página.</p>
          </div>
          <button className="primary-button" onClick={onStart}>
            Enviar proposta
          </button>
        </div>

        <div id="contato" className="contact-container">
          <h2 className="section-title">Contato</h2>
          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="nome">Nome completo*</label>
              <input type="text" id="nome" placeholder="Insira seu nome completo" />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" placeholder="Insira um e-mail válido: example@email.com" />
            </div>
            <div className="input-group">
              <label htmlFor="mensagem">Mensagem*</label>
              <textarea id="mensagem" placeholder="Descreva sua dúvida, crítica ou elogio"></textarea>
            </div>
            <p className="caption">*Campos obrigatórios</p>
            <button className="secondary-button" type="submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;