/* ============================================
   PDLC Approval & Governance — Application
   ============================================ */

// ---- Data Model ----

const PHASES = [
  'Visioning',
  'Planning & Roadmapping',
  'Prioritizing',
  'UX Research',
  'Design & Prototyping',
  'Finalized Designs',
  'Implementation',
  'Analytics'
];

const USERS = [
  { id: 'u1', name: 'Sarah Chen', role: 'Approver' },
  { id: 'u2', name: 'Marcus Rivera', role: 'Approver' },
  { id: 'u3', name: 'Priya Sharma', role: 'Contributor' },
  { id: 'u4', name: 'James Okafor', role: 'Contributor' },
  { id: 'u5', name: 'Anya Petrov', role: 'Viewer' }
];

const MOCK_ARTIFACTS = [
  {
    id: 'a1', name: 'Product Vision Statement — FY27',
    source_app: 'Document Tool', source_url: '#',
    phase: 'Visioning', contributor_id: 'u3',
    status: 'Approved', created_at: '2026-01-10', updated_at: '2026-01-22'
  },
  {
    id: 'a2', name: 'Market Opportunity Brief',
    source_app: 'Document Tool', source_url: '#',
    phase: 'Visioning', contributor_id: 'u3',
    status: 'Approved', created_at: '2026-01-12', updated_at: '2026-01-25'
  },
  {
    id: 'a3', name: 'Q3 Roadmap — Checkout Redesign',
    source_app: 'Planning Tool', source_url: '#',
    phase: 'Planning & Roadmapping', contributor_id: 'u4',
    status: 'Approved with Conditions', created_at: '2026-02-03', updated_at: '2026-02-18'
  },
  {
    id: 'a4', name: 'Initiative Priority Scorecard',
    source_app: 'Spreadsheet Tool', source_url: '#',
    phase: 'Prioritizing', contributor_id: 'u3',
    status: 'Approved', created_at: '2026-02-20', updated_at: '2026-03-01'
  },
  {
    id: 'a5', name: 'Feature Trade-off Matrix',
    source_app: 'Spreadsheet Tool', source_url: '#',
    phase: 'Prioritizing', contributor_id: 'u4',
    status: 'Pending', created_at: '2026-03-05', updated_at: '2026-03-05'
  },
  {
    id: 'a6', name: 'Checkout UX Research Synthesis',
    source_app: 'Research Repository', source_url: '#',
    phase: 'UX Research', contributor_id: 'u4',
    status: 'Approved', created_at: '2026-03-10', updated_at: '2026-03-22'
  },
  {
    id: 'a7', name: 'Persona Profiles — Buyer Segments',
    source_app: 'Document Tool', source_url: '#',
    phase: 'UX Research', contributor_id: 'u4',
    status: 'Pending', created_at: '2026-03-15', updated_at: '2026-03-15'
  },
  {
    id: 'a8', name: 'Checkout Flow — Wireframes v2',
    source_app: 'Design Tool', source_url: '#',
    phase: 'Design & Prototyping', contributor_id: 'u4',
    status: 'Approved with Conditions', created_at: '2026-04-01', updated_at: '2026-04-14'
  },
  {
    id: 'a9', name: 'Checkout Prototype — Interactive',
    source_app: 'Prototyping Tool', source_url: '#',
    phase: 'Design & Prototyping', contributor_id: 'u4',
    status: 'Pending', created_at: '2026-04-10', updated_at: '2026-04-10'
  },
  {
    id: 'a10', name: 'Design Spec — Payment Step',
    source_app: 'Design Tool', source_url: '#',
    phase: 'Finalized Designs', contributor_id: 'u4',
    status: 'Pending', created_at: '2026-05-01', updated_at: '2026-05-01'
  },
  {
    id: 'a11', name: 'Component Docs — Form Inputs',
    source_app: 'Design Tool', source_url: '#',
    phase: 'Finalized Designs', contributor_id: 'u4',
    status: 'Pending', created_at: '2026-05-05', updated_at: '2026-05-05'
  },
  {
    id: 'a12', name: 'Staging Environment — Checkout v2',
    source_app: 'Dev Environment', source_url: '#',
    phase: 'Implementation', contributor_id: 'u3',
    status: 'Pending', created_at: '2026-06-01', updated_at: '2026-06-01'
  },
  {
    id: 'a13', name: 'API Documentation — Payments',
    source_app: 'Repository Tool', source_url: '#',
    phase: 'Implementation', contributor_id: 'u3',
    status: 'Pending', created_at: '2026-06-05', updated_at: '2026-06-05'
  },
  {
    id: 'a14', name: 'Checkout Conversion Dashboard',
    source_app: 'Analytics Tool', source_url: '#',
    phase: 'Analytics', contributor_id: 'u3',
    status: 'Pending', created_at: '2026-07-01', updated_at: '2026-07-01'
  }
];

