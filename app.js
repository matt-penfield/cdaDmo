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
    decision: 'Rejected',
    reason: 'Sample size too small — 12 interviews is insufficient for 3 distinct segments. Need at least 5 per segment (15 total). Also missing competitive benchmarking data.',
    decision_date: '2026-03-15', created_at: '2026-03-15'
  },
  {
    id: 'ap5b', artifact_id: 'a6', approver_id: 'u2',
    decision: 'Approved',
    reason: 'Revised synthesis now includes 18 interviews (6 per segment) and competitive benchmark appendix. Guest checkout friction insight is actionable and well-supported.',
    decision_date: '2026-03-22', created_at: '2026-03-22'
  },
  {
    id: 'ap6', artifact_id: 'a8', approver_id: 'u1',
    decision: 'Rejected',
    reason: 'Wireframes do not account for accessibility requirements. Color contrast on primary CTA fails WCAG AA. Missing focus state indicators. Address form lacks error state designs.',
    decision_date: '2026-04-05', created_at: '2026-04-05'
  },
  {
    id: 'ap6b', artifact_id: 'a8', approver_id: 'u2',
    decision: 'Rejected',
    reason: 'Agree with Sarah\'s accessibility concerns. Additionally, the mobile breakpoint flow is missing — need to see responsive behavior before approval.',
    decision_date: '2026-04-07', created_at: '2026-04-07'
  },
  {
    id: 'ap6c', artifact_id: 'a8', approver_id: 'u1',
    decision: 'Approved with Conditions',
    reason: 'v2 addresses accessibility gaps and adds mobile flow. Condition: validate with screen reader testing before hi-fi handoff. Approve to proceed to visual design.',
    decision_date: '2026-04-14', created_at: '2026-04-14'
  },
  {
    id: 'ap6d', artifact_id: 'a8', approver_id: 'u2',
    decision: 'Approved',
    reason: 'Mobile flow looks good. Accessibility remediation is solid. Agree we can move forward to hi-fi with the screen reader testing condition noted.',
    decision_date: '2026-04-15', created_at: '2026-04-15'
  },
  {
    id: 'ap7', artifact_id: 'a3', approver_id: 'u1',
    decision: 'Rejected',
    reason: 'Q2 revenue came in 12% under target. Cannot approve loyalty integration in Q3 scope per the original condition. Roadmap needs revision to drop that workstream.',
    decision_date: '2026-04-20', created_at: '2026-04-20'
  },
  {
    id: 'ap7b', artifact_id: 'a3', approver_id: 'u1',
    decision: 'Approved',
    reason: 'Revised roadmap removes loyalty integration and reallocates capacity to payment method expansion. Approved for Q3 execution.',
    decision_date: '2026-04-28', created_at: '2026-04-28'
  }
];

// ---- State ----

let artifacts = JSON.parse(JSON.stringify(MOCK_ARTIFACTS));
let approvals = JSON.parse(JSON.stringify(MOCK_APPROVALS));
let currentUserId = 'u1';
let currentView = 'artifacts';

// ---- DOM refs ----

const viewArtifacts = document.getElementById('view-artifacts');
const viewDetail = document.getElementById('view-detail');
const artifactsBody = document.querySelector('#artifacts-table tbody');
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
  bindNavTabs();
  bindFilters();
  bindSort();
  bindModal();
  bindDetailBack();
  renderArtifacts();
  // Default to detail view with first artifact
  openDetailView(artifacts[0].id);
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
  const sel = document.getElementById('filter-phase');
  PHASES.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    sel.appendChild(opt);
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

// ---- Navigation ----

function bindNavTabs() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const view = tab.dataset.view;
      currentView = view;
      viewArtifacts.classList.toggle('active', view === 'artifacts');
      viewDetail.classList.remove('active');
    });
  });
}

