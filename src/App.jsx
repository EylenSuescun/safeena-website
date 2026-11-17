import { useEffect, useState } from 'react'

const content = {
  en: {
    announcement: 'COLOMBIA  ·  HONG KONG  ·  ASIA',
    nav: { story: 'Our story', journey: 'The journey', partners: 'For partners', contact: 'Let’s connect' },
    language: 'ES',
    hero: {
      eyebrow: 'COFFEE WITH A CLEARER WAY FORWARD',
      title: <>From the <em>origin,</em><br />a world of possibility.</>,
      body: 'We connect Colombian coffee producers with the people and markets ready to discover what grows here — keeping the story close to every lot.',
      primary: 'Discover our approach',
      secondary: 'Follow the journey',
      imageLabel: 'COLOMBIAN HIGHLANDS',
      imageNote: 'A journey that begins at origin',
    },
    intro: {
      index: '01 / THE IDEA',
      title: 'Great coffee travels further when its story travels with it.',
      body: 'SAFEENA is building a thoughtful bridge between Colombia’s coffee origins and buyers across Hong Kong and Asia. Our work begins with relationships, moves through careful coordination, and keeps each producer and lot in view.',
      link: 'See how it works',
      note: 'ORIGIN FIRST',
    },
    journey: {
      eyebrow: '02 / THE JOURNEY',
      title: <>One clear route.<br />Every origin stays in focus.</>,
      body: 'A connected path gives buyers a clearer view of where coffee comes from and helps producers carry their identity forward.',
      steps: [
        { number: '01', title: 'Colombia', text: 'Meet producers and explore coffees shaped by their place, process and craft.' },
        { number: '02', title: 'SAFEENA', text: 'Coordinate relationships, quality details and lot-level traceability.' },
        { number: '03', title: 'Hong Kong · Asia', text: 'Create a considered path to importers, roasters and distribution partners.' },
      ],
    },
    values: {
      eyebrow: '03 / WHAT MATTERS',
      title: 'Closer to the people and places behind the cup.',
      body: 'We believe the most meaningful coffee relationships begin with curiosity and grow through clarity.',
      cards: [
        { number: 'A', title: 'Origin with context', text: 'The producer, region and lot are part of the coffee story — not small print.' },
        { number: 'B', title: 'Details that travel', text: 'Traceability helps keep origin and quality information connected along the journey.' },
        { number: 'C', title: 'Relationships built to last', text: 'Thoughtful sourcing puts people and long-term collaboration at the centre.' },
      ],
    },
    partners: {
      eyebrow: '04 / WORK WITH US',
      title: 'Good coffee starts with a good conversation.',
      body: 'Are you a Colombian producer, roaster, importer or distribution partner? We’d love to hear what you are looking for and learn what you are building.',
      button: 'Connect with SAFEENA',
      social: 'Or follow along on Instagram',
    },
    footer: {
      phrase: 'A clearer path from origin to opportunity.',
      copyright: '© SAFEENA. Colombian origins, connected with care.',
      back: 'Back to top ↑',
    },
  },
  es: {
    announcement: 'COLOMBIA  ·  HONG KONG  ·  ASIA',
    nav: { story: 'Nuestra historia', journey: 'El recorrido', partners: 'Aliados', contact: 'Conversemos' },
    language: 'EN',
    hero: {
      eyebrow: 'CAFÉ CON UN CAMINO MÁS CLARO',
      title: <>Desde el <em>origen,</em><br />un mundo de posibilidades.</>,
      body: 'Conectamos a productores de café colombiano con las personas y los mercados que quieren descubrir lo que nace aquí, manteniendo la historia cerca de cada lote.',
      primary: 'Conoce nuestro enfoque',
      secondary: 'Sigue el recorrido',
      imageLabel: 'MONTAÑAS COLOMBIANAS',
      imageNote: 'Un recorrido que comienza en el origen',
    },
    intro: {
      index: '01 / LA IDEA',
      title: 'El café llega más lejos cuando su historia viaja con él.',
      body: 'SAFEENA construye un puente consciente entre los orígenes cafeteros de Colombia y compradores en Hong Kong y Asia. Nuestro trabajo parte de las relaciones, avanza con coordinación cuidadosa y mantiene a la vista a cada productor y lote.',
      link: 'Así funciona',
      note: 'PRIMERO EL ORIGEN',
    },
    journey: {
      eyebrow: '02 / EL RECORRIDO',
      title: <>Una ruta clara.<br />Cada origen sigue presente.</>,
      body: 'Un camino conectado ayuda a los compradores a conocer de dónde viene el café y permite a los productores llevar su identidad consigo.',
      steps: [
        { number: '01', title: 'Colombia', text: 'Conocemos productores y exploramos cafés marcados por su lugar, proceso y oficio.' },
        { number: '02', title: 'SAFEENA', text: 'Coordinamos relaciones, datos de calidad y trazabilidad por lote.' },
        { number: '03', title: 'Hong Kong · Asia', text: 'Creamos un camino pensado para importadores, tostadores y aliados de distribución.' },
      ],
    },
    values: {
      eyebrow: '03 / LO QUE NOS MUEVE',
      title: 'Más cerca de las personas y lugares detrás de cada taza.',
      body: 'Creemos que las relaciones cafeteras más valiosas comienzan con curiosidad y crecen con claridad.',
      cards: [
        { number: 'A', title: 'Origen con contexto', text: 'El productor, la región y el lote son parte de la historia del café, no una nota al pie.' },
        { number: 'B', title: 'Detalles que viajan', text: 'La trazabilidad mantiene conectada la información de origen y calidad durante el recorrido.' },
        { number: 'C', title: 'Relaciones que perduran', text: 'El abastecimiento consciente pone a las personas y la colaboración a largo plazo en el centro.' },
      ],
    },
    partners: {
      eyebrow: '04 / TRABAJEMOS JUNTOS',
      title: 'El buen café empieza con una buena conversación.',
      body: '¿Eres productor colombiano, tostador, importador o aliado de distribución? Queremos conocer lo que buscas y descubrir lo que estás construyendo.',
      button: 'Conecta con SAFEENA',
      social: 'También puedes seguirnos en Instagram',
    },
    footer: {
      phrase: 'Un camino más claro del origen a la oportunidad.',
      copyright: '© SAFEENA. Orígenes colombianos, conectados con cuidado.',
      back: 'Volver arriba ↑',
    },
  },
}

