(() => {
  'use strict';

  const STORAGE_KEY = 'dago.depenses.ongletDepenses.v1';
  const RATE_KEY = 'dago.exchange.eurMga.v1';
  const DEFAULT_RATE = 4715.93;

  const DEFAULT_EXPENSES = [
    {date:'2026-07-09',localite:'Andohanimandriseza',hebergement:'Chez Réré',nuiteeEur:'',nature:'AVIS Super cover',montantEur:213,retraitEur:'',statut:'prévu'},
    {date:'2026-07-10',localite:'Andohanimandriseza',hebergement:'Chez Réré',nuiteeEur:'',nature:'1ere partie Chauffeur',montantEur:'',retraitEur:1000,statut:'prévu'},
    {date:'2026-07-11',localite:'Antsirabe',hebergement:'lycée picot sisters',nuiteeEur:69,nature:'Plein avant départ',montantEur:85,retraitEur:'',statut:'prévu'},
    {date:'2026-07-12',localite:'Antsirabe',hebergement:'lycée picot sisters',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-13',localite:'Antsirabe - Miandrivazo',hebergement:'Princesse tsiribihina',nuiteeEur:46.5,nature:'Complément plein',montantEur:70,retraitEur:'',statut:'prévu'},
    {date:'2026-07-14',localite:'Miandrivazo - Morondava',hebergement:'select hotel',nuiteeEur:73,nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-15',localite:'Morondava',hebergement:'select hotel',nuiteeEur:'',nature:'Plein avant Belo',montantEur:85,retraitEur:'',statut:'prévu'},
    {date:'2026-07-16',localite:'Morondava - Belo/mer',hebergement:'Entremer',nuiteeEur:243.75,nature:'2eme partie Chauffeur',montantEur:330,retraitEur:'',statut:'prévu'},
    {date:'2026-07-17',localite:'Belo/mer',hebergement:'Entremer',nuiteeEur:-112,nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-18',localite:'Belo/mer',hebergement:'Entremer',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-19',localite:'Belo - Miandrivazo',hebergement:'Princesse tsiribihina',nuiteeEur:46.5,nature:'Complément',montantEur:70,retraitEur:'',statut:'prévu'},
    {date:'2026-07-20',localite:'Miandrivazo - Antsirabe',hebergement:'lycée picot sisters',nuiteeEur:38,nature:'Sécurisation retour Tana',montantEur:40,retraitEur:'',statut:'prévu'},
    {date:'2026-07-21',localite:'Antsirabe - Tana',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:600,statut:'prévu'},
    {date:'2026-07-22',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'Plein après récupération',montantEur:85,retraitEur:'',statut:'prévu'},
    {date:'2026-07-23',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:1076.73,nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-24',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-25',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-26',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-27',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-28',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-29',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-30',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-07-31',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'Plein avant Ampefy',montantEur:85,retraitEur:200,statut:'prévu'},
    {date:'2026-08-01',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-02',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-03',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-04',localite:'Andoharanofotsy',hebergement:'longoza ecolodge',nuiteeEur:234,nature:'Plein avant Andasibe',montantEur:85,retraitEur:'',statut:'prévu'},
    {date:'2026-08-05',localite:'Andoharanofotsy',hebergement:'longoza ecolodge',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-06',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-07',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'Complément si nécessaire',montantEur:60,retraitEur:'',statut:'prévu'},
    {date:'2026-08-08',localite:'Andoharanofotsy',hebergement:'E&D apartments',nuiteeEur:'',nature:'',montantEur:'',retraitEur:'',statut:'prévu'},
    {date:'2026-08-09',localite:'Andoharanofotsy',hebergement:'',nuiteeEur:'',nature:'Plein retour AVIS',montantEur:60,retraitEur:'',statut:'prévu'}
  ];

  const DEFAULT_CASH_PLAN = [
    {moment:'Retrait 1 – 10 juillet', montantEur:1000, couverture:'Route + carburant + restos locaux'},
    {moment:'Retrait 2 – 21 juillet', montantEur:600, couverture:'Fin road trip + carburant AVIS'},
    {moment:'Retrait 3 – sécurité', montantEur:200, couverture:'Imprévus (Coralie)'},
    {moment:'Total retiré conseillé', montantEur:1800, couverture:'~ majoritairement cash'}
  ];

  const $ = (selector) => document.querySelector(selector);
  const tbody = $('#expensesTable tbody');
  const cashPlanList = $('#cashPlanList');
  const euroFmt = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
  const arFmt = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });
  const ROW_ID_KEY = '_rowId';

  function createRowId() {
    return `row-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function ensureRowId(row) {
    if (!row[ROW_ID_KEY]) row[ROW_ID_KEY] = createRowId();
    return row;
  }

  function getRowIndexById(rowId) {
    return state.expenses.findIndex((row) => row[ROW_ID_KEY] === rowId);
  }

  function normalizeDateKey(value) {
    const raw = String(value || '').trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(raw) ? raw : '';
  }

  function sortRowsByDate(rows) {
    return rows
      .map((row, originalIndex) => ({ row: ensureRowId(row), originalIndex }))
      .sort((a, b) => {
        const dateA = normalizeDateKey(a.row.date);
        const dateB = normalizeDateKey(b.row.date);
        if (dateA && dateB && dateA !== dateB) return dateA.localeCompare(dateB);
        if (dateA && !dateB) return -1;
        if (!dateA && dateB) return 1;
        return a.originalIndex - b.originalIndex;
      })
      .map((entry) => entry.row);
  }

  function sortExpensesByDate() {
    state.expenses = sortRowsByDate(state.expenses);
  }

  function toNumber(value) {
    if (value === '' || value === null || value === undefined) return 0;
    return Number(String(value).replace(',', '.')) || 0;
  }
  function fmtAr(value) { return `${arFmt.format(Math.round(value))} Ar`; }
  function eur(value) { return euroFmt.format(value || 0); }

  function normalizeExpenseRow(row) {
    const normalized = { ...row };
    if (normalized.acompteEur === undefined) normalized.acompteEur = '';

    const lodging = toNumber(normalized.nuiteeEur);
    if (lodging < 0) {
      normalized.acompteEur = toNumber(normalized.acompteEur) + Math.abs(lodging);
      normalized.nuiteeEur = '';
      if (!normalized.nature) normalized.nature = 'Acompte déjà payé';
      if (!normalized.statut || normalized.statut === 'prévu') normalized.statut = 'payé';
    }

    return ensureRowId(normalized);
  }

  function migrateState(rawState) {
    const migrated = rawState || {};
    migrated.expenses = Array.isArray(migrated.expenses)
      ? migrated.expenses.map(normalizeExpenseRow)
      : structuredClone(DEFAULT_EXPENSES).map(normalizeExpenseRow);
    migrated.cashPlan = Array.isArray(migrated.cashPlan)
      ? migrated.cashPlan
      : structuredClone(DEFAULT_CASH_PLAN);
    migrated.expenses = sortRowsByDate(migrated.expenses);
    return migrated;
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved?.expenses?.length) return migrateState(saved);
    } catch (_) {}
    return migrateState({ expenses: structuredClone(DEFAULT_EXPENSES), cashPlan: structuredClone(DEFAULT_CASH_PLAN) });
  }
  function saveState() {
    sortExpensesByDate();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    toast('Sauvegardé localement.');
  }
  function loadRate() {
    try {
      const saved = JSON.parse(localStorage.getItem(RATE_KEY));
      if (saved?.rate) return saved;
    } catch (_) {}
    return { rate: DEFAULT_RATE, source: 'Excel initial', updatedAt: null };
  }

  const state = loadState();
  let rate = loadRate();

  function saveRate(nextRate, source) {
    rate = { rate: Number(nextRate), source, updatedAt: new Date().toISOString() };
    localStorage.setItem(RATE_KEY, JSON.stringify(rate));
    render();
  }

  async function fetchLiveRate() {
    const sources = [
      { url: 'https://open.er-api.com/v6/latest/EUR', parse: data => data?.rates?.MGA, name: 'open.er-api.com' },
      { url: 'https://api.exchangerate-api.com/v4/latest/EUR', parse: data => data?.rates?.MGA, name: 'exchangerate-api.com' },
      { url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json', parse: data => data?.eur?.mga, name: 'currency-api CDN' }
    ];
    for (const source of sources) {
      try {
        const response = await fetch(source.url, { cache: 'no-store' });
        if (!response.ok) continue;
        const data = await response.json();
        const nextRate = Number(source.parse(data));
        if (Number.isFinite(nextRate) && nextRate > 1000) {
          saveRate(nextRate, source.name);
          toast('Taux mis à jour.');
          return;
        }
      } catch (_) {}
    }
    toast('Impossible de joindre les APIs. Taux local conservé.');
  }

  function inputCell(rowIndex, key, type = 'text') {
    const row = ensureRowId(state.expenses[rowIndex]);
    const value = row[key] ?? '';
    const step = type === 'number' ? ' step="0.01" inputmode="decimal"' : '';
    return `<input data-row-id="${row[ROW_ID_KEY]}" data-key="${key}" type="${type}" value="${String(value).replaceAll('"', '&quot;')}"${step}>`;
  }

  function renderTable() {
    tbody.innerHTML = state.expenses.map((row, i) => {
      const lodging = Math.max(0, toNumber(row.nuiteeEur));
      const deposit = Math.max(0, toNumber(row.acompteEur));
      const lodgingDue = Math.max(0, lodging - deposit);
      const montantAr = toNumber(row.montantEur) * rate.rate;
      const retraitAr = toNumber(row.retraitEur) * rate.rate;
      return `<tr>
        <td>${inputCell(i, 'date', 'date')}</td>
        <td>${inputCell(i, 'localite')}</td>
        <td>${inputCell(i, 'hebergement')}</td>
        <td>${inputCell(i, 'nuiteeEur', 'number')}</td>
        <td>${inputCell(i, 'acompteEur', 'number')}</td>
        <td class="money-eur" data-row-total="${i}" data-calc="resteEur">${lodging || deposit ? eur(lodgingDue) : ''}</td>
        <td class="money-ar" data-row-total="${i}" data-calc="resteAr">${lodging || deposit ? fmtAr(lodgingDue * rate.rate) : ''}</td>
        <td>${inputCell(i, 'nature')}</td>
        <td>${inputCell(i, 'montantEur', 'number')}</td>
        <td class="money-ar" data-row-total="${i}" data-calc="montantEur">${row.montantEur === '' ? '' : fmtAr(montantAr)}</td>
        <td>${inputCell(i, 'retraitEur', 'number')}</td>
        <td class="money-ar" data-row-total="${i}" data-calc="retraitEur">${row.retraitEur === '' ? '' : fmtAr(retraitAr)}</td>
        <td><select data-row-id="${ensureRowId(row)[ROW_ID_KEY]}" data-key="statut">
          ${['prévu','payé','à vérifier'].map(s => `<option value="${s}" ${row.statut === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select></td>
        <td><button type="button" class="delete-row" data-delete-id="${ensureRowId(row)[ROW_ID_KEY]}" aria-label="Supprimer la ligne">×</button></td>
      </tr>`;
    }).join('');
  }

  function renderCashPlan() {
    cashPlanList.innerHTML = state.cashPlan.map((item, i) => `
      <article class="cash-item">
        <label>Moment <input data-cash="${i}" data-key="moment" value="${String(item.moment).replaceAll('"','&quot;')}"></label>
        <label>Montant € <input type="number" step="0.01" data-cash="${i}" data-key="montantEur" value="${item.montantEur}"></label>
        <strong data-cash-total="${i}">${fmtAr(toNumber(item.montantEur) * rate.rate)}</strong>
        <label>Couverture <input data-cash="${i}" data-key="couverture" value="${String(item.couverture).replaceAll('"','&quot;')}"></label>
      </article>
    `).join('');
  }

  function calculateTotals() {
    const totals = {
      lodging: 0,
      deposit: 0,
      lodgingDue: 0,
      other: 0,
      withdrawals: 0,
      paid: 0,
      toPay: 0,
      toCheck: 0
    };

    state.expenses.forEach((row) => {
      const lodging = Math.max(0, toNumber(row.nuiteeEur));
      const deposit = Math.max(0, toNumber(row.acompteEur));
      const lodgingDue = Math.max(0, lodging - deposit);
      const other = Math.max(0, toNumber(row.montantEur));
      const withdrawals = toNumber(row.retraitEur);
      const remainingLineTotal = lodgingDue + other;
      const status = String(row.statut || 'prévu').toLowerCase();

      totals.lodging += lodging;
      totals.deposit += deposit;
      totals.lodgingDue += lodgingDue;
      totals.other += other;
      totals.withdrawals += withdrawals;

      if (status === 'payé') {
        totals.paid += deposit + remainingLineTotal;
      } else if (status === 'à vérifier') {
        totals.paid += deposit;
        totals.toCheck += remainingLineTotal;
      } else {
        totals.paid += deposit;
        totals.toPay += remainingLineTotal;
      }
    });

    totals.total = totals.lodging + totals.other;
    totals.totalDue = totals.lodgingDue + totals.other;
    totals.cashBalance = totals.withdrawals - totals.other;
    return totals;
  }

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function renderSummary() {
    const totals = calculateTotals();

    setText('#sumLodging', eur(totals.lodging));
    setText('#sumLodgingAr', `${fmtAr(totals.lodging * rate.rate)} • acompte ${eur(totals.deposit)} • reste ${eur(totals.lodgingDue)}`);
    setText('#sumOther', eur(totals.other));
    setText('#sumOtherAr', fmtAr(totals.other * rate.rate));
    setText('#sumTotal', eur(totals.total));
    setText('#sumTotalAr', `${fmtAr(totals.total * rate.rate)} • reste ${eur(totals.totalDue)}`);
    setText('#sumWithdrawals', eur(totals.withdrawals));
    setText('#sumWithdrawalsAr', fmtAr(totals.withdrawals * rate.rate));
    setText('#sumCashBalance', eur(totals.cashBalance));

    setText('#footLodging', eur(totals.lodging));
    setText('#footDeposit', eur(totals.deposit));
    setText('#footLodgingDue', eur(totals.lodgingDue));
    setText('#footLodgingDueAr', fmtAr(totals.lodgingDue * rate.rate));
    setText('#footOther', eur(totals.other));
    setText('#footOtherAr', fmtAr(totals.other * rate.rate));
    setText('#footWithdrawals', eur(totals.withdrawals));
    setText('#footWithdrawalsAr', fmtAr(totals.withdrawals * rate.rate));
    setText('#footCashBalance', eur(totals.cashBalance));
    setText('#footStatusTotals', `Payé : ${eur(totals.paid)} • À régler : ${eur(totals.toPay)} • À vérifier : ${eur(totals.toCheck)}`);

    $('#rateValue').textContent = arFmt.format(rate.rate);
    $('#manualRate').value = rate.rate;
    $('#rateMeta').textContent = `${rate.source || 'Local'}${rate.updatedAt ? ' • ' + new Date(rate.updatedAt).toLocaleString('fr-FR') : ''}`;
  }

  function render() { renderTable(); renderCashPlan(); renderSummary(); }

  function updateCalculatedRow(rowId) {
    const rowIndex = getRowIndexById(rowId);
    const row = state.expenses[rowIndex];
    if (!row) return;
    const lodging = Math.max(0, toNumber(row.nuiteeEur));
    const deposit = Math.max(0, toNumber(row.acompteEur));
    const lodgingDue = Math.max(0, lodging - deposit);

    document.querySelectorAll(`[data-row-total="${rowIndex}"]`).forEach((cell) => {
      const key = cell.dataset.calc;
      if (key === 'resteEur') {
        cell.textContent = lodging || deposit ? eur(lodgingDue) : '';
      } else if (key === 'resteAr') {
        cell.textContent = lodging || deposit ? fmtAr(lodgingDue * rate.rate) : '';
      } else {
        cell.textContent = row[key] === '' ? '' : fmtAr(toNumber(row[key]) * rate.rate);
      }
    });
  }

  function updateCashTotal(cashIndex) {
    const item = state.cashPlan[cashIndex];
    const total = document.querySelector(`[data-cash-total="${cashIndex}"]`);
    if (item && total) total.textContent = fmtAr(toNumber(item.montantEur) * rate.rate);
  }

  function toast(message) {
    const existing = document.querySelector('.depenses-toast');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'depenses-toast';
    el.textContent = message;
    Object.assign(el.style, { position:'fixed', right:'16px', bottom:'16px', background:'#0f172a', color:'#fff', padding:'12px 16px', borderRadius:'999px', zIndex:9999, boxShadow:'0 10px 30px rgba(0,0,0,.2)' });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }

  function updateExpenseField(target, shouldSortAfterDate = false) {
    const rowId = target.dataset?.rowId;
    const key = target.dataset?.key;
    if (!rowId || !key) return false;

    const index = getRowIndexById(rowId);
    if (index < 0) return false;

    state.expenses[index][key] = target.type === 'number'
      ? (target.value === '' ? '' : Number(target.value))
      : target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    if (key === 'date' && shouldSortAfterDate) {
      sortExpensesByDate();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      render();
      return true;
    }

    if (key !== 'date') {
      renderSummary();
      updateCalculatedRow(rowId);
    }

    return true;
  }

  function commitDateSort(target) {
    if (!target.matches('input[data-row-id][data-key="date"]')) return false;
    updateExpenseField(target, true);
    return true;
  }

  document.addEventListener('input', (event) => {
    const target = event.target;

    if (target.matches('input[data-row-id][data-key="date"]')) {
      /*
        Ne pas retrier pendant l'événement input d'un champ date.
        Sur Safari/iOS/macOS, les flèches du clavier déclenchent input pendant que le
        contrôle natif est encore actif. Recréer le tableau à cet instant peut faire
        planter la page. On mémorise la valeur immédiatement, puis on trie quand la
        date est validée via change/blur.
      */
      updateExpenseField(target, false);
      return;
    }

    if (target.matches('input[data-row-id]')) {
      updateExpenseField(target, false);
      return;
    }

    if (!target.matches('input[data-cash]')) return;

    const index = Number(target.dataset.cash);
    state.cashPlan[index][target.dataset.key] = target.type === 'number'
      ? (target.value === '' ? '' : Number(target.value))
      : target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    renderSummary();
    updateCashTotal(index);
  });

  document.addEventListener('change', (event) => {
    const target = event.target;

    if (commitDateSort(target)) return;

    if (!target.matches('select[data-row-id]')) return;
    updateExpenseField(target, false);
  });

  document.addEventListener('focusout', (event) => {
    commitDateSort(event.target);
  });

  document.addEventListener('click', (event) => {
    const deleteId = event.target.dataset?.deleteId;
    if (deleteId !== undefined) {
      const index = getRowIndexById(deleteId);
      if (index < 0) return;
      state.expenses.splice(index, 1);
      saveState();
      render();
    }
  });

  $('#addRowBtn').addEventListener('click', () => {
    state.expenses.push(ensureRowId({ date:'', localite:'', hebergement:'', nuiteeEur:'', acompteEur:'', nature:'', montantEur:'', retraitEur:'', statut:'prévu' }));
    sortExpensesByDate();
    saveState();
    render();
  });
  $('#saveBtn').addEventListener('click', saveState);
  $('#resetBtn').addEventListener('click', () => {
    if (!confirm('Revenir aux données de l’onglet dépenses Excel ?')) return;
    localStorage.removeItem(STORAGE_KEY);
    state.expenses = structuredClone(DEFAULT_EXPENSES).map(normalizeExpenseRow);
    sortExpensesByDate();
    state.cashPlan = structuredClone(DEFAULT_CASH_PLAN);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    render();
  });
  $('#refreshRateBtn').addEventListener('click', fetchLiveRate);
  $('#saveRateBtn').addEventListener('click', () => {
    const manual = Number($('#manualRate').value);
    if (!Number.isFinite(manual) || manual <= 0) return toast('Taux invalide.');
    saveRate(manual, 'Manuel');
    toast('Taux manuel enregistré.');
  });
  $('#exportBtn').addEventListener('click', () => {
    const payload = JSON.stringify({ ...state, rate }, null, 2);
    const blob = new Blob([payload], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `depenses-madagascar-${new Date().toISOString().slice(0,10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  });
  $('#importInput').addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      if (!Array.isArray(imported.expenses)) throw new Error('Format invalide');
      state.expenses = imported.expenses.map(normalizeExpenseRow);
      sortExpensesByDate();
      state.cashPlan = Array.isArray(imported.cashPlan) ? imported.cashPlan : state.cashPlan;
      if (imported.rate?.rate) saveRate(imported.rate.rate, imported.rate.source || 'Import JSON');
      saveState();
      render();
    } catch (error) { toast('Import impossible : JSON invalide.'); }
  });

  sortExpensesByDate();
  render();
  fetchLiveRate();
})();
