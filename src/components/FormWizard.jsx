import { useState } from 'react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';

const FormWizard = ({ onComplete, isMobile }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const navigateToNext = () => setCurrentStep(currentStep + 1);
  const navigateToBack = () => setCurrentStep(currentStep - 1);

  return (
    <div className="form-wizard-page">
      {isMobile && (
        <div className="mobile-wizard-header">
          {currentStep > 1 && (
            <a href="#" className="back-button" onClick={(e) => { e.preventDefault(); navigateToBack(); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
          <div className="wizard-progress-info">
            <h1 className="wizard-main-title">Envio de Proposta</h1>
            <p className="wizard-step-text">Etapa {currentStep} de {totalSteps}</p>
          </div>
          <div className="wizard-progress-bar-container">
            <div className="wizard-progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
        </div>
      )}

      {isMobile ? (
        <div className="card mobile-card">
          <div className="card-header">
            <h2>Edital de Materiais de Escritório 2025</h2>
            <p>N° do processo: 001/2025</p>
          </div>
          {currentStep === 1 && <Etapa1 onNext={navigateToNext} />}
          {currentStep === 2 && <Etapa2 onNext={navigateToNext} onBack={navigateToBack} />}
          {currentStep === 3 && <Etapa3 onNext={onComplete} onBack={navigateToBack} />}
        </div>
      ) : (
        <div className="desktop-form-container">
          <h1 className="desktop-form-main-title">Envio de Proposta</h1>
          <div className="desktop-form-card card">
            <div className="card-header">
              <h2>Edital de Materiais de Escritório 2025</h2>
              <p>N° do processo: 001/2025</p>
            </div>
            <Etapa1 isDesktop={true} />
            <Etapa2 isDesktop={true} />
            <Etapa3 onNext={onComplete} isDesktop={true} />
            <div className="footer-actions desktop-actions">
              <button className="primary-button" onClick={onComplete}>Enviar Proposta</button>
              <button className="secondary-button">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormWizard;