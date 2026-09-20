import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowRight, BarChart3, BrainCircuit, Check, Gauge, Mail, Menu, MessageCircle, Phone, Sparkles, Zap } from 'lucide-react';
import './styles.css';

const contactEmail = 'melotechsolu@gmail.com';
const phoneNumber = '31989797199';
const whatsappUrl = 'https://wa.link/553qkl';
const logoSrc = '/brand/logo.jpeg';

const services = [
  {
    icon: BrainCircuit,
    title: 'IA aplicada ao problema certo',
    description: 'Mapeamos onde LLMs, modelos clássicos, automações ou pipelines de ML realmente geram retorno.',
  },
  {
    icon: Gauge,
    title: 'Custo controlado por decisão',
    description: 'Reduzimos dependência de modelos caros com arquitetura, roteamento e inferência no tamanho certo.',
  },
  {
    icon: BarChart3,
    title: 'Dados prontos para ação',
    description: 'Tratamos métricas, fontes e validação para transformar operações dispersas em sinais confiáveis.',
  },
  {
    icon: Zap,
    title: 'Protótipos que viram operação',
    description: 'Construímos soluções enxutas, mensuráveis e preparadas para evoluir depois da primeira entrega.',
  },
];

const processSteps = ['Diagnóstico técnico e de negócio', 'Protótipo validado com dados reais', 'Otimização de custo e latência', 'Entrega, acompanhamento e evolução'];

function BrandLogo({ className = '' }: { className?: string }) {
  return <img className={className} src={logoSrc} alt="Logo HyperPlane AI" />;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <main>
      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#top" aria-label="HyperPlane AI">
          <BrandLogo className="brand-logo" />
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
            IA, dados e automação com padrão de engenharia
          </div>
          <BrandLogo className="hero-logo" />
          <h1 className="hero-title">
            IA que entrega resultado.
          </h1>
          <p>
            A HyperPlane AI transforma dados, processos e LLMs em soluções aplicáveis com mais precisão, menor custo operacional e decisões melhores para empresas que precisam sair do improviso sem perder velocidade.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Começar diagnóstico
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href={`tel:${phoneNumber}`}>
              <Phone size={18} />
              (31) 98979-7199
            </a>
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions-section">
        <div className="section-heading">
          <span>Soluções</span>
          <h2>Engenharia de IA para negócios que precisam de resultado mensurável.</h2>
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
            Combinamos diagnóstico, modelagem e otimização para substituir uso indiscriminado de LLMs por soluções mais rápidas, baratas e consistentes.
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
          <strong>ROI antes de hype</strong>
          <p>Priorização técnica conectada ao impacto real no negócio.</p>
        </div>
        <div>
          <strong>Arquitetura no tamanho certo</strong>
          <p>LLMs, automações e modelos clássicos escolhidos por necessidade, não por moda.</p>
        </div>
        <div>
          <strong>Qualidade mensurável</strong>
          <p>Critérios claros para comparar custo, velocidade e precisão antes e depois.</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <span>Contato</span>
          <h2>Conte seu desafio e receba um próximo passo claro.</h2>
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
            <input name="E-mail" type="email" placeholder="suaempresa@empresa.com" required />
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
            Enviar mensagem
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
