const outline = [
  [-66.88, 1.25], [-67.07, 1.13], [-67.26, 1.72], [-67.54, 2.04], [-67.87, 1.69], [-69.82, 1.71],
  [-69.80, 1.09], [-69.22, 0.99], [-69.25, 0.60], [-69.45, 0.71], [-70.02, 0.54], [-70.02, -0.19],
  [-69.58, -0.55], [-69.42, -1.12], [-69.44, -1.56], [-69.89, -4.30], [-70.37, -3.77], [-70.69, -3.74],
  [-70.05, -2.73], [-70.81, -2.26], [-71.41, -2.34], [-71.77, -2.17], [-72.33, -2.43], [-73.07, -2.31],
  [-73.66, -1.26], [-74.12, -1.00], [-74.44, -0.53], [-75.11, -0.06], [-75.37, -0.15], [-75.80, 0.08],
  [-76.29, 0.42], [-76.58, 0.26], [-77.42, 0.40], [-77.67, 0.83], [-77.86, 0.81], [-78.86, 1.38],
  [-78.99, 1.69], [-78.62, 1.77], [-78.66, 2.27], [-78.43, 2.63], [-77.93, 2.70], [-77.51, 3.33],
  [-77.13, 3.85], [-77.50, 4.09], [-77.31, 4.67], [-77.53, 5.58], [-77.32, 5.85], [-77.48, 6.69],
  [-77.88, 7.22], [-77.75, 7.71], [-77.43, 7.64], [-77.24, 7.94], [-77.47, 8.52], [-77.35, 8.67],
  [-76.84, 8.64], [-76.09, 9.34], [-75.67, 9.44], [-75.66, 9.77], [-75.48, 10.62], [-74.91, 11.08],
  [-74.28, 11.10], [-74.20, 11.31], [-73.41, 11.23], [-72.63, 11.73], [-72.24, 11.96], [-71.75, 12.44],
  [-71.40, 12.38], [-71.14, 12.11], [-71.33, 11.78], [-71.97, 11.61], [-72.23, 11.11], [-72.61, 10.82],
  [-72.91, 10.45], [-73.03, 9.74], [-73.30, 9.15], [-72.79, 9.09], [-72.66, 8.63], [-72.44, 8.41],
  [-72.36, 8.00], [-72.48, 7.63], [-72.44, 7.42], [-72.20, 7.34], [-71.96, 6.99], [-70.67, 7.09],
  [-70.09, 6.96], [-69.39, 6.10], [-68.99, 6.21], [-68.27, 6.15], [-67.70, 6.27], [-67.34, 6.10],
  [-67.52, 5.56], [-67.74, 5.22], [-67.82, 4.50], [-67.62, 3.84], [-67.34, 3.54], [-67.30, 3.32],
  [-67.81, 2.82], [-67.45, 2.60], [-67.18, 2.25],
]

const project = ([longitude, latitude]) => [
  101.5 + (longitude + 78.99) * 24.5,
  48 + (12.44 - latitude) * 24.5,
]

const outlinePath = outline.map((point, index) => {
  const [x, y] = project(point)
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
}).join(' ') + ' Z'

const mapPins = [
  { id: 'jardin', point: [-75.82, 5.60], labelSide: 'west' },
  { id: 'murillo', point: [-75.17, 4.88], labelSide: 'east' },
]

