import { useEffect, useState } from 'react'
import { BrowserRouter, Link, useLocation } from 'react-router-dom'
import ColombiaOriginMap from './ColombiaOriginMap.jsx'
import WorldOriginMap from './WorldOriginMap.jsx'
import OriginZoneSummary from './OriginZoneSummary.jsx'

const content = {
  en: {
    announcement: 'SPECIALTY COFFEE  ·  LATIN AMERICA  ·  ASIA',
    announcementRight: 'ORIGINS TO ASIA',
    nav: { home: 'Home', origins: 'Origins', producers: 'Producers', markets: 'Buyers', story: 'Our model', contact: 'Let’s connect' },
    language: 'ES',
    hero: {
      eyebrow: 'COLOMBIA AT THE HEART OF SPECIALTY COFFEE',
      title: <>Colombia, the<br /><em>heart</em> of specialty coffee.</>,
      body: 'SAFEENA connects coffee growers in Colombia, Indonesia and Vietnam with specialty coffee buyers, primarily in Asia. Colombia leads our story, with its producers, places and lots in focus.',
      primary: 'Explore Colombian origins',
      secondary: 'Meet SAFEENA Asia',
      imageLabel: 'A COLOMBIAN ORIGIN',
      imageNote: 'From Latin America · led by Colombia',
      captionRegion: 'COLOMBIA → ASIA',
      sideLabel: 'SPECIALTY COFFEE · COLOMBIAN ORIGINS',
      imageAlt: 'A green mountain landscape at a coffee-growing origin in Colombia',
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
        { id: 'asia', number: '01', title: 'Asia', label: 'BUYER REGION', placeLabel: 'BUYERS PRIMARILY IN', place: 'Asia', description: 'SAFEENA connects specialty coffee origins with buyers across its primary market region.' },
        { id: 'latam', number: '02', title: 'Latin America', label: 'PRODUCER REGION', placeLabel: 'LEAD COUNTRY', place: 'Colombia', description: 'Colombia leads today. This origin network is ready to grow with more countries across Latin America.' },
      ],
      buyersEyebrow: '04 / BUYER COUNTRIES',
      buyersTitle: 'Asia, country by country.',
      buyersBody: 'Asia is SAFEENA’s primary buyer region. Hong Kong is an initial market; more destinations can join as the network grows.',
      buyerCountries: [
        { number: '01', name: 'Hong Kong', region: 'ASIA', detail: 'Initial buyer market · specialty coffee' },
      ],
      countriesEyebrow: '03 / PRODUCER COUNTRIES',
      countriesTitle: 'Exceptional coffee, rooted in origin.',
      countriesBody: 'Producers in Colombia, Indonesia and Vietnam. Colombia takes the lead, while the network can expand across Latin America and Asia.',
      producerNetworkNote: 'The Latin American origin directory is designed to welcome more producer countries as the network grows.',
      producerCountries: [
        { id: 'colombia', number: '01', name: 'Colombia', label: 'LATIN AMERICA · LEAD ORIGIN', detail: 'Antioquia · Tolima · Explore by zone', action: 'Explore Colombia', imageAlt: 'A green mountain landscape at a coffee-growing origin in Colombia' },
        { id: 'indonesia', number: '02', name: 'Indonesia', label: 'ASIA · PRODUCER COUNTRY', detail: 'Producer profiles are in development.', action: 'Meet our network' },
        { id: 'vietnam', number: '03', name: 'Vietnam', label: 'ASIA · PRODUCER COUNTRY', detail: 'Producer profiles are in development.', action: 'Meet our network' },
      ],
      zonesEyebrow: 'COLOMBIA · BY ZONE',
      zonesTitle: 'Every zone has a story.',
      zonesBody: 'Explore Colombian coffee origins zone by zone, with each profile bringing together local producers, practices and lots.',
      zonesNote: 'The zone directory is taking shape. Names and profiles will appear here as origin details are confirmed.',
      originsEyebrow: 'COLOMBIA · OUR ORIGINS',
      originsTitle: 'Three partners. Two places. One shared story.',
      originsBody: 'Meet the Colombian producers already part of SAFEENA, rooted in the mountain landscapes of Antioquia and Tolima.',
      mapLabel: 'A MAP OF OUR ORIGINS',
      mapAlt: 'Map of Colombia marking current coffee origins in Jardín, Antioquia, and Murillo, Tolima, with potential future regions in Huila, Nariño and Santander.',
      mapStatus: '02 CURRENT ORIGINS',
      mapCaribbean: 'CARIBBEAN SEA',
      mapPacific: 'PACIFIC OCEAN',
      mapAndes: 'ANDES RANGE',
      mapLegendCurrent: 'Current partner locations',
      mapLegendFuture: 'Future regions to explore',
      mapExpansionLabel: 'NEXT COLOMBIAN ORIGINS TO EXPLORE',
      mapExpansionRegions: ['Huila', 'Nariño', 'Santander'],
      mapCredit: 'GEOGRAPHIC OUTLINE · NATURAL EARTH',
      mapPinAction: 'Select origin zone',
      zonePanelEyebrow: 'SELECTED COFFEE ZONE',
      zonePanelProducers: 'PRODUCERS IN THIS AREA',
      zonePanelFootnote: 'Open a producer profile to explore their origin and coffee details.',
      providerLabel: 'ORIGIN PARTNERS',
      locations: [
        { id: 'jardin', number: '01', place: 'Jardín', department: 'Antioquia', count: '2 PRODUCERS', summary: 'Two coffee producers in Jardín, Antioquia, at the heart of SAFEENA’s Colombian origin network.', suppliers: [{ name: 'Kafesedna', profile: 'kafesedna' }, { name: 'Villa Martín', profile: 'villa-martin' }], mapName: 'JARDÍN' },
        { id: 'murillo', number: '02', place: 'Murillo', department: 'Tolima', count: '1 PRODUCER', summary: 'A coffee origin in northern Tolima, close to Nevado del Ruiz, represented by producer Salinas.', suppliers: [{ name: 'Salinas', profile: 'salinas' }], mapName: 'MURILLO' },
      ],
      profilesEyebrow: '05 / COLOMBIAN PRODUCERS',
      profilesTitle: 'Meet the people behind each origin.',
      profilesBody: 'Open a producer profile to explore their place, coffee and lot details.',
      specsHeading: 'LOT DETAILS',
      scoreLabel: 'CUPPING SCORE',
      scorePending: 'Not confirmed for this lot',
      traceLabel: 'VERIFIED LOT TRACEABILITY',
      traceLink: 'Open lot verification',
      availabilityCta: 'Check lot availability',
      openProfile: 'Explore producer profile',
      profileBack: 'Back to Colombian origins',
      profileEyebrow: 'SAFEENA · PRODUCER PROFILE',
      profileRegion: 'COLOMBIA · SPECIALTY COFFEE',
      profileStory: 'The producer and their origin',
      profileGallery: 'At origin',
      profileContact: 'Ask about lot availability',
      profileCupping: 'A score will be added when the lot is confirmed.',
      profiles: [
        {
          id: 'kafesedna', number: '01', supplier: 'Kafesedna', product: 'Don Carlos', origin: 'San Bartolo · Andes, Antioquia', altitude: '1,950 m a.s.l.', variety: 'Castillo', process: 'Washed', roast: 'Medium',
          profile: 'Cinnamon, caramel, chocolate, tangerine, molasses, blackberry, orange and panela. Juicy, spicy body, a short fruity aftertaste and lingering spice.',
          story: 'The Don Carlos edition honors a coffee grower and the family legacy, tenacity and love for the land described on the package.',
          photos: [
            { src: '/images/producers/kafesedna-landscape.jpg', alt: 'Mountain landscape among coffee plots at Kafesedna' },
            { src: '/images/producers/kafesedna-harvest.jpg', alt: 'Hand-selecting ripe coffee cherries at the farm' },
            { src: '/images/producers/kafesedna-processing.jpg', alt: 'Coffee drying under cover at the farm' },
          ],
          visualAlt: 'Coffee hills at the Don Carlos origin in Antioquia', score: '83.5', scoreScale: '/ 100',
        },
        {
          id: 'villa-martin', number: '02', supplier: 'Villa Martín', product: 'Café cultivado a la sombra', origin: 'Finca La Matilde · Vereda San Bartolo · Jardín, Antioquia', altitude: '1,750 m a.s.l.', variety: 'Castillo', process: 'Washed', roast: 'Not specified',
          profile: 'Chocolate, sugar cane, orange and tangerine.',
          story: 'The package describes a shade-grown Arabica coffee from Finca La Matilde.',
          photos: [], labelImage: '/images/producers/villa-martin-label.png', labelAlt: 'Villa Martín coffee label with the printed origin and lot profile',
          score: 'Not confirmed for this lot',
        },
        {
          id: 'salinas', number: '03', supplier: 'Salinas', product: 'Coffee from Murillo', origin: 'Murillo · Tolima · near Nevado del Ruiz', altitude: 'To be confirmed', variety: 'To be confirmed', process: 'To be confirmed', roast: 'To be confirmed',
          profile: 'Lot-specific sensory notes are being gathered.',
          story: 'Brothers Fernando and Aduar Salinas Castellanos have developed their coffee project at Finca El Limón, in Vereda Corozal, Murillo. Since 2011, they have cultivated specialty coffee in the highlands of northern Tolima, close to Nevado del Ruiz—a landscape that gives this origin a strong sense of place.',
          photos: [
            { src: '/images/producers/salinas-landscape.jpg', alt: 'Mountain landscape at Salinas in Murillo, Tolima' },
            { src: '/images/producers/salinas-drying.jpg', alt: 'Coffee drying on a raised bed at Salinas' },
            { src: '/images/producers/salinas-finca.jpg', alt: 'Coffee drying structure in the mountain landscape' },
          ],
          visualAlt: 'Coffee-growing landscape in Murillo, Tolima', score: 'To be confirmed',
        },
      ],
    },
    values: {
      eyebrow: '06 / WHAT MATTERS',
      title: 'Specialty coffee, with origin at its heart.',
      body: 'SAFEENA brings excellent coffee growers and buyers together through clear origin stories and long-term relationships.',
      cards: [
        { number: 'A', title: 'Specialty coffee only', text: 'Every coffee we represent meets the specialty coffee focus at the core of SAFEENA.' },
        { number: 'B', title: 'Grower to Asian buyer', text: 'We connect growers directly with buyers, primarily across Asia.' },
        { number: 'C', title: 'Colombia in focus', text: 'We give Colombian origins the clearest stage while building the wider producer network.' },
      ],
    },
    partners: {
      eyebrow: '07 / WORK WITH US',
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
    pages: {
      origins: {
        eyebrow: 'SAFEENA · ORIGIN NETWORK',
        title: 'Coffee origins, connected across regions.',
        body: 'Explore current producer countries and Colombian zones. The map can grow as new origin relationships are confirmed across the Americas, Asia and future regions.',
        mapLabel: 'GLOBAL PRODUCER NETWORK', mapStatus: '3 PRODUCER COUNTRIES',
        mapAlt: 'World map with producer countries Colombia, Indonesia and Vietnam, and a future expansion marker in Africa.',
        americas: 'AMERICAS', asia: 'ASIA', africa: 'AFRICA', pacific: 'PACIFIC OCEAN', atlantic: 'ATLANTIC OCEAN',
        currentCountries: 'Current producer countries', futureRegions: 'Future regions to explore', futureAfrica: 'Africa · future region',
        selectCountry: 'Select a country on the map',
        panelEyebrow: 'ORIGIN NETWORK', panelTitle: 'Colombia leads our origins.',
        panelBody: 'Start with Colombia’s current coffee regions. Select Jardín or Murillo to see the producers connected to each place.',
        countryStage: 'PRODUCER COUNTRY', exploreColombia: 'Explore Colombian zones',
        backToWorld: '← All origin regions', futureTitle: 'Future origin region',
        futureBody: 'The network can expand into Africa as producer relationships are confirmed. No country or supplier is listed here yet.',
        countryPrompt: 'Choose a producer country on the map to see its origin network.',
        zoneCount: 'CURRENT COLOMBIAN ZONES',
      },
      producers: { eyebrow: 'ORIGIN PARTNERS', title: 'Meet the producers behind each coffee.', body: 'Explore each producer profile for their place, coffee details and available origin records.' },
      markets: { eyebrow: 'BUYER NETWORK', title: 'Asia is our primary buyer region.', body: 'Hong Kong is an initial market for SAFEENA. Additional destinations will appear here as buyer relationships are established.' },
      about: { eyebrow: 'THE SAFEENA MODEL', title: 'Specialty coffee, connected from origin to Asia.', body: 'SAFEENA connects coffee growers with buyers through clear origin information, traceable lots and long-term commercial relationships. We work exclusively with specialty coffee, with Colombia in the foreground and a network built to grow across regions.' },
    },
  },
  es: {
    announcement: 'CAFÉ ESPECIAL  ·  LATINOAMÉRICA  ·  ASIA',
    announcementRight: 'ORÍGENES HACIA ASIA',
    nav: { home: 'Inicio', origins: 'Orígenes', producers: 'Productores', markets: 'Compradores', story: 'Modelo Safeena', contact: 'Conversemos' },
    language: 'EN',
    hero: {
      eyebrow: 'COLOMBIA EN EL CORAZÓN DEL CAFÉ ESPECIAL',
      title: <>Colombia,<br />el <em>corazón</em> del café especial.</>,
      body: 'SAFEENA conecta caficultores de Colombia, Indonesia y Vietnam con compradores de café especial, principalmente en Asia. Colombia lidera nuestra historia: sus productores, territorios y lotes están en primer plano.',
      primary: 'Explorar orígenes colombianos',
      secondary: 'Conoce SAFEENA Asia',
      imageLabel: 'UN ORIGEN COLOMBIANO',
      imageNote: 'Desde Latinoamérica · Colombia al frente',
      captionRegion: 'COLOMBIA → ASIA',
      sideLabel: 'CAFÉ ESPECIAL · ORÍGENES COLOMBIANOS',
      imageAlt: 'Paisaje de montaña verde en un origen cafetero de Colombia',
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
        { id: 'asia', number: '01', title: 'Asia', label: 'REGIÓN COMPRADORA', placeLabel: 'COMPRADORES PRINCIPALMENTE EN', place: 'Asia', description: 'SAFEENA conecta orígenes de café especial con compradores en su principal región de mercado.' },
        { id: 'latam', number: '02', title: 'Latinoamérica', label: 'REGIÓN PRODUCTORA', placeLabel: 'PAÍS PRINCIPAL', place: 'Colombia', description: 'Colombia lidera hoy. La red está preparada para crecer con más países productores de Latinoamérica.' },
      ],
      buyersEyebrow: '04 / PAÍSES COMPRADORES',
      buyersTitle: 'Asia, país por país.',
      buyersBody: 'Asia es la principal región compradora de SAFEENA. Hong Kong es un mercado inicial; nuevos destinos se sumarán a medida que crezca la red.',
      buyerCountries: [
        { number: '01', name: 'Hong Kong', region: 'ASIA', detail: 'Mercado comprador inicial · café especial' },
      ],
      countriesEyebrow: '03 / PAÍSES PRODUCTORES',
      countriesTitle: 'Café excepcional, arraigado en su origen.',
      countriesBody: 'Productores en Colombia, Indonesia y Vietnam. Colombia ocupa el primer plano mientras la red crece entre Latinoamérica y Asia.',
      producerNetworkNote: 'El directorio de Latinoamérica está preparado para sumar países productores a medida que crece la red.',
      producerCountries: [
        { id: 'colombia', number: '01', name: 'Colombia', label: 'LATINOAMÉRICA · ORIGEN PRINCIPAL', detail: 'Antioquia · Tolima · Explora por zonas', action: 'Explorar Colombia', imageAlt: 'Paisaje de montaña verde en un origen cafetero de Colombia' },
        { id: 'indonesia', number: '02', name: 'Indonesia', label: 'ASIA · PAÍS PRODUCTOR', detail: 'Perfiles de productores en desarrollo.', action: 'Conoce nuestra red' },
        { id: 'vietnam', number: '03', name: 'Vietnam', label: 'ASIA · PAÍS PRODUCTOR', detail: 'Perfiles de productores en desarrollo.', action: 'Conoce nuestra red' },
      ],
      zonesEyebrow: 'COLOMBIA · POR ZONAS',
      zonesTitle: 'Cada zona tiene su historia.',
      zonesBody: 'Explora los orígenes cafeteros de Colombia por zonas, reuniendo productores, prácticas y lotes de cada lugar.',
      zonesNote: 'Estamos organizando el directorio por zonas. Los nombres y perfiles aparecerán a medida que confirmemos la información de origen.',
      originsEyebrow: 'COLOMBIA · NUESTROS ORÍGENES',
      originsTitle: 'Tres aliados. Dos lugares. Una historia compartida.',
      originsBody: 'Conoce a los proveedores colombianos que ya hacen parte de SAFEENA, entre los paisajes de montaña de Antioquia y Tolima.',
      mapLabel: 'MAPA DE NUESTROS ORÍGENES',
      mapAlt: 'Mapa de Colombia con orígenes cafeteros actuales en Jardín, Antioquia, y Murillo, Tolima, y posibles zonas futuras en Huila, Nariño y Santander.',
      mapStatus: '02 ORÍGENES ACTUALES',
      mapCaribbean: 'MAR CARIBE',
      mapPacific: 'OCÉANO PACÍFICO',
      mapAndes: 'CORDILLERA DE LOS ANDES',
      mapLegendCurrent: 'Ubicaciones actuales de aliados',
      mapLegendFuture: 'Zonas para explorar a futuro',
      mapExpansionLabel: 'PRÓXIMOS ORÍGENES COLOMBIANOS POR EXPLORAR',
      mapExpansionRegions: ['Huila', 'Nariño', 'Santander'],
      mapCredit: 'CONTORNO GEOGRÁFICO · NATURAL EARTH',
      mapPinAction: 'Seleccionar zona de origen',
      zonePanelEyebrow: 'ZONA CAFETERA SELECCIONADA',
      zonePanelProducers: 'PRODUCTORES DE ESTA ZONA',
      zonePanelFootnote: 'Abre el perfil de cada productor para conocer su origen y su café.',
      providerLabel: 'ALIADOS DE ORIGEN',
      locations: [
        { id: 'jardin', number: '01', place: 'Jardín', department: 'Antioquia', count: '2 PROVEEDORES', summary: 'Dos productores de café en Jardín, Antioquia, en el centro de la red de orígenes colombianos de SAFEENA.', suppliers: [{ name: 'Kafesedna', profile: 'kafesedna' }, { name: 'Villa Martín', profile: 'villa-martin' }], mapName: 'JARDÍN' },
        { id: 'murillo', number: '02', place: 'Murillo', department: 'Tolima', count: '1 PRODUCTOR', summary: 'Un origen cafetero en el norte del Tolima, cerca del Nevado del Ruiz, representado por el productor Salinas.', suppliers: [{ name: 'Salinas', profile: 'salinas' }], mapName: 'MURILLO' },
      ],
      profilesEyebrow: '05 / PRODUCTORES COLOMBIANOS',
      profilesTitle: 'Conoce a las personas detrás de cada origen.',
      profilesBody: 'Abre cada perfil para explorar su lugar, sus cafés y los datos de sus lotes.',
      specsHeading: 'DATOS DEL LOTE',
      scoreLabel: 'PUNTAJE DE CATACIÓN',
      scorePending: 'No confirmado para este lote',
      traceLabel: 'TRAZABILIDAD VERIFICADA DEL LOTE',
      traceLink: 'Abrir verificación del lote',
      availabilityCta: 'Consultar disponibilidad',
      openProfile: 'Explorar perfil del productor',
      profileBack: 'Volver a los orígenes colombianos',
      profileEyebrow: 'SAFEENA · PERFIL DE PRODUCTOR',
      profileRegion: 'COLOMBIA · CAFÉ ESPECIAL',
      profileStory: 'El productor y su origen',
      profileGallery: 'En el origen',
      profileContact: 'Consultar disponibilidad del lote',
      profileCupping: 'Agregaremos el puntaje cuando se confirme para el lote.',
      profiles: [
        {
          id: 'kafesedna', number: '01', supplier: 'Kafesedna', product: 'Don Carlos', origin: 'San Bartolo · Andes, Antioquia', altitude: '1.950 m s. n. m.', variety: 'Castillo', process: 'Lavado', roast: 'Medio',
          profile: 'Canela, caramelo, chocolate, mandarina, melaza, mora, naranja y panela. Cuerpo jugoso y especiado, residual corto y afrutado, con especias persistentes.',
          story: 'La edición Don Carlos rinde homenaje al caficultor y a la herencia familiar, la tenacidad y el amor por la tierra que cuenta su empaque.',
          photos: [
            { src: '/images/producers/kafesedna-landscape.jpg', alt: 'Montañas entre cafetales de Kafesedna' },
            { src: '/images/producers/kafesedna-harvest.jpg', alt: 'Selección manual de cerezas maduras en la finca' },
            { src: '/images/producers/kafesedna-processing.jpg', alt: 'Café en secado bajo cubierta en la finca' },
          ],
          visualAlt: 'Montañas cafeteras del origen Don Carlos en Antioquia', score: '83,5', scoreScale: '/ 100',
        },
        {
          id: 'villa-martin', number: '02', supplier: 'Villa Martín', product: 'Café cultivado a la sombra', origin: 'Finca La Matilde · Vereda San Bartolo · Jardín, Antioquia', altitude: '1.750 m s. n. m.', variety: 'Castillo', process: 'Lavado', roast: 'No especificado',
          profile: 'Chocolate, caña de azúcar, naranja y mandarina.',
          story: 'El empaque describe un café arábica cultivado a la sombra en la Finca La Matilde.',
          photos: [], labelImage: '/images/producers/villa-martin-label.png', labelAlt: 'Etiqueta de Villa Martín con el origen y el perfil del lote impresos',
          score: 'No confirmado para este lote',
        },
        {
          id: 'salinas', number: '03', supplier: 'Salinas', product: 'Café de Murillo', origin: 'Murillo · Tolima · cerca del Nevado del Ruiz', altitude: 'Por confirmar', variety: 'Por confirmar', process: 'Por confirmar', roast: 'Por confirmar',
          profile: 'Perfil sensorial por recopilar para el lote.',
          story: 'Los hermanos Fernando y Aduar Salinas Castellanos han desarrollado su proyecto cafetero en la finca El Limón, vereda Corozal, Murillo. Desde 2011 cultivan café especial en las montañas del norte del Tolima, cerca del Nevado del Ruiz. Su historia está arraigada en la agricultura familiar y en el paisaje de alta montaña de este origen.',
          photos: [
            { src: '/images/producers/salinas-landscape.jpg', alt: 'Paisaje de montaña de Salinas en Murillo, Tolima' },
            { src: '/images/producers/salinas-drying.jpg', alt: 'Café en secado sobre una cama elevada en Salinas' },
            { src: '/images/producers/salinas-finca.jpg', alt: 'Estructura de secado de café en el paisaje de montaña' },
          ],
          visualAlt: 'Paisaje cafetero en Murillo, Tolima', score: 'Por confirmar',
        },
      ],
    },
    values: {
      eyebrow: '06 / LO QUE NOS MUEVE',
      title: 'Café especial, con el origen en el centro.',
      body: 'SAFEENA conecta caficultores de café excelente con compradores a través de historias de origen claras y relaciones duraderas.',
      cards: [
        { number: 'A', title: 'Solo café especial', text: 'Trabajamos exclusivamente con café especial, poniendo calidad y origen en el centro de cada lote.' },
        { number: 'B', title: 'Del caficultor al comprador en Asia', text: 'Conectamos caficultores con compradores ubicados principalmente en Asia.' },
        { number: 'C', title: 'Colombia en primer plano', text: 'Damos a los orígenes colombianos el mayor protagonismo mientras crece la red de productores.' },
      ],
    },
    partners: {
      eyebrow: '07 / TRABAJEMOS JUNTOS',
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
    pages: {
      origins: {
        eyebrow: 'SAFEENA · RED DE ORÍGENES',
        title: 'Orígenes de café conectados entre regiones.',
        body: 'Explora los países productores y las zonas colombianas actuales. El mapa podrá crecer a medida que se confirmen nuevas relaciones de origen en América, Asia y otras regiones.',
        mapLabel: 'RED GLOBAL DE PRODUCTORES', mapStatus: '3 PAÍSES PRODUCTORES',
        mapAlt: 'Mapa del mundo con Colombia, Indonesia y Vietnam como países productores y una marca de expansión futura en África.',
        americas: 'AMÉRICA', asia: 'ASIA', africa: 'ÁFRICA', pacific: 'OCÉANO PACÍFICO', atlantic: 'OCÉANO ATLÁNTICO',
        currentCountries: 'Países productores actuales', futureRegions: 'Regiones para explorar a futuro', futureAfrica: 'África · región futura',
        selectCountry: 'Selecciona un país en el mapa',
        panelEyebrow: 'RED DE ORÍGENES', panelTitle: 'Colombia lidera nuestros orígenes.',
        panelBody: 'Empieza por las zonas cafeteras actuales de Colombia. Selecciona Jardín o Murillo para ver a los productores vinculados con cada lugar.',
        countryStage: 'PAÍS PRODUCTOR', exploreColombia: 'Explorar zonas colombianas',
        backToWorld: '← Todos los orígenes', futureTitle: 'Región de origen futura',
        futureBody: 'La red podrá crecer en África a medida que se confirmen relaciones con productores. Aún no hay países ni proveedores registrados aquí.',
        countryPrompt: 'Selecciona un país productor en el mapa para conocer su red de origen.',
        zoneCount: 'ZONAS COLOMBIANAS ACTUALES',
      },
      producers: { eyebrow: 'ALIADOS DE ORIGEN', title: 'Conoce a quienes producen cada café.', body: 'Explora cada perfil para conocer su territorio, los datos del café y la información disponible de origen.' },
      markets: { eyebrow: 'RED COMPRADORA', title: 'Asia es nuestra principal región compradora.', body: 'Hong Kong es un mercado inicial para SAFEENA. Aquí aparecerán nuevos destinos a medida que se establezcan relaciones con compradores.' },
      about: { eyebrow: 'EL MODELO SAFEENA', title: 'Café especial conectado desde el origen con Asia.', body: 'SAFEENA conecta caficultores con compradores a través de información clara de origen, lotes trazables y relaciones comerciales duraderas. Trabajamos exclusivamente con café especial, con Colombia en primer plano y una red preparada para crecer entre regiones.' },
    },
  },
}