const MOCK_APPROVALS = [
  {
    id: 'ap1', artifact_id: 'a1', approver_id: 'u1',
    decision: 'Approved',
    reason: 'Vision aligns with FY27 strategic priorities. Clear articulation of target outcomes.',
    decision_date: '2026-01-22', created_at: '2026-01-22'
  },
  {
    id: 'ap2', artifact_id: 'a2', approver_id: 'u1',
    decision: 'Approved',
    reason: 'TAM analysis is solid. Competitive positioning is well-supported by data.',
    decision_date: '2026-01-25', created_at: '2026-01-25'
  },
  {
    id: 'ap3', artifact_id: 'a3', approver_id: 'u2',
    decision: 'Approved with Conditions',
    reason: 'Roadmap approved for Q3 execution. Condition: revisit scope after Q2 revenue results — may need to deprioritize loyalty integration.',
    decision_date: '2026-02-18', created_at: '2026-02-18'
  },
  {
    id: 'ap4', artifact_id: 'a4', approver_id: 'u1',
    decision: 'Approved',
    reason: 'Scoring methodology is transparent and defensible. Agree with top-3 ranking.',
    decision_date: '2026-03-01', created_at: '2026-03-01'
  },
  {
    id: 'ap5', artifact_id: 'a6', approver_id: 'u2',
    decision: 'Approved',
    reason: 'Research is thorough — 12 interviews across segments. Key insight on guest checkout friction is actionable.',
    decision_date: '2026-03-22', created_at: '2026-03-22'
  },
  {
    id: 'ap6', artifact_id: 'a8', approver_id: 'u1',
    decision: 'Approved with Conditions',
    reason: 'Wireframes capture core flow well. Condition: address accessibility gaps flagged in review (color contrast on CTA, focus states) before moving to hi-fi.',
    decision_date: '2026-04-14', created_at: '2026-04-14'
  }
];

// ---- State ----

let artifacts = JSON.parse(JSON.stringify(MOCK_ARTIFACTS));
let approvals = JSON.parse(JSON.stringify(MOCK_APPROVALS));
let currentUserId = 'u1';
let currentView = 'artifacts';

// ---- DOM refs ----

const viewArtifacts = document.getElementById('view-artifacts');
const viewHistory = document.getElementById('view-history');
const viewDetail = document.getElementById('view-detail');
const artifactsBody = document.querySelector('#artifacts-table tbody');
const historyBody = document.querySelector('#history-table tbody');
const modal = document.getElementById('approval-modal');
const approvalForm = document.getElementById('approval-form');
const userSelect = document.getElementById('current-user');
const detailSidebar = document.getElementById('detail-artifact-list');
const detailContent = document.getElementById('detail-content');
const detailBreadcrumb = document.getElementById('detail-breadcrumb');

// ---- Init ----

function init() {
  populateUserSelect();
  populatePhaseFilters();
  populateSourceFilters();
  populateApproverFilter();
  bindNavTabs();
  bindFilters();
  bindSort();
  bindModal();
  bindDetailBack();
  renderArtifacts();
  renderHistory();
}

// ---- User selector ----

function populateUserSelect() {
  USERS.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = `${u.name} (${u.role})`;
    userSelect.appendChild(opt);
  });
  userSelect.value = currentUserId;
  userSelect.addEventListener('change', () => {
    currentUserId = userSelect.value;
  });
}

// ---- Populate filter dropdowns ----

function populatePhaseFilters() {
  ['filter-phase', 'history-filter-phase'].forEach(id => {
    const sel = document.getElementById(id);
    PHASES.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      sel.appendChild(opt);
    });
  });
}

function populateSourceFilters() {
  const sources = [...new Set(artifacts.map(a => a.source_app))];
  const sel = document.getElementById('filter-source');
  sources.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    sel.appendChild(opt);
  });
}

function populateApproverFilter() {
  const sel = document.getElementById('history-filter-approver');
  USERS.filter(u => u.role === 'Approver').forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = u.name;
    sel.appendChild(opt);
  });
}

// ---- Navigation ----

function bindNavTabs() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const view = tab.dataset.view;
      currentView = view;
      viewArtifacts.classList.toggle('active', view === 'artifacts');
      viewHistory.classList.toggle('active', view === 'history');
      viewDetail.classList.remove('active');
    });
  });
}

