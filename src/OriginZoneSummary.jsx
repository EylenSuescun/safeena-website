import { Link } from 'react-router-dom'

export default function OriginZoneSummary({ location, network, language }) {
  if (!location) return null

  const producers = location.suppliers.map((supplier) => ({
    ...supplier,
    profile: network.profiles.find((profile) => profile.id === supplier.profile),
  }))

  return (
    <aside className="origin-zone-summary" aria-live="polite" aria-labelledby="origin-zone-title">
      <div className="origin-zone-summary__top">
        <p className="eyebrow"><span className="eyebrow__line" />{network.zonePanelEyebrow}</p>
        <span className="origin-zone-summary__count">{location.count}</span>
      </div>
      <h2 id="origin-zone-title">{location.place}</h2>
      <p className="origin-zone-summary__department">{location.department}, Colombia</p>
      <p className="origin-zone-summary__description">{location.summary}</p>
      <div className="origin-zone-summary__divider">
        <span>{network.zonePanelProducers}</span>
        <span>{String(producers.length).padStart(2, '0')}</span>
      </div>
      <ul className="origin-zone-summary__list">
        {producers.map((producer) => (
          <li key={producer.profile}>
            <Link to={`/producers/${producer.profile}`} className="origin-zone-summary__producer">
              <span className="origin-zone-summary__producer-mark" aria-hidden="true">{producer.profile?.number || '↗'}</span>
              <span className="origin-zone-summary__producer-copy">
                <strong>{producer.name}</strong>
                <small>{producer.profile?.product || (language === 'en' ? 'Coffee origin' : 'Origen cafetero')}</small>
              </span>
              <span className="origin-zone-summary__producer-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="origin-zone-summary__footnote">{network.zonePanelFootnote}</p>
    </aside>
  )
}
