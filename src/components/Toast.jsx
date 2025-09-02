import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
  // useEffect para fazer o toast desaparecer automaticamente
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [onClose]);

  return (
    <div className={`toast-container toast-${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="toast-close-button">
        &times;
      </button>
    </div>
  );
};

export default Toast;