function showView(viewName) {
  viewArtifacts.classList.toggle('active', viewName === 'artifacts');
  viewHistory.classList.toggle('active', viewName === 'history');
  viewDetail.classList.toggle('active', viewName === 'detail');
  // Update nav tab highlights
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (viewName === 'detail') {
      t.classList.remove('active');
    } else {
      t.classList.toggle('active', t.dataset.view === viewName);
    }
  });
}

// ---- Filtering ----

function bindFilters() {
  document.getElementById('filter-phase').addEventListener('change', renderArtifacts);
  document.getElementById('filter-status').addEventListener('change', renderArtifacts);
  document.getElementById('filter-source').addEventListener('change', renderArtifacts);
  document.getElementById('history-filter-phase').addEventListener('change', renderHistory);
  document.getElementById('history-filter-decision').addEventListener('change', renderHistory);
  document.getElementById('history-filter-approver').addEventListener('change', renderHistory);
}

function getFilteredArtifacts() {
  const phase = document.getElementById('filter-phase').value;
  const status = document.getElementById('filter-status').value;
  const source = document.getElementById('filter-source').value;
  return artifacts.filter(a =>
    (!phase || a.phase === phase) &&
    (!status || a.status === status) &&
    (!source || a.source_app === source)
  );
}

function getFilteredApprovals() {
  const phase = document.getElementById('history-filter-phase').value;
  const decision = document.getElementById('history-filter-decision').value;
  const approver = document.getElementById('history-filter-approver').value;
  return approvals.filter(ap => {
    const artifact = artifacts.find(a => a.id === ap.artifact_id);
    return (
      (!phase || (artifact && artifact.phase === phase)) &&
      (!decision || ap.decision === decision) &&
      (!approver || ap.approver_id === approver)
    );
  });
}

// ---- Sorting ----

let artifactSort = { key: 'updated_at', dir: -1 };
let historySort = { key: 'date', dir: -1 };

function bindSort() {
  document.querySelectorAll('#artifacts-table thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (artifactSort.key === key) {
        artifactSort.dir *= -1;
      } else {
        artifactSort = { key, dir: 1 };
      }
      updateSortIcons('#artifacts-table', key, artifactSort.dir);
      renderArtifacts();
    });
  });

  document.querySelectorAll('#history-table thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (historySort.key === key) {
        historySort.dir *= -1;
      } else {
        historySort = { key, dir: 1 };
      }
      updateSortIcons('#history-table', key, historySort.dir);
      renderHistory();
    });
  });
}

function updateSortIcons(tableSelector, activeKey, dir) {
  document.querySelectorAll(`${tableSelector} thead th`).forEach(th => {
    th.classList.remove('sorted');
    const icon = th.querySelector('.sort-icon');
    if (icon) icon.textContent = 'unfold_more';
  });
  const activeTh = document.querySelector(`${tableSelector} thead th[data-sort="${activeKey}"]`);
  if (activeTh) {
    activeTh.classList.add('sorted');
    const icon = activeTh.querySelector('.sort-icon');
    if (icon) icon.textContent = dir === 1 ? 'expand_less' : 'expand_more';
  }
}

function sortArtifacts(list) {
  const key = artifactSort.key;
  const dir = artifactSort.dir;
  return [...list].sort((a, b) => {
    let va, vb;
    if (key === 'contributor') {
      va = getUserName(a.contributor_id);
      vb = getUserName(b.contributor_id);
    } else {
      va = a[key] || '';
      vb = b[key] || '';
    }
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return 0;
  });
}

function sortApprovals(list) {
  const key = historySort.key;
  const dir = historySort.dir;
  return [...list].sort((a, b) => {
    let va, vb;
    if (key === 'artifact') {
      const artA = artifacts.find(x => x.id === a.artifact_id);
      const artB = artifacts.find(x => x.id === b.artifact_id);
      va = artA ? artA.name : '';
      vb = artB ? artB.name : '';
    } else if (key === 'phase') {
      const artA = artifacts.find(x => x.id === a.artifact_id);
      const artB = artifacts.find(x => x.id === b.artifact_id);
      va = artA ? artA.phase : '';
      vb = artB ? artB.phase : '';
    } else if (key === 'approver') {
      va = getUserName(a.approver_id);
      vb = getUserName(b.approver_id);
    } else if (key === 'date') {
      va = a.decision_date;
      vb = b.decision_date;
    } else {
      va = a[key] || '';
      vb = b[key] || '';
    }
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return 0;
  });
}

// ---- Rendering ----

