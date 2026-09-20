import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowRight, BarChart3, BrainCircuit, Check, Gauge, Mail, Menu, MessageCircle, Phone, Sparkles, Zap } from 'lucide-react';
import './styles.css';

const contactEmail = 'melotechsolu@gmail.com';
const phoneNumber = '31989797199';
const whatsappUrl = 'https://wa.link/553qkl';

const services = [
  {
    icon: BrainCircuit,
    title: 'IA aplicada ao problema certo',
    description: 'Mapeamos onde LLMs, modelos clássicos, automações ou pipelines de ML realmente geram retorno.',
  },
  {
    icon: Gauge,
    title: 'Menor custo por resultado',
    description: 'Otimizamos arquitetura, inferência e integrações para reduzir dependência de modelos caros sem perder qualidade.',
  },
  {
    icon: BarChart3,
    title: 'Dados mais úteis para decisão',
    description: 'Tratamos dados, métricas e validação para transformar processos dispersos em sinais confiáveis.',
  },
  {
    icon: Zap,
    title: 'Velocidade com entrega sólida',
    description: 'Construímos soluções enxutas, testáveis e ajustadas ao cenário real de cada operação.',
  },
];

const processSteps = ['Diagnóstico técnico e de negócio', 'Protótipo validado com dados reais', 'Otimização de custo e latência', 'Entrega, acompanhamento e evolução'];

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Logo HyperPlane AI">
      <path className="logo-plane" d="M10 42L28 10h26L36 54H10l18-12h18" />
      <path className="logo-axis" d="M21 32h25M32 18v28" />
    </svg>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <main>
      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#top" aria-label="HyperPlane AI">
          <LogoMark className="brand-logo" />
          <span>HyperPlane AI</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solutions">Soluções</a>
          <a href="#method">Método</a>
          <a href="#contact">Contato</a>
        </nav>
        <a className="header-action" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
        <button className="menu-button" type="button" aria-label="Abrir navegação" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((currentValue) => !currentValue)}>
          <Menu size={22} />
        </button>
        <nav className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Navegação mobile">
          <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Soluções</a>
          <a href="#method" onClick={() => setIsMenuOpen(false)}>Método</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>WhatsApp</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={16} />
            IA e Machine Learning real para empresas
          </div>
          <div className="hero-brand-lockup" aria-hidden="true">
            <LogoMark className="hero-logo" />
          </div>
          <h1 className="hero-title">
            <span>HyperPlane</span>
            <span>AI</span>
          </h1>
          <p>
            Soluções sob medida para usar IA onde ela realmente melhora custo, velocidade e qualidade. Da revisão de fluxos baseados em LLMs à criação de modelos e automações com dados reais.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Começar conversa
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href={`tel:${phoneNumber}`}>
              <Phone size={18} />
              (31) 98979-7199
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Visualização abstrata de modelos de IA e dados conectados">
          <div className="plane-card intelligence-card">
            <span>Quality</span>
            <strong>+ precisão</strong>
          </div>
          <div className="plane-card speed-card">
            <span>Latency</span>
            <strong>- tempo</strong>
          </div>
          <div className="model-orbit">
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
            <span className="orbit-node node-three" />
            <div className="core-model">AI</div>
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions-section">
        <div className="section-heading">
          <span>Soluções</span>
          <h2>Engenharia de IA para operações que precisam sair do improviso</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="method" className="method-section">
        <div className="method-copy">
          <span>Método</span>
          <h2>Menos força bruta, mais inteligência aplicada.</h2>
          <p>
            A HyperPlane AI combina diagnóstico, modelagem e otimização para substituir uso indiscriminado de LLMs por soluções mais rápidas, baratas e consistentes.
          </p>
        </div>
        <div className="step-list">
          {processSteps.map((step, index) => (
            <div className="step-item" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proof-section" aria-label="Benefícios principais">
        <div>
          <strong>Entrega orientada a ROI</strong>
          <p>Priorização técnica conectada ao impacto no negócio.</p>
        </div>
        <div>
          <strong>Qualidade mensurável</strong>
          <p>Critérios claros para comparar antes e depois.</p>
        </div>
        <div>
          <strong>Arquitetura pragmática</strong>
          <p>Modelos, integrações e automações no tamanho certo.</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <span>Contato</span>
          <h2>Conte seu desafio e retornaremos com o melhor próximo passo.</h2>
          <p>Você também pode falar diretamente por telefone, WhatsApp ou e-mail.</p>
          <div className="contact-links">
            <a href={`tel:${phoneNumber}`}>
              <Phone size={18} />
              (31) 98979-7199
            </a>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={18} />
              {contactEmail}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
        <form className="lead-form" action={`https://formsubmit.co/${contactEmail}`} method="POST">
          <input type="hidden" name="_subject" value="Novo lead HyperPlane AI" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <label>
            Nome
            <input name="Nome" type="text" placeholder="Seu nome" required />
          </label>
          <label>
            Empresa
            <input name="Empresa" type="text" placeholder="Nome da empresa" required />
          </label>
          <label>
            E-mail
            <input name="E-mail" type="email" placeholder="voce@empresa.com" required />
          </label>
          <label>
            Telefone
            <input name="Telefone" type="tel" placeholder="(31) 99999-9999" required />
          </label>
          <label className="full-field">
            Desafio
            <textarea name="Desafio" placeholder="Onde você quer aplicar ou melhorar IA/ML?" rows={5} required />
          </label>
          <button className="submit-button" type="submit">
            Enviar lead por e-mail
            <Check size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);