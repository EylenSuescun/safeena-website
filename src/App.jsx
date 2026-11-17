import { useEffect, useState } from 'react'

const content = {
  en: {
    announcement: 'SPECIALTY COFFEE  ·  COLOMBIA  ·  INDONESIA  ·  VIETNAM  ·  ASIA',
    announcementRight: 'FROM ORIGIN TO ASIA',
    nav: { story: 'Our idea', network: 'Regions', countries: 'Countries', zones: 'Colombia by zone', partners: 'For partners', contact: 'Let’s connect' },
    language: 'ES',
    hero: {
      eyebrow: 'COLOMBIA AT THE HEART OF SPECIALTY COFFEE',
      title: <>Colombia, the<br /><em>heart</em> of specialty coffee.</>,
      body: 'SAFEENA connects coffee growers in Colombia, Indonesia and Vietnam with specialty coffee buyers, primarily in Asia. Colombia leads our story, with its producers, places and lots in focus.',
      primary: 'Explore Colombian origins',
      secondary: 'Meet SAFEENA Asia',
      imageLabel: 'COLOMBIAN PRODUCERS',
      imageNote: 'Carefully picked at origin · connected to Asia',
      captionRegion: 'COLOMBIA → ASIA',
      sideLabel: 'SPECIALTY COFFEE · COLOMBIAN ORIGINS',
      imageAlt: 'A coffee grower selectively picking ripe cherries at a Colombian farm',
    },
    intro: {
      index: '01 / THE IDEA',
      title: 'Excellent coffee, from Colombian growers to buyers in Asia.',
      body: 'We work exclusively with specialty coffee. SAFEENA connects coffee growers in Colombia, Indonesia and Vietnam with buyers based primarily across Asia. We begin in Colombia, building clear relationships around each producer, place and lot.',
      link: 'Meet Colombian producers',
      note: 'COLOMBIA · INDONESIA · VIETNAM → ASIA',
    },
    network: {
      eyebrow: '02 / OUR NETWORK',
      title: <>Colombian origins.<br />Buyers across Asia.</>,
      body: 'Specialty coffee connects producers in Colombia, Indonesia and Vietnam with buyers primarily in Asia.',
      regions: [
        { id: 'asia', number: '01', title: 'Asia', label: 'BUYERS & ROASTERS', placeLabel: 'PRIMARY BUYER REGION', place: 'Asia', description: 'Our main buyers are in Asia. We connect their needs directly with specialty coffee at origin.' },
        { id: 'origins', number: '02', title: 'Colombia, Indonesia & Vietnam', label: 'PRODUCER COUNTRIES', placeLabel: 'LEAD ORIGIN', place: 'Colombia', description: 'Three producer countries, with Colombia in the spotlight and dedicated profiles growing over time.' },
      ],
      asiaEyebrow: 'ASIA · BUYERS & MARKETS',
      asiaTitle: 'Our buyers are based across Asia.',
      asiaBody: 'Asia is SAFEENA’s primary buyer region. We bring market demand closer to exceptional coffee at origin.',
      asiaMarket: 'Hong Kong',
      asiaMarketDetail: 'An Asian buyer market · specialty coffee',
      asiaInstagram: 'Follow SAFEENA Asia on Instagram',
      countriesEyebrow: '03 / PRODUCER COUNTRIES',
      countriesTitle: 'Colombia first. More origins in the network.',
      countriesBody: 'Producers in Colombia, Indonesia and Vietnam. Colombia leads with the most developed origin stories and lot profiles.',
      producerCountries: [
        { id: 'colombia', number: '01', name: 'Colombia', label: 'LEAD ORIGIN · PRODUCER PROFILES', detail: 'Antioquia · Tolima · Explore Colombia by zone', action: 'Explore Colombia', imageAlt: 'Coffee grower selecting ripe cherries at a Colombian farm' },
        { id: 'indonesia', number: '02', name: 'Indonesia', label: 'PRODUCER ORIGIN', detail: 'Producer profiles are being built.', action: 'Connect with SAFEENA' },
        { id: 'vietnam', number: '03', name: 'Vietnam', label: 'PRODUCER ORIGIN', detail: 'Producer profiles are being built.', action: 'Connect with SAFEENA' },
      ],
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
      storyBody: 'Short films from origin are being prepared to bring producer stories closer to buyers, primarily in Asia.',
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
      title: 'Specialty coffee, with origin at its heart.',
      body: 'SAFEENA brings excellent coffee growers and buyers together through clear origin stories and long-term relationships.',
      cards: [
        { number: 'A', title: 'Specialty coffee only', text: 'Every coffee we represent meets the specialty coffee focus at the core of SAFEENA.' },
        { number: 'B', title: 'Grower to Asian buyer', text: 'We connect growers directly with buyers, primarily across Asia.' },
        { number: 'C', title: 'Colombia in focus', text: 'We give Colombian origins the clearest stage while building the wider producer network.' },
      ],
    },
    partners: {
      eyebrow: '06 / WORK WITH US',
      title: 'Connecting Colombia’s coffee with Asia.',
      body: 'Are you a specialty coffee grower in Colombia, Indonesia or Vietnam, or a buyer based in Asia? Tell us what you are sourcing and what you are building.',
      button: 'Connect with SAFEENA Asia',
      secondaryButton: 'For Colombian producers',
      social: 'Specialty coffee · Colombia to Asia',
    },
    footer: {
      phrase: 'Colombian origins. Specialty coffee connected with Asia.',
      copyright: '© SAFEENA. Connecting specialty coffee growers and buyers.',
      back: 'Back to top ↑',
    },
  },
  es: {
    announcement: 'CAFÉ ESPECIAL  ·  COLOMBIA  ·  INDONESIA  ·  VIETNAM  ·  ASIA',
    announcementRight: 'DEL ORIGEN A ASIA',
    nav: { story: 'La idea', network: 'Regiones', countries: 'Países', zones: 'Colombia por zonas', partners: 'Aliados', contact: 'Conversemos' },
    language: 'EN',
    hero: {
      eyebrow: 'COLOMBIA EN EL CORAZÓN DEL CAFÉ ESPECIAL',
      title: <>Colombia,<br />el <em>corazón</em> del café especial.</>,
      body: 'SAFEENA conecta caficultores de Colombia, Indonesia y Vietnam con compradores de café especial, principalmente en Asia. Colombia lidera nuestra historia: sus productores, territorios y lotes están en primer plano.',
      primary: 'Explorar orígenes colombianos',
      secondary: 'Conoce SAFEENA Asia',
      imageLabel: 'PRODUCTORES COLOMBIANOS',
      imageNote: 'Recolección selectiva en origen · conexión con Asia',
      captionRegion: 'COLOMBIA → ASIA',
      sideLabel: 'CAFÉ ESPECIAL · ORÍGENES COLOMBIANOS',
      imageAlt: 'Una persona selecciona cerezas maduras de café en una finca colombiana',
    },
    intro: {
      index: '01 / LA IDEA',
      title: 'Café excelente, de caficultores colombianos a compradores en Asia.',
      body: 'Trabajamos exclusivamente con café especial. SAFEENA conecta caficultores de Colombia, Indonesia y Vietnam con compradores ubicados principalmente en Asia. Empezamos por Colombia y ponemos en primer plano a cada productor, territorio y lote.',
      link: 'Conoce a los productores colombianos',
      note: 'COLOMBIA · INDONESIA · VIETNAM → ASIA',
    },
    network: {
      eyebrow: '02 / NUESTRA RED',
      title: <>Orígenes colombianos.<br />Compradores en Asia.</>,
      body: 'El café especial conecta productores de Colombia, Indonesia y Vietnam con compradores ubicados principalmente en Asia.',
      regions: [
        { id: 'asia', number: '01', title: 'Asia', label: 'COMPRADORES Y TOSTADORES', placeLabel: 'REGIÓN COMPRADORA PRINCIPAL', place: 'Asia', description: 'Nuestros compradores están principalmente en Asia. Conectamos su demanda con café especial en origen.' },
        { id: 'origins', number: '02', title: 'Colombia, Indonesia y Vietnam', label: 'PAÍSES PRODUCTORES', placeLabel: 'ORIGEN PRINCIPAL', place: 'Colombia', description: 'Tres países productores, con Colombia en primer plano y perfiles dedicados que crecerán con la red.' },
      ],
      asiaEyebrow: 'ASIA · COMPRADORES Y MERCADOS',
      asiaTitle: 'Nuestros compradores están en Asia.',
      asiaBody: 'Asia es la principal región compradora de SAFEENA. Acercamos su demanda a cafés excepcionales en origen.',
      asiaMarket: 'Hong Kong',
      asiaMarketDetail: 'Un mercado comprador de Asia · café especial',
      asiaInstagram: 'Sigue a SAFEENA Asia en Instagram',
      countriesEyebrow: '03 / PAÍSES PRODUCTORES',
      countriesTitle: 'Colombia primero. Más orígenes en la red.',
      countriesBody: 'Productores en Colombia, Indonesia y Vietnam. Colombia lidera con las historias de origen y fichas de lote más desarrolladas.',
      producerCountries: [
        { id: 'colombia', number: '01', name: 'Colombia', label: 'ORIGEN PRINCIPAL · PRODUCTORES ACTIVOS', detail: 'Antioquia · Tolima · Explora Colombia por zonas', action: 'Explorar Colombia', imageAlt: 'Caficultor selecciona cerezas maduras en una finca colombiana' },
        { id: 'indonesia', number: '02', name: 'Indonesia', label: 'ORIGEN PRODUCTOR', detail: 'Estamos construyendo los perfiles de sus productores.', action: 'Conecta con SAFEENA' },
        { id: 'vietnam', number: '03', name: 'Vietnam', label: 'ORIGEN PRODUCTOR', detail: 'Estamos construyendo los perfiles de sus productores.', action: 'Conecta con SAFEENA' },
      ],
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
      storyBody: 'Preparamos cortometrajes desde el origen para acercar las historias de los productores a compradores, principalmente en Asia.',
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
      title: 'Café especial, con el origen en el centro.',
      body: 'SAFEENA conecta caficultores de café excelente con compradores a través de historias de origen claras y relaciones duraderas.',
      cards: [
        { number: 'A', title: 'Solo café especial', text: 'Trabajamos exclusivamente con café especial, poniendo calidad y origen en el centro de cada lote.' },
        { number: 'B', title: 'Del caficultor al comprador en Asia', text: 'Conectamos caficultores con compradores ubicados principalmente en Asia.' },
        { number: 'C', title: 'Colombia en primer plano', text: 'Damos a los orígenes colombianos el mayor protagonismo mientras crece la red de productores.' },
      ],
    },
    partners: {
      eyebrow: '06 / TRABAJEMOS JUNTOS',
      title: 'Conectamos el café colombiano con Asia.',
      body: '¿Eres caficultor de café especial en Colombia, Indonesia o Vietnam, o comprador ubicado en Asia? Cuéntanos qué estás buscando y qué estás construyendo.',
      button: 'Conecta con SAFEENA Asia',
      secondaryButton: 'Para productores en Colombia',
      social: 'Café especial · Colombia hacia Asia',
    },
    footer: {
      phrase: 'Orígenes colombianos. Café especial conectado con Asia.',
      copyright: '© SAFEENA. Conectamos caficultores y compradores de café especial.',
      back: 'Volver arriba ↑',
    },
  },
}

