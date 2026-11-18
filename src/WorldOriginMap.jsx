const project = ([longitude, latitude]) => [
  ((longitude + 180) / 360) * 960,
  ((90 - latitude) / 180) * 480,
]

const smoothRing = (coordinates) => {
  const points = coordinates.map(project)
  const count = points.length
  const first = points[0]
  let path = `M${first[0].toFixed(1)},${first[1].toFixed(1)}`

  for (let index = 0; index < count; index += 1) {
    const previous = points[(index - 1 + count) % count]
    const current = points[index]
    const next = points[(index + 1) % count]
    const afterNext = points[(index + 2) % count]
    const controlOne = [
      current[0] + (next[0] - previous[0]) / 6,
      current[1] + (next[1] - previous[1]) / 6,
    ]
    const controlTwo = [
      next[0] - (afterNext[0] - current[0]) / 6,
      next[1] - (afterNext[1] - current[1]) / 6,
    ]

    path += ` C${controlOne[0].toFixed(1)},${controlOne[1].toFixed(1)} ${controlTwo[0].toFixed(1)},${controlTwo[1].toFixed(1)} ${next[0].toFixed(1)},${next[1].toFixed(1)}`
  }

  return `${path} Z`
}

const straightRing = (coordinates) => {
  const points = coordinates.map(project)
  return `M${points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L')} Z`
}

// Low-detail geographic outlines keep the map light while preserving recognizable coastlines.
const landmasses = [
  [
    [-168, 64], [-165, 68], [-158, 70], [-151, 71], [-146, 70], [-140, 70], [-135, 68], [-130, 66], [-127, 69], [-123, 72], [-117, 74], [-108, 73], [-101, 75], [-94, 76], [-88, 75], [-82, 74], [-77, 71], [-72, 69], [-68, 67], [-64, 65], [-61, 62], [-59, 58], [-60, 54], [-62, 51], [-65, 48], [-69, 46], [-72, 43], [-75, 40], [-77, 36], [-79, 32], [-81, 29], [-81, 25], [-80, 24], [-82, 23], [-85, 22], [-89, 21], [-92, 18], [-96, 18], [-98, 20], [-101, 22], [-105, 24], [-108, 26], [-111, 27], [-114, 29], [-117, 32], [-120, 36], [-123, 40], [-124, 44], [-125, 48], [-128, 52], [-132, 55], [-136, 58], [-141, 60], [-148, 61], [-154, 59], [-161, 60], [-166, 62],
  ],
  [
    [-53, 59], [-46, 60], [-40, 64], [-35, 68], [-38, 72], [-34, 76], [-42, 80], [-51, 82], [-59, 80], [-64, 76], [-62, 72], [-68, 68], [-62, 64], [-58, 60],
  ],
  [
    [-10, 36], [-9, 42], [-5, 43], [-3, 48], [0, 50], [4, 52], [5, 55], [10, 55], [14, 58], [18, 60], [20, 63], [24, 65], [27, 70], [32, 70], [35, 67], [42, 68], [50, 70], [60, 70], [75, 72], [90, 73], [105, 75], [118, 73], [130, 71], [142, 70], [155, 67], [165, 64], [178, 66], [180, 64], [176, 61], [170, 58], [166, 55], [159, 53], [153, 50], [149, 47], [145, 44], [142, 41], [140, 38], [136, 36], [135, 34], [131, 33], [129, 35], [127, 38], [124, 40], [122, 39], [121, 35], [123, 32], [121, 29], [119, 25], [116, 23], [114, 22], [112, 21], [111, 19], [109, 17], [108, 14], [106, 12], [104, 8], [102, 5], [100, 2], [98, 5], [96, 8], [94, 10], [92, 15], [90, 19], [88, 22], [86, 22], [84, 20], [82, 17], [80, 13], [78, 8], [76, 9], [74, 14], [72, 20], [69, 24], [66, 25], [63, 25], [60, 27], [57, 25], [52, 25], [50, 28], [48, 29], [45, 30], [43, 35], [40, 36], [37, 35], [34, 32], [31, 31], [28, 34], [26, 39], [23, 40], [20, 39], [18, 42], [15, 44], [13, 45], [12, 47], [8, 48], [5, 50], [2, 48], [0, 44], [-5, 43],
  ],
  [
    [-17, 37], [-10, 36], [-5, 35], [2, 36], [10, 37], [18, 35], [24, 33], [31, 31], [34, 27], [40, 20], [45, 14], [50, 12], [52, 8], [48, 2], [44, -3], [42, -12], [40, -17], [36, -22], [33, -27], [28, -33], [22, -35], [18, -34], [16, -29], [12, -20], [10, -12], [8, -4], [4, 4], [-2, 6], [-8, 12], [-14, 15], [-17, 21], [-15, 27], [-11, 31],
  ],
  [
    [-78, 9], [-75, 10], [-72, 11], [-70, 10], [-67, 10], [-63, 9], [-60, 7], [-57, 6], [-53, 4], [-50, 1], [-48, -3], [-45, -7], [-42, -12], [-39, -17], [-37, -22], [-39, -27], [-43, -32], [-48, -30], [-52, -27], [-54, -23], [-57, -20], [-61, -17], [-64, -14], [-67, -10], [-70, -5], [-73, -1], [-76, 4],
  ],
  [
    [113, -22], [115, -20], [121, -18], [127, -14], [132, -12], [137, -12], [141, -10], [146, -13], [151, -19], [153, -25], [151, -31], [148, -36], [143, -39], [137, -36], [132, -34], [128, -33], [124, -29], [120, -26], [115, -25],
  ],
  [
    [166, -34], [171, -36], [176, -39], [178, -42], [174, -44], [169, -42], [166, -39],
  ],
  [
    [172, -41], [176, -40], [179, -43], [177, -46], [174, -46], [171, -44],
  ],
  [
    [-8, 58], [-5, 55], [-3, 52], [0, 50], [2, 52], [1, 55], [-3, 58],
  ],
  [
    [128, 31], [130, 34], [134, 36], [138, 39], [141, 42], [144, 44], [145, 41], [142, 38], [138, 36], [135, 34], [132, 33],
  ],
  [
    [120, 19], [122, 18], [123, 14], [122, 10], [120, 8], [118, 12],
  ],
  [
    [108, 7], [111, 6], [114, 4], [117, 1], [117, -2], [115, -4], [112, -5], [109, -3], [106, -1], [104, 1], [105, 4],
  ],
  [
    [95, 5], [98, 4], [101, 2], [104, 0], [104, -3], [101, -5], [98, -4], [96, -1],
  ],
  [
    [47, -13], [50, -15], [50, -20], [47, -25], [44, -23], [43, -18],
  ],
]

