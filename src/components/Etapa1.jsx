import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const Etapa1 = ({ onNext, isDesktop }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const nomeValido = nomeProduto.length >= 3;
    const descricaoValida = descricao.length >= 20;
    setIsFormValid(nomeValido && descricaoValida);
  }, [nomeProduto, descricao]);

  return (
    <div className="form-section">
      {!isDesktop && <h3 className="section-title-card">Dados do produto</h3>}
      <form>
        <InputField
          label="Nome do produto"
          placeholder="Digite o nome do produto"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
          validation={(val) => val.length >= 3 ? '' : 'O nome deve ter no mínimo 3 caracteres.'}
          isDesktop={isDesktop}
        />
        <InputField
          label="Descrição detalhada"
          placeholder="Explique em detalhes sua proposta"
          isTextarea={true}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          validation={(val) => val.length >= 20 ? '' : 'A descrição deve ter no mínimo 20 caracteres.'}
          isDesktop={isDesktop}
        />
      </form>
      {!isDesktop && (
        <div className="footer-actions">
          <button className="primary-button" onClick={onNext} disabled={!isFormValid}>
            Próximo
          </button>
        </div>
      )}
    </div>
  );
};

export default Etapa1;