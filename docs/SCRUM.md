# VWA – Generátor faktur

Jednoduchá React aplikace: uživatel vyplní formulář (hlavička, dodavatel, odběratel, položky)
a aplikace z něj vytvoří fakturu s výpočtem DPH, náhledem a možností tisku do PDF.

## Product Backlog

| Označená úloha (název) | Popis |
|---|---|
| U01 – UI návrh aplikace | Návrh vzhledu: vlevo formulář, vpravo náhled faktury. Barvy, písmo, rozložení sekcí. |
| U02 – Založení projektu | React projekt (Vite), struktura komponent, Git repozitář. |
| U03 – Hlavička a typ dokladu | Typ dokladu (faktura / zálohová faktura / dobropis), číslo faktury, datum vystavení a splatnosti. |
| U04 – Údaje dodavatele a odběratele | Formulář pro obě strany: název, adresa, IČO, DIČ. Jedna znovupoužitelná komponenta. |
| U05 – Položky faktury | Tabulka položek: název, množství, cena za kus, sazba DPH. Tlačítka Přidat / Odebrat položku. |
| U06 – Výpočet součtů | Automatický výpočet: cena bez DPH, DPH podle sazeb, celkem k úhradě. |
| U07 – Živý náhled faktury | Náhled faktury se mění okamžitě při psaní do formuláře. |
| U08 – Validace formuláře | Povinná pole, kontrola IČO (8 číslic), splatnost nesmí být před vystavením, chybové hlášky. |
| U09 – Platební údaje | Číslo účtu, variabilní symbol (předvyplněný z čísla faktury), způsob platby. |
| U10 – Tisk / export do PDF | Tlačítko „Tisk / PDF“ – vytiskne jen náhled faktury (přes tisk prohlížeče). |
| U11 – Uložení rozpracované faktury | Data se ukládají do prohlížeče (localStorage), tlačítko „Nová faktura“ vše vymaže. |
| U12 – Responzivita a finální úpravy | Použitelnost na mobilu, sjednocení vzhledu, opravy chyb. |

## Plán sprintů

| Sprint | Termín | Úlohy |
|---|---|---|
| 1. Sprint (1 týden) | 17. 11. – 24. 11. 2026 | U01, U02, U03, U04 |
| 2. Sprint (1 týden) | 24. 11. – 1. 12. 2026 | U05, U06, U07, U08 |
| 3. Sprint (2 týdny) | 1. 12. – 15. 12. 2026 | U09, U10, U11, U12 |

---

## 1. Sprint

**Cíl sprintu:** Navrhnout vzhled aplikace a zprovoznit základní formulář faktury (hlavička + dodavatel a odběratel).

| Označená úloha (název) | Popis problémů | Vyhodnocení |
|---|---|---|
| U01 – UI návrh aplikace | Rozložení na dva sloupce (formulář / náhled). Náhled zatím jen místo pro budoucí obsah. | Splněno |
| U02 – Založení projektu | Projekt přes Vite místo zastaralého create-react-app. Git repozitář s průběžnými commity. | Splněno |
| U03 – Hlavička a typ dokladu | Datum vystavení se předvyplní na dnešek, splatnost +14 dní. | Splněno |
| U04 – Údaje dodavatele a odběratele | Aby se kód neopakoval, je formulář jedna komponenta `PartyForm` použitá 2×. | Splněno |

### 1. Přírůstek

| Označená úloha (název) | Popis |
|---|---|
| U01 – UI návrh aplikace | 1. Sprint – splněno v plném rozsahu |
| U02 – Založení projektu | 1. Sprint – splněno v plném rozsahu |
| U03 – Hlavička a typ dokladu | 1. Sprint – splněno v plném rozsahu |
| U04 – Údaje dodavatele a odběratele | 1. Sprint – splněno v plném rozsahu |

### Rekapitulace Product Backlogu po 1. sprintu

Zeleně: U01, U02, U03, U04. Červeně: U05 – U12 (naplánováno na další sprinty).

---

## 2. Sprint

**Cíl sprintu:** Funkční generátor – položky faktury, výpočty a živý náhled.

| Označená úloha (název) | Popis problémů | Vyhodnocení |
|---|---|---|
| U05 – Položky faktury | | |
| U06 – Výpočet součtů | | |
| U07 – Živý náhled faktury | | |
| U08 – Validace formuláře | | |

---

## 3. Sprint

**Cíl sprintu:** Dokončit aplikaci – platba, tisk do PDF, ukládání a finální vzhled.

| Označená úloha (název) | Popis problémů | Vyhodnocení |
|---|---|---|
| U09 – Platební údaje | | |
| U10 – Tisk / export do PDF | | |
| U11 – Uložení rozpracované faktury | | |
| U12 – Responzivita a finální úpravy | | |
