import React from 'react';
import InputField from './InputField';

const ConfirmationPage = ({ onGoHome }) => {
  return (
    <div className="confirmation-page-container">
      <h1 className="confirmation-main-title">Tudo certo!</h1>
      <div className="card confirmation-card">
        <div className="confirmation-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L10 17L19 8" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="confirmation-title-card">Proposta enviada com sucesso!</h2>
        <p className="confirmation-text">
          Sua proposta para o edital Nº 001/2025 foi recebida e registrada. Em breve, nossa equipe irá analisar as informações.
        </p>
        <p className="email-instructions">
          Para acompanhar o status do seu envio, insira seu e-mail abaixo. Enviaremos uma notificação assim que houver atualizações.
        </p>
        <div className="email-input-container">
          <InputField label="E-mail*" placeholder="Insira um e-mail válido: example@email.com" />
          <p className="caption">*Campo obrigatório</p>
          <button className="secondary-button email-submit-button">Registrar e-mail</button>
        </div>
      </div>
      <div className="footer-actions desktop-actions">
        <button onClick={onGoHome} className="primary-button">
          Enviar Nova Proposta
        </button>
        <button onClick={onGoHome} className="secondary-button">
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;