const InstagramAsiaLink = 'https://www.instagram.com/safeena.coffee/'
const InstagramLatamLink = 'https://www.instagram.com/safeena_coffeelatam/'

function Logo({ language }) {
  return (
    <Link className="brand" to="/" aria-label={language === 'en' ? 'SAFEENA — home' : 'SAFEENA — inicio'}>
      <span className="brand__mark" aria-hidden="true">
        <img src="/images/safeena-logo.jpg" alt="" />
      </span>
      <span className="brand__word">SAFEENA</span>
    </Link>
  )
}

function Arrow({ diagonal = false }) {
  return <span className={`arrow${diagonal ? ' arrow--diagonal' : ''}`} aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function SiteHeader({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  const location = useLocation()
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/origins', label: t.nav.origins },
    { to: '/producers', label: t.nav.producers },
    { to: '/markets', label: t.nav.markets },
    { to: '/about', label: t.nav.story },
  ]

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
            onClick={onMenuToggle}
          >
            <span />
            <span />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>
            {links.map((link) => (
              <Link
                to={link.to}
                onClick={onMenuClose}
                aria-current={location.pathname === link.to || (link.to === '/producers' && location.pathname.startsWith('/producers/')) ? 'page' : undefined}
                key={link.to}
              >{link.label}</Link>
            ))}
            <button className="language-switch" type="button" onClick={() => { onToggleLanguage(); onMenuClose() }} aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}>
              <span className="language-switch__current">{language.toUpperCase()}</span>
              <span className="language-switch__divider">/</span>
              <span>{t.language}</span>
            </button>
            <Link className="nav-cta" to="/about#contact" onClick={onMenuClose}>{t.nav.contact}<Arrow diagonal /></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

function SiteFooter({ language, t }) {
  return (
    <footer className="site-footer section-shell">
      <div className="site-footer__top">
        <div><Logo language={language} /><p>{t.footer.phrase}</p></div>
        <Link className="footer-top-link" to="/">{t.footer.back}</Link>
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
  )
}

function PageFrame({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage, children }) {
  return (
    <>
      <SiteHeader language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage} />
      <main id="main">{children}</main>
      <SiteFooter language={language} t={t} />
    </>
  )
}

