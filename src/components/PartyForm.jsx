// Jedna komponenta pro dodavatele i odběratele
export default function PartyForm({ title, data, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value })

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="grid-2">
        <label>
          Název / jméno
          <input value={data.name} onChange={set('name')} />
        </label>
        <label>
          Ulice a číslo
          <input value={data.street} onChange={set('street')} />
        </label>
        <label>
          Město a PSČ
          <input value={data.city} onChange={set('city')} />
        </label>
        <label>
          IČO
          <input value={data.ico} onChange={set('ico')} inputMode="numeric" />
        </label>
        <label>
          DIČ
          <input value={data.dic} onChange={set('dic')} />
        </label>
      </div>
    </div>
  )
}