const InstagramLink = 'https://www.instagram.com/safeena_coffeelatam/'

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="SAFEENA — back to top">
      <span className="brand__mark" aria-hidden="true">
        <img src="/images/safeena-logo.jpg" alt="" />
      </span>
      <span className="brand__word">SAFEENA</span>
    </a>
  )
}

function Arrow({ diagonal = false }) {
  return <span className={`arrow${diagonal ? ' arrow--diagonal' : ''}`} aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [language, setLanguage] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announcement__dot" />
        <span>{t.announcement}</span>
        <span className="announcement__right">A COLOMBIAN COFFEE CONNECTION</span>
      </div>

      <header className="site-header" id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="nav-wrap">
          <Logo />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            <a href="#story" onClick={closeMenu}>{t.nav.story}</a>
            <a href="#journey" onClick={closeMenu}>{t.nav.journey}</a>
            <a href="#partners" onClick={closeMenu}>{t.nav.partners}</a>
            <button className="language-switch" type="button" onClick={() => { setLanguage(language === 'en' ? 'es' : 'en'); closeMenu() }} aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}>
              <span className="language-switch__current">{language.toUpperCase()}</span>
              <span className="language-switch__divider">/</span>
              <span>{t.language}</span>
            </button>
            <a className="nav-cta" href="#partners" onClick={closeMenu}>{t.nav.contact}<Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" />{t.hero.eyebrow}</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero__body">{t.hero.body}</p>
            <div className="hero__actions">
              <a className="button button--dark" href="#story">{t.hero.primary}<Arrow diagonal /></a>
              <a className="text-link" href={InstagramLink} target="_blank" rel="noreferrer">{t.hero.secondary}<Arrow /></a>
            </div>
            <div className="hero__signature">
              <span className="signature-mark" aria-hidden="true">✳</span>
              <span>{language === 'en' ? 'COFFEE, WITH ITS ORIGIN IN VIEW' : 'CAFÉ, CON SU ORIGEN A LA VISTA'}</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <img className="hero__image" src="/images/coffee-origin.png" alt={language === 'en' ? 'Coffee cherries growing in the green Colombian highlands at dawn' : 'Cerezas de café creciendo en las montañas verdes de Colombia al amanecer'} fetchPriority="high" />
              <span className="image-stamp">{t.hero.imageLabel}</span>
              <span className="image-counter">01 <span>/</span> 03</span>
            </div>
            <div className="hero__caption">
              <span className="caption-rule" />
              <span>{t.hero.imageNote}</span>
              <span className="caption-coordinates">COLOMBIA · SOUTH AMERICA</span>
            </div>
            <span className="hero__side-label">COLOMBIA, CONNECTED</span>
          </div>
          <div className="hero__number" aria-hidden="true">01</div>
        </section>

        <section className="intro section-shell" id="story" aria-labelledby="intro-title">
          <div className="section-index">{t.intro.index}</div>
          <div className="intro__content">
            <div className="intro__heading">
              <span className="section-note">{t.intro.note}</span>
              <h2 id="intro-title">{t.intro.title}</h2>
            </div>
            <div className="intro__detail">
              <p>{t.intro.body}</p>
              <a className="text-link text-link--red" href="#journey">{t.intro.link}<Arrow /></a>
            </div>
          </div>
          <div className="intro__seal" aria-hidden="true">
            <span>GROWN WITH</span>
            <strong>care</strong>
            <span>SHARED WITH INTENTION</span>
          </div>
        </section>

        <section className="journey section-shell" id="journey" aria-labelledby="journey-title">
          <div className="journey__top">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />{t.journey.eyebrow}</p>
              <h2 id="journey-title">{t.journey.title}</h2>
            </div>
            <p className="journey__lead">{t.journey.body}</p>
          </div>
          <div className="route-line" aria-hidden="true">
            <span className="route-line__start" />
            <span className="route-line__path" />
            <span className="route-line__end">↗</span>
          </div>
          <div className="journey__steps">
            {t.journey.steps.map((step) => (
              <article className="journey-card" key={step.number}>
                <span className="journey-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="journey-card__corner" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <div className="journey__footnote">
            <span className="mini-sail" aria-hidden="true">◢</span>
            <span>{language === 'en' ? 'The producer’s identity stays part of the journey.' : 'La identidad del productor sigue presente en el recorrido.'}</span>
          </div>
        </section>

        <section className="values section-shell" aria-labelledby="values-title">
          <div className="values__heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" />{t.values.eyebrow}</p>
              <h2 id="values-title">{t.values.title}</h2>
            </div>
            <p>{t.values.body}</p>
          </div>
          <div className="values__grid">
            {t.values.cards.map((card) => (
              <article className="value-card" key={card.number}>
                <span className="value-card__letter">{card.number}</span>
                <span className="value-card__rule" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="partner-band" id="partners" aria-labelledby="partners-title">
          <div className="partner-band__inner section-shell">
            <div className="partner-band__marker" aria-hidden="true">S<span>.</span></div>
            <div className="partner-band__copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />{t.partners.eyebrow}</p>
              <h2 id="partners-title">{t.partners.title}</h2>
              <p className="partner-band__body">{t.partners.body}</p>
              <div className="partner-band__actions">
                <a className="button button--cream" href={InstagramLink} target="_blank" rel="noreferrer">{t.partners.button}<Arrow diagonal /></a>
                <span className="partner-band__social">{t.partners.social}</span>
              </div>
            </div>
            <div className="partner-band__orbit" aria-hidden="true"><span /><span /><span /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="site-footer__top">
          <div>
            <Logo />
            <p>{t.footer.phrase}</p>
          </div>
          <a className="footer-top-link" href="#top">{t.footer.back}</a>
        </div>
        <div className="site-footer__bottom">
          <span>{t.footer.copyright}</span>
          <div className="footer-links">
            <a href={InstagramLink} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
            <span>COLOMBIA → ASIA</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
