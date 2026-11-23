import { useState } from 'react'
import InvoiceHeader from './components/InvoiceHeader.jsx'
import PartyForm from './components/PartyForm.jsx'

// yyyy-mm-dd pro <input type="date">, posunuté o `days` dní
const isoDate = (days = 0) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toLocaleDateString('sv-SE')
}

export default function App() {
  const [header, setHeader] = useState({
    type: 'Faktura',
    number: `${new Date().getFullYear()}001`,
    issued: isoDate(),
    due: isoDate(14),
  })
  const emptyParty = { name: '', street: '', city: '', ico: '', dic: '' }
  const [supplier, setSupplier] = useState(emptyParty)
  const [customer, setCustomer] = useState(emptyParty)

  return (
    <>
      <header className="app-header">
        <h1>Generátor faktur</h1>
      </header>

      <main className="layout">
        <section>
          <InvoiceHeader data={header} onChange={setHeader} />
          <PartyForm title="Dodavatel" data={supplier} onChange={setSupplier} />
          <PartyForm title="Odběratel" data={customer} onChange={setCustomer} />
        </section>

        <section className="card preview">
          <h2>Náhled faktury</h2>
          <p></p>
        </section>
      </main>
    </>
  )
}