function showView(viewName) {
  viewArtifacts.classList.toggle('active', viewName === 'artifacts');
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

function getApprovalsForArtifact(artifactId) {
  return approvals.filter(ap => ap.artifact_id === artifactId);
}

// ---- Sorting ----

let artifactSort = { key: 'updated_at', dir: -1 };

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
    const artifactApprovals = getApprovalsForArtifact(a.id);
    const hasHistory = artifactApprovals.length > 0;
    const tr = document.createElement('tr');
    tr.dataset.artifactId = a.id;
    tr.style.cursor = 'pointer';
    tr.innerHTML = `
      <td><span class="artifact-link">${escapeHtml(a.name)}</span></td>
      <td><span class="source-label">${escapeHtml(a.source_app)}</span></td>
      <td><span class="phase-tag">${escapeHtml(a.phase)}</span></td>
      <td>${escapeHtml(getUserName(a.contributor_id))}</td>
      <td>
        <span class="status-badge ${statusBadgeClass(a.status)}">${escapeHtml(a.status)}</span>
        ${hasHistory ? `<button class="history-toggle" data-artifact-id="${escapeAttr(a.id)}"><span class="material-symbols-outlined">expand_more</span> ${artifactApprovals.length} approval${artifactApprovals.length > 1 ? 's' : ''}</button>` : ''}
      </td>
      <td>${formatDate(a.updated_at)}</td>
    `;
    artifactsBody.appendChild(tr);

    // Add hidden history row
    if (hasHistory) {
      const historyTr = document.createElement('tr');
      historyTr.className = 'history-row hidden';
      historyTr.dataset.historyFor = a.id;
      historyTr.innerHTML = `
        <td colspan="6">
          <div class="inline-history">
            <div class="inline-history-title">Approval History</div>
            ${artifactApprovals.map(ap => `
              <div class="inline-history-entry">
                <span class="status-badge ${statusBadgeClass(ap.decision)}">${escapeHtml(ap.decision)}</span>
                <span class="inline-history-approver">${escapeHtml(getUserName(ap.approver_id))}</span>
                <span class="inline-history-date">${formatDate(ap.decision_date)}</span>
                <span class="inline-history-reason">${escapeHtml(ap.reason)}</span>
              </div>
            `).join('')}
          </div>
        </td>
      `;
      artifactsBody.appendChild(historyTr);
    }
  });

  // Bind history toggles
  artifactsBody.querySelectorAll('.history-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const artifactId = btn.dataset.artifactId;
      const historyRow = artifactsBody.querySelector(`tr[data-history-for="${artifactId}"]`);
      if (historyRow) {
        historyRow.classList.toggle('hidden');
        const icon = btn.querySelector('.material-symbols-outlined');
        icon.textContent = historyRow.classList.contains('hidden') ? 'expand_more' : 'expand_less';
      }
    });
  });

  // Bind row clicks to open detail view
  artifactsBody.querySelectorAll('tr[data-artifact-id]').forEach(tr => {
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.history-toggle')) return;
      openDetailView(tr.dataset.artifactId);
    });
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
    <div class="mock-figma">
      <div class="figma-toolbar">
        <div class="figma-toolbar-left">
          <div class="figma-logo">
            <svg width="12" height="18" viewBox="0 0 38 57" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0acf83"/><path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#ff7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/></svg>
          </div>
          <span class="figma-filename">${escapeHtml(a.name)}</span>
        </div>
        <div class="figma-toolbar-center">
          <span class="figma-tool active"><span class="material-symbols-outlined">arrow_selector_tool</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">frame_inspect</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">square</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">edit</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">text_fields</span></span>
        </div>
        <div class="figma-toolbar-right">
          <span class="figma-avatar">JO</span>
          <span class="figma-share">Share</span>
        </div>
      </div>
      <div class="figma-canvas">
        <div class="figma-layers-panel">
          <div class="figma-panel-title">Layers</div>
          <div class="figma-layer indent-0 active">↳ Payment Step</div>
          <div class="figma-layer indent-1">Header</div>
          <div class="figma-layer indent-1">Step Indicator</div>
          <div class="figma-layer indent-1 active">Form Container</div>
          <div class="figma-layer indent-2">Card Number Input</div>
          <div class="figma-layer indent-2">Expiry / CVV Row</div>
          <div class="figma-layer indent-2">Billing Address</div>
          <div class="figma-layer indent-1">Order Summary</div>
          <div class="figma-layer indent-1">CTA Button</div>
        </div>
        <div class="figma-artboard-area">
          <div class="figma-frame-label">Payment Step — Desktop (1440×900)</div>
          <div class="figma-artboard">
            <div class="figma-screen-header">
              <div class="figma-screen-logo"></div>
              <div class="figma-screen-nav"><div></div><div></div><div></div></div>
            </div>
            <div class="figma-step-indicator">
              <div class="figma-step done">1 Shipping</div>
              <div class="figma-step-line"></div>
              <div class="figma-step current">2 Payment</div>
              <div class="figma-step-line dim"></div>
              <div class="figma-step dim">3 Confirm</div>
            </div>
            <div class="figma-two-col">
              <div class="figma-form-col">
                <div class="figma-section-title">Payment Method</div>
                <div class="figma-input-group">
                  <label>Card Number</label>
                  <div class="figma-input"><span>4242 •••• •••• 1234</span><span class="figma-card-icon">💳</span></div>
                </div>
                <div class="figma-input-row">
                  <div class="figma-input-group half">
                    <label>Expiry</label>
                    <div class="figma-input">09 / 28</div>
                  </div>
                  <div class="figma-input-group half">
                    <label>CVV</label>
                    <div class="figma-input">•••</div>
                  </div>
                </div>
                <div class="figma-input-group">
                  <label>Billing Address</label>
                  <div class="figma-input">123 Main St, Apt 4B</div>
                </div>
                <div class="figma-input-group">
                  <label></label>
                  <div class="figma-input">New York, NY 10001</div>
                </div>
                <div class="figma-cta-btn">Continue to Review</div>
              </div>
              <div class="figma-summary-col">
                <div class="figma-section-title">Order Summary</div>
                <div class="figma-summary-row"><span>Wireless Headphones</span><span>$89.99</span></div>
                <div class="figma-summary-row"><span>USB-C Cable (x2)</span><span>$14.00</span></div>
                <div class="figma-summary-row"><span>Shipping</span><span>Free</span></div>
                <div class="figma-summary-divider"></div>
                <div class="figma-summary-row total"><span>Total</span><span>$103.99</span></div>
                <div class="figma-trust-signals">
                  <span>🔒 Secure checkout</span>
                  <span>↩ Free returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="figma-inspect-panel">
          <div class="figma-panel-title">Inspect</div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Frame</div>
            <div class="figma-inspect-value">W: 1440 H: 900</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Fill</div>
            <div class="figma-inspect-swatch" style="background:#ffffff"></div>
            <div class="figma-inspect-value">#FFFFFF</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Font</div>
            <div class="figma-inspect-value">Inter 600 / 18px</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Spacing</div>
            <div class="figma-inspect-value">16px gap</div>
          </div>
        </div>
      </div>
    </div>`;
}

function mockComponentDocs(a) {
  return `
    <div class="mock-figma">
      <div class="figma-toolbar">
        <div class="figma-toolbar-left">
          <div class="figma-logo">
            <svg width="12" height="18" viewBox="0 0 38 57" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0acf83"/><path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#ff7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/></svg>
          </div>
          <span class="figma-filename">${escapeHtml(a.name)}</span>
        </div>
        <div class="figma-toolbar-center">
          <span class="figma-tool active"><span class="material-symbols-outlined">arrow_selector_tool</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">frame_inspect</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">square</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">edit</span></span>
          <span class="figma-tool"><span class="material-symbols-outlined">text_fields</span></span>
        </div>
        <div class="figma-toolbar-right">
          <span class="figma-avatar">JO</span>
          <span class="figma-share">Share</span>
        </div>
      </div>
      <div class="figma-canvas">
        <div class="figma-layers-panel">
          <div class="figma-panel-title">Components</div>
          <div class="figma-layer indent-0 active">↳ Form Inputs</div>
          <div class="figma-layer indent-1">Text Input / Default</div>
          <div class="figma-layer indent-1">Text Input / Focused</div>
          <div class="figma-layer indent-1">Text Input / Error</div>
          <div class="figma-layer indent-1">Text Input / Disabled</div>
          <div class="figma-layer indent-1">Select / Default</div>
          <div class="figma-layer indent-1">Select / Open</div>
        </div>
        <div class="figma-artboard-area">
          <div class="figma-frame-label">Component Docs — Form Inputs</div>
          <div class="figma-artboard components">
            <div class="figma-component-grid">
              <div class="figma-component-card">
                <div class="figma-comp-label">Text Input / Default</div>
                <div class="figma-comp-preview">
                  <label>Email address</label>
                  <div class="figma-input">user@example.com</div>
                </div>
                <div class="figma-comp-specs">H: 44px · R: 8px · Border: #E2E5EA</div>
              </div>
              <div class="figma-component-card">
                <div class="figma-comp-label">Text Input / Focused</div>
                <div class="figma-comp-preview">
                  <label>Email address</label>
                  <div class="figma-input focused">user@example.com</div>
                </div>
                <div class="figma-comp-specs">Border: #3B5CCC · Shadow: 0 0 0 3px rgba(59,92,204,0.12)</div>
              </div>
              <div class="figma-component-card">
                <div class="figma-comp-label">Text Input / Error</div>
                <div class="figma-comp-preview">
                  <label>Email address</label>
                  <div class="figma-input error">invalid-email</div>
                  <div class="figma-input-helper error">Please enter a valid email</div>
                </div>
                <div class="figma-comp-specs">Border: #C43131 · Helper: 12px #C43131</div>
              </div>
              <div class="figma-component-card">
                <div class="figma-comp-label">Text Input / Disabled</div>
                <div class="figma-comp-preview">
                  <label>Email address</label>
                  <div class="figma-input disabled">user@example.com</div>
                </div>
                <div class="figma-comp-specs">BG: #F5F6F8 · Opacity: 0.5 · No pointer</div>
              </div>
              <div class="figma-component-card">
                <div class="figma-comp-label">Select / Default</div>
                <div class="figma-comp-preview">
                  <label>Country</label>
                  <div class="figma-input select">United States <span class="figma-chevron">▾</span></div>
                </div>
                <div class="figma-comp-specs">Same dims as text · Chevron right-aligned</div>
              </div>
              <div class="figma-component-card">
                <div class="figma-comp-label">Select / Open</div>
                <div class="figma-comp-preview">
                  <label>Country</label>
                  <div class="figma-input select focused">United States <span class="figma-chevron">▴</span></div>
                  <div class="figma-dropdown-preview">
                    <div class="figma-dropdown-item selected">United States</div>
                    <div class="figma-dropdown-item">Canada</div>
                    <div class="figma-dropdown-item">United Kingdom</div>
                  </div>
                </div>
                <div class="figma-comp-specs">Max-H: 240px · Scrollable · R: 8px</div>
              </div>
            </div>
          </div>
        </div>
        <div class="figma-inspect-panel">
          <div class="figma-panel-title">Design</div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Auto Layout</div>
            <div class="figma-inspect-value">Vertical, 16px gap</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Fill</div>
            <div class="figma-inspect-swatch" style="background:#ffffff"></div>
            <div class="figma-inspect-value">#FFFFFF</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Stroke</div>
            <div class="figma-inspect-swatch" style="background:#e2e5ea"></div>
            <div class="figma-inspect-value">1px #E2E5EA</div>
          </div>
          <div class="figma-inspect-section">
            <div class="figma-inspect-label">Radius</div>
            <div class="figma-inspect-value">8px all</div>
          </div>
        </div>
      </div>
    </div>`;
}

function mockStagingEnv(a) {
  return `
    <div class="mock-staging">
      <div class="staging-browser-chrome">
        <div class="staging-chrome-dots"><span></span><span></span><span></span></div>
        <div class="staging-chrome-bar">
          <span class="staging-lock">🔒</span>
          <span class="staging-url">https://staging.checkout-v2.internal.dev</span>
        </div>
        <div class="staging-chrome-actions">
          <span class="staging-devtools-badge">DevTools</span>
        </div>
      </div>
      <div class="staging-env-banner">
        <span>⚠️ STAGING ENVIRONMENT</span>
        <span>Branch: feature/checkout-v2 · Build #247 · Deployed Jun 1, 2026</span>
      </div>
      <div class="staging-page">
        <div class="staging-page-header">
          <div class="staging-page-logo"></div>
          <div class="staging-page-nav"><div></div><div></div><div></div><div class="staging-cart-icon">🛒 2</div></div>
        </div>
        <div class="staging-step-indicator">
          <div class="staging-step done"><span class="staging-step-num">✓</span> Shipping</div>
          <div class="staging-step-connector done"></div>
          <div class="staging-step current"><span class="staging-step-num">2</span> Payment</div>
          <div class="staging-step-connector"></div>
          <div class="staging-step"><span class="staging-step-num">3</span> Confirm</div>
        </div>
        <div class="staging-two-col">
          <div class="staging-form-col">
            <div class="staging-form-title">Payment Method</div>
            <div class="staging-field">
              <label>Card Number</label>
              <div class="staging-input"><span>4242 •••• •••• 1234</span><span>💳</span></div>
            </div>
            <div class="staging-field-row">
              <div class="staging-field half">
                <label>Expiry</label>
                <div class="staging-input">09 / 28</div>
              </div>
              <div class="staging-field half">
                <label>CVV</label>
                <div class="staging-input">•••</div>
              </div>
            </div>
            <div class="staging-field">
              <label>Billing Address</label>
              <div class="staging-input">123 Main St, Apt 4B</div>
            </div>
            <div class="staging-field">
              <label></label>
              <div class="staging-input">New York, NY 10001</div>
            </div>
            <button class="staging-cta">Continue to Review</button>
          </div>
          <div class="staging-summary-col">
            <div class="staging-form-title">Order Summary</div>
            <div class="staging-line-item"><span>Wireless Headphones</span><span>$89.99</span></div>
            <div class="staging-line-item"><span>USB-C Cable (x2)</span><span>$14.00</span></div>
            <div class="staging-line-item"><span>Shipping</span><span>Free</span></div>
            <div class="staging-divider"></div>
            <div class="staging-line-item total"><span>Total</span><span>$103.99</span></div>
            <div class="staging-trust">
              <span>🔒 Secure checkout</span>
              <span>↩ Free returns</span>
            </div>
          </div>
        </div>
      </div>
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