function ProducerMiniPage({ profile, language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  const gallery = profile.photos?.length > 1 ? profile.photos.slice(1) : []
  const heroImage = profile.photos?.[0] || (profile.labelImage ? { src: profile.labelImage, alt: profile.labelAlt } : null)

  return (
    <>
      <SiteHeader language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage} />

      <main className="producer-page section-shell" id="main">
        <Link className="producer-page__back" to="/origins?country=colombia">← {t.network.profileBack}</Link>
        <p className="producer-page__eyebrow"><span>{t.network.profileEyebrow}</span><span>{profile.number} / {t.network.providerLabel}</span></p>
        <section className="producer-page__hero" aria-labelledby="producer-title">
          <figure className={`producer-page__visual${profile.labelImage ? ' producer-page__visual--label' : ''}`}>
            {heroImage && <img src={heroImage.src} alt={heroImage.alt || profile.visualAlt} fetchPriority="high" />}
            <figcaption>{profile.origin}</figcaption>
          </figure>
          <div className="producer-page__intro">
            <p className="eyebrow"><span className="eyebrow__line" />{t.network.profileRegion}</p>
            <h1 id="producer-title">{profile.supplier}</h1>
            <p className="producer-page__product">{profile.product}</p>
            <p className="producer-page__story">{profile.story}</p>
            <p className="producer-page__lot"><span>{language === 'en' ? 'LOT ORIGIN' : 'ORIGEN DEL LOTE'}</span>{profile.origin}</p>
          </div>
        </section>

        <section className="producer-page__spec-section" aria-label={t.network.specsHeading}>
          <div className="producer-page__section-heading">
            <p className="eyebrow"><span className="eyebrow__line" />{t.network.specsHeading}</p>
            <h2>{language === 'en' ? 'A closer look at this coffee.' : 'Conoce mejor este café.'}</h2>
          </div>
          <dl className="producer-page__specs">
            <div><dt>{language === 'en' ? 'Altitude' : 'Altitud'}</dt><dd>{profile.altitude}</dd></div>
            <div><dt>{language === 'en' ? 'Variety' : 'Variedad'}</dt><dd>{profile.variety}</dd></div>
            <div><dt>{language === 'en' ? 'Process' : 'Proceso'}</dt><dd>{profile.process}</dd></div>
            <div><dt>{language === 'en' ? 'Roast' : 'Tostión'}</dt><dd>{profile.roast}</dd></div>
          </dl>
          <div className="producer-page__sensory">
            <span>{language === 'en' ? 'SENSORY PROFILE' : 'PERFIL SENSORIAL'}</span>
            <p>{profile.profile}</p>
          </div>
        </section>

        {(gallery.length > 0 || profile.labelImage) && (
          <section className="producer-page__gallery-section">
            <div className="producer-page__section-heading">
              <p className="eyebrow"><span className="eyebrow__line" />{t.network.profileGallery}</p>
              <h2>{language === 'en' ? 'A place shaped by coffee.' : 'Un territorio marcado por el café.'}</h2>
            </div>
            <div className="producer-page__gallery">
              {(gallery.length ? gallery : [{ src: profile.labelImage, alt: profile.labelAlt }]).map((photo) => (
                <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /></figure>
              ))}
            </div>
          </section>
        )}

        <section className="producer-page__traceability">
          <div>
            <span>{t.network.scoreLabel}</span>
            <strong data-score={profile.scoreScale ? 'numeric' : undefined}>{profile.score}{profile.scoreScale && <small>{profile.scoreScale}</small>}</strong>
          </div>
          {profile.traceUrl && (
            <div>
              <span>{t.network.traceLabel}</span>
              <strong>{profile.traceLabel || profile.supplier}</strong>
              <a className="producer-page__trace-link" href={profile.traceUrl} target="_blank" rel="noreferrer">{t.network.traceLink}<Arrow diagonal /></a>
            </div>
          )}
        </section>

        <section className="producer-page__contact">
          <div>
            <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />{language === 'en' ? 'FOR BUYERS IN ASIA' : 'PARA COMPRADORES EN ASIA'}</p>
            <h2>{language === 'en' ? 'Interested in this coffee?' : '¿Te interesa este café?'}</h2>
            <p>{language === 'en' ? 'Ask SAFEENA Asia about availability for this lot.' : 'Consulta con SAFEENA Asia la disponibilidad de este lote.'}</p>
          </div>
          <a className="button button--cream" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.network.profileContact}<Arrow diagonal /></a>
        </section>
      </main>
      <SiteFooter language={language} t={t} />
    </>
  )
}

