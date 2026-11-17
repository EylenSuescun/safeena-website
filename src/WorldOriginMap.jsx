const landPaths = [
  'M48 92 68 65 105 48 143 53 172 67 197 70 218 89 226 107 214 122 201 138 186 150 177 171 159 181 150 202 131 209 116 195 99 190 90 174 76 164 72 148 60 137 55 119Z',
  'M184 161c16 2 23 12 34 17l15 12 13 5 9 13-7 8-13-5-15-10-13-8-15-12z',
  'M227 199 245 210 258 232 270 250 276 276 286 297 284 322 275 345 269 368 257 386 247 367 241 344 232 323 227 300 220 279 216 256 207 239 209 219Z',
  'M222 37 249 27 270 35 275 51 264 65 239 68 226 58Z',
  'M329 102 350 87 376 83 397 72 431 76 449 66 484 74 510 82 531 78 556 84 581 78 609 88 639 93 670 107 694 117 707 132 694 143 669 143 650 156 631 153 619 167 600 166 589 178 570 175 558 186 540 184 526 195 505 191 491 202 471 196 457 206 442 201 427 190 406 186 395 170 378 163 363 147 345 140 337 125Z',
  'M401 176 425 173 447 184 462 201 467 220 462 242 454 264 453 288 444 312 432 336 416 352 404 333 401 310 393 290 391 266 383 245 387 220 391 199Z',
  'M528 198 547 195 566 201 584 200 601 208 613 216 628 218 637 227 651 229 660 238 649 245 635 240 622 237 609 230 592 228 580 220 564 219 551 211 538 211Z',
  'M664 220 677 216 689 222 697 233 694 244 684 244 676 236Z',
  'M659 257 680 250 704 257 722 271 731 292 725 312 709 322 690 318 673 306 661 286Z',
  'M718 175 725 171 730 180 727 190Z',
]

const nodes = [
  { id: 'colombia', point: [-74, 4], labelSide: 'east', future: false },
  { id: 'indonesia', point: [117, -2], labelSide: 'east', future: false },
  { id: 'vietnam', point: [108, 16], labelSide: 'west', future: false },
  { id: 'africa', point: [21, 1], labelSide: 'east', future: true },
]

const project = ([longitude, latitude]) => [
  ((longitude + 180) / 360) * 800,
  ((82 - latitude) / 144) * 420,
]

export default function WorldOriginMap({ countries, selectedCountry, onSelectCountry, labels }) {
  return (
    <figure className="world-origin-map">
      <div className="world-origin-map__topline">
        <span>{labels.mapLabel}</span>
        <span>{labels.mapStatus}</span>
      </div>
      <div className="world-origin-map__canvas">
        <svg viewBox="0 0 800 420" role="img" aria-label={labels.mapAlt} className="world-origin-map__drawing">
          <defs>
            <linearGradient id="world-land" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#dce6d8" />
              <stop offset="1" stopColor="#adc3b0" />
            </linearGradient>
            <pattern id="world-grain" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".8" fill="#48644f" opacity=".18" />
            </pattern>
          </defs>
          <path className="world-origin-map__graticule" d="M15 105H785M15 210H785M15 315H785M200 25V395M400 25V395M600 25V395" />
          {landPaths.map((path, index) => (
            <g key={index}>
              <path className="world-origin-map__land" d={path} />
              <path className="world-origin-map__grain" d={path} />
            </g>
          ))}
          <text className="world-origin-map__continent" x="111" y="123">{labels.americas}</text>
          <text className="world-origin-map__continent" x="414" y="287">{labels.africa}</text>
          <text className="world-origin-map__continent" x="548" y="132">{labels.asia}</text>
          <text className="world-origin-map__water" x="314" y="388">{labels.pacific}</text>
          <text className="world-origin-map__water" x="452" y="48">{labels.atlantic}</text>
        </svg>
        {nodes.map((node) => {
          const country = countries.find((item) => item.id === node.id)
          const [x, y] = project(node.point)
          const title = country?.name || labels.futureAfrica
          return (
            <button
              type="button"
              className={`world-origin-map__marker world-origin-map__marker--${node.labelSide}${node.future ? ' world-origin-map__marker--future' : ''}${selectedCountry === node.id ? ' world-origin-map__marker--selected' : ''}`}
              style={{ left: `${(x / 800) * 100}%`, top: `${(y / 420) * 100}%` }}
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
