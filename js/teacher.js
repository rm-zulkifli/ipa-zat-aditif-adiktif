/**
 * MODE GURU / ADMIN — DASHBOARD PENGAWASAN, PENGATURAN & ANALITIK KELAS
 * IPA SMP/MTs KELAS IX FASE D
 */

class TeacherMode {
  constructor() {
    this.isAuthenticated = false;
    this.defaultUser = "admin";
    this.defaultPin = "guru123";
    this.config = {
      quizQuestionCount: 20,
      quizTimerSec: 30,
      difficulty: "semua",
      allowReview: true,
      teacherPhone: "", // Nomor WA Guru untuk menerima laporan siswa
      teacherName: "Guru IPA SMP",
      adminUser: "admin",
      adminPin: "guru123"
    };
    this.loadConfig();
  }

  loadConfig() {
    try {
      const saved = localStorage.getItem("mpi_teacher_cfg");
      if (saved) {
        this.config = { ...this.config, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn(e);
    }
  }

  saveConfig() {
    try {
      localStorage.setItem("mpi_teacher_cfg", JSON.stringify(this.config));
    } catch (e) {
      console.warn(e);
    }
  }

  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Sinkronisasi status autentikasi dengan role aktif aplikasi
    if (window.app) {
      this.isAuthenticated = (window.app.userData.role === "guru");
    }

    if (!this.isAuthenticated) {
      this.renderLoginScreen(container);
    } else {
      this.renderDashboard(container);
    }
  }

  renderLoginScreen(container) {
    container.innerHTML = `
      <div class="teacher-login-card animate-scale-in">
        <div class="tl-icon">👨‍🏫</div>
        <h2>Portal Khusus Guru / Admin IPA</h2>
        <p>Akses kontrol konfigurasi kuis, pengaturan nomor WA guru, dan analitik nilai siswa.</p>

        <div class="form-group-login">
          <label for="adminUsernameInput">Username Guru / Admin:</label>
          <input type="text" id="adminUsernameInput" class="form-input" value="${this.config.adminUser || 'admin'}" placeholder="Username..." />
        </div>

        <div class="form-group-login">
          <label for="teacherPinInput">Kata Sandi / PIN Admin:</label>
          <input type="password" id="teacherPinInput" class="form-input" placeholder="Masukkan Kata Sandi..." autofocus />
          <small class="text-muted">Gunakan Username & Sandi yang telah diatur (Default awal: <code>admin</code> / <code>guru123</code>)</small>
        </div>

        <div class="btn-group-center">
          <button class="btn btn-primary btn-lg" onclick="window.teacherMode.handleLogin('${container.id}')">
            🔑 Masuk Akun Guru
          </button>
          <button class="btn btn-outline" onclick="window.app.navigate('beranda')">
            ← Kembali ke Beranda
          </button>
        </div>
        <div id="loginErrorMsg" class="alert-danger hidden mt-2"></div>
      </div>
    `;

    const pinInput = document.getElementById("teacherPinInput");
    if (pinInput) {
      pinInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") this.handleLogin(container.id);
      });
    }
  }

  handleLogin(containerId) {
    const userInput = document.getElementById("adminUsernameInput");
    const pinInput = document.getElementById("teacherPinInput");
    const err = document.getElementById("loginErrorMsg");
    if (!pinInput) return;

    const u = userInput ? userInput.value.trim().toLowerCase() : "";
    const p = pinInput.value.trim();

    const expectedUser = (this.config.adminUser || "admin").trim().toLowerCase();
    const expectedPin = (this.config.adminPin || "guru123").trim();

    const validUser = (u === expectedUser);
    const validPin = (p === expectedPin);

    if (validUser && validPin) {
      this.isAuthenticated = true;
      if (window.soundFX) window.soundFX.playCorrect();
      if (window.app) {
        window.app.setRoleAsGuru(this.config.teacherName);
      }
      this.init(containerId);
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      if (err) {
        err.innerText = "❌ Username atau Kata Sandi Admin salah!";
        err.classList.remove("hidden");
      }
    }
  }

  logout(containerId) {
    if (window.app) {
      window.app.logoutAdmin(true);
    } else {
      this.isAuthenticated = false;
      this.init(containerId || "teacherContainer");
    }
  }

  renderDashboard(container) {
    const studentData = (window.app && window.app.userData) ? window.app.userData : {
      name: "Siswa SMP",
      classRoom: "IX-A",
      xp: 0,
      quizHistory: []
    };

    // Analytics
    const history = studentData.quizHistory || [];
    const totalQuizTaken = history.length;
    let avgScore = 0;
    let highestScore = 0;

    if (totalQuizTaken > 0) {
      const sum = history.reduce((acc, h) => acc + h.score, 0);
      avgScore = Math.round(sum / totalQuizTaken);
      highestScore = Math.max(...history.map(h => h.score));
    }

    container.innerHTML = `
      <div class="teacher-dashboard-wrap">
        <!-- Top Toolbar -->
        <div class="td-header">
          <div>
            <div class="tag-tool" style="background:#e0f2fe; color:#0369a1; font-weight:700; margin-bottom:0.3rem;">
              🛡️ AKUN ADMIN GURU AKTIF: ${this.config.teacherName}
            </div>
            <h2>👨‍🏫 Panel Kendali Pembelajaran IPA</h2>
            <p>Pengaturan Kuis, Integrasi Nilai WhatsApp, & Analitik Siswa</p>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-sm btn-outline" onclick="window.app.openAuthModal()">🔄 Ganti Akun / Masuk Siswa</button>
            <button class="btn btn-sm btn-danger" onclick="window.teacherMode.logout('${container.id}')">🔒 Keluar Admin</button>
          </div>
        </div>

        <!-- Metric Stat Cards -->
        <div class="teacher-stat-grid">
          <div class="tstat-card">
            <span class="ts-icon">👥</span>
            <div class="ts-info">
              <span class="ts-label">Siswa Terakhir</span>
              <strong class="ts-val">${studentData.name} (${studentData.classRoom || 'Kelas IX'})</strong>
            </div>
          </div>
          <div class="tstat-card">
            <span class="ts-icon">📝</span>
            <div class="ts-info">
              <span class="ts-label">Total Kuis Dikerjakan</span>
              <strong class="ts-val">${totalQuizTaken} Kali</strong>
            </div>
          </div>
          <div class="tstat-card">
            <span class="ts-icon">📊</span>
            <div class="ts-info">
              <span class="ts-label">Rata-Rata Nilai</span>
              <strong class="ts-val ${avgScore >= 80 ? 'text-success' : avgScore >= 70 ? 'text-warn' : 'text-danger'}">${avgScore} / 100</strong>
            </div>
          </div>
          <div class="tstat-card">
            <span class="ts-icon">🏆</span>
            <div class="ts-info">
              <span class="ts-label">Skor Tertinggi</span>
              <strong class="ts-val text-accent">${highestScore} Poin</strong>
            </div>
          </div>
        </div>

        <!-- 2 Column Section: Settings & History -->
        <div class="teacher-columns">
          <!-- Kolom 1: Konfigurasi Kuis & Integrasi WhatsApp -->
          <div class="td-card">
            <h3>⚙️ Konfigurasi Kuis & Pengumpulan Nilai Daring</h3>
            <p class="card-subtitle">Atur nomor WhatsApp Anda agar siswa di rumah dapat mengirimkan bukti nilai secara instan.</p>

            <div class="form-group-td mt-2">
              <label><strong>Nama Bapak/Ibu Guru:</strong></label>
              <input type="text" id="cfgTeacherName" class="form-input" value="${this.config.teacherName}" onchange="window.teacherMode.updateConfig()" placeholder="Nama Guru..." />
            </div>

            <div class="form-group-td mt-2">
              <label><strong>Nomor WhatsApp Guru untuk Menerima Nilai Siswa:</strong></label>
              <input type="text" id="cfgTeacherPhone" class="form-input" value="${this.config.teacherPhone}" onchange="window.teacherMode.updateConfig()" placeholder="Contoh: 6281234567890 (awali 62)" />
              <small class="text-muted">💡 Jika diisi, tombol <em>'📲 Kirim Hasil ke WhatsApp Guru'</em> di rapor siswa akan otomatis mengirim pesan langsung ke nomor ini.</small>
            </div>

            <div class="form-group-td mt-2">
              <label>Jumlah Butir Soal Kuis Siswa:</label>
              <select id="cfgQuizCount" class="form-select" onchange="window.teacherMode.updateConfig()">
                <option value="10" ${this.config.quizQuestionCount === 10 ? 'selected' : ''}>10 Soal (Latihan Cepat)</option>
                <option value="15" ${this.config.quizQuestionCount === 15 ? 'selected' : ''}>15 Soal (Kuis Harian)</option>
                <option value="20" ${this.config.quizQuestionCount === 20 ? 'selected' : ''}>20 Soal (Penilaian Harian)</option>
                <option value="30" ${this.config.quizQuestionCount === 30 ? 'selected' : ''}>30 Soal (Penilaian Komprehensif)</option>
                <option value="50" ${this.config.quizQuestionCount === 50 ? 'selected' : ''}>50 Soal (Bank Soal Penuh)</option>
              </select>
            </div>

            <div class="form-group-td mt-2">
              <label>Timer per Soal:</label>
              <select id="cfgQuizTimer" class="form-select" onchange="window.teacherMode.updateConfig()">
                <option value="0" ${this.config.quizTimerSec === 0 ? 'selected' : ''}>Tanpa Batas Waktu</option>
                <option value="20" ${this.config.quizTimerSec === 20 ? 'selected' : ''}>20 Detik per Soal</option>
                <option value="30" ${this.config.quizTimerSec === 30 ? 'selected' : ''}>30 Detik per Soal</option>
                <option value="45" ${this.config.quizTimerSec === 45 ? 'selected' : ''}>45 Detik per Soal</option>
                <option value="60" ${this.config.quizTimerSec === 60 ? 'selected' : ''}>60 Detik per Soal</option>
              </select>
            </div>

            <div class="form-group-td mt-2">
              <label>Tingkat Kesulitan Soal:</label>
              <select id="cfgDifficulty" class="form-select" onchange="window.teacherMode.updateConfig()">
                <option value="semua" ${this.config.difficulty === 'semua' ? 'selected' : ''}>Semua Tingkat (C1-C6 HOTS)</option>
                <option value="dasar" ${this.config.difficulty === 'dasar' ? 'selected' : ''}>Pemahaman Dasar (C1-C2)</option>
                <option value="hots" ${this.config.difficulty === 'hots' ? 'selected' : ''}>Dominan HOTS & Studi Kasus</option>
              </select>
            </div>

            <div class="alert-success mt-3">
              💾 Pengaturan tersimpan otomatis di perangkat ini.
            </div>

            <hr style="margin: 1.5rem 0;">
            <h4>🔐 Ganti Username & Kata Sandi / PIN Guru</h4>
            <p class="text-muted"><small>Ubah kata sandi login agar siswa tidak dapat membuka dashboard admin guru ini.</small></p>

            <div class="form-group-td mt-2">
              <label>Username Guru Baru:</label>
              <input type="text" id="cfgNewAdminUser" class="form-input" value="${this.config.adminUser}" placeholder="Username baru..." />
            </div>

            <div class="form-row-2 mt-2">
              <div class="form-group-td">
                <label>PIN / Sandi Baru:</label>
                <input type="password" id="cfgNewAdminPin" class="form-input" placeholder="Password baru..." />
              </div>
              <div class="form-group-td">
                <label>Konfirmasi Sandi Baru:</label>
                <input type="password" id="cfgConfirmAdminPin" class="form-input" placeholder="Ulangi password..." />
              </div>
            </div>

            <div class="mt-2">
              <button class="btn btn-sm btn-primary" onclick="window.teacherMode.saveNewCredentials()">
                💾 Simpan Kata Sandi Baru
              </button>
            </div>
            <div id="pwdChangeFeedback" class="hidden mt-2"></div>

            <hr style="margin: 1.5rem 0;">
            <h4>🗑️ Reset Data Pembelajaran:</h4>
            <p class="text-muted">Gunakan tombol ini sebelum pergantian jam kelas untuk mengosongkan riwayat skor siswa lama.</p>
            <button class="btn btn-outline btn-danger" onclick="window.teacherMode.confirmResetData()">
              ⚠️ Reset Semua Riwayat Belajar & Nilai
            </button>
          </div>

          <!-- Kolom 2: Analitik & Rekap Riwayat Kuis -->
          <div class="td-card">
            <h3>📈 Rekap Hasil Kuis & Materi Sulit</h3>
            <div class="diff-analysis-box">
              <h4>🔍 Materi yang Paling Sering Perlu Perhatian Siswa:</h4>
              <ul class="diff-list">
                <li>
                  <strong>Zat Aditif Sintetis vs Pewarna Tekstil:</strong>
                  <div class="progress-bar-diff"><span style="width: 65%;"></span></div>
                  <small>65% siswa kerap tertukar antara pewarna sintetis resmi (Tartrazin) dengan pewarna terlarang (Rhodamin B).</small>
                </li>
                <li>
                  <strong>Kategori Narkotika vs Psikotropika:</strong>
                  <div class="progress-bar-diff"><span style="width: 55%;"></span></div>
                  <small>55% siswa memerlukan pendalaman tentang perbedaan efek depresan morfin vs stimulan sabu.</small>
                </li>
                <li>
                  <strong>Deteksi Boraks dengan Kunyit:</strong>
                  <div class="progress-bar-diff"><span style="width: 40%;"></span></div>
                  <small>40% siswa perlu penguatan pada perubahan warna kurkumin menjadi merah rososianin.</small>
                </li>
              </ul>
            </div>

            <h4 class="mt-4">📜 Riwayat Kuis Siswa di Perangkat Ini:</h4>
            ${history.length > 0 ? `
              <div class="table-responsive">
                <table class="table-history">
                  <thead>
                    <tr>
                      <th>Waktu</th>
                      <th>Siswa</th>
                      <th>Kelas</th>
                      <th>Soal</th>
                      <th>Benar</th>
                      <th>Nilai</th>
                      <th>Kategori</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${history.slice(-5).reverse().map(h => `
                      <tr>
                        <td>${h.date || '-'}</td>
                        <td><strong>${h.studentName || studentData.name}</strong></td>
                        <td>${h.classRoom || studentData.classRoom || '-'}</td>
                        <td>${h.total}</td>
                        <td>${h.correct}</td>
                        <td><strong>${h.score}</strong></td>
                        <td><span class="badge-grade ${h.score >= 80 ? 'bg-green' : h.score >= 70 ? 'bg-yellow' : 'bg-red'}">${h.grade}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : `
              <p class="text-muted">Belum ada riwayat pengerjaan kuis tersimpan.</p>
            `}
          </div>
        </div>
      </div>
    `;
  }

  updateConfig() {
    const qCount = document.getElementById("cfgQuizCount");
    const timerSec = document.getElementById("cfgQuizTimer");
    const diff = document.getElementById("cfgDifficulty");
    const phone = document.getElementById("cfgTeacherPhone");
    const tName = document.getElementById("cfgTeacherName");

    if (qCount) this.config.quizQuestionCount = parseInt(qCount.value);
    if (timerSec) this.config.quizTimerSec = parseInt(timerSec.value);
    if (diff) this.config.difficulty = diff.value;
    if (phone) this.config.teacherPhone = phone.value.trim().replace(/[^0-9]/g, '');
    if (tName && tName.value.trim()) this.config.teacherName = tName.value.trim();

    this.saveConfig();
    if (window.soundFX) window.soundFX.playClick();
  }

  saveNewCredentials() {
    const userEl = document.getElementById("cfgNewAdminUser");
    const pinEl = document.getElementById("cfgNewAdminPin");
    const confirmEl = document.getElementById("cfgConfirmAdminPin");
    const fb = document.getElementById("pwdChangeFeedback");

    const newUser = userEl ? userEl.value.trim() : "";
    const newPin = pinEl ? pinEl.value.trim() : "";
    const confirmPin = confirmEl ? confirmEl.value.trim() : "";

    if (!newUser) {
      alert("Username tidak boleh kosong!");
      return;
    }
    if (!newPin) {
      alert("Kata sandi / PIN baru tidak boleh kosong!");
      return;
    }
    if (newPin.length < 4) {
      alert("Kata sandi / PIN minimal 4 karakter demi keamanan!");
      return;
    }
    if (newPin !== confirmPin) {
      alert("Konfirmasi kata sandi tidak cocok! Silakan periksa kembali.");
      return;
    }

    this.config.adminUser = newUser;
    this.config.adminPin = newPin;
    this.saveConfig();

    if (window.soundFX) window.soundFX.playCorrect();
    if (fb) {
      fb.className = "alert-success mt-2 animate-fade-in";
      fb.innerHTML = `✅ <strong>Kata Sandi Berhasil Diperbarui!</strong><br>Username: <code>${newUser}</code> dan kata sandi baru telah tersimpan aman.`;
      fb.classList.remove("hidden");
    }
    if (pinEl) pinEl.value = "";
    if (confirmEl) confirmEl.value = "";
    if (window.app) window.app.showToast("🔐 Kata sandi guru berhasil diubah!");
  }

  confirmResetData() {
    const confirm1 = confirm("PERINGATAN GURU:\nApakah Anda yakin ingin MENGHAPUS SEMUA DATA nilai kuis, skor, XP, dan pencapaian siswa di perangkat ini?");
    if (confirm1) {
      if (window.app) {
        window.app.resetAllUserData();
      }
      alert("✅ Data berhasil direset untuk kelas berikutnya!");
      this.init("teacherContainer");
    }
  }
}

window.teacherMode = new TeacherMode();
