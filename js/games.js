/**
 * EDU GAMES & SPECIAL INTERACTIVE FEATURES
 * Game 1: Sortir Zat
 * Game 2: Tebak Zat
 * Game 3: Pasangkan (Match Master)
 * Game 4: Detektif Label
 * Game 5: Misi Hidup Sehat
 * Fitur: Kenali Zatnya, Baca Label, Studi Kasus
 */

class EduGames {
  constructor() {
    this.activeGame = "game1";
    this.score = 0;
    this.lives = 3;
    this.timer = null;
    this.timeLeft = 60;
    this.state = {};
  }

  // ==========================================
  // FITUR: KENALI ZATNYA (Quick Triage Quiz)
  // ==========================================
  initKenaliZat(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.kzIndex = 0;
    this.kzScore = 0;
    this.kzTotal = IDENTIFY_ITEMS.length;
    this.renderKenaliZat(container);
  }

  renderKenaliZat(container) {
    if (this.kzIndex >= this.kzTotal) {
      // Selesai
      container.innerHTML = `
        <div class="game-end-card animate-fade-in text-center">
          <div class="trophy-big">🏆</div>
          <h2>Luar Biasa! Misi Identifikasi Selesai</h2>
          <p>Skor Akhirmu: <strong>${this.kzScore} / ${this.kzTotal * 10} Poin</strong></p>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initKenaliZat('${container.id}')">🔄 Main Lagi</button>
            <button class="btn btn-outline" onclick="window.app.navigate('materi')">📚 Buka Materi</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.kzScore, "Menyelesaikan Kenali Zatnya");
      return;
    }

    const item = IDENTIFY_ITEMS[this.kzIndex];

    container.innerHTML = `
      <div class="kenali-card animate-scale-in">
        <div class="kenali-header">
          <span class="badge-num">Kartu ${this.kzIndex + 1} dari ${this.kzTotal}</span>
          <span class="score-live">Poin: ${this.kzScore}</span>
        </div>
        <div class="kenali-display">
          <div class="kz-emoji">${item.imageEmoji}</div>
          <h3 class="kz-name">${item.name}</h3>
          <p class="kz-sub">${item.sub}</p>
        </div>
        <div class="kenali-prompt">
          <strong>Manakah kategori yang paling tepat untuk objek di atas?</strong>
        </div>
        <div class="kenali-btn-grid" id="kzBtnContainer">
          <button class="btn-choice-kz btn-aditif" onclick="window.eduGames.checkKenali('aditif', '${container.id}')">
            <span>🥗</span>
            <strong>Zat Aditif</strong>
            <small>Bahan tambahan pangan</small>
          </button>
          <button class="btn-choice-kz btn-adiktif" onclick="window.eduGames.checkKenali('adiktif', '${container.id}')">
            <span>🧠</span>
            <strong>Zat Adiktif</strong>
            <small>Pemicu ketergantungan saraf</small>
          </button>
          <button class="btn-choice-kz btn-bukan" onclick="window.eduGames.checkKenali('bukan', '${container.id}')">
            <span>🍚</span>
            <strong>Bukan Keduanya</strong>
            <small>Bahan pokok / pangan alami</small>
          </button>
        </div>
        <div id="kzFeedback" class="kz-feedback-box hidden"></div>
      </div>
    `;
  }

  checkKenali(selected, containerId) {
    const item = IDENTIFY_ITEMS[this.kzIndex];
    const fbBox = document.getElementById("kzFeedback");
    const btnContainer = document.getElementById("kzBtnContainer");
    if (!fbBox || !btnContainer) return;

    // Disable buttons
    const btns = btnContainer.querySelectorAll("button");
    btns.forEach(b => b.disabled = true);

    const isCorrect = (selected === item.category);

    if (isCorrect) {
      this.kzScore += 10;
      if (window.soundFX) window.soundFX.playCorrect();
      fbBox.className = "kz-feedback-box alert-success animate-fade-in";
      fbBox.innerHTML = `
        <div class="fb-header">✅ <strong>TEPAT SEKALI!</strong> (+10 Poin)</div>
        <p>${item.explanation}</p>
        <button class="btn btn-sm btn-primary" onclick="window.eduGames.nextKenali('${containerId}')">Lanjut Kartu Berikutnya ➔</button>
      `;
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      fbBox.className = "kz-feedback-box alert-danger animate-fade-in";
      fbBox.innerHTML = `
        <div class="fb-header">❌ <strong>KURANG TEPAT!</strong></div>
        <p>${item.explanation}</p>
        <button class="btn btn-sm btn-outline" onclick="window.eduGames.nextKenali('${containerId}')">Lanjut Kartu Berikutnya ➔</button>
      `;
    }
    fbBox.classList.remove("hidden");
  }

  nextKenali(containerId) {
    this.kzIndex++;
    const container = document.getElementById(containerId);
    this.renderKenaliZat(container);
  }

  // ==========================================
  // FITUR: BACA LABEL MAKANAN (Interactive Label)
  // ==========================================
  initBacaLabel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    this.bacaPkgIndex = 0;
    this.renderBacaLabel(container);
  }

  renderBacaLabel(container) {
    const pkg = FOOD_PACKAGES[this.bacaPkgIndex];

    container.innerHTML = `
      <div class="baca-label-container">
        <div class="baca-nav">
          <div class="baca-pill-group">
            ${FOOD_PACKAGES.map((p, idx) => `
              <button class="btn-pkg-tab ${idx === this.bacaPkgIndex ? 'active' : ''}" onclick="window.eduGames.setBacaPkg(${idx}, '${container.id}')">
                Kemasan ${idx + 1}: ${p.name.split("'")[1] || p.name}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="label-interactive-grid">
          <!-- Kemasan Visual -->
          <div class="package-card-3d">
            <div class="pkg-badge-tag">${pkg.typeBadge}</div>
            <h3 class="pkg-title">${pkg.name}</h3>
            <div class="pkg-spec-meta">
              <span><strong>Netto:</strong> ${pkg.netto}</span>
              <span><strong>Kedaluwarsa:</strong> ${pkg.expiry}</span>
              <span><strong>Izin:</strong> ${pkg.bpom}</span>
            </div>
            <hr>
            <h4>📋 Daftar Komposisi (Ingredients):</h4>
            <p class="pkg-sub-hint"><em>Klik atau sentuh setiap bahan untuk menganalisis fungsinya!</em></p>
            <div class="ingredients-list">
              ${pkg.ingredients.map(ing => `
                <button class="ing-badge" onclick="window.eduGames.showIngDetail('${ing.name}', '${pkg.id}')">
                  ${ing.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Analysis Detail Box -->
          <div class="analysis-panel">
            <div class="panel-box">
              <h4>🎯 Misi Analisis Detektif Label:</h4>
              <p class="mission-task">${pkg.taskPrompt}</p>
              <div id="ingDetailView" class="ing-detail-view">
                <p class="text-muted">👉 Sentuh salah satu bahan pada kemasan di sebelah kiri untuk melihat peran zat tersebut.</p>
              </div>
              <div id="pkgMissionResult" class="pkg-mission-result"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setBacaPkg(idx, containerId) {
    this.bacaPkgIndex = idx;
    if (window.soundFX) window.soundFX.playClick();
    const container = document.getElementById(containerId);
    this.renderBacaLabel(container);
  }

  showIngDetail(ingName, pkgId) {
    const pkg = FOOD_PACKAGES.find(p => p.id === pkgId);
    if (!pkg) return;
    const ing = pkg.ingredients.find(i => i.name === ingName);
    if (!ing) return;

    if (window.soundFX) window.soundFX.playClick();

    const detailBox = document.getElementById("ingDetailView");
    const resBox = document.getElementById("pkgMissionResult");
    if (!detailBox) return;

    const isTarget = (ing.name === pkg.correctTarget);

    detailBox.innerHTML = `
      <div class="ing-card-detail animate-fade-in">
        <h4>🔍 ${ing.name}</h4>
        <div class="ing-prop-row">
          <span class="prop-badge">Fungsi: <strong>${ing.role}</strong></span>
          <span class="prop-badge">Kategori: <strong>${ing.type}</strong></span>
        </div>
        <p>${ing.desc}</p>
      </div>
    `;

    if (isTarget) {
      if (window.soundFX) window.soundFX.playCorrect();
      resBox.innerHTML = `
        <div class="alert-success animate-fade-in">
          🎉 <strong>MISI BERHASIL!</strong> Kamu berhasil menemukan zat sasaran: <em>${ing.name}</em> dengan fungsi <strong>${ing.role}</strong>.
        </div>
      `;
      if (window.app) window.app.addXP(15, "Menemukan zat sasaran label kemasan");
    } else {
      resBox.innerHTML = `
        <div class="alert-info animate-fade-in">
          ℹ️ Bahan <em>${ing.name}</em> berfungsi sebagai <strong>${ing.role}</strong>. Terus cari bahan sesuai misi di atas!
        </div>
      `;
    }
  }

  // ==========================================
  // FITUR: STUDI KASUS KRITIS (Case Studies)
  // ==========================================
  initStudiKasus(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    this.csIndex = 0;
    this.renderStudiKasus(container);
  }

  renderStudiKasus(container) {
    const cs = CASE_STUDIES[this.csIndex];

    container.innerHTML = `
      <div class="case-study-container">
        <div class="cs-nav">
          ${CASE_STUDIES.map((c, i) => `
            <button class="btn-cs-tab ${i === this.csIndex ? 'active' : ''}" onclick="window.eduGames.setCaseIndex(${i}, '${container.id}')">
              ${c.title.split(':')[0]}
            </button>
          `).join('')}
        </div>

        <div class="case-card animate-fade-in">
          <div class="cs-story-box">
            <h3>📖 ${cs.title}</h3>
            <p class="cs-narrative">${cs.story}</p>
            <div class="cs-dilemma-tag">
              <strong>🤔 Dilema:</strong> ${cs.dilemma}
            </div>
          </div>

          <div class="cs-questions-area">
            <h4>Pikirkan & Putuskan Solusi Sehat:</h4>
            ${cs.questions.map((q, qIdx) => `
              <div class="cs-q-block" id="csQ_${qIdx}">
                <p><strong>Pertanyaan ${qIdx + 1}:</strong> ${q.q}</p>
                <div class="cs-opt-list">
                  ${q.options.map((opt, oIdx) => `
                    <button class="btn-opt-cs" onclick="window.eduGames.answerCase(${qIdx}, ${oIdx}, '${cs.id}')">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                <div class="cs-q-feedback hidden" id="csFb_${qIdx}"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setCaseIndex(i, containerId) {
    this.csIndex = i;
    if (window.soundFX) window.soundFX.playClick();
    const container = document.getElementById(containerId);
    this.renderStudiKasus(container);
  }

  answerCase(qIdx, oIdx, caseId) {
    const cs = CASE_STUDIES.find(c => c.id === caseId);
    if (!cs) return;
    const qData = cs.questions[qIdx];
    const fb = document.getElementById(`csFb_${qIdx}`);
    const qBlock = document.getElementById(`csQ_${qIdx}`);
    if (!fb || !qBlock) return;

    // disable options
    const btns = qBlock.querySelectorAll("button");
    btns.forEach(b => b.disabled = true);

    if (oIdx === qData.answer) {
      if (window.soundFX) window.soundFX.playCorrect();
      btns[oIdx].classList.add("btn-correct");
      fb.className = "cs-q-feedback alert-success animate-fade-in";
      fb.innerHTML = `✅ <strong>Jawaban Tepat!</strong> ${qData.explanation}`;
      if (window.app) window.app.addXP(15, "Menjawab studi kasus dengan kritis");
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      btns[oIdx].classList.add("btn-wrong");
      btns[qData.answer].classList.add("btn-correct");
      fb.className = "cs-q-feedback alert-danger animate-fade-in";
      fb.innerHTML = `❌ <strong>Kurang Tepat.</strong> ${qData.explanation}`;
    }
    fb.classList.remove("hidden");
  }

  // ==========================================
  // GAME 1 — SORTIR ZAT CEPAT (Drag & Drop / Tap)
  // ==========================================
  initGame1(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const data = GAMES_DATA.game1_sort;

    this.g1Items = [...data.items].sort(() => Math.random() - 0.5);
    this.g1Index = 0;
    this.g1Score = 0;
    this.g1Combo = 0;
    this.renderGame1(container);
  }

  renderGame1(container) {
    const data = GAMES_DATA.game1_sort;

    if (this.g1Index >= this.g1Items.length) {
      container.innerHTML = `
        <div class="game-end-card animate-scale-in text-center">
          <div class="trophy-big">🏆</div>
          <h2>Hebat! Semua Zat Berhasil Disortir</h2>
          <p>Total Skor Game 1: <strong>${this.g1Score} Poin</strong></p>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initGame1('${container.id}')">🔄 Main Lagi</button>
            <button class="btn btn-outline" onclick="window.eduGames.switchGameTab('game2')">🎮 Lanjut ke Game 2 ➔</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.g1Score, "Menyelesaikan Game Sortir Zat");
      return;
    }

    const currentItem = this.g1Items[this.g1Index];

    container.innerHTML = `
      <div class="game-sort-wrap">
        <div class="game-top-bar">
          <div>Item: <strong>${this.g1Index + 1} / ${this.g1Items.length}</strong></div>
          <div>Skor: <strong class="text-accent">${this.g1Score}</strong></div>
          <div>Combo: <strong class="text-warn">🔥 ${this.g1Combo}x</strong></div>
        </div>

        <!-- Kartu Tengah yang Sedang Muncul -->
        <div class="sort-card-stage">
          <div class="floating-item-card animate-scale-in" id="floatingItem">
            <span class="fic-icon">${currentItem.icon}</span>
            <h3>${currentItem.name}</h3>
            <p>Sentuh salah satu wadah kategori di bawah untuk menyortir!</p>
          </div>
        </div>

        <!-- 4 Wadah Kategori (Bucket) -->
        <div class="bucket-grid">
          ${data.categories.map(cat => `
            <button class="bucket-card" style="border-top-color: ${cat.color};" onclick="window.eduGames.sortItemTo('${cat.id}', '${container.id}')">
              <span class="bc-icon">${cat.icon}</span>
              <strong>${cat.name}</strong>
              <small>Klik untuk pilih</small>
            </button>
          `).join('')}
        </div>
        <div id="g1Feedback" class="g1-feedback-bar hidden"></div>
      </div>
    `;
  }

  sortItemTo(chosenCat, containerId) {
    const currentItem = this.g1Items[this.g1Index];
    const fb = document.getElementById("g1Feedback");
    const isCorrect = (chosenCat === currentItem.cat);

    if (isCorrect) {
      this.g1Combo++;
      const bonus = (this.g1Combo > 1) ? 5 * this.g1Combo : 0;
      this.g1Score += (10 + bonus);
      if (window.soundFX) window.soundFX.playCorrect();
      if (fb) {
        fb.className = "g1-feedback-bar alert-success animate-fade-in";
        fb.innerHTML = `✅ <strong>Benar!</strong> ${currentItem.name} masuk ke kategori yang tepat. (+${10 + bonus} Poin)`;
        fb.classList.remove("hidden");
      }
    } else {
      this.g1Combo = 0;
      if (window.soundFX) window.soundFX.playWrong();
      if (fb) {
        fb.className = "g1-feedback-bar alert-danger animate-fade-in";
        fb.innerHTML = `❌ <strong>Salah wadah!</strong> ${currentItem.name} bukan bagian dari kategori tersebut.`;
        fb.classList.remove("hidden");
      }
    }

    setTimeout(() => {
      this.g1Index++;
      const container = document.getElementById(containerId);
      this.renderGame1(container);
    }, 900);
  }

  // ==========================================
  // GAME 2 — TEBAK ZAT (CLUE HUNTER)
  // ==========================================
  initGame2(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const data = GAMES_DATA.game2_guess;
    this.g2Riddles = [...data.riddles];
    this.g2Index = 0;
    this.g2ClueIndex = 1;
    this.g2Score = 0;
    this.renderGame2(container);
  }

  renderGame2(container) {
    if (this.g2Index >= this.g2Riddles.length) {
      container.innerHTML = `
        <div class="game-end-card animate-scale-in text-center">
          <div class="trophy-big">🎯</div>
          <h2>Luar Biasa! Detektif Tebak Zat Hebat</h2>
          <p>Total Skor Tebak Zat: <strong>${this.g2Score} Poin</strong></p>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initGame2('${container.id}')">🔄 Main Lagi</button>
            <button class="btn btn-outline" onclick="window.eduGames.switchGameTab('game3')">🎮 Lanjut ke Game 3 ➔</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.g2Score, "Menyelesaikan Game Tebak Zat");
      return;
    }

    const riddle = this.g2Riddles[this.g2Index];

    // Build distractors for guessing
    const allNames = this.g2Riddles.map(r => r.name);
    const options = [riddle.name, ...allNames.filter(n => n !== riddle.name)].slice(0, 4).sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="guess-game-wrap">
        <div class="game-top-bar">
          <div>Teka-Teki: <strong>${this.g2Index + 1} / ${this.g2Riddles.length}</strong></div>
          <div>Skor: <strong class="text-accent">${this.g2Score}</strong></div>
          <div>Petunjuk Terbuka: <strong>${this.g2ClueIndex} / 4</strong></div>
        </div>

        <div class="clue-board">
          <h4>🕵️ Petunjuk Misteri Zat:</h4>
          <div class="clues-list">
            ${riddle.clues.map((clue, idx) => `
              <div class="clue-item ${idx < this.g2ClueIndex ? 'revealed' : 'locked'}">
                <span class="ci-num">${idx + 1}</span>
                <span class="ci-text">${idx < this.g2ClueIndex ? clue : '🔒 [Petunjuk masih terkunci - klik tombol buka]'}</span>
              </div>
            `).join('')}
          </div>
          ${this.g2ClueIndex < 4 ? `
            <button class="btn btn-sm btn-outline" onclick="window.eduGames.openNextClue('${container.id}')">
              🔓 Buka Petunjuk Berikutnya (-5 Poin)
            </button>
          ` : ''}
        </div>

        <div class="guess-options-box">
          <h4>Siapakah Zat Ini?</h4>
          <div class="guess-grid" id="guessGrid">
            ${options.map(opt => `
              <button class="btn-guess-opt" onclick="window.eduGames.checkGuess('${opt}', '${container.id}')">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="g2Feedback" class="g2-feedback-bar hidden"></div>
      </div>
    `;
  }

  openNextClue(containerId) {
    if (this.g2ClueIndex < 4) {
      this.g2ClueIndex++;
      if (window.soundFX) window.soundFX.playClick();
      const container = document.getElementById(containerId);
      this.renderGame2(container);
    }
  }

  checkGuess(selectedName, containerId) {
    const riddle = this.g2Riddles[this.g2Index];
    const fb = document.getElementById("g2Feedback");
    const grid = document.getElementById("guessGrid");
    if (!grid) return;

    grid.querySelectorAll("button").forEach(b => b.disabled = true);

    const isCorrect = (selectedName === riddle.name);

    if (isCorrect) {
      const earned = Math.max(10, 40 - (this.g2ClueIndex - 1) * 10);
      this.g2Score += earned;
      if (window.soundFX) window.soundFX.playCorrect();
      if (fb) {
        fb.className = "g2-feedback-bar alert-success animate-fade-in";
        fb.innerHTML = `✅ <strong>TEPAT SEKALI!</strong> Zat tersebut adalah <strong>${riddle.name}</strong>. (+${earned} Poin)`;
        fb.classList.remove("hidden");
      }
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      if (fb) {
        fb.className = "g2-feedback-bar alert-danger animate-fade-in";
        fb.innerHTML = `❌ <strong>Tebakan Belum Tepat.</strong> Zat yang benar adalah <strong>${riddle.name}</strong>.`;
        fb.classList.remove("hidden");
      }
    }

    setTimeout(() => {
      this.g2Index++;
      this.g2ClueIndex = 1;
      const container = document.getElementById(containerId);
      this.renderGame2(container);
    }, 1200);
  }

  // ==========================================
  // GAME 3 — PASANGKAN (MATCH MASTER)
  // ==========================================
  initGame3(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const sets = GAMES_DATA.game3_match.sets;

    this.g3Sets = sets;
    this.g3Matched = [];
    this.g3SelectedZat = null;
    this.g3SelectedFungsi = null;
    this.g3SelectedContoh = null;
    this.g3Score = 0;
    this.renderGame3(container);
  }

  renderGame3(container) {
    if (this.g3Matched.length >= this.g3Sets.length) {
      container.innerHTML = `
        <div class="game-end-card animate-scale-in text-center">
          <div class="trophy-big">🔗</div>
          <h2>Hebat! Semua Pasangan Berhasil Dihubungkan</h2>
          <p>Total Skor Pasangan: <strong>${this.g3Score} Poin</strong></p>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initGame3('${container.id}')">🔄 Main Lagi</button>
            <button class="btn btn-outline" onclick="window.eduGames.switchGameTab('game4')">🎮 Lanjut ke Game 4 ➔</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.g3Score, "Menyelesaikan Game Pasangkan Kartu");
      return;
    }

    // Unmatched items
    const unmatched = this.g3Sets.filter(s => !this.g3Matched.includes(s.id));
    const zats = unmatched.map(s => ({ id: s.id, val: s.zat })).sort(() => Math.random() - 0.5);
    const fungsis = unmatched.map(s => ({ id: s.id, val: s.fungsi })).sort(() => Math.random() - 0.5);
    const contohs = unmatched.map(s => ({ id: s.id, val: s.contoh })).sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="match-game-wrap">
        <div class="game-top-bar">
          <div>Terpasang: <strong>${this.g3Matched.length} / ${this.g3Sets.length}</strong></div>
          <div>Skor: <strong class="text-accent">${this.g3Score}</strong></div>
          <div>Misi: Hubungkan <strong>1 Zat + 1 Fungsi + 1 Contoh</strong></div>
        </div>

        <div class="match-columns-grid">
          <!-- Kolom 1: Zat -->
          <div class="match-col">
            <h4>1. Nama Zat</h4>
            ${zats.map(z => `
              <button class="match-btn ${this.g3SelectedZat === z.id ? 'active' : ''}" onclick="window.eduGames.selectMatchItem('zat', '${z.id}', '${container.id}')">
                ${z.val}
              </button>
            `).join('')}
          </div>

          <!-- Kolom 2: Fungsi -->
          <div class="match-col">
            <h4>2. Fungsi Aditif</h4>
            ${fungsis.map(f => `
              <button class="match-btn ${this.g3SelectedFungsi === f.id ? 'active' : ''}" onclick="window.eduGames.selectMatchItem('fungsi', '${f.id}', '${container.id}')">
                ${f.val}
              </button>
            `).join('')}
          </div>

          <!-- Kolom 3: Contoh -->
          <div class="match-col">
            <h4>3. Contoh Pangan</h4>
            ${contohs.map(c => `
              <button class="match-btn ${this.g3SelectedContoh === c.id ? 'active' : ''}" onclick="window.eduGames.selectMatchItem('contoh', '${c.id}', '${container.id}')">
                ${c.val}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="g3Status" class="g3-status-box text-center">
          ${this.getMatchStatusMsg()}
        </div>
      </div>
    `;
  }

  getMatchStatusMsg() {
    let parts = [];
    if (this.g3SelectedZat) parts.push("Zat dipilih");
    if (this.g3SelectedFungsi) parts.push("Fungsi dipilih");
    if (this.g3SelectedContoh) parts.push("Contoh dipilih");
    if (parts.length === 0) return "👉 Pilih satu item dari setiap kolom di atas!";
    return `Dipilih: <strong>${parts.join(" + ")}</strong>`;
  }

  selectMatchItem(type, id, containerId) {
    if (window.soundFX) window.soundFX.playClick();
    if (type === 'zat') this.g3SelectedZat = id;
    if (type === 'fungsi') this.g3SelectedFungsi = id;
    if (type === 'contoh') this.g3SelectedContoh = id;

    // Cek jika ketiga kolom sudah terpilih
    if (this.g3SelectedZat && this.g3SelectedFungsi && this.g3SelectedContoh) {
      if (this.g3SelectedZat === this.g3SelectedFungsi && this.g3SelectedFungsi === this.g3SelectedContoh) {
        // Cocok!
        this.g3Matched.push(this.g3SelectedZat);
        this.g3Score += 25;
        if (window.soundFX) window.soundFX.playCorrect();
      } else {
        // Tidak cocok
        if (window.soundFX) window.soundFX.playWrong();
      }
      this.g3SelectedZat = null;
      this.g3SelectedFungsi = null;
      this.g3SelectedContoh = null;
    }

    const container = document.getElementById(containerId);
    this.renderGame3(container);
  }

  // ==========================================
  // GAME 4 — DETEKTIF LABEL
  // ==========================================
  initGame4(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    this.g4Missions = GAMES_DATA.game4_detective.missions;
    this.g4Index = 0;
    this.g4Score = 0;
    this.renderGame4(container);
  }

  renderGame4(container) {
    if (this.g4Index >= this.g4Missions.length) {
      container.innerHTML = `
        <div class="game-end-card animate-scale-in text-center">
          <div class="trophy-big">🔍</div>
          <h2>Misi Detektif Label Selesai!</h2>
          <p>Total Skor Detektif: <strong>${this.g4Score} Poin</strong></p>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initGame4('${container.id}')">🔄 Main Lagi</button>
            <button class="btn btn-outline" onclick="window.eduGames.switchGameTab('game5')">🎮 Lanjut ke Game 5 ➔</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.g4Score, "Menyelesaikan Misi Detektif Label");
      return;
    }

    const m = this.g4Missions[this.g4Index];

    container.innerHTML = `
      <div class="detective-game-wrap">
        <div class="game-top-bar">
          <div>Misi: <strong>${this.g4Index + 1} / ${this.g4Missions.length}</strong></div>
          <div>Skor: <strong class="text-accent">${this.g4Score}</strong></div>
        </div>

        <div class="mission-brief-card animate-scale-in">
          <span class="mb-icon">🕵️</span>
          <h3>Cari Target: <em>"${m.targetRole}"</em></h3>
          <p>${m.targetHint}</p>
        </div>

        <div class="suspect-grid" id="suspectGrid">
          ${m.options.map(opt => `
            <button class="btn-suspect" onclick="window.eduGames.checkDetective('${opt}', '${container.id}')">
              🔍 ${opt}
            </button>
          `).join('')}
        </div>

        <div id="g4Feedback" class="g4-feedback-bar hidden"></div>
      </div>
    `;
  }

  checkDetective(chosen, containerId) {
    const m = this.g4Missions[this.g4Index];
    const fb = document.getElementById("g4Feedback");
    const grid = document.getElementById("suspectGrid");
    if (!grid) return;
    grid.querySelectorAll("button").forEach(b => b.disabled = true);

    if (chosen === m.correctAnswer) {
      this.g4Score += 20;
      if (window.soundFX) window.soundFX.playCorrect();
      if (fb) {
        fb.className = "g4-feedback-bar alert-success animate-fade-in";
        fb.innerHTML = `✅ <strong>Target Teridentifikasi!</strong> ${chosen} adalah ${m.targetRole}. (+20 Poin)`;
        fb.classList.remove("hidden");
      }
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      if (fb) {
        fb.className = "g4-feedback-bar alert-danger animate-fade-in";
        fb.innerHTML = `❌ <strong>Bukan sasaran tepat.</strong> Target yang benar adalah ${m.correctAnswer}.`;
        fb.classList.remove("hidden");
      }
    }

    setTimeout(() => {
      this.g4Index++;
      const container = document.getElementById(containerId);
      this.renderGame4(container);
    }, 1200);
  }

  // ==========================================
  // GAME 5 — MISI HIDUP SEHAT (Decision Making)
  // ==========================================
  initGame5(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    this.g5Scenarios = GAMES_DATA.game5_healthy_mission.scenarios;
    this.g5Index = 0;
    this.g5HealthScore = 100;
    this.renderGame5(container);
  }

  renderGame5(container) {
    if (this.g5Index >= this.g5Scenarios.length) {
      container.innerHTML = `
        <div class="game-end-card animate-scale-in text-center">
          <div class="trophy-big">🌱</div>
          <h2>Misi Hidup Sehat Selesai!</h2>
          <p>Kesehatan & Ketahanan Mental: <strong>${this.g5HealthScore} %</strong></p>
          <div class="conclusion-box">
            ${this.g5HealthScore >= 90 ? '🌟 <strong>Karakter Teladan!</strong> Kamu memiliki ketahanan diri yang sangat tangguh menghadapi pengaruh negatif sebaya.' :
              '💡 <strong>Bagus!</strong> Tingkatkan terus komunikasi asertif dan prinsip sehat dalam kehidupan sehari-hari.'}
          </div>
          <div class="btn-group-center">
            <button class="btn btn-primary" onclick="window.eduGames.initGame5('${container.id}')">🔄 Ulangi Petualangan</button>
            <button class="btn btn-outline" onclick="window.app.navigate('kuis')">📝 Uji Pemahaman di Kuis ➔</button>
          </div>
        </div>
      `;
      if (window.soundFX) window.soundFX.playVictory();
      if (window.app) window.app.addXP(this.g5HealthScore, "Menyelesaikan Misi Keputusan Hidup Sehat");
      return;
    }

    const sc = this.g5Scenarios[this.g5Index];

    container.innerHTML = `
      <div class="health-mission-wrap">
        <div class="game-top-bar">
          <div>Skenario: <strong>${this.g5Index + 1} / ${this.g5Scenarios.length}</strong></div>
          <div>Indeks Sehat: <strong class="text-accent">${this.g5HealthScore} %</strong></div>
        </div>

        <div class="scenario-card animate-scale-in">
          <div class="sc-badge">Skenario Kehidupan Nyata</div>
          <p class="sc-text">${sc.scene}</p>
          <h4 class="sc-prompt">❓ ${sc.question}</h4>

          <div class="sc-choices-list" id="scChoicesList">
            ${sc.choices.map((c, cIdx) => `
              <button class="btn-choice-sc" onclick="window.eduGames.chooseHealthOption(${cIdx}, '${container.id}')">
                ${c.text}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="g5Feedback" class="g5-feedback-bar hidden"></div>
      </div>
    `;
  }

  chooseHealthOption(cIdx, containerId) {
    const sc = this.g5Scenarios[this.g5Index];
    const choice = sc.choices[cIdx];
    const fb = document.getElementById("g5Feedback");
    const list = document.getElementById("scChoicesList");
    if (!list) return;

    list.querySelectorAll("button").forEach(b => b.disabled = true);

    this.g5HealthScore = Math.min(100, Math.max(0, this.g5HealthScore + choice.scoreDelta));

    if (choice.scoreDelta > 0) {
      if (window.soundFX) window.soundFX.playCorrect();
      if (fb) {
        fb.className = "g5-feedback-bar alert-success animate-fade-in";
        fb.innerHTML = `✅ <strong>PILIHAN BIJAK:</strong> ${choice.feedback}`;
        fb.classList.remove("hidden");
      }
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      if (fb) {
        fb.className = "g5-feedback-bar alert-danger animate-fade-in";
        fb.innerHTML = `⚠️ <strong>PILIHAN BERISIKO:</strong> ${choice.feedback}`;
        fb.classList.remove("hidden");
      }
    }

    setTimeout(() => {
      this.g5Index++;
      const container = document.getElementById(containerId);
      this.renderGame5(container);
    }, 1800);
  }

  switchGameTab(gameId) {
    this.activeGame = gameId;
    const tabBtns = document.querySelectorAll(".game-subnav-btn");
    tabBtns.forEach(b => {
      if (b.getAttribute("data-game") === gameId) b.classList.add("active");
      else b.classList.remove("active");
    });

    const gContainer = document.getElementById("gameViewContainer");
    if (!gContainer) return;

    if (gameId === "game1") this.initGame1("gameViewContainer");
    else if (gameId === "game2") this.initGame2("gameViewContainer");
    else if (gameId === "game3") this.initGame3("gameViewContainer");
    else if (gameId === "game4") this.initGame4("gameViewContainer");
    else if (gameId === "game5") this.initGame5("gameViewContainer");
  }
}

window.eduGames = new EduGames();
