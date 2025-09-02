import React, { useState } from 'react';

const InputField = ({ label, placeholder, value, onChange, validation, isTextarea = false, type = 'text', isDesktop = false }) => {
  const [error, setError] = useState('');

  const handleBlur = (e) => {
    if (validation) {
      setError(validation(e.target.value));
    }
  };

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="input-group">
      <label className="input-label">{label}*</label>
      <InputComponent
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e);
          setError(''); // Limpa o erro ao digitar
        }}
        onBlur={handleBlur}
      />
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default InputField;