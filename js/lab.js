/**
 * LOGIKA LABORATORIUM VIRTUAL
 * 3 Eksperimen Interaktif & Edukatif
 */

class VirtualLab {
  constructor() {
    this.currentExpIndex = 0;
    this.currentStep = 1;
    this.selectedSample = null;
    this.selectedDay = 1;
    this.container = null;
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  selectExperiment(index) {
    this.currentExpIndex = index;
    this.currentStep = 1;
    this.selectedSample = null;
    this.selectedDay = 1;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }

  render() {
    if (!this.container) return;
    const exp = LAB_EXPERIMENTS[this.currentExpIndex];

    let html = `
      <div class="lab-container">
        <!-- Lab Header & Selector -->
        <div class="lab-header">
          <div class="lab-nav-pills">
            ${LAB_EXPERIMENTS.map((item, idx) => `
              <button class="btn-lab-tab ${idx === this.currentExpIndex ? 'active' : ''}" onclick="window.virtualLab.selectExperiment(${idx})">
                <span class="tab-num">Eksperimen ${idx + 1}</span>
                <span class="tab-title">${item.title.split(':')[1] || item.title}</span>
              </button>
            `).join('')}
          </div>
          <div class="exp-meta-card">
            <h3>🧪 ${exp.title}</h3>
            <p class="exp-sub">${exp.subtitle}</p>
            <div class="exp-purpose">
              <strong>🎯 Tujuan Praktikum:</strong> ${exp.purpose}
            </div>
            <div class="exp-tools">
              <strong>🧰 Alat & Bahan Virtual:</strong> 
              <span class="tools-tags">${exp.tools.map(t => `<span class="tag-tool">${t}</span>`).join('')}</span>
            </div>
          </div>
        </div>

        <!-- Interactive Workbench -->
        <div class="lab-workbench">
          ${this.renderExpContent(exp)}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderExpContent(exp) {
    if (exp.id === "lab1") return this.renderLab1(exp);
    if (exp.id === "lab2") return this.renderLab2(exp);
    if (exp.id === "lab3") return this.renderLab3(exp);
    return "";
  }

  // --- LAB 1: UJI PEWARNA MAKANAN (BENANG WOL) ---
  renderLab1(exp) {
    const selected = this.selectedSample || exp.samples[0];
    const res = exp.results[selected.type];

    return `
      <div class="lab-stage-grid">
        <div class="lab-left-panel">
          <h4>1. Pilih Sampel Minuman / Sirup:</h4>
          <div class="sample-btn-group">
            ${exp.samples.map(s => `
              <button class="sample-pick-btn ${s.id === selected.id ? 'active' : ''}" onclick="window.virtualLab.setLab1Sample('${s.id}')">
                <span class="color-dot" style="background-color: ${s.color};"></span>
                <div class="sample-info">
                  <strong>${s.name}</strong>
                  <small>${s.desc}</small>
                </div>
              </button>
            `).join('')}
          </div>

          <div class="lab-control-steps">
            <h4>2. Langkah Praktikum:</h4>
            <div class="step-indicator-lab">
              <span class="step-pill ${this.currentStep >= 1 ? 'done' : ''}">1. Celupkan Wol</span>
              <span class="step-pill ${this.currentStep >= 2 ? 'done' : ''}">2. Asam & Panaskan</span>
              <span class="step-pill ${this.currentStep >= 3 ? 'done' : ''}">3. Cuci Sabun</span>
            </div>
            <div class="step-action-btns">
              <button class="btn btn-primary" onclick="window.virtualLab.stepLab1Next()">
                ${this.currentStep === 1 ? '▶ Masukkan Benang Wol' : this.currentStep === 2 ? '🔥 Panaskan & Asamkan' : '💧 Bilas dengan Sabun'}
              </button>
              <button class="btn btn-outline" onclick="window.virtualLab.resetLab1()">🔄 Ulangi Eksperimen</button>
            </div>
          </div>
        </div>

        <div class="lab-right-panel">
          <div class="lab-visual-area">
            <h4>Simulasi Tabung Reaksi:</h4>
            <div class="test-tube-display">
              <div class="test-tube-wrapper">
                <div class="test-tube">
                  <div class="liquid" style="background: ${selected.color}; opacity: 0.85;">
                    <div class="wool-fiber ${this.currentStep >= 1 ? 'submerged' : ''} step-${this.currentStep}" style="${this.getWoolStyle(selected, this.currentStep)}">
                      <span class="wool-label">Benang Wol</span>
                    </div>
                  </div>
                </div>
                <div class="tube-stand"></div>
              </div>
              <div class="tube-status-bubble">
                <strong>Status Saat Ini:</strong>
                <p>${this.getLab1StatusText(this.currentStep, selected)}</p>
              </div>
            </div>

            <!-- Result Card -->
            ${this.currentStep >= 3 ? `
              <div class="lab-result-card animate-fade-in ${selected.type === 'tekstil' ? 'alert-danger' : 'alert-success'}">
                <h4>📊 Hasil Pengamatan Benang Wol:</h4>
                <p><strong>Kondisi Serat:</strong> ${res.woolColor}</p>
                <p><strong>Kesimpulan IPA:</strong> ${res.conclusion}</p>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  setLab1Sample(sampleId) {
    const exp = LAB_EXPERIMENTS[0];
    this.selectedSample = exp.samples.find(s => s.id === sampleId);
    this.currentStep = 1;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }

  stepLab1Next() {
    if (this.currentStep < 3) {
      this.currentStep++;
      if (window.soundFX) window.soundFX.playCorrect();
    } else {
      if (window.soundFX) window.soundFX.playLevelUp();
    }
    this.render();
  }

  resetLab1() {
    this.currentStep = 1;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }

  getWoolStyle(sample, step) {
    if (step === 1) return "background: #f8fafc; border: 2px dashed #94a3b8;";
    if (step === 2) return `background: ${sample.color}; border: 2px solid #334155; color: #fff;`;
    if (step === 3) {
      if (sample.type === 'tekstil') {
        return `background: #ff007f; border: 2px solid #990033; color: #fff; box-shadow: 0 0 15px #ff007f;`;
      } else if (sample.type === 'alami') {
        return `background: #fed7aa; border: 2px dashed #fb923c; color: #7c2d12;`;
      } else {
        return `background: #fca5a5; border: 2px solid #ef4444; color: #7f1d1d;`;
      }
    }
    return "";
  }

  getLab1StatusText(step, sample) {
    if (step === 1) return "Benang wol putih bersih dicelupkan ke dalam larutan sirup " + sample.name + ".";
    if (step === 2) return "Larutan diasamkan dengan cuka dan dipanaskan. Molekul pigmen menempel pada protein keratin wol.";
    if (step === 3) return "Benang wol diangkat dan dicuci kuat menggunakan air sabun deterjen.";
    return "";
  }

  // --- LAB 2: PENGAWET PADA ROTI (HARI 1 - 7) ---
  renderLab2(exp) {
    const dayData = exp.timeline.find(t => t.day === this.selectedDay) || exp.timeline[0];

    return `
      <div class="lab-stage-grid">
        <div class="lab-left-panel">
          <h4>1. Pilih Linimasa Pengamatan (Waktu):</h4>
          <div class="timeline-stepper">
            ${exp.timeline.map(t => `
              <button class="btn-time-step ${t.day === this.selectedDay ? 'active' : ''}" onclick="window.virtualLab.setLab2Day(${t.day})">
                <span class="time-circle">${t.day}</span>
                <span>${t.label}</span>
              </button>
            `).join('')}
          </div>
          <div class="timeline-log-box">
            <h4>📋 Catatan Harian Peneliti:</h4>
            <p>${dayData.observation}</p>
          </div>
          <div class="conclusion-box">
            <h4>💡 Kesimpulan Ilmiah:</h4>
            <p>${exp.conclusion}</p>
          </div>
        </div>

        <div class="lab-right-panel">
          <h4>2. Observasi 4 Cawan Petri (Kondisi Roti):</h4>
          <div class="petri-grid">
            ${exp.samples.map(s => this.renderPetriDish(s, this.selectedDay)).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setLab2Day(day) {
    this.selectedDay = day;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }

  renderPetriDish(sample, day) {
    let moldClass = "mold-none";
    let moldDesc = "Segar & Bersih";
    let moldCoverage = 0;

    if (sample.treat === "air") {
      if (day >= 3) { moldClass = "mold-low"; moldDesc = "Mulai bintik putih"; moldCoverage = 20; }
      if (day >= 5) { moldClass = "mold-med"; moldDesc = "Jamur hitam tebal"; moldCoverage = 65; }
      if (day >= 7) { moldClass = "mold-high"; moldDesc = "Basi total & berbau"; moldCoverage = 95; }
    } else if (sample.treat === "garam") {
      if (day >= 5) { moldClass = "mold-low"; moldDesc = "Bercak jamur tipis"; moldCoverage = 15; }
      if (day >= 7) { moldClass = "mold-low"; moldDesc = "Jamur 25% di tepi"; moldCoverage = 30; }
    } else if (sample.treat === "cuka") {
      if (day >= 7) { moldClass = "mold-low"; moldDesc = "Bau asam, bebas jamur"; moldCoverage = 5; }
    } else if (sample.treat === "benzoat") {
      moldClass = "mold-none";
      moldDesc = "Bersih total (awet)";
      moldCoverage = 0;
    }

    return `
      <div class="petri-card">
        <div class="petri-dish">
          <div class="bread-slice">
            <div class="mold-overlay ${moldClass}" style="opacity: ${moldCoverage / 100};"></div>
          </div>
          <div class="dish-rim"></div>
        </div>
        <strong>${sample.name}</strong>
        <span class="mold-badge ${moldCoverage > 50 ? 'danger' : moldCoverage > 0 ? 'warn' : 'safe'}">
          ${moldDesc} (${moldCoverage}%)
        </span>
      </div>
    `;
  }

  // --- LAB 3: UJI BORAKS DENGAN KUNYIT ---
  renderLab3(exp) {
    const selected = this.selectedSample || exp.samples[0];
    const isTested = this.currentStep >= 2;
    const res = selected.hasBorax ? exp.results.danger : exp.results.safe;

    return `
      <div class="lab-stage-grid">
        <div class="lab-left-panel">
          <h4>1. Pilih Sampel Bakso yang Diuji:</h4>
          <div class="sample-btn-group">
            ${exp.samples.map(s => `
              <button class="sample-pick-btn ${s.id === selected.id ? 'active' : ''}" onclick="window.virtualLab.setLab3Sample('${s.id}')">
                <span class="meatball-icon">🧆</span>
                <div class="sample-info">
                  <strong>${s.name}</strong>
                  <small>${s.desc}</small>
                </div>
              </button>
            `).join('')}
          </div>

          <div class="lab-control-steps">
            <h4>2. Reagen Alami:</h4>
            <div class="reagent-info-card">
              <span class="ri-icon">🟡</span>
              <div>
                <strong>${exp.reagent}</strong>
                <p><small>${exp.reactionDesc}</small></p>
              </div>
            </div>
            <div class="step-action-btns">
              <button class="btn btn-primary" onclick="window.virtualLab.stepLab3Test()">
                ${isTested ? '💧 Uji Sampel Lagi' : '🥢 Teteskan Ekstrak Kunyit ke Sampel'}
              </button>
              <button class="btn btn-outline" onclick="window.virtualLab.resetLab3()">🔄 Bersihkan Meja Uji</button>
            </div>
          </div>
        </div>

        <div class="lab-right-panel">
          <div class="lab-visual-area">
            <h4>Meja Uji Porselen:</h4>
            <div class="borax-test-stage">
              <div class="porcelain-plate">
                <div class="meatball-cut">
                  <span class="plate-sample-name">${selected.name}</span>
                  <div class="toothpick-indicator ${isTested ? 'dropped' : ''}">
                    <div class="curcumin-tip" style="${isTested ? (selected.hasBorax ? 'background: #7f1d1d; box-shadow: 0 0 10px #dc2626;' : 'background: #eab308;') : 'background: #facc15;'}">
                    </div>
                    <span class="paper-label">${isTested ? (selected.hasBorax ? 'Merah Kecokelatan (Rososianin)' : 'Kuning Cerah Alami') : 'Kertas Kunyit'}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Result Box -->
            ${isTested ? `
              <div class="lab-result-card animate-fade-in ${selected.hasBorax ? 'alert-danger' : 'alert-success'}">
                <h4>📊 Hasil Uji Indikator Kurkumin:</h4>
                <p><strong>Perubahan Warna:</strong> ${res.colorResult}</p>
                <p><strong>Interpretasi:</strong> ${res.status}</p>
              </div>
            ` : `
              <div class="lab-hint-box">
                <p>💡 <em>Klik tombol 'Teteskan Ekstrak Kunyit' di sebelah kiri untuk melihat reaksi kimia antara kurkumin dan sampel bakso.</em></p>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }

  setLab3Sample(id) {
    const exp = LAB_EXPERIMENTS[2];
    this.selectedSample = exp.samples.find(s => s.id === id);
    this.currentStep = 1;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }

  stepLab3Test() {
    this.currentStep = 2;
    const selected = this.selectedSample || LAB_EXPERIMENTS[2].samples[0];
    if (window.soundFX) {
      if (selected.hasBorax) {
        window.soundFX.playWrong();
      } else {
        window.soundFX.playCorrect();
      }
    }
    this.render();
  }

  resetLab3() {
    this.currentStep = 1;
    if (window.soundFX) window.soundFX.playClick();
    this.render();
  }
}

window.virtualLab = new VirtualLab();