const antarctica = [
  [-180, -72], [-155, -70], [-130, -73], [-105, -72], [-80, -75], [-55, -74], [-30, -77], [-5, -75], [20, -78], [45, -75], [70, -72], [95, -74], [120, -71], [145, -73], [165, -70], [180, -71], [180, -90], [-180, -90],
]

const nodes = [
  { id: 'colombia', point: [-74, 4], labelSide: 'east' },
  { id: 'indonesia', point: [117, -2], labelSide: 'east' },
  { id: 'vietnam', point: [108, 16], labelSide: 'west' },
  { id: 'africa', point: [21, 1], labelSide: 'east', future: true },
]

const latitudeLines = [-60, -30, 0, 30, 60].map((latitude) => {
  const [, y] = project([0, latitude])
  return `M0 ${y.toFixed(1)}H960`
})
const longitudeLines = [-120, -60, 0, 60, 120].map((longitude) => {
  const [x] = project([longitude, 0])
  return `M${x.toFixed(1)} 0V480`
})

export default function WorldOriginMap({ countries, selectedCountry, onSelectCountry, labels }) {
  return (
    <figure className="world-origin-map">
      <div className="world-origin-map__topline">
        <span>{labels.mapLabel}</span>
        <span>{labels.mapStatus}</span>
      </div>
      <div className="world-origin-map__canvas">
        <svg viewBox="0 0 960 480" role="img" aria-label={labels.mapAlt} className="world-origin-map__drawing">
          <defs>
            <linearGradient id="world-ocean" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#e9f0ec" />
              <stop offset="1" stopColor="#dce8e3" />
            </linearGradient>
            <linearGradient id="world-land" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#f4f0e4" />
              <stop offset="1" stopColor="#c8d8c5" />
            </linearGradient>
            <pattern id="world-grain" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r=".75" fill="#536b57" opacity=".19" />
            </pattern>
          </defs>
          <rect className="world-origin-map__ocean" width="960" height="480" rx="18" />
          <path className="world-origin-map__graticule" d={[...latitudeLines, ...longitudeLines].join(' ')} />
          <path className="world-origin-map__equator" d={latitudeLines[2]} />
          <path className="world-origin-map__land" d={straightRing(antarctica)} />
          <path className="world-origin-map__grain" d={straightRing(antarctica)} />
          {landmasses.map((coordinates, index) => {
            const path = smoothRing(coordinates)
            return (
              <g key={index}>
                <path className="world-origin-map__land" d={path} />
                <path className="world-origin-map__grain" d={path} />
              </g>
            )
          })}
          <text className="world-origin-map__continent" x="213" y="137">{labels.northAmerica}</text>
          <text className="world-origin-map__continent" x="314" y="307">{labels.southAmerica}</text>
          <text className="world-origin-map__continent" x="533" y="245">{labels.africa}</text>
          <text className="world-origin-map__continent" x="720" y="145">{labels.asia}</text>
          <text className="world-origin-map__water" x="160" y="253">{labels.pacific}</text>
          <text className="world-origin-map__water" x="400" y="200">{labels.atlantic}</text>
        </svg>
        {nodes.map((node) => {
          const country = countries.find((item) => item.id === node.id)
          const [x, y] = project(node.point)
          const title = country?.name || labels.futureAfrica
          return (
            <button
              type="button"
              className={`world-origin-map__marker world-origin-map__marker--${node.labelSide}${node.future ? ' world-origin-map__marker--future' : ''}${selectedCountry === node.id ? ' world-origin-map__marker--selected' : ''}`}
              style={{ left: `${(x / 960) * 100}%`, top: `${(y / 480) * 100}%` }}
              onClick={() => onSelectCountry(node.id)}
              aria-pressed={selectedCountry === node.id}
              aria-label={node.future ? labels.futureAfrica : `${title} · ${country?.detail || ''}`}
              key={node.id}
            >
              <span className="world-origin-map__marker-dot" />
              <span className="world-origin-map__marker-label">{title}</span>
            </button>
          )
        })}
      </div>
      <figcaption className="world-origin-map__legend">
        <span><i className="world-origin-map__legend-dot" />{labels.currentCountries}</span>
        <span><i className="world-origin-map__legend-future" />{labels.futureRegions}</span>
      </figcaption>
    </figure>
  )
}
