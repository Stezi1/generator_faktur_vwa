const TYPES = ['Faktura', 'Zálohová faktura', 'Dobropis']

export default function InvoiceHeader({ data, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value })

  return (
    <div className="card">
      <h2>Hlavička dokladu</h2>
      <div className="grid-2">
        <label>
          Typ dokladu
          <select value={data.type} onChange={set('type')}>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label>
          Číslo faktury
          <input value={data.number} onChange={set('number')} />
        </label>
        <label>
          Datum vystavení
          <input type="date" value={data.issued} onChange={set('issued')} />
        </label>
        <label>
          Datum splatnosti
          <input type="date" value={data.due} onChange={set('due')} />
        </label>
      </div>
    </div>
  )
}