function getUserName(id) {
  const u = USERS.find(u => u.id === id);
  return u ? u.name : 'Unknown';
}

function statusBadgeClass(status) {
  if (status === 'Approved') return 'approved';
  if (status === 'Approved with Conditions') return 'conditions';
  if (status === 'Rejected') return 'rejected';
  return 'pending';
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderArtifacts() {
  const filtered = sortArtifacts(getFilteredArtifacts());
  artifactsBody.innerHTML = '';

  if (filtered.length === 0) {
    artifactsBody.innerHTML = `
      <tr><td colspan="7">
        <div class="empty-state">
          <span class="material-symbols-outlined">search_off</span>
          No artifacts match the current filters.
        </div>
      </td></tr>`;
    return;
  }

  filtered.forEach(a => {
    const tr = document.createElement('tr');
    tr.dataset.artifactId = a.id;
    tr.style.cursor = 'pointer';
    tr.innerHTML = `
      <td><span class="artifact-link">${escapeHtml(a.name)}</span></td>
      <td><span class="source-label">${escapeHtml(a.source_app)}</span></td>
      <td><span class="phase-tag">${escapeHtml(a.phase)}</span></td>
      <td>${escapeHtml(getUserName(a.contributor_id))}</td>
      <td><span class="status-badge ${statusBadgeClass(a.status)}">${escapeHtml(a.status)}</span></td>
      <td>${formatDate(a.updated_at)}</td>
      <td><button class="btn-approve" data-artifact-id="${escapeAttr(a.id)}">Review</button></td>
    `;
    artifactsBody.appendChild(tr);
  });

  // Bind row clicks to open detail view
  artifactsBody.querySelectorAll('tr[data-artifact-id]').forEach(tr => {
    tr.addEventListener('click', (e) => {
      // Don't navigate if they clicked the Review button
      if (e.target.closest('.btn-approve')) return;
      openDetailView(tr.dataset.artifactId);
    });
  });

  // Bind approve buttons
  artifactsBody.querySelectorAll('.btn-approve').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.artifactId);
    });
  });
}

