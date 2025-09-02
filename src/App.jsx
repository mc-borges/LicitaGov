import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import FormWizard from './components/FormWizard';
import ConfirmationPage from './components/ConfirmationPage';
import Toast from './components/Toast';
import './styles.css';

// Componentes do Header e Footer
const Header = ({ isMobile, onStartForm }) => (
  <header className="header">
    <div className="header-content">
      <a href="#" className="header-logo">LicitaGov</a>
      {isMobile ? (
        <button className="hamburger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      ) : (
        <nav className="header-nav">
          <a href="#como-funciona" className="nav-link">Como funciona</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contato" className="nav-link">Contato</a>
          <button className="primary-button small-button" onClick={onStartForm}>
            Enviar proposta
          </button>
        </nav>
      )}
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-group">
        <h4 className="footer-title">Contato</h4>
        <p>contato@licitagov.com</p>
        <p>0800 023 1200</p>
      </div>
      <div className="footer-group">
        <h4 className="footer-title">Links úteis</h4>
        <p>Acessibilidade</p>
        <p>Políticas de privacidade</p>
      </div>
      <hr className="footer-line" />
      <p className="footer-copyright">© LicitaGov 2025</p>
    </div>
  </footer>
);

function App() {
  const [appState, setAppState] = useState('landing');
  const [toast, setToast] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFormComplete = () => {
    setAppState('success');
    setToast({ message: 'Proposta enviada com sucesso!', type: 'success' });
  };

  const handleGoHome = () => {
    setAppState('landing');
    setToast(null);
  };

  const renderScreen = () => {
    switch (appState) {
      case 'landing':
        return <LandingPage onStart={() => setAppState('form')} />;
      case 'form':
        return <FormWizard onComplete={handleFormComplete} isMobile={isMobile} />;
      case 'success':
        return <ConfirmationPage onGoHome={handleGoHome} isMobile={isMobile} />;
      default:
        return <LandingPage onStart={() => setAppState('form')} />;
    }
  };

  return (
    <div className="app-container">
      <Header isMobile={isMobile} onStartForm={() => setAppState('form')} />
      <main className="main-content">{renderScreen()}</main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;