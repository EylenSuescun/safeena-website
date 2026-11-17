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
      originsEyebrow: 'COLOMBIA · OUR ORIGINS',
      originsTitle: 'Three partners. Two places. One shared story.',
      originsBody: 'Meet the Colombian producers already part of SAFEENA, rooted in the mountain landscapes of Antioquia and Tolima.',
      mapLabel: 'A MAP OF OUR ORIGINS',
      mapNote: 'Supplier locations · lot origins are listed in each profile',
      mapAlt: 'Illustrated map of Colombia marking Jardín in Antioquia and Murillo in Tolima',
      providerLabel: 'ORIGIN PARTNERS',
      locations: [
        { id: 'jardin', number: '01', place: 'Jardín', department: 'Antioquia', count: '2 PRODUCERS', suppliers: [{ name: 'Kafesedna', profile: 'kafesedna' }, { name: 'Villa Martín', profile: 'villa-martin' }], mapName: 'JARDÍN' },
        { id: 'murillo', number: '02', place: 'Murillo', department: 'Tolima', count: '1 PRODUCER', suppliers: [{ name: 'Salinas', profile: 'salinas' }], mapName: 'MURILLO' },
      ],
      profilesEyebrow: '04 / PRODUCER & LOT PROFILES',
      profilesTitle: 'A coffee profile, grounded in its place.',
      profilesBody: 'Origin and lot details stay connected, so buyers can see what is confirmed and what still needs validation.',
      specsHeading: 'LOT DETAILS',
      scoreLabel: 'CUPPING SCORE',
      scorePending: 'Not confirmed for this lot',
      traceLabel: 'QR / LOT TRACEABILITY',
      tracePending: 'QR destination awaiting validation',
      traceMissing: 'QR data not provided',
      sampleCta: 'Request a sample',
      availabilityCta: 'Ask about lots',
      storyHeading: 'ORIGIN STORIES · VIDEO',
      storyTitle: 'Vanessa and Julián, in their own words.',
      storyBody: 'Short films from origin are being prepared to bring producer stories closer to buyers in Asia and Latin America.',
      storyStatus: 'COMING SOON',
      profiles: [
        {
          id: 'kafesedna', number: '01', supplier: 'Kafesedna', product: 'Don Carlos', origin: 'San Bartolo · Andes, Antioquia', altitude: '1,950 m a.s.l.', variety: 'Castillo', process: 'Washed', roast: 'Medium',
          profile: 'Cinnamon, caramel, chocolate, tangerine, blackberry and panela. Juicy body, spice notes and a fruity finish.',
          story: 'The Don Carlos edition honors a coffee grower and the family legacy, tenacity and love for the land described on the package.',
          photos: [
            { src: '/images/producers/kafesedna-landscape.jpg', alt: 'Mountain landscape among coffee plots at Kafesedna' },
            { src: '/images/producers/kafesedna-harvest.jpg', alt: 'Hand-selecting ripe coffee cherries at the farm' },
            { src: '/images/producers/kafesedna-processing.jpg', alt: 'Coffee drying under cover at the farm' },
          ],
          visualAlt: 'Coffee hills at the Don Carlos origin in Antioquia', score: 'Not confirmed for this lot', trace: 'QR destination awaiting validation',
        },
        {
          id: 'villa-martin', number: '02', supplier: 'Villa Martín', product: 'Café cultivado a la sombra', origin: 'Finca La Matilde · Vereda San Bartolo · Jardín, Antioquia', altitude: '1,750 m a.s.l.', variety: 'Castillo', process: 'Washed', roast: 'Not specified',
          profile: 'Chocolate, sugar cane, orange and tangerine.',
          story: 'The package describes a shade-grown Arabica coffee from Finca La Matilde.',
          photos: [], labelImage: '/images/producers/villa-martin-label.png', labelAlt: 'Villa Martín coffee label with the printed origin and lot profile',
          score: 'Not confirmed for this lot', trace: 'QR destination awaiting validation',
        },
        {
          id: 'salinas', number: '03', supplier: 'Salinas', product: 'Coffee from Murillo', origin: 'Murillo · Tolima', altitude: 'To be confirmed', variety: 'To be confirmed', process: 'To be confirmed', roast: 'To be confirmed',
          profile: 'Lot-specific sensory notes are being gathered.',
          story: 'The photo record shows mountain landscapes, coffee cherries and raised-bed drying. Lot details remain to be confirmed.',
          photos: [
            { src: '/images/producers/salinas-landscape.jpg', alt: 'Mountain landscape at Salinas in Murillo, Tolima' },
            { src: '/images/producers/salinas-drying.jpg', alt: 'Coffee drying on a raised bed at Salinas' },
            { src: '/images/producers/salinas-finca.jpg', alt: 'Coffee drying structure in the mountain landscape' },
          ],
          visualAlt: 'Coffee-growing landscape in Murillo, Tolima', score: 'To be confirmed', trace: 'QR data not provided',
        },
      ],
    },
    values: {
      eyebrow: '05 / WHAT MATTERS',
      title: 'Closer to the people and places behind the cup.',
      body: 'We believe the most meaningful coffee relationships begin with curiosity and grow through clarity.',
      cards: [
        { number: 'A', title: 'Origin with context', text: 'The producer, region and lot are part of the coffee story — not small print.' },
        { number: 'B', title: 'Details that travel', text: 'Traceability helps keep origin and quality information connected along the journey.' },
        { number: 'C', title: 'Relationships built to last', text: 'Thoughtful sourcing puts people and long-term collaboration at the centre.' },
      ],
    },
    partners: {
      eyebrow: '06 / WORK WITH US',
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
      originsEyebrow: 'COLOMBIA · NUESTROS ORÍGENES',
      originsTitle: 'Tres aliados. Dos lugares. Una historia compartida.',
      originsBody: 'Conoce a los proveedores colombianos que ya hacen parte de SAFEENA, entre los paisajes de montaña de Antioquia y Tolima.',
      mapLabel: 'MAPA DE NUESTROS ORÍGENES',
      mapNote: 'Ubicación de proveedores · el origen del lote aparece en cada ficha',
      mapAlt: 'Mapa ilustrado de Colombia con marcas en Jardín, Antioquia, y Murillo, Tolima',
      providerLabel: 'ALIADOS DE ORIGEN',
      locations: [
        { id: 'jardin', number: '01', place: 'Jardín', department: 'Antioquia', count: '2 PROVEEDORES', suppliers: [{ name: 'Kafesedna', profile: 'kafesedna' }, { name: 'Villa Martín', profile: 'villa-martin' }], mapName: 'JARDÍN' },
        { id: 'murillo', number: '02', place: 'Murillo', department: 'Tolima', count: '1 PROVEEDOR', suppliers: [{ name: 'Salinas', profile: 'salinas' }], mapName: 'MURILLO' },
      ],
      profilesEyebrow: '04 / FICHAS DE PRODUCTOR Y LOTE',
      profilesTitle: 'Cada café, con su lugar y su historia.',
      profilesBody: 'Conectamos el origen con los datos del lote para mostrar qué está confirmado y qué falta validar.',
      specsHeading: 'DATOS DEL LOTE',
      scoreLabel: 'PUNTAJE DE CATACIÓN',
      scorePending: 'No confirmado para este lote',
      traceLabel: 'QR / TRAZABILIDAD DEL LOTE',
      tracePending: 'Enlace del QR pendiente de validación',
      traceMissing: 'No recibimos el QR',
      sampleCta: 'Solicitar una muestra',
      availabilityCta: 'Consultar lotes',
      storyHeading: 'HISTORIAS DE ORIGEN · VIDEO',
      storyTitle: 'Vanessa y Julián, en sus propias palabras.',
      storyBody: 'Preparamos cortometrajes desde el origen para acercar las historias de los productores a compradores de Asia y América Latina.',
      storyStatus: 'PRÓXIMAMENTE',
      profiles: [
        {
          id: 'kafesedna', number: '01', supplier: 'Kafesedna', product: 'Don Carlos', origin: 'San Bartolo · Andes, Antioquia', altitude: '1.950 m s. n. m.', variety: 'Castillo', process: 'Lavado', roast: 'Medio',
          profile: 'Canela, caramelo, chocolate, mandarina, mora y panela. Cuerpo jugoso, notas especiadas y final afrutado.',
          story: 'La edición Don Carlos rinde homenaje al caficultor y a la herencia familiar, la tenacidad y el amor por la tierra que cuenta su empaque.',
          photos: [
            { src: '/images/producers/kafesedna-landscape.jpg', alt: 'Montañas entre cafetales de Kafesedna' },
            { src: '/images/producers/kafesedna-harvest.jpg', alt: 'Selección manual de cerezas maduras en la finca' },
            { src: '/images/producers/kafesedna-processing.jpg', alt: 'Café en secado bajo cubierta en la finca' },
          ],
          visualAlt: 'Montañas cafeteras del origen Don Carlos en Antioquia', score: 'No confirmado para este lote', trace: 'Enlace del QR pendiente de validación',
        },
        {
          id: 'villa-martin', number: '02', supplier: 'Villa Martín', product: 'Café cultivado a la sombra', origin: 'Finca La Matilde · Vereda San Bartolo · Jardín, Antioquia', altitude: '1.750 m s. n. m.', variety: 'Castillo', process: 'Lavado', roast: 'No especificado',
          profile: 'Chocolate, caña de azúcar, naranja y mandarina.',
          story: 'El empaque describe un café arábica cultivado a la sombra en la Finca La Matilde.',
          photos: [], labelImage: '/images/producers/villa-martin-label.png', labelAlt: 'Etiqueta de Villa Martín con el origen y el perfil del lote impresos',
          score: 'No confirmado para este lote', trace: 'Enlace del QR pendiente de validación',
        },
        {
          id: 'salinas', number: '03', supplier: 'Salinas', product: 'Café de Murillo', origin: 'Murillo · Tolima', altitude: 'Por confirmar', variety: 'Por confirmar', process: 'Por confirmar', roast: 'Por confirmar',
          profile: 'Perfil sensorial por recopilar para el lote.',
          story: 'El registro fotográfico muestra paisajes de montaña, cerezas de café y secado en camas elevadas. Los datos del lote están pendientes de confirmación.',
          photos: [
            { src: '/images/producers/salinas-landscape.jpg', alt: 'Paisaje de montaña de Salinas en Murillo, Tolima' },
            { src: '/images/producers/salinas-drying.jpg', alt: 'Café en secado sobre una cama elevada en Salinas' },
            { src: '/images/producers/salinas-finca.jpg', alt: 'Estructura de secado de café en el paisaje de montaña' },
          ],
          visualAlt: 'Paisaje cafetero en Murillo, Tolima', score: 'Por confirmar', trace: 'No recibimos el QR',
        },
      ],
    },
    values: {
      eyebrow: '05 / LO QUE NOS MUEVE',
      title: 'Más cerca de las personas y lugares detrás de cada taza.',
      body: 'Creemos que las relaciones cafeteras más valiosas comienzan con curiosidad y crecen con claridad.',
      cards: [
        { number: 'A', title: 'Origen con contexto', text: 'El productor, la región y el lote son parte de la historia del café, no una nota al pie.' },
        { number: 'B', title: 'Detalles que viajan', text: 'La trazabilidad mantiene conectada la información de origen y calidad durante el recorrido.' },
        { number: 'C', title: 'Relaciones que perduran', text: 'El abastecimiento consciente pone a las personas y la colaboración a largo plazo en el centro.' },
      ],
    },
    partners: {
      eyebrow: '06 / TRABAJEMOS JUNTOS',
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
            <div className="origin-atlas">
              <div className="origin-atlas__heading">
                <div>
                  <p className="eyebrow"><span className="eyebrow__line" />{t.network.originsEyebrow}</p>
                  <h4>{t.network.originsTitle}</h4>
                </div>
                <p>{t.network.originsBody}</p>
              </div>
              <div className="origin-atlas__body">
                <figure className="origin-map">
                  <div className="origin-map__topline">
                    <span>{t.network.mapLabel}</span>
                    <span aria-hidden="true">CO · 01—02</span>
                  </div>
                  <div className="origin-map__canvas">
                    <svg className="origin-map__drawing" viewBox="0 0 500 510" role="img" aria-label={t.network.mapAlt}>
                      <defs>
                        <linearGradient id="land-wash" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#d7dfce" />
                          <stop offset="1" stopColor="#b7c7b3" />
                        </linearGradient>
                        <pattern id="map-grain" width="7" height="7" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r=".65" fill="#526b58" opacity=".22" />
                        </pattern>
                      </defs>
                      <path className="origin-map__contour" d="M25 137c59-34 99-26 134-4s76 21 112 2 82-28 128-4M17 165c59-34 102-25 139-3s76 22 114 2 83-27 127-3M21 195c56-32 97-27 136-5s80 22 118 2 80-27 125-4M32 225c49-28 91-26 130-5s82 23 120 3 78-27 121-4M33 257c48-27 91-25 131-4s83 23 121 3 76-26 118-4M45 290c42-24 82-23 121-3s81 22 119 3 72-24 111-4" />
                      <path className="origin-map__land" d="M117 35 161 26l39 8 36-12 35 12 34-4 32 13 30-6 29 16 40 2 22 12-17 12-39 3-29 15-31 4 13 24-14 22-29 17-9 24-29 14-6 31 18 25-10 29-19 18-8 32-24 21-10 32-18 22-23 1-17-19-8-26-23-13-15-28-19-16-8-25-19-12-10-28-22-16-6-28-20-18-2-28 15-17 5-25 20-12 15-25 22-11 17-23z" />
                      <path className="origin-map__land-grain" d="M117 35 161 26l39 8 36-12 35 12 34-4 32 13 30-6 29 16 40 2 22 12-17 12-39 3-29 15-31 4 13 24-14 22-29 17-9 24-29 14-6 31 18 25-10 29-19 18-8 32-24 21-10 32-18 22-23 1-17-19-8-26-23-13-15-28-19-16-8-25-19-12-10-28-22-16-6-28-20-18-2-28 15-17 5-25 20-12 15-25 22-11 17-23z" />
                      <path className="origin-map__river" d="M168 151c31 18 36 36 48 54s29 24 47 43 23 39 45 48M226 88c-8 30 3 52 23 66s26 34 27 57" />
                      <text className="origin-map__region" x="255" y="335">COLOMBIA</text>
                      <text className="origin-map__water" x="35" y="395">PACIFIC OCEAN</text>
                      <text className="origin-map__water origin-map__water--east" x="375" y="303">ANDES</text>
                    </svg>
                    <a className="origin-map__pin origin-map__pin--jardin" href="#origin-jardin" aria-label={`${t.network.locations[0].place}, ${t.network.locations[0].department}`}>
                      <span className="origin-map__pin-dot" />
                      <span className="origin-map__pin-label">{t.network.locations[0].mapName}</span>
                    </a>
                    <a className="origin-map__pin origin-map__pin--murillo" href="#origin-murillo" aria-label={`${t.network.locations[1].place}, ${t.network.locations[1].department}`}>
                      <span className="origin-map__pin-dot" />
                      <span className="origin-map__pin-label">{t.network.locations[1].mapName}</span>
                    </a>
                  </div>
                  <figcaption className="origin-map__caption"><span className="origin-map__legend-dot" />{t.network.mapNote}</figcaption>
                </figure>
                <div className="origin-list" aria-label={t.network.providerLabel}>
                  <p className="origin-list__label">{t.network.providerLabel}</p>
                  {t.network.locations.map((location) => (
                    <article className="origin-card" id={`origin-${location.id}`} key={location.id}>
                      <div className="origin-card__top">
                        <span>{location.number} / {location.count}</span>
                        <span className="origin-card__marker" aria-hidden="true">↗</span>
                      </div>
                      <h5>{location.place}</h5>
                      <p className="origin-card__department">{location.department}, Colombia</p>
                      <ul>{location.suppliers.map((supplier) => <li key={supplier.profile}><a href={`#producer-${supplier.profile}`}>{supplier.name}<Arrow diagonal /></a></li>)}</ul>
                    </article>
                  ))}
                </div>
              </div>
              <section className="origin-profiles" aria-labelledby="origin-profiles-title">
                <div className="origin-profiles__heading">
                  <div>
                    <p className="eyebrow"><span className="eyebrow__line" />{t.network.profilesEyebrow}</p>
                    <h4 id="origin-profiles-title">{t.network.profilesTitle}</h4>
                  </div>
                  <p>{t.network.profilesBody}</p>
                </div>
                <div className="origin-profile-grid">
                  {t.network.profiles.map((profile) => (
                    <article className="origin-profile" id={`producer-${profile.id}`} key={profile.id}>
                      {profile.labelImage ? (
                        <figure className="origin-profile__visual origin-profile__visual--label">
                          <img src={profile.labelImage} alt={profile.labelAlt} loading="lazy" />
                          <figcaption>{profile.supplier} · {profile.product}</figcaption>
                        </figure>
                      ) : (
                        <>
                          <figure className="origin-profile__visual">
                            <img src={profile.photos[0].src} alt={profile.visualAlt} loading="lazy" />
                            <figcaption>{profile.supplier} · {profile.origin}</figcaption>
                          </figure>
                          <div className="origin-profile__gallery">
                            {profile.photos.slice(1).map((photo) => <img src={photo.src} alt={photo.alt} loading="lazy" key={photo.src} />)}
                          </div>
                        </>
                      )}
                      <div className="origin-profile__content">
                        <div className="origin-profile__heading">
                          <span>{profile.number} / {t.network.providerLabel}</span>
                          <span className="origin-profile__arrow" aria-hidden="true">↗</span>
                        </div>
                        <h5>{profile.supplier}</h5>
                        <p className="origin-profile__product">{profile.product}</p>
                        <p className="origin-profile__origin"><span>{language === 'en' ? 'LOT ORIGIN' : 'ORIGEN DEL LOTE'}</span>{profile.origin}</p>
                        <p className="origin-profile__story">{profile.story}</p>
                        <p className="origin-profile__specs-label">{t.network.specsHeading}</p>
                        <dl className="origin-profile__specs">
                          <div><dt>{language === 'en' ? 'Altitude' : 'Altitud'}</dt><dd>{profile.altitude}</dd></div>
                          <div><dt>{language === 'en' ? 'Variety' : 'Variedad'}</dt><dd>{profile.variety}</dd></div>
                          <div><dt>{language === 'en' ? 'Process' : 'Proceso'}</dt><dd>{profile.process}</dd></div>
                          <div><dt>{language === 'en' ? 'Roast' : 'Tostión'}</dt><dd>{profile.roast}</dd></div>
                        </dl>
                        <p className="origin-profile__sensory"><span>{language === 'en' ? 'SENSORY PROFILE' : 'PERFIL SENSORIAL'}</span>{profile.profile}</p>
                        <div className="origin-profile__verification">
                          <div><span>{t.network.scoreLabel}</span><strong>{profile.score}</strong></div>
                          <div><span>{t.network.traceLabel}</span><strong>{profile.trace}</strong></div>
                        </div>
                        <div className="origin-profile__actions">
                          <a className="button button--dark" href={InstagramLink} target="_blank" rel="noreferrer">{t.network.sampleCta}<Arrow diagonal /></a>
                          <a className="origin-profile__availability" href={InstagramLink} target="_blank" rel="noreferrer">{t.network.availabilityCta}<Arrow /></a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <aside className="origin-film-note">
                  <span className="origin-film-note__play" aria-hidden="true">▶</span>
                  <div>
                    <p className="origin-profile__specs-label">{t.network.storyHeading}</p>
                    <h5>{t.network.storyTitle}</h5>
                    <p>{t.network.storyBody}</p>
                  </div>
                  <span className="origin-film-note__status">{t.network.storyStatus}</span>
                </aside>
              </section>
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
