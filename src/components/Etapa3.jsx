import { useState, useEffect } from 'react';

const Etapa3 = ({ onNext, onBack, isDesktop }) => {
  const [files, setFiles] = useState([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const filesUploaded = files.length > 0;
    setIsFormValid(acceptedTerms && filesUploaded);
  }, [files, acceptedTerms]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  
  const handleRemoveFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <div className="form-section">
      {!isDesktop && <h3 className="section-title-card">Documentos & Aceite</h3>}
      
      <div className="upload-area">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="upload-input"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="upload-label">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2V8H20" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <p>Clique para selecionar um arquivo</p>
        </label>
      </div>
      
      {files.length > 0 && (
        <div className="uploaded-files-list">
          {files.map((file, index) => (
            <div key={index} className="uploaded-file-item">
              <span className="file-icon">📄</span>
              <span className="file-name">{file.name}</span>
              <button className="remove-file-button" onClick={() => handleRemoveFile(file.name)}>
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="terms-checkbox">
        <input
          type="checkbox"
          id="terms"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          Declaro que li e concordo com os <a href="#" className="terms-link">Termos do Edital</a>.
        </label>
      </div>

      {!isDesktop && (
        <div className="footer-actions">
          <button className="primary-button" onClick={onNext} disabled={!isFormValid}>
            Enviar Proposta
          </button>
          <button className="secondary-link" onClick={onBack}>
            Voltar
          </button>
        </div>
      )}
    </div>
  );
};

export default Etapa3;