const InstagramAsiaLink = 'https://www.instagram.com/safeena.coffee/'
const InstagramLatamLink = 'https://www.instagram.com/safeena_coffeelatam/'

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
              <a className="button button--dark" href="#colombia-zones">{t.hero.primary}<Arrow diagonal /></a>
              <a className="text-link" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.hero.secondary}<Arrow /></a>
            </div>
            <div className="hero__signature">
              <span className="signature-mark" aria-hidden="true">✳</span>
              <span>{language === 'en' ? 'COFFEE, WITH ITS ORIGIN IN VIEW' : 'CAFÉ, CON SU ORIGEN A LA VISTA'}</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <img className="hero__image" src="/images/producers/kafesedna-harvest.jpg" alt={t.hero.imageAlt} fetchPriority="high" />
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
              <a className="market-card__social" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.network.asiaInstagram}<Arrow diagonal /></a>
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
            <div className="country-grid">
              {t.network.producerCountries.map((country) => (
                <a className={`country-card country-card--${country.id}`} href={country.id === 'colombia' ? '#colombia-zones' : '#partners'} key={country.id}>
                  {country.id === 'colombia' && <img className="country-card__image" src="/images/producers/kafesedna-harvest.jpg" alt={country.imageAlt} loading="lazy" />}
                  <span className="country-card__number" aria-hidden="true">{country.number}</span>
                  <span className="country-card__content">
                    <span className="country-card__region">{country.label}</span>
                    <strong>{country.name}</strong>
                    <span className="country-card__detail">{country.detail}</span>
                    <span className="country-card__action">{country.action}<Arrow diagonal /></span>
                  </span>
                </a>
              ))}
            </div>
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
                          <a className="button button--dark" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.network.sampleCta}<Arrow diagonal /></a>
                          <a className="origin-profile__availability" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.network.availabilityCta}<Arrow /></a>
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
                <a className="button button--cream" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.partners.button}<Arrow diagonal /></a>
                <a className="partner-band__secondary" href={InstagramLatamLink} target="_blank" rel="noreferrer">{t.partners.secondaryButton}<Arrow /></a>
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
            <a href={InstagramAsiaLink} target="_blank" rel="noreferrer">Instagram Asia <Arrow diagonal /></a>
            <a href={InstagramLatamLink} target="_blank" rel="noreferrer">Instagram LatAm <Arrow diagonal /></a>
            <span>{language === 'en' ? 'ORIGIN → MARKET' : 'ORIGEN → MERCADO'}</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
