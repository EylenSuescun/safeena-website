import { useEffect, useState } from 'react'

const content = {
  en: {
    announcement: 'LATIN AMERICA  ·  ASIA  ·  A GLOBAL COFFEE NETWORK',
    announcementRight: 'A GLOBAL COFFEE NETWORK',
    nav: { story: 'Our idea', network: 'Regions', countries: 'Countries', zones: 'Colombia by zone', partners: 'For partners', contact: 'Let’s connect' },
    language: 'ES',
    hero: {
      eyebrow: 'A GLOBAL COFFEE NETWORK, ROOTED AT ORIGIN',
      title: <>From the <em>origin</em><br />to the world.</>,
      body: 'SAFEENA is building a global network connecting coffee origins, producers and markets across Latin America and Asia. Explore by region, country and — in Colombia — by origin zone.',
      primary: 'Explore the network',
      secondary: 'Follow the journey',
      imageLabel: 'A COLOMBIAN ORIGIN',
      imageNote: 'A global network begins with a place',
      captionRegion: 'LATIN AMERICA · ASIA',
      sideLabel: 'LOCAL ORIGINS · GLOBAL NETWORK',
    },
    intro: {
      index: '01 / THE IDEA',
      title: 'A global network, built one origin at a time.',
      body: 'SAFEENA is building connections between coffee producers and partners across Latin America and Asia. Each place has its own context, people and lots; our network makes those local stories easier to discover and follow.',
      link: 'Explore regions',
      note: 'LOCAL ROOTS · GLOBAL REACH',
    },
    network: {
      eyebrow: '02 / EXPLORE THE NETWORK',
      title: <>Connected by region.<br />Experienced place by place.</>,
      body: 'Start with a region, then explore its markets, countries and origins as the SAFEENA network grows.',
      regions: [
        { id: 'asia', number: '01', title: 'Asia', label: 'MARKETS & PARTNERS', placeLabel: 'MARKET', place: 'Hong Kong', description: 'This section will bring together market destinations, buyers and partners as the network expands.' },
        { id: 'latam', number: '02', title: 'Latin America', label: 'ORIGINS & PRODUCERS', placeLabel: 'COUNTRY', place: 'Colombia', description: 'Discover coffee origins and producer relationships, organized country by country.' },
      ],
      asiaEyebrow: 'ASIA · DESTINATIONS',
      asiaTitle: 'Asia, market by market.',
      asiaBody: 'Explore SAFEENA destinations and partnerships across Asia. The network starts in Hong Kong.',
      asiaMarket: 'Hong Kong',
      asiaMarketDetail: 'Initial market · Asia',
      countriesEyebrow: '03 / COUNTRY DIRECTORY',
      countriesTitle: 'Explore by country.',
      countriesBody: 'Each country will have a dedicated view of its origins, people and coffee lots.',
      countryRegion: 'LATIN AMERICA',
      country: 'Colombia',
      countryDetail: 'Latin America · Explore by zone',
      zonesEyebrow: 'COLOMBIA · BY ZONE',
      zonesTitle: 'Every zone has a story.',
      zonesBody: 'Explore Colombian coffee origins zone by zone, with each profile bringing together local producers, practices and lots.',
      zonesNote: 'The zone directory is taking shape. Names and profiles will appear here as origin details are confirmed.',
    },
    values: {
      eyebrow: '04 / WHAT MATTERS',
      title: 'Closer to the people and places behind the cup.',
      body: 'We believe the most meaningful coffee relationships begin with curiosity and grow through clarity.',
      cards: [
        { number: 'A', title: 'Origin with context', text: 'The producer, region and lot are part of the coffee story — not small print.' },
        { number: 'B', title: 'Details that travel', text: 'Traceability helps keep origin and quality information connected along the journey.' },
        { number: 'C', title: 'Relationships built to last', text: 'Thoughtful sourcing puts people and long-term collaboration at the centre.' },
      ],
    },
    partners: {
      eyebrow: '05 / WORK WITH US',
      title: 'Good coffee starts with a good conversation.',
      body: 'Are you a producer, roaster, importer or distribution partner in Latin America or Asia? We’d love to hear what you are looking for and learn what you are building.',
      button: 'Connect with SAFEENA',
      social: 'Or follow along on Instagram',
    },
    footer: {
      phrase: 'Local origins. A world of connection.',
      copyright: '© SAFEENA. Coffee origins and markets, connected with care.',
      back: 'Back to top ↑',
    },
  },
  es: {
    announcement: 'AMÉRICA LATINA  ·  ASIA  ·  UNA RED GLOBAL DE CAFÉ',
    announcementRight: 'UNA RED GLOBAL DE CAFÉ',
    nav: { story: 'La idea', network: 'Regiones', countries: 'Países', zones: 'Colombia por zonas', partners: 'Aliados', contact: 'Conversemos' },
    language: 'EN',
    hero: {
      eyebrow: 'UNA RED GLOBAL DE CAFÉ, CON RAÍCES EN EL ORIGEN',
      title: <>Del <em>origen</em><br />al mundo entero.</>,
      body: 'SAFEENA está construyendo una red global que conecta orígenes cafeteros, productores y mercados de América Latina y Asia. Explora por región, país y — en Colombia — por zonas de origen.',
      primary: 'Explora la red',
      secondary: 'Sigue el recorrido',
      imageLabel: 'UN ORIGEN COLOMBIANO',
      imageNote: 'Toda red global comienza en un lugar',
      captionRegion: 'AMÉRICA LATINA · ASIA',
      sideLabel: 'ORÍGENES LOCALES · RED GLOBAL',
    },
    intro: {
      index: '01 / LA IDEA',
      title: 'Una red global, construida origen por origen.',
      body: 'SAFEENA está construyendo conexiones entre productores de café y aliados de América Latina y Asia. Cada lugar tiene su propio contexto, su gente y sus lotes; nuestra red ayuda a descubrir y seguir esas historias locales.',
      link: 'Explora las regiones',
      note: 'RAÍCES LOCALES · ALCANCE GLOBAL',
    },
    network: {
      eyebrow: '02 / EXPLORA LA RED',
      title: <>Conectados por región.<br />Presentes en cada lugar.</>,
      body: 'Empieza por una región y explora sus mercados, países y orígenes a medida que crece la red SAFEENA.',
      regions: [
        { id: 'asia', number: '01', title: 'Asia', label: 'MERCADOS Y ALIADOS', placeLabel: 'MERCADO', place: 'Hong Kong', description: 'Esta sección reunirá destinos, compradores y aliados a medida que se expanda la red.' },
        { id: 'latam', number: '02', title: 'América Latina', label: 'ORÍGENES Y PRODUCTORES', placeLabel: 'PAÍS', place: 'Colombia', description: 'Descubre orígenes cafeteros y relaciones con productores, organizados por país.' },
      ],
      asiaEyebrow: 'ASIA · DESTINOS',
      asiaTitle: 'Asia, mercado por mercado.',
      asiaBody: 'Explora los destinos y alianzas de SAFEENA en Asia. La red comienza en Hong Kong.',
      asiaMarket: 'Hong Kong',
      asiaMarketDetail: 'Mercado inicial · Asia',
      countriesEyebrow: '03 / DIRECTORIO POR PAÍS',
      countriesTitle: 'Explora por país.',
      countriesBody: 'Cada país tendrá un espacio para conocer sus orígenes, su gente y sus lotes de café.',
      countryRegion: 'AMÉRICA LATINA',
      country: 'Colombia',
      countryDetail: 'América Latina · Explora por zonas',
      zonesEyebrow: 'COLOMBIA · POR ZONAS',
      zonesTitle: 'Cada zona tiene su historia.',
      zonesBody: 'Explora los orígenes cafeteros de Colombia por zonas, reuniendo productores, prácticas y lotes de cada lugar.',
      zonesNote: 'Estamos organizando el directorio por zonas. Los nombres y perfiles aparecerán a medida que confirmemos la información de origen.',
    },
    values: {
      eyebrow: '04 / LO QUE NOS MUEVE',
      title: 'Más cerca de las personas y lugares detrás de cada taza.',
      body: 'Creemos que las relaciones cafeteras más valiosas comienzan con curiosidad y crecen con claridad.',
      cards: [
        { number: 'A', title: 'Origen con contexto', text: 'El productor, la región y el lote son parte de la historia del café, no una nota al pie.' },
        { number: 'B', title: 'Detalles que viajan', text: 'La trazabilidad mantiene conectada la información de origen y calidad durante el recorrido.' },
        { number: 'C', title: 'Relaciones que perduran', text: 'El abastecimiento consciente pone a las personas y la colaboración a largo plazo en el centro.' },
      ],
    },
    partners: {
      eyebrow: '05 / TRABAJEMOS JUNTOS',
      title: 'El buen café empieza con una buena conversación.',
      body: '¿Eres productor, tostador, importador o aliado de distribución en América Latina o Asia? Queremos conocer lo que buscas y descubrir lo que estás construyendo.',
      button: 'Conecta con SAFEENA',
      social: 'También puedes seguirnos en Instagram',
    },
    footer: {
      phrase: 'Orígenes locales. Un mundo de conexiones.',
      copyright: '© SAFEENA. Orígenes y mercados conectados con cuidado.',
      back: 'Volver arriba ↑',
    },
  },
}

