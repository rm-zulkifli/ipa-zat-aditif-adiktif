/**
 * SCIENCE BATTLE — MODE TANDING 2 TIM (IFP & Smartboard Ready)
 * Tim A (Biru) vs Tim B (Merah)
 */

class ScienceBattle {
  constructor() {
    this.teamA = { name: "TIM A (BIRU)", score: 0, correctCount: 0, streak: 0 };
    this.teamB = { name: "TIM B (MERAH)", score: 0, correctCount: 0, streak: 0 };
    this.currentTurn = "teamA"; // 'teamA' | 'teamB'
    this.questionIndex = 0;
    this.totalQuestions = 15;
    this.questions = [];
    this.timer = null;
    this.timeLeft = 20;
    this.timerDuration = 20;
    this.isAnswered = false;
    this.container = null;
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.showSetupScreen();
  }

  showSetupScreen() {
    this.container.innerHTML = `
      <div class="battle-setup-card animate-scale-in">
        <div class="battle-hero-badge">⚔️ SCIENCE BATTLE</div>
        <h2>Arena Cerdas Cermat 2 Tim</h2>
        <p>Dirancang khusus untuk layar sentuh IFP / Smartboard di depan kelas!</p>

        <div class="battle-team-inputs">
          <div class="team-input-box team-a-box">
            <span class="tib-icon">🔵</span>
            <label>Nama Tim 1:</label>
            <input type="text" id="battleTeamAName" value="${this.teamA.name}" class="form-input" />
          </div>
          <div class="vs-badge">VS</div>
          <div class="team-input-box team-b-box">
            <span class="tib-icon">🔴</span>
            <label>Nama Tim 2:</label>
            <input type="text" id="battleTeamBName" value="${this.teamB.name}" class="form-input" />
          </div>
        </div>

        <div class="battle-options-row">
          <div class="opt-field">
            <label>Jumlah Pertanyaan:</label>
            <select id="battleNumQ" class="form-select">
              <option value="10">10 Pertanyaan (Kilat)</option>
              <option value="16" selected>16 Pertanyaan (Standar Kelas)</option>
              <option value="24">24 Pertanyaan (Turnamen Seru)</option>
            </select>
          </div>
          <div class="opt-field">
            <label>Durasi Timer per Soal:</label>
            <select id="battleTimerSec" class="form-select">
              <option value="15">15 Detik (Tantangan Cepat)</option>
              <option value="20" selected>20 Detik (Ideal)</option>
              <option value="30">30 Detik (Santai)</option>
              <option value="0">Tanpa Timer</option>
            </select>
          </div>
        </div>

        <div class="btn-group-center">
          <button class="btn btn-lg btn-accent" onclick="window.scienceBattle.startBattle()">
            🚀 MULAI PERTANDINGAN!
          </button>
        </div>
      </div>
    `;
  }

  startBattle() {
    const inputA = document.getElementById("battleTeamAName");
    const inputB = document.getElementById("battleTeamBName");
    const numQ = document.getElementById("battleNumQ");
    const timerSec = document.getElementById("battleTimerSec");

    if (inputA && inputA.value.trim()) this.teamA.name = inputA.value.trim();
    if (inputB && inputB.value.trim()) this.teamB.name = inputB.value.trim();
    this.totalQuestions = numQ ? parseInt(numQ.value) : 16;
    this.timerDuration = timerSec ? parseInt(timerSec.value) : 20;

    // Reset stats
    this.teamA.score = 0;
    this.teamA.correctCount = 0;
    this.teamA.streak = 0;
    this.teamB.score = 0;
    this.teamB.correctCount = 0;
    this.teamB.streak = 0;
    this.currentTurn = "teamA";
    this.questionIndex = 0;

    // Ambil soal secara acak dari bank soal
    const pool = [...QUESTION_BANK].sort(() => Math.random() - 0.5);
    this.questions = pool.slice(0, this.totalQuestions);

    if (window.soundFX) window.soundFX.playLevelUp();
    this.renderBattleArena();
  }