export default function ColombiaOriginMap({ network, selectedZone, onSelectZone }) {
  const pinCoordinates = mapPins.map(({ point }) => project(point))
  const pinStyle = ([x, y]) => ({ left: `${(x / 500) * 100}%`, top: `${(y / 510) * 100}%` })

  return (
    <figure className="origin-map">
      <div className="origin-map__topline">
        <span>{network.mapLabel}</span>
        <span className="origin-map__status"><i aria-hidden="true" />{network.mapStatus}</span>
      </div>
      <div className="origin-map__canvas">
        <svg className="origin-map__drawing" viewBox="0 0 500 510" role="img" aria-label={network.mapAlt}>
          <defs>
            <linearGradient id="colombia-land" x1="0.12" x2="0.88" y1="0.08" y2="0.96">
              <stop offset="0" stopColor="#dce6d8" />
              <stop offset="0.54" stopColor="#c1d2c1" />
              <stop offset="1" stopColor="#a9c0ad" />
            </linearGradient>
            <pattern id="colombia-grain" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1.4" cy="1.4" r="0.7" fill="#48644f" opacity="0.22" />
              <circle cx="5.4" cy="5.4" r="0.55" fill="#48644f" opacity="0.16" />
            </pattern>
            <clipPath id="colombia-clip"><path d={outlinePath} /></clipPath>
            <filter id="colombia-shadow" x="-15%" y="-10%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path className="origin-map__grid" d="M74 132H438M63 216H438M65 300H432M78 384H411M143 32V474M235 26V476M327 35V456" />
          <text className="origin-map__water origin-map__water--caribbean" x="294" y="34">{network.mapCaribbean}</text>
          <text className="origin-map__water origin-map__water--pacific" x="17" y="371">{network.mapPacific}</text>
          <g className="origin-map__compass" aria-hidden="true">
            <text x="452" y="61">N</text>
            <path d="M452 68v20m0-20-4 7m4-7 4 7" />
          </g>
          <path className="origin-map__land-shadow" d={outlinePath} transform="translate(0 5)" filter="url(#colombia-shadow)" />
          <path className="origin-map__land" d={outlinePath} />
          <g clipPath="url(#colombia-clip)">
            <path className="origin-map__land-grain" d={outlinePath} />
            <path className="origin-map__contour" d="M112 172c67-39 107-24 148 1s82 24 151-3M106 193c68-37 109-23 150 2s81 24 152-2M103 215c69-36 110-22 151 2s80 23 151-1M102 238c69-35 112-20 153 2s79 22 148 0M111 261c66-31 111-18 151 3s77 19 141 1M121 285c61-29 106-16 147 4s72 17 128 2M134 310c54-26 99-13 138 5s67 14 113 3M146 335c48-22 90-11 128 6s60 12 98 4M159 360c41-19 78-8 113 7s53 11 84 5" />
            <path className="origin-map__ridge" d="M165 116c23 28 7 49 17 72s19 29 12 52 14 29 9 51 12 34 5 53 10 35 2 57" />
            <path className="origin-map__river" d="M251 87c-10 29 0 48 20 67s24 34 20 55 13 33 29 47 18 31 17 48M310 126c-18 21-10 38 4 54s16 28 14 42" />
          </g>
          <text className="origin-map__country" x="257" y="334">COLOMBIA</text>
          <text className="origin-map__andescopy" x="142" y="273" transform="rotate(-72 142 273)">{network.mapAndes}</text>
          <path className="origin-map__origin-link" d={`M${pinCoordinates[0][0].toFixed(1)} ${pinCoordinates[0][1].toFixed(1)} Q188 219 ${pinCoordinates[1][0].toFixed(1)} ${pinCoordinates[1][1].toFixed(1)}`} />
        </svg>
        {mapPins.map((pin, index) => {
          const location = network.locations.find((item) => item.id === pin.id)
          return (
            <button
              type="button"
              className={`origin-map__pin origin-map__pin--${pin.id} origin-map__pin--${pin.labelSide}${selectedZone === pin.id ? ' origin-map__pin--selected' : ''}`}
              onClick={() => onSelectZone?.(pin.id)}
              aria-label={`${network.mapPinAction}: ${location.place}, ${location.department}`}
              aria-pressed={selectedZone === pin.id}
              style={pinStyle(pinCoordinates[index])}
              key={pin.id}
            >
              <span className="origin-map__pin-dot" />
              <span className="origin-map__pin-label"><strong>{location.mapName}</strong><small>{location.department}</small></span>
            </button>
          )
        })}
      </div>
      <figcaption className="origin-map__caption">
        <span className="origin-map__legend-dot" />
        <span>{network.mapLegendCurrent}</span>
        <span className="origin-map__legend-future" />
        <span>{network.mapLegendFuture}</span>
      </figcaption>
      <div className="origin-map__expansion">
        <span>{network.mapExpansionLabel}</span>
        <p>{network.mapExpansionRegions.map((region) => <i key={region}>{region}</i>)}</p>
      </div>
      <span className="origin-map__credit">{network.mapCredit}</span>
    </figure>
  )
}