const InstagramLink = 'https://www.instagram.com/safeena_coffeelatam/'

function Logo({ language }) {
  return (
    <a className="brand" href="#top" aria-label={language === 'en' ? 'SAFEENA — back to top' : 'SAFEENA — volver arriba'}>
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
        <span className="announcement__right">{t.announcementRight}</span>
      </div>

      <header className="site-header" id="top">
        <a className="skip-link" href="#main">{language === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a>
        <div className="nav-wrap">
          <Logo language={language} />
          <button
            type="button"
            className="menu-toggle"
            aria-label={language === 'en' ? (menuOpen ? 'Close menu' : 'Open menu') : (menuOpen ? 'Cerrar menú' : 'Abrir menú')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>
            <a href="#story" onClick={closeMenu}>{t.nav.story}</a>
            <a href="#network" onClick={closeMenu}>{t.nav.network}</a>
            <a href="#countries" onClick={closeMenu}>{t.nav.countries}</a>
            <a href="#colombia-zones" onClick={closeMenu}>{t.nav.zones}</a>
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
              <a className="button button--dark" href="#network">{t.hero.primary}<Arrow diagonal /></a>
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
              <span className="caption-coordinates">{t.hero.captionRegion}</span>
            </div>
            <span className="hero__side-label">{t.hero.sideLabel}</span>
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
              <a className="text-link text-link--red" href="#network">{t.intro.link}<Arrow /></a>
            </div>
          </div>
          <div className="intro__seal" aria-hidden="true">
            <span>GROWN WITH</span>
            <strong>care</strong>
            <span>SHARED WITH INTENTION</span>
          </div>
        </section>

        <section className="network section-shell" id="network" aria-labelledby="network-title">
          <div className="network__heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" />{t.network.eyebrow}</p>
              <h2 id="network-title">{t.network.title}</h2>
            </div>
            <p>{t.network.body}</p>
          </div>
          <div className="region-grid">
            {t.network.regions.map((region) => (
              <article className={`region-card region-card--${region.id}`} key={region.id} id={region.id}>
                <div className="region-card__top">
                  <span className="region-card__number">{region.number}</span>
                  <span className="region-card__label">{region.label}</span>
                </div>
                <h3>{region.title}</h3>
                <p>{region.description}</p>
                <div className="region-card__place">
                  <span>{region.placeLabel}</span>
                  <strong>{region.place}</strong>
                </div>
                <a className="text-link" href={region.id === 'asia' ? '#asia-destinations' : '#countries'}>
                  {region.id === 'asia' ? (language === 'en' ? 'Explore destinations' : 'Explora destinos') : (language === 'en' ? 'Explore countries' : 'Explora países')}<Arrow diagonal />
                </a>
              </article>
            ))}
          </div>

          <div className="asia-directory" id="asia-destinations">
            <div className="asia-directory__heading">
              <div>
                <p className="eyebrow"><span className="eyebrow__line" />{t.network.asiaEyebrow}</p>
                <h3>{t.network.asiaTitle}</h3>
              </div>
              <p>{t.network.asiaBody}</p>
            </div>
            <div className="market-card">
              <span className="market-card__region">ASIA</span>
              <strong>{t.network.asiaMarket}</strong>
              <span>{t.network.asiaMarketDetail}</span>
            </div>
          </div>

          <div className="country-directory" id="countries">
            <div className="country-directory__heading">
              <div>
                <p className="eyebrow"><span className="eyebrow__line" />{t.network.countriesEyebrow}</p>
                <h3>{t.network.countriesTitle}</h3>
              </div>
              <p>{t.network.countriesBody}</p>
            </div>
            <a className="country-card" href="#colombia-zones">
              <span className="country-card__region">{t.network.countryRegion}</span>
              <strong>{t.network.country}</strong>
              <span>{t.network.countryDetail}</span>
              <span className="country-card__arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="colombia-zones" id="colombia-zones">
            <div className="colombia-zones__copy">
              <p className="eyebrow"><span className="eyebrow__line" />{t.network.zonesEyebrow}</p>
              <h3>{t.network.zonesTitle}</h3>
              <p>{t.network.zonesBody}</p>
            </div>
            <div className="zone-directory-note">
              <span className="zone-directory-note__mark" aria-hidden="true">CO</span>
              <p>{t.network.zonesNote}</p>
            </div>
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
            <Logo language={language} />
            <p>{t.footer.phrase}</p>
          </div>
          <a className="footer-top-link" href="#top">{t.footer.back}</a>
        </div>
        <div className="site-footer__bottom">
          <span>{t.footer.copyright}</span>
          <div className="footer-links">
            <a href={InstagramLink} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
            <span>{language === 'en' ? 'ORIGIN → MARKET' : 'ORIGEN → MERCADO'}</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