  renderBattleArena() {
    if (this.questionIndex >= this.totalQuestions) {
      this.showBattleResult();
      return;
    }

    const q = this.questions[this.questionIndex];
    this.isAnswered = false;
    const isTeamA = (this.currentTurn === "teamA");
    const activeTeamName = isTeamA ? this.teamA.name : this.teamB.name;
    const activeTeamColor = isTeamA ? "var(--primary)" : "var(--coral)";

    this.container.innerHTML = `
      <div class="battle-arena">
        <!-- Big Scoreboard -->
        <div class="scoreboard-big">
          <div class="score-card-team team-a ${isTeamA ? 'turn-active' : ''}">
            <div class="sct-header">
              <span>🔵</span>
              <strong>${this.teamA.name}</strong>
              ${isTeamA ? '<span class="turn-tag animate-pulse">GILIRAN MAIN!</span>' : ''}
            </div>
            <div class="sct-score">${this.teamA.score}</div>
            <div class="sct-meta">Benar: ${this.teamA.correctCount} | Streak: 🔥 ${this.teamA.streak}x</div>
          </div>

          <div class="scoreboard-center">
            <div class="battle-round-badge">Ronde ${this.questionIndex + 1} / ${this.totalQuestions}</div>
            ${this.timerDuration > 0 ? `
              <div class="battle-timer-ring" id="battleTimerBox">
                <span class="bt-num" id="battleTimeNum">${this.timerDuration}</span>
                <small>detik</small>
              </div>
            ` : '<div class="timer-free">Santai</div>'}
          </div>

          <div class="score-card-team team-b ${!isTeamA ? 'turn-active' : ''}">
            <div class="sct-header">
              <span>🔴</span>
              <strong>${this.teamB.name}</strong>
              ${!isTeamA ? '<span class="turn-tag animate-pulse">GILIRAN MAIN!</span>' : ''}
            </div>
            <div class="sct-score">${this.teamB.score}</div>
            <div class="sct-meta">Benar: ${this.teamB.correctCount} | Streak: 🔥 ${this.teamB.streak}x</div>
          </div>
        </div>

        <!-- Question Display Card -->
        <div class="battle-question-card animate-scale-in">
          <div class="bqc-meta">
            <span class="q-turn-announcement" style="color: ${activeTeamColor};">
              🎯 Pertanyaan Khusus untuk: <strong>${activeTeamName}</strong>
            </span>
            <span class="q-cat-tag">${q.category === 'aditif' ? '🥗 Zat Aditif' : '🧠 Zat Adiktif'}</span>
          </div>

          <h3 class="bqc-text">${q.question}</h3>

          <div class="battle-answers-grid" id="battleAnswersGrid">
            ${q.options.map((opt, oIdx) => `
              <button class="btn-battle-answer" onclick="window.scienceBattle.handleAnswer(${oIdx})">
                <span class="b-opt-letter">${String.fromCharCode(65 + oIdx)}</span>
                <span class="b-opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div id="battleFeedback" class="battle-feedback-banner hidden"></div>
        </div>
      </div>
    `;

    this.startQuestionTimer();
  }

  startQuestionTimer() {
    clearInterval(this.timer);
    if (this.timerDuration <= 0) return;

    this.timeLeft = this.timerDuration;
    const timeDisplay = document.getElementById("battleTimeNum");

    this.timer = setInterval(() => {
      this.timeLeft--;
      if (timeDisplay) timeDisplay.innerText = this.timeLeft;
      if (this.timeLeft <= 5 && this.timeLeft > 0) {
        if (window.soundFX) window.soundFX.playTick();
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeOut();
      }
    }, 1000);
  }

  handleAnswer(selectedOptionIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    clearInterval(this.timer);

    const q = this.questions[this.questionIndex];
    const grid = document.getElementById("battleAnswersGrid");
    const fb = document.getElementById("battleFeedback");
    const isTeamA = (this.currentTurn === "teamA");
    const currentTeam = isTeamA ? this.teamA : this.teamB;

    if (grid) {
      grid.querySelectorAll("button").forEach(b => b.disabled = true);
    }

    // Periksa jawaban (single/boolean vs complex)
    let isCorrect = false;
    if (q.type === 'complex') {
      isCorrect = q.multiAnswers.includes(selectedOptionIndex);
    } else {
      isCorrect = (selectedOptionIndex === q.answer);
    }

    if (isCorrect) {
      currentTeam.streak++;
      currentTeam.correctCount++;
      const bonusStreak = (currentTeam.streak > 1) ? currentTeam.streak * 5 : 0;
      const pointsEarned = 10 + bonusStreak;
      currentTeam.score += pointsEarned;

      if (window.soundFX) window.soundFX.playCorrect();
      if (grid && grid.children[selectedOptionIndex]) {
        grid.children[selectedOptionIndex].classList.add("btn-correct");
      }

      if (fb) {
        fb.className = "battle-feedback-banner alert-success animate-fade-in";
        fb.innerHTML = `
          <div class="bfb-title">🎉 JAWABAN BENAR! (+${pointsEarned} Poin${bonusStreak > 0 ? ` termasuk bonus streak 🔥 ${currentTeam.streak}x` : ''})</div>
          <p>${q.explanation}</p>
          <button class="btn btn-sm btn-primary" onclick="window.scienceBattle.nextTurn()">Lanjut Giliran Berikutnya ➔</button>
        `;
        fb.classList.remove("hidden");
      }
    } else {
      currentTeam.streak = 0;
      if (window.soundFX) window.soundFX.playWrong();

      if (grid) {
        if (grid.children[selectedOptionIndex]) grid.children[selectedOptionIndex].classList.add("btn-wrong");
        const correctIdx = (q.type === 'complex') ? q.multiAnswers[0] : q.answer;
        if (grid.children[correctIdx]) grid.children[correctIdx].classList.add("btn-correct");
      }

      if (fb) {
        fb.className = "battle-feedback-banner alert-danger animate-fade-in";
        fb.innerHTML = `
          <div class="bfb-title">❌ JAWABAN SALAH! (Poin +0)</div>
          <p>${q.explanation}</p>
          <button class="btn btn-sm btn-outline" onclick="window.scienceBattle.nextTurn()">Lanjut Giliran Berikutnya ➔</button>
        `;
        fb.classList.remove("hidden");
      }
    }
  }

  handleTimeOut() {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const q = this.questions[this.questionIndex];
    const grid = document.getElementById("battleAnswersGrid");
    const fb = document.getElementById("battleFeedback");
    const isTeamA = (this.currentTurn === "teamA");
    const currentTeam = isTeamA ? this.teamA : this.teamB;

    currentTeam.streak = 0;
    if (window.soundFX) window.soundFX.playWrong();

    if (grid) {
      grid.querySelectorAll("button").forEach(b => b.disabled = true);
      const correctIdx = (q.type === 'complex') ? q.multiAnswers[0] : q.answer;
      if (grid.children[correctIdx]) grid.children[correctIdx].classList.add("btn-correct");
    }

    if (fb) {
      fb.className = "battle-feedback-banner alert-danger animate-fade-in";
      fb.innerHTML = `
        <div class="bfb-title">⏰ WAKTU HABIS!</div>
        <p>${q.explanation}</p>
        <button class="btn btn-sm btn-outline" onclick="window.scienceBattle.nextTurn()">Lanjut Giliran Berikutnya ➔</button>
      `;
      fb.classList.remove("hidden");
    }
  }

  nextTurn() {
    this.questionIndex++;
    // Ganti giliran tim
    this.currentTurn = (this.currentTurn === "teamA") ? "teamB" : "teamA";
    this.renderBattleArena();
  }

  showBattleResult() {
    clearInterval(this.timer);
    if (window.soundFX) window.soundFX.playVictory();

    let winnerText = "";
    let winnerIcon = "🏆";
    let winnerClass = "";

    if (this.teamA.score > this.teamB.score) {
      winnerText = `SELAMAT! PEMENANG ADALAH ${this.teamA.name}!`;
      winnerClass = "winner-team-a";
    } else if (this.teamB.score > this.teamA.score) {
      winnerText = `SELAMAT! PEMENANG ADALAH ${this.teamB.name}!`;
      winnerClass = "winner-team-b";
    } else {
      winnerText = "HASIL PERTANDINGAN SERI / SEIMBANG!";
      winnerIcon = "🤝";
      winnerClass = "winner-draw";
    }

    const teamAQCount = Math.ceil(this.totalQuestions / 2);
    const teamBQCount = Math.floor(this.totalQuestions / 2);
    const accA = Math.round((this.teamA.correctCount / Math.max(1, teamAQCount)) * 100);
    const accB = Math.round((this.teamB.correctCount / Math.max(1, teamBQCount)) * 100);

    this.container.innerHTML = `
      <div class="battle-result-card animate-scale-in ${winnerClass}">
        <div class="trophy-huge animate-bounce">${winnerIcon}</div>
        <h1 class="result-title">${winnerText}</h1>
        <p class="result-sub">Pertarungan Cerdas Cermat IPA yang sangat luar biasa!</p>

        <!-- Final Comparison Cards -->
        <div class="final-teams-grid">
          <div class="final-team-card ft-team-a">
            <span class="ft-badge">🔵 ${this.teamA.name}</span>
            <div class="ft-score">${this.teamA.score} Poin</div>
            <div class="ft-stats">
              <div>🎯 Jawaban Benar: <strong>${this.teamA.correctCount} / ${teamAQCount}</strong></div>
              <div>📈 Akurasi: <strong>${accA}%</strong></div>
            </div>
          </div>

          <div class="final-team-card ft-team-b">
            <span class="ft-badge">🔴 ${this.teamB.name}</span>
            <div class="ft-score">${this.teamB.score} Poin</div>
            <div class="ft-stats">
              <div>🎯 Jawaban Benar: <strong>${this.teamB.correctCount} / ${teamBQCount}</strong></div>
              <div>📈 Akurasi: <strong>${accB}%</strong></div>
            </div>
          </div>
        </div>

        <div class="btn-group-center mt-4">
          <button class="btn btn-lg btn-primary" onclick="window.scienceBattle.showSetupScreen()">
            ⚔️ Tanding Ulang (Rematch)
          </button>
          <button class="btn btn-lg btn-outline" onclick="window.app.navigate('beranda')">
            🏠 Kembali ke Beranda
          </button>
        </div>
      </div>
    `;

    if (window.app) {
      window.app.addXP(50, "Menyelesaikan Science Battle");
    }
  }
}

window.scienceBattle = new ScienceBattle();
