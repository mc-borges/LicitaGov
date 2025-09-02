import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const Etapa2 = ({ onNext, onBack, isDesktop }) => {
  const [preco, setPreco] = useState('');
  const [prazo, setPrazo] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const precoValido = parseFloat(preco.replace(',', '.')) > 0;
    const prazoValido = parseInt(prazo) > 0;
    setIsFormValid(precoValido && prazoValido);
  }, [preco, prazo]);

  const handlePrecoChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9,.]/g, '');
    const parts = value.split(/[.,]/);
    if (parts.length > 2) {
      value = parts[0] + ',' + parts.slice(1).join('');
    }
    setPreco(value);
  };

  return (
    <div className="form-section">
      {!isDesktop && <h3 className="section-title-card">Valores & Prazo</h3>}
      <div className={`form-row ${!isDesktop ? 'mobile-form-row' : ''}`}>
        <div className="input-with-label-container">
          <InputField
            label="Preço unitário*"
            placeholder="0,00"
            value={preco}
            onChange={handlePrecoChange}
            validation={(val) => parseFloat(val.replace(',', '.')) > 0 ? '' : 'Digite um valor válido (> 0).'}
            isDesktop={isDesktop}
          />
          <span className="input-suffix">(R$)</span>
        </div>
        <div className="input-with-label-container">
          <InputField
            label="Prazo de entrega*"
            placeholder="Ex.: 30"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            validation={(val) => parseInt(val) > 0 ? '' : 'Digite um prazo válido (> 0).'}
            isDesktop={isDesktop}
          />
          <span className="input-suffix">dias úteis</span>
        </div>
      </div>
      {!isDesktop && (
        <div className="footer-actions">
          <button className="primary-button" onClick={onNext} disabled={!isFormValid}>
            Próximo
          </button>
          <button className="secondary-link" onClick={onBack}>
            Voltar
          </button>
        </div>
      )}
    </div>
  );
};

export default Etapa2;