function renderHistory() {
  const filtered = sortApprovals(getFilteredApprovals());
  historyBody.innerHTML = '';

  if (filtered.length === 0) {
    historyBody.innerHTML = `
      <tr><td colspan="6">
        <div class="empty-state">
          <span class="material-symbols-outlined">history_toggle_off</span>
          No approval records match the current filters.
        </div>
      </td></tr>`;
    return;
  }

  filtered.forEach(ap => {
    const artifact = artifacts.find(a => a.id === ap.artifact_id);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><a class="artifact-link" href="${escapeAttr(artifact ? artifact.source_url : '#')}" target="_blank" rel="noopener">${escapeHtml(artifact ? artifact.name : 'Unknown')}</a></td>
      <td><span class="phase-tag">${escapeHtml(artifact ? artifact.phase : '')}</span></td>
      <td><span class="status-badge ${statusBadgeClass(ap.decision)}">${escapeHtml(ap.decision)}</span></td>
      <td>${escapeHtml(getUserName(ap.approver_id))}</td>
      <td class="reason-cell"><span class="reason-text">${escapeHtml(ap.reason)}</span></td>
      <td>${formatDate(ap.decision_date)}</td>
    `;
    historyBody.appendChild(tr);
  });

  // Bind reason expand/collapse
  historyBody.querySelectorAll('.reason-text').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('expanded'));
  });
}

// ---- Modal ----

function bindModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  approvalForm.addEventListener('submit', handleApprovalSubmit);
}

function openModal(artifactId) {
  const artifact = artifacts.find(a => a.id === artifactId);
  if (!artifact) return;

  document.getElementById('approval-artifact-id').value = artifactId;
  document.getElementById('modal-artifact-name').textContent = artifact.name;
  document.getElementById('modal-artifact-meta').textContent = `${artifact.phase} · ${artifact.source_app}`;
  document.getElementById('approval-decision').value = '';
  document.getElementById('approval-reason').value = '';
  document.getElementById('approval-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('approval-approver').textContent = getUserName(currentUserId);

  modal.hidden = false;
  document.getElementById('approval-decision').focus();
}

function closeModal() {
  modal.hidden = true;
  approvalForm.reset();
}

function handleApprovalSubmit(e) {
  e.preventDefault();

  const artifactId = document.getElementById('approval-artifact-id').value;
  const decision = document.getElementById('approval-decision').value;
  const reason = document.getElementById('approval-reason').value.trim();
  const date = document.getElementById('approval-date').value;

  if (!decision || !reason || !date) return;

  // Create approval record
  const newApproval = {
    id: 'ap' + (approvals.length + 1),
    artifact_id: artifactId,
    approver_id: currentUserId,
    decision: decision,
    reason: reason,
    decision_date: date,
    created_at: new Date().toISOString()
  };
  approvals.push(newApproval);

  // Update artifact status
  const artifact = artifacts.find(a => a.id === artifactId);
  if (artifact) {
    artifact.status = decision;
    artifact.updated_at = date;
  }

  closeModal();
  renderArtifacts();
  renderHistory();
}

// ---- Detail View (Single Pane of Glass) ----

let activeDetailArtifactId = null;

function bindDetailBack() {
  document.getElementById('detail-review-btn').addEventListener('click', () => {
    if (activeDetailArtifactId) openModal(activeDetailArtifactId);
  });
}

function openDetailView(artifactId) {
  activeDetailArtifactId = artifactId;
  renderDetailSidebar(artifactId);
  renderDetailContent(artifactId);
  showView('detail');
}

function renderDetailSidebar(activeId) {
  detailSidebar.innerHTML = '';
  let currentPhase = '';
  artifacts.forEach(a => {
    if (a.phase !== currentPhase) {
      currentPhase = a.phase;
      const group = document.createElement('li');
      group.className = 'sidebar-phase-group';
      group.textContent = a.phase;
      detailSidebar.appendChild(group);
    }
    const li = document.createElement('li');
    li.textContent = a.name;
    li.className = a.id === activeId ? 'active' : '';
    li.addEventListener('click', () => openDetailView(a.id));
    detailSidebar.appendChild(li);
  });
}

function renderDetailContent(artifactId) {
  const artifact = artifacts.find(a => a.id === artifactId);
  if (!artifact) return;
  detailBreadcrumb.innerHTML = `${escapeHtml(artifact.phase)} &rsaquo; <span>${escapeHtml(artifact.name)}</span>`;
  detailContent.innerHTML = getArtifactMockContent(artifact);
}

// ---- Mock Artifact Content ----

function getArtifactMockContent(artifact) {
  const contentMap = {
    'a1': mockVisionStatement,
    'a2': mockMarketBrief,
    'a3': mockRoadmap,
    'a4': mockScorecard,
    'a5': mockTradeoffMatrix,
    'a6': mockResearchSynthesis,
    'a7': mockPersonas,
    'a8': mockWireframes,
    'a9': mockPrototype,
    'a10': mockDesignSpec,
    'a11': mockComponentDocs,
    'a12': mockStagingEnv,
    'a13': mockApiDocs,
    'a14': mockDashboard
  };
  const renderer = contentMap[artifact.id];
  return renderer ? renderer(artifact) : `<div class="mock-doc"><h2>${escapeHtml(artifact.name)}</h2><p>Artifact preview not available.</p></div>`;
}

function mockVisionStatement(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">edit_document</span> Document Tool</span>
      </div>
      <h2>Product Vision Statement — FY27</h2>
      <h3>Vision</h3>
      <p>By end of FY27, our checkout experience will be the fastest and most intuitive in the industry — reducing cart abandonment by 35% and increasing repeat purchase rate by 20%.</p>
      <h3>Strategic Pillars</h3>
      <ul>
        <li><strong>Speed:</strong> Sub-3-second checkout for returning customers</li>
        <li><strong>Trust:</strong> Transparent pricing with no surprise fees at final step</li>
        <li><strong>Flexibility:</strong> Support for 5+ payment methods across all regions</li>
      </ul>
      <h3>Target Outcomes</h3>
      <p>Cart abandonment rate reduced from 68% to 44%. Average checkout time reduced from 4.2 minutes to 1.8 minutes. NPS for purchase experience increased from 32 to 55.</p>
    </div>`;
}

function mockMarketBrief(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">edit_document</span> Document Tool</span>
      </div>
      <h2>Market Opportunity Brief</h2>
      <h3>Market Size</h3>
      <p>Global e-commerce checkout optimization market valued at $4.2B (2025), projected 18% CAGR through 2029. North America represents 42% of addressable market.</p>
      <h3>Competitive Landscape</h3>
      <ul>
        <li><strong>Competitor A:</strong> One-click checkout — 22% market share, strong brand loyalty</li>
        <li><strong>Competitor B:</strong> Express payments focus — 15% share, growing in EU markets</li>
        <li><strong>Our position:</strong> 8% share, strongest in enterprise segment</li>
      </ul>
      <h3>Opportunity</h3>
      <p>Guest checkout friction identified as #1 drop-off point across segments. 61% of surveyed users cite "too many steps" as primary abandonment reason. Mobile conversion gap is 2.3x desktop.</p>
    </div>`;
}

function mockRoadmap(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">view_timeline</span> Planning Tool</span>
      </div>
      <h2>Q3 Roadmap — Checkout Redesign</h2>
    </div>
    <div class="mock-roadmap" style="margin-top:24px">
      <div class="rm-quarter"><span class="rm-label">Q2</span><div class="rm-track"><div class="rm-bar blue" style="width:40%">Research</div><div class="rm-bar teal" style="width:35%">Wireframes</div></div></div>
      <div class="rm-quarter"><span class="rm-label">Q3</span><div class="rm-track"><div class="rm-bar purple" style="width:30%">Design</div><div class="rm-bar blue" style="width:50%">FE Development</div></div></div>
      <div class="rm-quarter"><span class="rm-label">Q4</span><div class="rm-track"><div class="rm-bar orange" style="width:25%">BE APIs</div><div class="rm-bar teal" style="width:30%">QA</div><div class="rm-bar purple" style="width:20%">Launch</div></div></div>
    </div>
    <div class="mock-doc" style="margin-top:24px">
      <h3>Key Milestones</h3>
      <ul>
        <li><strong>Jun 30:</strong> Wireframes finalized & approved</li>
        <li><strong>Jul 31:</strong> Hi-fi designs complete, dev handoff</li>
        <li><strong>Sep 15:</strong> Feature-complete in staging</li>
        <li><strong>Oct 1:</strong> GA rollout (10% → 50% → 100%)</li>
      </ul>
    </div>`;
}

function mockScorecard(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">table_chart</span> Spreadsheet Tool</span>
      </div>
      <h2>Initiative Priority Scorecard</h2>
    </div>
    <div class="mock-spreadsheet" style="margin-top:20px">
      <table>
        <thead><tr><th>Initiative</th><th>Impact</th><th>Effort</th><th>Score</th><th></th></tr></thead>
        <tbody>
          <tr><td>Guest checkout simplification</td><td>High</td><td>Medium</td><td>8.5</td><td><span class="score-bar" style="width:85%"></span></td></tr>
          <tr><td>Express payment methods</td><td>High</td><td>High</td><td>7.2</td><td><span class="score-bar" style="width:72%"></span></td></tr>
          <tr><td>Address auto-complete</td><td>Medium</td><td>Low</td><td>7.0</td><td><span class="score-bar" style="width:70%"></span></td></tr>
          <tr><td>Loyalty points at checkout</td><td>Medium</td><td>High</td><td>5.8</td><td><span class="score-bar" style="width:58%"></span></td></tr>
          <tr><td>Order summary redesign</td><td>Low</td><td>Low</td><td>5.5</td><td><span class="score-bar" style="width:55%"></span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function mockTradeoffMatrix(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">table_chart</span> Spreadsheet Tool</span>
      </div>
      <h2>Feature Trade-off Matrix</h2>
    </div>
    <div class="mock-spreadsheet" style="margin-top:20px">
      <table>
        <thead><tr><th>Feature</th><th>User Value</th><th>Dev Cost</th><th>Risk</th><th>Decision</th></tr></thead>
        <tbody>
          <tr><td>Biometric auth</td><td>High</td><td>High</td><td>Medium</td><td>Include (Q3)</td></tr>
          <tr><td>Social login</td><td>Medium</td><td>Low</td><td>Low</td><td>Include (Q3)</td></tr>
          <tr><td>Crypto payments</td><td>Low</td><td>High</td><td>High</td><td>Defer to Q1 FY28</td></tr>
          <tr><td>Save for later</td><td>Medium</td><td>Medium</td><td>Low</td><td>Include (Q4)</td></tr>
          <tr><td>Gift wrapping option</td><td>Low</td><td>Low</td><td>Low</td><td>Defer — seasonal only</td></tr>
        </tbody>
      </table>
    </div>`;
}

function mockResearchSynthesis(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">science</span> Research Repository</span>
      </div>
      <h2>Checkout UX Research Synthesis</h2>
      <h3>Methodology</h3>
      <p>12 moderated interviews (45 min each) across 3 buyer segments: first-time, repeat, power-buyer. Remote sessions via video with screen share + think-aloud.</p>
      <h3>Key Findings</h3>
      <ul>
        <li><strong>Finding 1:</strong> 9/12 participants struggled with the address form — auto-fill failed on mobile, manual entry required 6+ fields</li>
        <li><strong>Finding 2:</strong> Guest checkout users expected to save progress — 7/12 abandoned when asked to re-enter info after a page reload</li>
        <li><strong>Finding 3:</strong> Trust signals (security badge, return policy) were expected near the payment step — only 3/12 noticed them in current position</li>
      </ul>
      <h3>Recommendations</h3>
      <p>Reduce form fields to 4 (name, address auto-complete, payment, email). Add session persistence for guest carts. Move trust signals adjacent to payment input.</p>
    </div>`;
}

function mockPersonas(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">edit_document</span> Document Tool</span>
      </div>
      <h2>Persona Profiles — Buyer Segments</h2>
      <h3>Persona 1: "Quick-Buy Quinn"</h3>
      <p>Repeat customer, 28–40, shops weekly. Values speed above all. Uses saved payment. Frustrated by re-authentication on mobile. Goal: checkout in under 60 seconds.</p>
      <h3>Persona 2: "Careful Carlos"</h3>
      <p>First-time buyer, 35–55, researches extensively before purchase. Needs trust signals. Compares prices across tabs. Goal: feel confident the purchase is safe and refundable.</p>
      <h3>Persona 3: "Bulk-Order Brenda"</h3>
      <p>Power buyer (procurement role), 30–50, places large/frequent orders. Needs itemized summaries and PO reference fields. Goal: checkout for 20+ items without errors.</p>
    </div>`;
}

function mockWireframes(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">design_services</span> Design Tool</span>
      </div>
      <h2>Checkout Flow — Wireframes v2</h2>
      <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:20px;">3-step checkout: Shipping → Payment → Confirm</p>
    </div>
    <div class="mock-wireframe" style="margin-top:20px">
      <div class="wf-header"><div class="wf-logo"></div><div class="wf-nav"><div class="wf-nav-item"></div><div class="wf-nav-item"></div><div class="wf-nav-item"></div></div></div>
      <div class="wf-body">
        <div class="wf-block">Step Indicator (1 of 3)</div>
        <div class="wf-block">Order Summary Sidebar</div>
        <div class="wf-block">Address Auto-complete Field</div>
        <div class="wf-block">Delivery Options (3)</div>
        <div class="wf-block full-width">Trust Signals Bar</div>
      </div>
      <div class="wf-cta"></div>
    </div>`;
}

function mockPrototype(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">touch_app</span> Prototyping Tool</span>
      </div>
      <h2>Checkout Prototype — Interactive</h2>
      <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:20px;">Clickable prototype — 8 screens, 12 interactions</p>
    </div>
    <div class="mock-prototype" style="margin-top:20px">
      <div class="proto-browser-bar">
        <div class="proto-dot"></div><div class="proto-dot"></div><div class="proto-dot"></div>
        <div class="proto-url"></div>
      </div>
      <div class="proto-content">
        <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.05em;">Step 2 of 3 — Payment</div>
        <div class="proto-form-field"></div>
        <div class="proto-form-field"></div>
        <div class="proto-form-field" style="max-width:180px"></div>
        <div style="display:flex;gap:12px;margin-top:8px">
          <div class="proto-btn"></div>
          <div class="proto-btn" style="background:var(--color-border);width:80px"></div>
        </div>
      </div>
    </div>`;
}

function mockDesignSpec(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">design_services</span> Design Tool</span>
      </div>
      <h2>Design Spec — Payment Step</h2>
      <h3>Layout</h3>
      <p>Two-column layout: payment form (left, 60%) and order summary (right, 40%). Collapses to single column on mobile (&lt;768px).</p>
      <h3>Typography</h3>
      <ul>
        <li>Section headers: Inter 600, 18px, #1a1d23</li>
        <li>Field labels: Inter 500, 14px, #5f6672</li>
        <li>Input text: Inter 400, 16px, #1a1d23</li>
      </ul>
      <h3>Spacing</h3>
      <ul>
        <li>Form fields: 16px vertical gap</li>
        <li>Section padding: 32px</li>
        <li>CTA button: full-width on mobile, 200px fixed on desktop</li>
      </ul>
      <h3>States</h3>
      <p>Field focus: 2px primary border + 4px shadow ring. Error: red border + inline message below field. Disabled: 50% opacity, no pointer events.</p>
    </div>`;
}

function mockComponentDocs(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">design_services</span> Design Tool</span>
      </div>
      <h2>Component Docs — Form Inputs</h2>
      <h3>Text Input</h3>
      <p>Height: 44px. Border-radius: 8px. Padding: 12px 16px. Border: 1px solid #e2e5ea. Includes label (above) and optional helper text (below).</p>
      <h3>Select Dropdown</h3>
      <p>Same dimensions as text input. Chevron icon right-aligned. Options panel: max-height 240px, scrollable, 8px border-radius.</p>
      <h3>Variants</h3>
      <ul>
        <li><strong>Default:</strong> Grey border, white background</li>
        <li><strong>Focused:</strong> Primary blue border, light blue shadow ring</li>
        <li><strong>Error:</strong> Red border, red helper text, error icon</li>
        <li><strong>Disabled:</strong> Grey background (#f5f6f8), no interaction</li>
      </ul>
    </div>`;
}

function mockStagingEnv(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">code</span> Dev Environment</span>
      </div>
      <h2>Staging Environment — Checkout v2</h2>
      <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:16px;">Branch: <code>feature/checkout-v2</code> · Build #247 · Deployed Jun 1</p>
    </div>
    <div class="mock-dev" style="margin-top:20px">
      <span class="dev-comment">// Checkout v2 — staging deployment</span><br>
      <span class="dev-comment">// https://staging.example.com/checkout-v2</span><br><br>
      <span class="dev-keyword">export default</span> <span class="dev-fn">function</span> <span class="dev-fn">CheckoutPage</span>() {<br>
      &nbsp;&nbsp;<span class="dev-keyword">return</span> (<br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="dev-tag">&lt;CheckoutLayout&gt;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="dev-tag">&lt;StepIndicator</span> current={<span class="dev-string">2</span>} total={<span class="dev-string">3</span>} <span class="dev-tag">/&gt;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="dev-tag">&lt;PaymentForm</span> <span class="dev-tag">/&gt;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="dev-tag">&lt;OrderSummary</span> <span class="dev-tag">/&gt;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="dev-tag">&lt;/CheckoutLayout&gt;</span><br>
      &nbsp;&nbsp;);<br>
      }<br>
    </div>`;
}

function mockApiDocs(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">code</span> Repository Tool</span>
      </div>
      <h2>API Documentation — Payments</h2>
    </div>
    <div class="mock-dev" style="margin-top:20px">
      <span class="dev-comment">// POST /api/v2/checkout/payment</span><br>
      <span class="dev-comment">// Process payment for checkout session</span><br><br>
      {<br>
      &nbsp;&nbsp;<span class="dev-string">"session_id"</span>: <span class="dev-string">"chk_abc123"</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"payment_method"</span>: <span class="dev-string">"card"</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"amount"</span>: <span class="dev-string">9499</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"currency"</span>: <span class="dev-string">"USD"</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"billing_address"</span>: { ... }<br>
      }<br><br>
      <span class="dev-comment">// Response: 200 OK</span><br>
      {<br>
      &nbsp;&nbsp;<span class="dev-string">"payment_id"</span>: <span class="dev-string">"pay_xyz789"</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"status"</span>: <span class="dev-string">"confirmed"</span>,<br>
      &nbsp;&nbsp;<span class="dev-string">"receipt_url"</span>: <span class="dev-string">"/receipts/pay_xyz789"</span><br>
      }<br>
    </div>`;
}

function mockDashboard(a) {
  return `
    <div class="mock-doc">
      <div class="doc-meta">
        <span><span class="material-symbols-outlined">person</span> ${escapeHtml(getUserName(a.contributor_id))}</span>
        <span><span class="material-symbols-outlined">calendar_today</span> ${formatDate(a.created_at)}</span>
        <span><span class="material-symbols-outlined">analytics</span> Analytics Tool</span>
      </div>
      <h2>Checkout Conversion Dashboard</h2>
    </div>
    <div class="mock-dashboard" style="margin-top:20px">
      <div class="dash-card"><div class="dash-value">52%</div><div class="dash-label">Conversion Rate</div></div>
      <div class="dash-card"><div class="dash-value">1:48</div><div class="dash-label">Avg. Checkout Time</div></div>
      <div class="dash-card"><div class="dash-value">+18%</div><div class="dash-label">vs. Previous Quarter</div></div>
      <div class="dash-chart">
        <div class="bar" style="height:45%"></div>
        <div class="bar" style="height:52%"></div>
        <div class="bar" style="height:48%"></div>
        <div class="bar" style="height:61%"></div>
        <div class="bar" style="height:58%"></div>
        <div class="bar" style="height:72%"></div>
        <div class="bar" style="height:68%"></div>
        <div class="bar" style="height:75%"></div>
        <div class="bar" style="height:80%"></div>
        <div class="bar" style="height:78%"></div>
        <div class="bar" style="height:85%"></div>
        <div class="bar" style="height:88%"></div>
      </div>
    </div>`;
}

// ---- Security: HTML escaping ----

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---- Boot ----

init();