function OriginExplorerPage({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const initialCountry = new URLSearchParams(window.location.search).get('country')
    return ['colombia', 'indonesia', 'vietnam', 'africa'].includes(initialCountry) ? initialCountry : ''
  })
  const [selectedZone, setSelectedZone] = useState('jardin')
  const labels = t.pages.origins
  const selectedLocation = t.network.locations.find((item) => item.id === selectedZone) || t.network.locations[0]
  const selectedProducerCountry = t.network.producerCountries.find((country) => country.id === selectedCountry)

  const chooseCountry = (id) => {
    setSelectedCountry(id)
    if (id === 'colombia') setSelectedZone('jardin')
  }

  return (
    <PageFrame language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage}>
      <section className="interior-page section-shell origins-page">
        <header className="interior-page__heading">
          <p className="eyebrow"><span className="eyebrow__line" />{labels.eyebrow}</p>
          <h1>{labels.title}</h1>
          <p>{labels.body}</p>
        </header>
        <div className="origin-explorer">
          <div className="origin-explorer__visual">
            <div className="origin-explorer__toolbar">
              {selectedCountry
                ? <button type="button" onClick={() => setSelectedCountry('')}>{labels.backToWorld}</button>
                : <span>{labels.selectCountry}</span>}
              {selectedCountry === 'colombia' && <strong>COLOMBIA · {t.network.locations.length} {language === 'en' ? 'ZONES' : 'ZONAS'}</strong>}
            </div>
            {selectedCountry === 'colombia' ? (
              <ColombiaOriginMap network={t.network} selectedZone={selectedZone} onSelectZone={setSelectedZone} />
            ) : (
              <WorldOriginMap
                countries={t.network.producerCountries}
                selectedCountry={selectedCountry}
                onSelectCountry={chooseCountry}
                labels={labels}
              />
            )}
          </div>

          <div className="origin-explorer__panel">
            {selectedCountry === 'colombia' ? (
              <>
                <OriginZoneSummary location={selectedLocation} network={t.network} language={language} />
                <div className="origin-explorer__zone-switcher">
                  <span>{labels.zoneCount}</span>
                  <div>{t.network.locations.map((zone) => (
                    <button
                      type="button"
                      className={selectedZone === zone.id ? 'origin-explorer__zone--selected' : ''}
                      aria-pressed={selectedZone === zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      key={zone.id}
                    >{zone.place}<small>{zone.department}</small></button>
                  ))}</div>
                </div>
              </>
            ) : selectedCountry === 'africa' ? (
              <div className="origin-explorer__country-panel">
                <p className="eyebrow"><span className="eyebrow__line" />{labels.futureTitle}</p>
                <h2>{labels.futureAfrica}</h2>
                <p>{labels.futureBody}</p>
              </div>
            ) : selectedProducerCountry ? (
              <div className="origin-explorer__country-panel">
                <p className="eyebrow"><span className="eyebrow__line" />{labels.countryStage}</p>
                <h2>{selectedProducerCountry.name}</h2>
                <p>{selectedProducerCountry.detail}</p>
                <Link className="text-link text-link--red" to="/producers">{language === 'en' ? 'Explore producer profiles' : 'Explorar perfiles de productores'}<Arrow /></Link>
              </div>
            ) : (
              <div className="origin-explorer__country-panel">
                <p className="eyebrow"><span className="eyebrow__line" />{labels.panelEyebrow}</p>
                <h2>{labels.panelTitle}</h2>
                <p>{labels.panelBody}</p>
                <div className="origin-explorer__country-links">
                  {t.network.producerCountries.map((country) => (
                    <button type="button" onClick={() => chooseCountry(country.id)} key={country.id}>
                      <span>{country.name}</span><small>{country.label}</small><Arrow diagonal />
                    </button>
                  ))}
                  <button type="button" onClick={() => chooseCountry('africa')}>
                    <span>{labels.futureAfrica}</span><small>{labels.futureRegions}</small><Arrow diagonal />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="origin-explorer__note"><span aria-hidden="true">✳</span>{language === 'en' ? 'Map markers identify producer countries and municipalities, not individual farm boundaries.' : 'Los marcadores señalan países productores y municipios, no los límites exactos de cada finca.'}</p>
      </section>
    </PageFrame>
  )
}

function ProducerDirectoryPage({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  return (
    <PageFrame language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage}>
      <section className="interior-page section-shell directory-page">
        <header className="interior-page__heading">
          <p className="eyebrow"><span className="eyebrow__line" />{t.pages.producers.eyebrow}</p>
          <h1>{t.pages.producers.title}</h1>
          <p>{t.pages.producers.body}</p>
        </header>
        <div className="producer-teaser-grid">
          {t.network.profiles.map((profile) => {
            const cover = profile.photos?.[0]
            return (
              <Link className="producer-teaser" to={`/producers/${profile.id}`} key={profile.id}>
                <div className={`producer-teaser__visual${profile.labelImage ? ' producer-teaser__visual--label' : ''}`}>
                  <img src={profile.labelImage || cover?.src} alt={profile.labelAlt || cover?.alt || profile.visualAlt} loading="lazy" />
                  <span className="producer-teaser__number">{profile.number}</span>
                </div>
                <div className="producer-teaser__content">
                  <span className="producer-teaser__eyebrow">{profile.origin}</span>
                  <h2>{profile.supplier}</h2>
                  <p>{profile.product}</p>
                  <span className="producer-teaser__link">{t.network.openProfile}<Arrow diagonal /></span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </PageFrame>
  )
}

function MarketsPage({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  return (
    <PageFrame language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage}>
      <section className="interior-page section-shell markets-page">
        <header className="interior-page__heading">
          <p className="eyebrow"><span className="eyebrow__line" />{t.pages.markets.eyebrow}</p>
          <h1>{t.pages.markets.title}</h1>
          <p>{t.pages.markets.body}</p>
        </header>
        <div className="markets-page__grid">
          {t.network.buyerCountries.map((country) => (
            <article className="buyer-country-card" key={country.name}>
              <span className="buyer-country-card__region">{country.region} · {language === 'en' ? 'BUYER COUNTRY' : 'PAÍS COMPRADOR'}</span>
              <strong>{country.name}</strong>
              <span>{country.detail}</span>
            </article>
          ))}
          <a className="buyer-country-card buyer-country-card--connect" href={InstagramAsiaLink} target="_blank" rel="noreferrer">
            <span className="buyer-country-card__region">{language === 'en' ? 'ASIA · SAFEENA NETWORK' : 'ASIA · RED SAFEENA'}</span>
            <strong>{language === 'en' ? 'Connect with SAFEENA Asia' : 'Conecta con SAFEENA Asia'}</strong>
            <span>{language === 'en' ? 'Discuss origin and sourcing needs' : 'Conversemos sobre orígenes y abastecimiento'}<Arrow diagonal /></span>
          </a>
        </div>
      </section>
    </PageFrame>
  )
}

function AboutPage({ language, t, menuOpen, onMenuToggle, onMenuClose, onToggleLanguage }) {
  const steps = language === 'en'
    ? [
        { number: '01', title: 'Origin partners', body: 'Build relationships with coffee producers and document the places behind each lot.' },
        { number: '02', title: 'Specialty lots', body: 'Present specialty coffee with clear producer, process and lot information.' },
        { number: '03', title: 'Asian buyers', body: 'Connect origin partners with buyers primarily across Asia.' },
      ]
    : [
        { number: '01', title: 'Aliados de origen', body: 'Construimos relaciones con caficultores y documentamos los lugares detrás de cada lote.' },
        { number: '02', title: 'Lotes de café especial', body: 'Presentamos café especial con información clara del productor, el proceso y el lote.' },
        { number: '03', title: 'Compradores en Asia', body: 'Conectamos a nuestros aliados de origen con compradores ubicados principalmente en Asia.' },
      ]

  return (
    <PageFrame language={language} t={t} menuOpen={menuOpen} onMenuToggle={onMenuToggle} onMenuClose={onMenuClose} onToggleLanguage={onToggleLanguage}>
      <section className="interior-page section-shell about-page">
        <header className="interior-page__heading">
          <p className="eyebrow"><span className="eyebrow__line" />{t.pages.about.eyebrow}</p>
          <h1>{t.pages.about.title}</h1>
          <p>{t.pages.about.body}</p>
        </header>
        <div className="about-page__steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <section className="about-page__values">
          <p className="eyebrow"><span className="eyebrow__line" />{t.values.eyebrow}</p>
          <h2>{t.values.title}</h2>
          <div className="values__grid">
            {t.values.cards.map((card) => (
              <article className="value-card" key={card.number}>
                <span className="value-card__letter">{card.number}</span><span className="value-card__rule" />
                <h3>{card.title}</h3><p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
      <section className="partner-band" id="contact" aria-labelledby="about-contact-title">
        <div className="partner-band__inner section-shell">
          <div className="partner-band__marker" aria-hidden="true">S<span>.</span></div>
          <div className="partner-band__copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />{t.partners.eyebrow}</p>
            <h2 id="about-contact-title">{t.partners.title}</h2>
            <p className="partner-band__body">{t.partners.body}</p>
            <div className="partner-band__actions">
              <a className="button button--cream" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.partners.button}<Arrow diagonal /></a>
              <a className="partner-band__secondary" href={InstagramLatamLink} target="_blank" rel="noreferrer">{t.partners.secondaryButton}<Arrow /></a>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

function App() {
  return (
    <BrowserRouter>
      <SafeenaWebsite />
    </BrowserRouter>
  )
}

function SafeenaWebsite() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('safeena-language') || 'en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedZoneId, setSelectedZoneId] = useState('jardin')
  const t = content[language]
  const location = useLocation()
  const producerRoute = location.pathname.match(/^\/producers\/([^/]+)\/?$/)
  const producerProfile = producerRoute ? t.network.profiles.find((profile) => profile.id === producerRoute[1]) : null
  const pageTitles = {
    '/': 'SAFEENA — Colombian specialty coffee, connected',
    '/origins': language === 'en' ? 'Origins · SAFEENA' : 'Orígenes · SAFEENA',
    '/producers': language === 'en' ? 'Producers · SAFEENA' : 'Productores · SAFEENA',
    '/markets': language === 'en' ? 'Buyers · SAFEENA' : 'Compradores · SAFEENA',
    '/about': language === 'en' ? 'Our model · SAFEENA' : 'Modelo SAFEENA',
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = producerProfile ? `${producerProfile.supplier} · SAFEENA` : pageTitles[location.pathname] || 'SAFEENA'
  }, [language, location.pathname])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((open) => !open)
  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'es' : 'en'
    window.localStorage.setItem('safeena-language', nextLanguage)
    setLanguage(nextLanguage)
  }

  if (producerRoute) {
    return producerProfile
      ? <ProducerMiniPage profile={producerProfile} language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />
      : <PageFrame language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage}><main className="producer-not-found section-shell"><h1>{language === 'en' ? 'Origin not found' : 'No encontramos este origen'}</h1><Link to="/producers">{language === 'en' ? 'Explore producer profiles' : 'Explorar perfiles de productores'}<Arrow /></Link></main></PageFrame>
  }

  if (location.pathname === '/origins') return <OriginExplorerPage language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />
  if (location.pathname === '/producers') return <ProducerDirectoryPage language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />
  if (location.pathname === '/markets') return <MarketsPage language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />
  if (location.pathname === '/about') return <AboutPage language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />

  return (
    <>
      <SiteHeader language={language} t={t} menuOpen={menuOpen} onMenuToggle={toggleMenu} onMenuClose={closeMenu} onToggleLanguage={toggleLanguage} />

      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" />{t.hero.eyebrow}</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero__body">{t.hero.body}</p>
            <div className="hero__actions">
              <Link className="button button--dark" to="/origins?country=colombia">{t.hero.primary}<Arrow diagonal /></Link>
              <a className="text-link" href={InstagramAsiaLink} target="_blank" rel="noreferrer">{t.hero.secondary}<Arrow /></a>
            </div>
            <div className="hero__signature">
              <span className="signature-mark" aria-hidden="true">✳</span>
              <span>{language === 'en' ? 'COFFEE, WITH ITS ORIGIN IN VIEW' : 'CAFÉ, CON SU ORIGEN A LA VISTA'}</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <img className="hero__image" src="/images/producers/kafesedna-landscape.jpg" alt={t.hero.imageAlt} fetchPriority="high" />
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
              <Link className="text-link text-link--red" to="/producers">{t.intro.link}<Arrow /></Link>
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
                <Link className="text-link" to={region.id === 'asia' ? '/markets' : '/origins'}>
                  {region.id === 'asia' ? (language === 'en' ? 'Explore buyer countries' : 'Explora países compradores') : (language === 'en' ? 'Explore producer countries' : 'Explora países productores')}<Arrow diagonal />
                </Link>
              </article>
            ))}
          </div>

          <div className="country-directory producer-directory" id="producer-countries">
            <div className="country-directory__heading">
              <div>
                <p className="eyebrow"><span className="eyebrow__line" />{t.network.countriesEyebrow}</p>
                <h3>{t.network.countriesTitle}</h3>
              </div>
              <p>{t.network.countriesBody}</p>
            </div>
            <div className="country-grid">
              {t.network.producerCountries.map((country) => (
                <Link className={`country-card country-card--${country.id}`} to={`/origins?country=${country.id}`} key={country.id}>
                  {country.id === 'colombia' && <img className="country-card__image" src="/images/producers/kafesedna-landscape.jpg" alt={country.imageAlt} loading="lazy" />}
                  <span className="country-card__number" aria-hidden="true">{country.number}</span>
                  <span className="country-card__content">
                    <span className="country-card__region">{country.label}</span>
                    <strong>{country.name}</strong>
                    <span className="country-card__detail">{country.detail}</span>
                    <span className="country-card__action">{country.action}<Arrow diagonal /></span>
                  </span>
                </Link>
              ))}
            </div>
            <p className="producer-network-note"><span aria-hidden="true">✳</span>{t.network.producerNetworkNote}</p>
          </div>

          <div className="country-directory buyer-directory" id="buyer-countries">
            <div className="country-directory__heading">
              <div>
                <p className="eyebrow"><span className="eyebrow__line" />{t.network.buyersEyebrow}</p>
                <h3>{t.network.buyersTitle}</h3>
              </div>
              <p>{t.network.buyersBody}</p>
            </div>
            <div className="buyer-country-grid">
              {t.network.buyerCountries.map((country) => (
                <article className="buyer-country-card" key={country.name}>
                  <span className="buyer-country-card__region">{country.region} · {language === 'en' ? 'BUYER COUNTRY' : 'PAÍS COMPRADOR'}</span>
                  <strong>{country.name}</strong>
                  <span>{country.detail}</span>
                </article>
              ))}
              <Link className="buyer-country-card buyer-country-card--connect" to="/markets">
                <span className="buyer-country-card__region">{language === 'en' ? 'ASIA · SAFEENA NETWORK' : 'ASIA · RED SAFEENA'}</span>
                <strong>{language === 'en' ? 'Meet SAFEENA Asia' : 'Conoce SAFEENA Asia'}</strong>
                <span>{language === 'en' ? 'Connect with our buyer network' : 'Conecta con nuestra red compradora'}<Arrow diagonal /></span>
              </Link>
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
                <ColombiaOriginMap network={t.network} selectedZone={selectedZoneId} onSelectZone={setSelectedZoneId} />
                <OriginZoneSummary location={t.network.locations.find((item) => item.id === selectedZoneId)} network={t.network} language={language} />
              </div>
              <section className="origin-profiles" aria-labelledby="origin-profiles-title">
                <div className="origin-profiles__heading">
                  <div>
                    <p className="eyebrow"><span className="eyebrow__line" />{t.network.profilesEyebrow}</p>
                    <h4 id="origin-profiles-title">{t.network.profilesTitle}</h4>
                  </div>
                  <p>{t.network.profilesBody}</p>
                </div>
                <div className="producer-teaser-grid">
                  {t.network.profiles.map((profile) => {
                    const cover = profile.photos?.[0]
                    return (
                      <Link className="producer-teaser" to={`/producers/${profile.id}`} key={profile.id}>
                        <div className={`producer-teaser__visual${profile.labelImage ? ' producer-teaser__visual--label' : ''}`}>
                          <img src={profile.labelImage || cover?.src} alt={profile.labelAlt || cover?.alt || profile.visualAlt} loading="lazy" />
                          <span className="producer-teaser__number">{profile.number}</span>
                        </div>
                        <div className="producer-teaser__content">
                          <span className="producer-teaser__eyebrow">{profile.origin}</span>
                          <h5>{profile.supplier}</h5>
                          <p>{profile.product}</p>
                          <span className="producer-teaser__link">{t.network.openProfile}<Arrow diagonal /></span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
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

      <SiteFooter language={language} t={t} />
    </>
  )
}

export default App
