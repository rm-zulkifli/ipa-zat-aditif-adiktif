/**
 * APLIKASI UTAMA (APP COORDINATOR & GAMIFICATION ENGINE)
 * IPA SMP/MTs KELAS IX FASE D — "Zat Aditif & Zat Adiktif"
 * Mendukung Pemisahan Akun Siswa (Nama & Kelas) dan Akun Guru/Admin
 */

class App {
  constructor() {
    this.currentView = "beranda";
    this.userData = {
      role: "siswa", // 'siswa' | 'guru'
      name: "Siswa SMP",
      studentName: "",
      classRoom: "",
      studentClass: "",
      teacherName: "RM.Zulkifli",
      absen: "",
      isLoggedIn: false,
      school: "SMP/MTs Fase D",
      xp: 0,
      level: 1,
      completedSections: [],
      badges: [],
      quizHistory: []
    };
    this.activeBab = "bab1";
    this.activeSectionIdx = 0;
    this.quizState = {
      active: false,
      questions: [],
      currentIdx: 0,
      answers: {},
      score: 0,
      timer: null,
      timeLeft: 30
    };
    this.fontSizeLevel = 1; // 0: standard, 1: medium, 2: large
    this.highContrast = false;
    this.soundOn = true;

    this.initBadges();
    this.loadState();
  }

  initBadges() {
    this.badgeList = [
      { id: "first_step", title: "Langkah Pertama", icon: "🌱", desc: "Membuka dan membaca modul materi pertama", xpReq: 10 },
      { id: "aditif_master", title: "Pakar Zat Aditif", icon: "🥗", desc: "Menuntaskan seluruh materi BAB 1", xpReq: 50 },
      { id: "adiktif_aware", title: "Generasi Bebas Adiksi", icon: "🛡️", desc: "Menuntaskan seluruh materi BAB 2", xpReq: 100 },
      { id: "lab_scientist", title: "Saintis Muda", icon: "🧪", desc: "Menyelesaikan 3 eksperimen laboratorium virtual", xpReq: 150 },
      { id: "label_detective", title: "Detektif Cilik", icon: "🔍", desc: "Menemukan zat tersembunyi pada kemasan produk", xpReq: 200 },
      { id: "game_champion", title: "Juara Sortir & Tebak", icon: "🎮", desc: "Memainkan game edukasi dengan skor tinggi", xpReq: 250 },
      { id: "battle_gladiator", title: "Pejuang Battle", icon: "⚔️", desc: "Berpartisipasi dalam Science Battle 2 Tim", xpReq: 300 },
      { id: "quiz_ace", title: "Bintang Kuis IPA", icon: "⭐", desc: "Mendapatkan nilai >85 pada kuis evaluasi", xpReq: 400 },
      { id: "assertive_hero", title: "Ksatria Asertif", icon: "✋", desc: "Menyelesaikan misi studi kasus hidup sehat", xpReq: 450 },
      { id: "master_fase_d", title: "Legenda IPA Fase D", icon: "👑", desc: "Mencapai Level 5 dan menguasai seluruh kompetensi", xpReq: 600 }
    ];
  }

  loadState() {
    try {
      const saved = localStorage.getItem("mpi_ipa9_user");
      if (saved) {
        this.userData = { ...this.userData, ...JSON.parse(saved) };
        // Bersihkan default lama "IX-A" jika belum diisi manual oleh siswa
        if (this.userData.classRoom === "IX-A" && (!this.userData.isLoggedIn || this.userData.name === "Siswa SMP")) {
          this.userData.classRoom = "";
          this.userData.studentClass = "";
        }
        // Bersihkan default dummy "Guru IPA SMP"
        if (this.userData.name === "Guru IPA SMP") {
          this.userData.name = "Siswa SMP";
        }
        if (this.userData.teacherName === "Guru IPA SMP" || !this.userData.teacherName || this.userData.teacherName === "Admin Guru") {
          this.userData.teacherName = "RM.Zulkifli";
        }
        // Sinkronisasi nama akun guru dari konfigurasi guru yang tersimpan
        if (this.userData.role === "guru") {
          try {
            const savedCfg = localStorage.getItem("mpi_teacher_cfg");
            if (savedCfg) {
              const cfgObj = JSON.parse(savedCfg);
              if (cfgObj.teacherName && cfgObj.teacherName !== "Guru IPA SMP") {
                this.userData.teacherName = cfgObj.teacherName;
              }
            }
          } catch (e) {}
        }
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem("mpi_ipa9_user", JSON.stringify(this.userData));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  isUserLoggedIn() {
    return (this.userData.role === "guru" || Boolean(this.userData.isLoggedIn));
  }

  init() {
    this.updateUserUI();
    this.setupEventListeners();
    this.navigate("beranda");

    // Jika pengguna belum pernah mengisi identitas, buka modal gerbang masuk
    if (!this.isUserLoggedIn()) {
      setTimeout(() => {
        this.openAuthModal("siswa");
      }, 350);
    }
  }

  setupEventListeners() {
    // Top Bar Accessibility Buttons
    const btnSound = document.getElementById("btnToggleSound");
    if (btnSound) {
      btnSound.addEventListener("click", () => this.toggleSound());
    }

    const btnContrast = document.getElementById("btnToggleContrast");
    if (btnContrast) {
      btnContrast.addEventListener("click", () => this.toggleContrast());
    }

    const btnFontInc = document.getElementById("btnFontInc");
    if (btnFontInc) {
      btnFontInc.addEventListener("click", () => this.changeFontSize(1));
    }

    const btnFontDec = document.getElementById("btnFontDec");
    if (btnFontDec) {
      btnFontDec.addEventListener("click", () => this.changeFontSize(-1));
    }

    const btnFullscreen = document.getElementById("btnFullscreen");
    if (btnFullscreen) {
      btnFullscreen.addEventListener("click", () => this.toggleFullscreen());
    }

    // Keyboard support (Esc to close modals)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModals();
        this.closeAuthModal();
      }
    });
  }

  // ==========================================
  // AUTH & ROLE SYSTEM (SISWA VS GURU/ADMIN)
  // ==========================================
  openAuthModal(defaultTab = "siswa") {
    const modal = document.getElementById("authGatewayModal");
    if (!modal) return;

    modal.classList.remove("hidden");
    this.switchAuthTab(defaultTab);

    // Pre-fill inputs
    const nameInput = document.getElementById("siswaNameInput");
    const classInput = document.getElementById("siswaClassInput");
    const absenInput = document.getElementById("siswaAbsenInput");

    if (nameInput && this.userData.name && this.userData.name !== "Siswa SMP" && this.userData.role === "siswa") {
      nameInput.value = this.userData.name;
    }
    if (classInput && this.userData.classRoom && this.userData.role === "siswa") {
      classInput.value = this.userData.classRoom;
    }
    if (absenInput && this.userData.absen && this.userData.role === "siswa") {
      absenInput.value = this.userData.absen;
    }

    const adminUserInput = document.getElementById("modalAdminUser");
    if (adminUserInput && window.teacherMode) {
      window.teacherMode.loadConfig();
      if (window.teacherMode.config.adminUser) {
        adminUserInput.value = window.teacherMode.config.adminUser;
      }
    }

    // Tampilan dinamis tab Guru bila sudah login
    const isGuru = (this.userData.role === "guru");
    const guruLoggedInBox = document.getElementById("authGuruLoggedInBox");
    const guruLoginForm = document.getElementById("authGuruLoginForm");
    const guruLoggedName = document.getElementById("authGuruLoggedName");
    if (guruLoggedInBox && guruLoginForm) {
      if (isGuru) {
        guruLoggedInBox.classList.remove("hidden");
        guruLoginForm.classList.add("hidden");
        if (guruLoggedName) {
          const tName = (window.teacherMode && window.teacherMode.config && window.teacherMode.config.teacherName && window.teacherMode.config.teacherName !== "Guru IPA SMP")
            ? window.teacherMode.config.teacherName
            : (this.userData.teacherName && this.userData.teacherName !== "Guru IPA SMP" ? this.userData.teacherName : "Admin Guru");
          guruLoggedName.innerText = tName;
        }
      } else {
        guruLoggedInBox.classList.add("hidden");
        guruLoginForm.classList.remove("hidden");
      }
    }
  }

  closeAuthModal() {
    const modal = document.getElementById("authGatewayModal");
    if (modal) modal.classList.add("hidden");
    if (!this.isUserLoggedIn()) {
      this.showToast("ℹ️ Semua menu terkunci. Masuk dengan Nama & Kelas untuk membuka materi.");
    }
  }

  switchAuthTab(tab) {
    const tabSiswa = document.getElementById("tabRoleSiswa");
    const tabGuru = document.getElementById("tabRoleGuru");
    const formSiswa = document.getElementById("formAuthSiswa");
    const formGuru = document.getElementById("formAuthGuru");

    if (tab === "siswa") {
      if (tabSiswa) tabSiswa.classList.add("active");
      if (tabGuru) tabGuru.classList.remove("active");
      if (formSiswa) formSiswa.classList.remove("hidden");
      if (formGuru) formGuru.classList.add("hidden");
    } else {
      if (tabSiswa) tabSiswa.classList.remove("active");
      if (tabGuru) tabGuru.classList.add("active");
      if (formSiswa) formSiswa.classList.add("hidden");
      if (formGuru) formGuru.classList.remove("hidden");
    }
  }

  submitSiswaLogin() {
    const nameInput = document.getElementById("siswaNameInput");
    const classInput = document.getElementById("siswaClassInput");
    const absenInput = document.getElementById("siswaAbsenInput");

    const name = nameInput ? nameInput.value.trim() : "";
    const classRoom = (classInput && classInput.value.trim()) ? classInput.value.trim() : "";
    const absen = absenInput ? absenInput.value.trim() : "";

    if (!name) {
      alert("Silakan masukkan Nama Lengkap terlebih dahulu!");
      if (nameInput) nameInput.focus();
      return;
    }

    if (!classRoom) {
      alert("Silakan masukkan Kelasmu (misal: 9A atau 9B) terlebih dahulu!");
      if (classInput) classInput.focus();
      return;
    }

    this.userData.role = "siswa";
    this.userData.name = name;
    this.userData.studentName = name;
    this.userData.classRoom = classRoom;
    this.userData.studentClass = classRoom;
    this.userData.absen = absen;
    this.userData.isLoggedIn = true;

    if (window.teacherMode) {
      window.teacherMode.isAuthenticated = false;
    }

    this.saveState();
    this.updateUserUI();
    this.closeAuthModal();

    if (window.soundFX) window.soundFX.playCorrect();
    this.showToast(`🎉 Akses menu terbuka! Selamat belajar, ${name} (${classRoom})!`);
  }

  submitGuruLogin() {
    const userInput = document.getElementById("modalAdminUser");
    const pinInput = document.getElementById("modalAdminPin");
    const errBox = document.getElementById("modalAdminError");

    const u = userInput ? userInput.value.trim().toLowerCase() : "";
    const p = pinInput ? pinInput.value.trim() : "";

    if (window.teacherMode) {
      window.teacherMode.loadConfig();
    }
    const cfg = (window.teacherMode && window.teacherMode.config) ? window.teacherMode.config : { adminUser: "admin", adminPin: "l4zu4rd1", teacherName: "RM.Zulkifli" };

    const expectedUser = (cfg.adminUser || "admin").trim().toLowerCase();
    const expectedPin = (cfg.adminPin || "l4zu4rd1").trim();

    const validUser = (u === expectedUser);
    const validPin = (p === expectedPin);

    if (validUser && validPin) {
      const activeTeacherName = (cfg.teacherName && cfg.teacherName !== "Guru IPA SMP") ? cfg.teacherName : "RM.Zulkifli";
      this.setRoleAsGuru(activeTeacherName);
      this.closeAuthModal();
      if (userInput) userInput.value = cfg.adminUser || "admin";
      if (pinInput) pinInput.value = "";
      if (errBox) errBox.classList.add("hidden");
      if (window.soundFX) window.soundFX.playCorrect();
      this.navigate("guru");
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      if (errBox) {
        errBox.innerText = "❌ Username atau Password Admin salah!";
        errBox.classList.remove("hidden");
      }
    }
  }

  setRoleAsGuru(teacherName = "RM.Zulkifli") {
    this.userData.role = "guru";
    this.userData.teacherName = (teacherName && teacherName !== "Guru IPA SMP") ? teacherName : "RM.Zulkifli";
    this.userData.isLoggedIn = true;
    if (window.teacherMode) {
      window.teacherMode.isAuthenticated = true;
    }
    this.saveState();
    this.updateUserUI();
    this.showToast("👨‍🏫 Berhasil masuk sebagai Guru / Admin!");
  }

  logoutAdmin(askConfirm = true) {
    if (askConfirm) {
      const ok = confirm("Apakah Anda yakin ingin keluar dari akun Guru / Admin?");
      if (!ok) return;
    }

    this.userData.role = "siswa";
    this.userData.name = "Siswa SMP";
    this.userData.classRoom = "";
    this.userData.absen = "";
    this.userData.isLoggedIn = false;

    if (window.teacherMode) {
      window.teacherMode.isAuthenticated = false;
    }

    this.saveState();
    this.updateUserUI();
    this.closeAuthModal();

    if (window.soundFX) window.soundFX.playClick();
    this.showToast("🔒 Berhasil keluar dari akun Guru / Admin.");

    // Jika sedang di halaman guru, reset tampilan ke layar login Guru
    if (this.currentView === "guru") {
      if (window.teacherMode) {
        window.teacherMode.init("teacherContainer");
      }
    } else {
      this.renderBeranda();
    }
  }

  promptChangeName() {
    this.openAuthModal(this.userData.role || "siswa");
  }

  // --- NAVIGATION ROUTER ---
  navigate(viewId, param = null) {
    // Pembatasan Akses: Siswa wajib masuk terlebih dahulu untuk mengakses menu selain Beranda
    if (!this.isUserLoggedIn() && viewId !== "beranda" && viewId !== "guru") {
      if (window.soundFX) window.soundFX.playWrong();
      this.showToast("🔒 Akses dibatasi! Siswa wajib masuk (Nama & Kelas) terlebih dahulu.");
      this.openAuthModal("siswa");
      return;
    }

    if (window.soundFX) window.soundFX.playClick();
    this.currentView = viewId;

    // Hide all view containers
    const views = document.querySelectorAll(".view-section");
    views.forEach(v => v.classList.add("hidden"));

    // Deactivate nav links
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(n => n.classList.remove("active"));

    // Activate current nav
    const activeNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if (activeNav) activeNav.classList.add("active");

    // Show target view
    const targetView = document.getElementById(`view_${viewId}`);
    if (targetView) {
      targetView.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Dynamic triggers per view
    if (viewId === "beranda") {
      this.renderBeranda();
    } else if (viewId === "materi") {
      if (param) this.activeBab = param;
      this.renderMateri();
    } else if (viewId === "lab") {
      window.virtualLab.init("labMountContainer");
    } else if (viewId === "games") {
      window.eduGames.switchGameTab("game1");
    } else if (viewId === "kenali") {
      window.eduGames.initKenaliZat("kenaliMountContainer");
    } else if (viewId === "bacalabel") {
      window.eduGames.initBacaLabel("bacaLabelMountContainer");
    } else if (viewId === "kasus") {
      window.eduGames.initStudiKasus("kasusMountContainer");
    } else if (viewId === "kuis") {
      this.renderKuisHome();
    } else if (viewId === "battle") {
      window.scienceBattle.init("battleMountContainer");
    } else if (viewId === "hasil") {
      this.renderHasilBelajar();
    } else if (viewId === "pencapaian") {
      this.renderPencapaian();
    } else if (viewId === "guru") {
      window.teacherMode.init("teacherContainer");
    } else if (viewId === "petunjuk") {
      // Static content
    }
  }

  // --- BERANDA VIEW ---
  renderBeranda() {
    this.updateUserUI();
    const studentNameEl = document.getElementById("homeStudentName");
    if (studentNameEl) {
      if (this.userData.role === "guru") {
        studentNameEl.innerText = `${this.userData.name} (Admin Guru)`;
      } else if (!this.isUserLoggedIn()) {
        studentNameEl.innerText = "Siswa Berprestasi";
      } else {
        const classText = this.userData.classRoom ? ` (${this.userData.classRoom})` : "";
        studentNameEl.innerText = `${this.userData.name}${classText}`;
      }
    }
  }

  // --- GAMIFICATION: XP & BADGES ---
  addXP(points, reason = "") {
    this.userData.xp += points;
    const oldLevel = this.userData.level;
    this.userData.level = Math.floor(this.userData.xp / 100) + 1;

    if (this.userData.level > oldLevel) {
      if (window.soundFX) window.soundFX.playLevelUp();
      this.showToast(`🎉 NAIK LEVEL! Kamu sekarang Level ${this.userData.level}!`);
    } else {
      this.showToast(`✨ +${points} XP: ${reason}`);
    }

    this.checkBadges();
    this.saveState();
    this.updateUserUI();
  }

  checkBadges() {
    this.badgeList.forEach(b => {
      if (this.userData.xp >= b.xpReq && !this.userData.badges.includes(b.id)) {
        this.userData.badges.push(b.id);
        if (window.soundFX) window.soundFX.playBadge();
        this.showToast(`🏆 BADGE BARU: "${b.title}" Terbuka!`);
      }
    });
  }

  updateUserUI() {
    const isGuru = (this.userData.role === "guru");

    const avatarEl = document.getElementById("userAvatarSmall");
    if (avatarEl) {
      avatarEl.innerText = isGuru ? "👨‍🏫" : "🎓";
    }

    const btnLogoutHeader = document.getElementById("btnHeaderLogoutAdmin");
    if (btnLogoutHeader) {
      if (isGuru) {
        btnLogoutHeader.classList.remove("hidden");
      } else {
        btnLogoutHeader.classList.add("hidden");
      }
    }

    const loggedIn = this.isUserLoggedIn();
    const nameEls = document.querySelectorAll(".user-name-display");
    nameEls.forEach(el => {
      if (isGuru) {
        const tName = (window.teacherMode && window.teacherMode.config && window.teacherMode.config.teacherName && window.teacherMode.config.teacherName !== "Guru IPA SMP")
          ? window.teacherMode.config.teacherName
          : (this.userData.teacherName && this.userData.teacherName !== "Guru IPA SMP" ? this.userData.teacherName : "RM.Zulkifli");
        el.innerText = tName;
      } else {
        if (!loggedIn) {
          if (el.id === "homeStudentName") {
            el.innerText = "Siswa Berprestasi";
          } else {
            el.innerText = "Masuk Siswa";
          }
        } else {
          const sName = this.userData.studentName || this.userData.name || "Siswa SMP";
          const sClass = this.userData.studentClass || this.userData.classRoom || "";
          const classStr = sClass ? ` (${sClass})` : "";
          el.innerText = `${sName}${classStr}`;
        }
      }
    });

    const xpEls = document.querySelectorAll(".user-xp-display");
    xpEls.forEach(el => {
      if (isGuru) {
        el.innerText = `Mode Admin`;
      } else {
        el.innerText = `${this.userData.xp} XP`;
      }
    });

    const lvlEls = document.querySelectorAll(".user-level-display");
    lvlEls.forEach(el => {
      if (isGuru) {
        el.innerText = `Guru / Admin`;
      } else {
        el.innerText = `Level ${this.userData.level}`;
      }
    });

    const badgeCountEls = document.querySelectorAll(".user-badge-count");
    badgeCountEls.forEach(el => el.innerText = `${this.userData.badges.length}`);

    // Progress bar towards next level
    const progressInLevel = this.userData.xp % 100;
    const progressBar = document.getElementById("homeLevelBar");
    if (progressBar) progressBar.style.width = isGuru ? "100%" : `${progressInLevel}%`;

    // --- KONTROL PEMBATASAN AKSES MENU KETIKA BELUM LOGIN ---
    // 1. Kunci / Buka Navigasi Tab Menu (Kecuali Beranda & Guru)
    const lockableNavItems = document.querySelectorAll('.nav-item[data-view]:not([data-view="beranda"]):not([data-view="guru"])');
    lockableNavItems.forEach(item => {
      let lockBadge = item.querySelector(".nav-lock-badge");
      if (!loggedIn) {
        item.classList.add("nav-item-locked");
        item.setAttribute("title", "🔒 Masuk dengan Nama & Kelas untuk membuka menu ini");
        if (!lockBadge) {
          lockBadge = document.createElement("span");
          lockBadge.className = "nav-lock-badge";
          lockBadge.innerText = " 🔒";
          item.appendChild(lockBadge);
        }
      } else {
        item.classList.remove("nav-item-locked");
        item.removeAttribute("title");
        if (lockBadge) lockBadge.remove();
      }
    });

    // 2. Banner Peringatan di Beranda
    const lockedBanner = document.getElementById("berandaLockedBanner");
    if (lockedBanner) {
      if (!loggedIn) {
        lockedBanner.classList.remove("hidden");
      } else {
        lockedBanner.classList.add("hidden");
      }
    }

    // 3. Label Terkunci pada Kartu Menu di Beranda
    const featureCards = document.querySelectorAll(".feature-menu-card");
    featureCards.forEach(card => {
      let cardLock = card.querySelector(".card-lock-overlay");
      if (!loggedIn) {
        if (!cardLock) {
          cardLock = document.createElement("div");
          cardLock.className = "card-lock-overlay";
          cardLock.innerHTML = `<span>🔒 Wajib Masuk</span>`;
          card.appendChild(cardLock);
        }
      } else {
        if (cardLock) cardLock.remove();
      }
    });
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "app-toast animate-slide-up";
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // --- MATERI VIEW CONTROLLER ---
  renderMateri() {
    const data = MATERI_DATA[this.activeBab];
    if (!data) return;

    // Set Bab Switcher Buttons
    const btnBab1 = document.getElementById("btnMateriBab1");
    const btnBab2 = document.getElementById("btnMateriBab2");
    if (btnBab1 && btnBab2) {
      if (this.activeBab === "bab1") {
        btnBab1.classList.add("active");
        btnBab2.classList.remove("active");
      } else {
        btnBab1.classList.remove("active");
        btnBab2.classList.add("active");
      }
    }

    // Render Sub-Sections Sidebar / Tabs
    const sidebar = document.getElementById("materiSidebarList");
    if (sidebar) {
      sidebar.innerHTML = data.sections.map((sec, idx) => `
        <button class="materi-nav-btn ${idx === this.activeSectionIdx ? 'active' : ''}" onclick="window.app.selectMateriSection(${idx})">
          <span class="mn-sub">${sec.sub}</span>
          <span class="mn-title">${sec.title}</span>
          ${this.userData.completedSections.includes(sec.id) ? '<span class="mn-check">✅</span>' : ''}
        </button>
      `).join('');
    }

    this.renderActiveSection();
  }

  switchMateriBab(babId) {
    this.activeBab = babId;
    this.activeSectionIdx = 0;
    if (window.soundFX) window.soundFX.playClick();
    this.renderMateri();
  }

  selectMateriSection(idx) {
    this.activeSectionIdx = idx;
    if (window.soundFX) window.soundFX.playClick();
    this.renderMateri();
  }

  renderActiveSection() {
    const data = MATERI_DATA[this.activeBab];
    const sec = data.sections[this.activeSectionIdx];
    const container = document.getElementById("materiContentMount");
    if (!container || !sec) return;

    // Track completed
    if (!this.userData.completedSections.includes(sec.id)) {
      this.userData.completedSections.push(sec.id);
      this.addXP(10, `Membaca materi ${sec.title}`);
    }

    const totalSec = data.sections.length;
    const isFirst = (this.activeSectionIdx === 0);
    const isLast = (this.activeSectionIdx === totalSec - 1);

    container.innerHTML = `
      <div class="materi-reader-card animate-fade-in">
        <div class="mrc-header">
          <div class="mrc-badge-category">${data.badge} — Bagian ${sec.sub}</div>
          <h2 class="mrc-title">${sec.icon} ${sec.title}</h2>
          <div class="mrc-progress-indicator">
            Langkah ${this.activeSectionIdx + 1} dari ${totalSec}
          </div>
        </div>

        <div class="mrc-body typography-enhanced">
          ${sec.content}

          ${sec.examples && sec.examples.length > 0 ? `
            <div class="materi-examples-box">
              <h4>🔍 Contoh Nyata dalam Kehidupan:</h4>
              <ul>
                ${sec.examples.map(ex => `<li>${ex}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${sec.funFact ? `
            <div class="fun-fact-card">
              <span class="ff-icon">💡</span>
              <div>
                <strong>Fakta Menarik Sains:</strong>
                <p>${sec.funFact}</p>
              </div>
            </div>
          ` : ''}

          ${sec.question ? `
            <div class="spark-question-card">
              <span class="sq-icon">❓</span>
              <div>
                <strong>Pertanyaan Pemantik:</strong>
                <p>${sec.question}</p>
              </div>
            </div>
          ` : ''}

          ${sec.activity ? `
            <div class="materi-quick-activity" id="secActivityBox">
              <h4>🎯 Aktivitas Pemahaman Cepat:</h4>
              <p class="mq-prompt">${sec.activity.prompt}</p>
              <div class="mq-options">
                ${sec.activity.options.map((opt, oIdx) => `
                  <button class="btn-mq-opt" onclick="window.app.answerQuickActivity(${oIdx})">
                    ${opt.text}
                  </button>
                `).join('')}
              </div>
              <div id="mqFeedback" class="mq-feedback-box hidden"></div>
            </div>
          ` : ''}
        </div>

        <!-- Reader Navigation Bar -->
        <div class="mrc-footer-nav">
          <button class="btn btn-outline" ${isFirst ? 'disabled' : ''} onclick="window.app.selectMateriSection(${this.activeSectionIdx - 1})">
            ← Kembali (${isFirst ? 'Awal' : data.sections[this.activeSectionIdx - 1].sub})
          </button>
          <button class="btn btn-primary" onclick="window.app.navigate('beranda')">
            🏠 Beranda
          </button>
          <button class="btn btn-accent" ${isLast ? 'disabled' : ''} onclick="window.app.selectMateriSection(${this.activeSectionIdx + 1})">
            ${isLast ? 'Selesai Bab Ini 🎉' : `Lanjut (${data.sections[this.activeSectionIdx + 1].sub}) →`}
          </button>
        </div>

        ${isLast ? `
          <div class="materi-summary-card animate-scale-in">
            <h3>📑 Rangkuman ${data.badge}:</h3>
            <ol>
              ${data.summary.map(s => `<li>${s}</li>`).join('')}
            </ol>
            <div class="btn-group-center mt-3">
              <button class="btn btn-lg btn-primary" onclick="window.app.navigate('kuis')">
                📝 Uji Kemampuan dengan Kuis Interaktif ➔
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  answerQuickActivity(optionIdx) {
    const data = MATERI_DATA[this.activeBab];
    const sec = data.sections[this.activeSectionIdx];
    if (!sec || !sec.activity) return;

    const opt = sec.activity.options[optionIdx];
    const fb = document.getElementById("mqFeedback");
    const container = document.getElementById("secActivityBox");
    if (!fb || !container) return;

    container.querySelectorAll("button").forEach(b => b.disabled = true);

    if (opt.correct) {
      if (window.soundFX) window.soundFX.playCorrect();
      fb.className = "mq-feedback-box alert-success animate-fade-in";
      fb.innerHTML = `✅ <strong>BENAR!</strong> ${sec.activity.feedback}`;
      this.addXP(15, "Aktivitas kilat materi dijawab benar");
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      fb.className = "mq-feedback-box alert-danger animate-fade-in";
      fb.innerHTML = `❌ <strong>Coba Pikirkan Lagi:</strong> ${sec.activity.feedback}`;
    }
    fb.classList.remove("hidden");
  }

  // --- KUIS INTERAKTIF ENGINE ---
  renderKuisHome() {
    const container = document.getElementById("kuisMountContainer");
    if (!container) return;

    const cfg = window.teacherMode ? window.teacherMode.config : { quizQuestionCount: 20, quizTimerSec: 30 };

    container.innerHTML = `
      <div class="kuis-start-card animate-scale-in">
        <div class="ks-badge">📝 EVALUASI PEMBELAJARAN</div>
        <h2>Kuis Interaktif IPA SMP/MTs Fase D</h2>
        <p>Topik: <strong>Zat Aditif & Zat Adiktif</strong></p>

        <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:0.85rem; margin:1rem 0;">
          Peserta Ujian: <strong>${this.userData.name}</strong>
          ${this.userData.classRoom ? ` | Kelas: <strong>${this.userData.classRoom}</strong>` : ''}
          ${this.userData.absen ? ` | No. Absen: <strong>${this.userData.absen}</strong>` : ''}
        </div>

        <div class="ks-meta-grid">
          <div class="ks-meta-item">
            <span class="kmi-icon">📚</span>
            <strong>${cfg.quizQuestionCount} Butir Soal</strong>
            <small>Acak dari Bank Soal (PG, B/S, HOTS)</small>
          </div>
          <div class="ks-meta-item">
            <span class="kmi-icon">⏱️</span>
            <strong>${cfg.quizTimerSec > 0 ? `${cfg.quizTimerSec} Detik / Soal` : 'Tanpa Batas Waktu'}</strong>
            <small>Fokus & Teliti</small>
          </div>
          <div class="ks-meta-item">
            <span class="kmi-icon">🎯</span>
            <strong>Kategori Penilaian</strong>
            <small>Sangat Baik (≥90) s/d Bimbingan (&lt;70)</small>
          </div>
        </div>

        <div class="btn-group-center mt-4">
          <button class="btn btn-lg btn-primary" onclick="window.app.startQuiz()">
            🚀 MULAI MENGERJAKAN KUIS
          </button>
        </div>
      </div>
    `;
  }

  startQuiz() {
    if (!this.isUserLoggedIn()) {
      if (window.soundFX) window.soundFX.playWrong();
      this.showToast("🔒 Silakan masukkan Nama & Kelas terlebih dahulu!");
      this.openAuthModal("siswa");
      return;
    }

    const cfg = window.teacherMode ? window.teacherMode.config : { quizQuestionCount: 20, quizTimerSec: 30 };
    const pool = [...QUESTION_BANK].sort(() => Math.random() - 0.5);
    const count = Math.min(pool.length, cfg.quizQuestionCount);

    this.quizState = {
      active: true,
      questions: pool.slice(0, count),
      currentIdx: 0,
      answers: {},
      score: 0,
      timer: null,
      timeLeft: cfg.quizTimerSec
    };

    if (window.soundFX) window.soundFX.playClick();
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const qState = this.quizState;
    const container = document.getElementById("kuisMountContainer");
    if (!container) return;

    if (qState.currentIdx >= qState.questions.length) {
      this.finishQuiz();
      return;
    }

    const q = qState.questions[qState.currentIdx];
    const totalQ = qState.questions.length;
    const currentNum = qState.currentIdx + 1;
    const cfg = window.teacherMode ? window.teacherMode.config : { quizTimerSec: 30 };

    container.innerHTML = `
      <div class="quiz-question-card animate-fade-in">
        <!-- Quiz Top Bar -->
        <div class="quiz-status-bar">
          <div class="qsb-item">
            Soal <strong>${currentNum}</strong> dari <strong>${totalQ}</strong>
          </div>
          <div class="qsb-item q-cat-label">
            ${q.category === 'aditif' ? '🥗 Bab 1: Zat Aditif' : '🧠 Bab 2: Zat Adiktif'}
          </div>
          ${cfg.quizTimerSec > 0 ? `
            <div class="qsb-item quiz-timer-badge" id="quizTimerBadge">
              ⏱️ <span id="quizTimeRemaining">${cfg.quizTimerSec}</span> detik
            </div>
          ` : ''}
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${(currentNum / totalQ) * 100}%;"></div>
        </div>

        <!-- Question Body -->
        <div class="quiz-q-body">
          <h3 class="quiz-question-text">${q.question}</h3>
          ${q.type === 'complex' ? '<p class="text-warn"><small>💡 Catatan: Soal ini memiliki lebih dari satu pilihan jawaban yang benar!</small></p>' : ''}

          <div class="quiz-options-container" id="quizOptionsContainer">
            ${q.options.map((opt, idx) => `
              <button class="btn-quiz-option" id="quizOptBtn_${idx}" onclick="window.app.selectQuizOption(${idx})">
                <span class="q-opt-char">${String.fromCharCode(65 + idx)}</span>
                <span class="q-opt-content">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div id="quizInstantFeedback" class="quiz-feedback-box hidden"></div>
        </div>

        <div class="quiz-nav-actions">
          <button class="btn btn-outline" id="btnQuizNext" disabled onclick="window.app.nextQuizQuestion()">
            Lanjut Soal Berikutnya ➔
          </button>
        </div>
      </div>
    `;

    this.startQuizQuestionTimer(cfg.quizTimerSec);
  }

  startQuizQuestionTimer(durationSec) {
    clearInterval(this.quizState.timer);
    if (durationSec <= 0) return;

    this.quizState.timeLeft = durationSec;
    const timeEl = document.getElementById("quizTimeRemaining");

    this.quizState.timer = setInterval(() => {
      this.quizState.timeLeft--;
      if (timeEl) timeEl.innerText = this.quizState.timeLeft;

      if (this.quizState.timeLeft <= 5 && this.quizState.timeLeft > 0) {
        if (window.soundFX) window.soundFX.playTick();
      }

      if (this.quizState.timeLeft <= 0) {
        clearInterval(this.quizState.timer);
        this.handleQuizTimeOut();
      }
    }, 1000);
  }

  selectQuizOption(optIdx) {
    clearInterval(this.quizState.timer);
    const qState = this.quizState;
    const q = qState.questions[qState.currentIdx];
    const container = document.getElementById("quizOptionsContainer");
    const nextBtn = document.getElementById("btnQuizNext");
    const fbBox = document.getElementById("quizInstantFeedback");
    if (!container || !nextBtn) return;

    container.querySelectorAll("button").forEach(b => b.disabled = true);
    nextBtn.removeAttribute("disabled");

    let isCorrect = false;
    if (q.type === "complex") {
      isCorrect = q.multiAnswers.includes(optIdx);
    } else {
      isCorrect = (optIdx === q.answer);
    }

    qState.answers[q.id] = { selected: optIdx, isCorrect: isCorrect };

    if (isCorrect) {
      qState.score += q.points || 10;
      if (window.soundFX) window.soundFX.playCorrect();
      const chosenBtn = document.getElementById(`quizOptBtn_${optIdx}`);
      if (chosenBtn) chosenBtn.classList.add("btn-correct");

      if (fbBox) {
        fbBox.className = "quiz-feedback-box alert-success animate-fade-in";
        fbBox.innerHTML = `✅ <strong>JAWABAN TEPAT!</strong><br>${q.explanation}`;
        fbBox.classList.remove("hidden");
      }
    } else {
      if (window.soundFX) window.soundFX.playWrong();
      const chosenBtn = document.getElementById(`quizOptBtn_${optIdx}`);
      if (chosenBtn) chosenBtn.classList.add("btn-wrong");
      const correctIdx = (q.type === "complex") ? q.multiAnswers[0] : q.answer;
      const targetBtn = document.getElementById(`quizOptBtn_${correctIdx}`);
      if (targetBtn) targetBtn.classList.add("btn-correct");

      if (fbBox) {
        fbBox.className = "quiz-feedback-box alert-danger animate-fade-in";
        fbBox.innerHTML = `❌ <strong>KURANG TEPAT.</strong><br>${q.explanation}`;
        fbBox.classList.remove("hidden");
      }
    }
  }

  handleQuizTimeOut() {
    const qState = this.quizState;
    const q = qState.questions[qState.currentIdx];
    const container = document.getElementById("quizOptionsContainer");
    const nextBtn = document.getElementById("btnQuizNext");
    const fbBox = document.getElementById("quizInstantFeedback");
    if (!container || !nextBtn) return;

    container.querySelectorAll("button").forEach(b => b.disabled = true);
    nextBtn.removeAttribute("disabled");

    qState.answers[q.id] = { selected: -1, isCorrect: false };
    if (window.soundFX) window.soundFX.playWrong();

    const correctIdx = (q.type === "complex") ? q.multiAnswers[0] : q.answer;
    const targetBtn = document.getElementById(`quizOptBtn_${correctIdx}`);
    if (targetBtn) targetBtn.classList.add("btn-correct");

    if (fbBox) {
      fbBox.className = "quiz-feedback-box alert-danger animate-fade-in";
      fbBox.innerHTML = `⏰ <strong>WAKTU HABIS!</strong><br>${q.explanation}`;
      fbBox.classList.remove("hidden");
    }
  }

  nextQuizQuestion() {
    this.quizState.currentIdx++;
    this.renderQuizQuestion();
  }

  finishQuiz() {
    clearInterval(this.quizState.timer);
    const qState = this.quizState;
    const container = document.getElementById("kuisMountContainer");
    if (!container) return;

    const totalQuestions = qState.questions.length;
    const correctCount = Object.values(qState.answers).filter(a => a.isCorrect).length;
    const finalScore = Math.round((correctCount / totalQuestions) * 100);

    let grade = "";
    let gradeClass = "";
    let recommendation = "";

    if (finalScore >= 90) {
      grade = "Sangat Baik";
      gradeClass = "grade-excellent";
      recommendation = "🌟 Pemahaman konsep Zat Aditif & Zat Adiktif sangat istimewa! Kamu siap menjadi Duta Hidup Sehat di sekolahmu.";
    } else if (finalScore >= 80) {
      grade = "Baik";
      gradeClass = "grade-good";
      recommendation = "👍 Pemahamanmu sudah Baik. Pertahankan prestasimu dan perdalam lagi materi deteksi bahan terlarang.";
    } else if (finalScore >= 70) {
      grade = "Cukup";
      gradeClass = "grade-fair";
      recommendation = "💡 Hasilmu Cukup. Disarankan mengulang membaca modul perbedaan Zat Alami vs Sintetis serta penggolongan Narkotika.";
    } else {
      grade = "Perlu Bimbingan";
      gradeClass = "grade-need-help";
      recommendation = "📖 Perlu Bimbingan. Jangan berkecil hati! Silakan pelajari kembali materi BAB 1 dan BAB 2, lalu coba kuis kembali.";
    }

    // Save history with student identity
    const now = new Date();
    const dateStr = `${now.toLocaleDateString('id-ID')} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const reportItem = {
      date: dateStr,
      studentName: this.userData.name,
      classRoom: this.userData.classRoom || "",
      absen: this.userData.absen || "-",
      total: totalQuestions,
      correct: correctCount,
      score: finalScore,
      grade: grade,
      recommendation: recommendation
    };

    this.userData.quizHistory.push(reportItem);
    this.addXP(finalScore, "Menyelesaikan Kuis Evaluasi");
    this.saveState();

    if (window.soundFX) window.soundFX.playVictory();

    // Otomatis kirim data nilai kuis ke Google Sheets Guru jika URL sudah diisi
    this.sendResultToGoogleSheets(reportItem);

    container.innerHTML = `
      <div class="quiz-result-card animate-scale-in ${gradeClass}">
        <div class="trophy-huge animate-bounce">🏆</div>
        <h2>HASIL EVALUASI PEMBELAJARAN</h2>
        <p class="qr-student">
          Peserta: <strong>${this.userData.name}</strong>
          ${this.userData.classRoom ? ` | Kelas: <strong>${this.userData.classRoom}</strong>` : ''}
          ${this.userData.absen ? ` | Absen: <strong>${this.userData.absen}</strong>` : ''}
        </p>

        <div class="qr-score-circle">
          <span class="qr-big-number">${finalScore}</span>
          <span class="qr-label">SKOR AKHIR</span>
        </div>

        <div class="qr-grade-badge">
          Kategori: <strong>${grade}</strong>
        </div>

        <div class="qr-breakdown-grid">
          <div class="qr-stat-box">
            <span>Total Soal</span>
            <strong>${totalQuestions}</strong>
          </div>
          <div class="qr-stat-box">
            <span>Jawaban Benar</span>
            <strong class="text-success">${correctCount}</strong>
          </div>
          <div class="qr-stat-box">
            <span>Jawaban Salah</span>
            <strong class="text-danger">${totalQuestions - correctCount}</strong>
          </div>
        </div>

        <div class="recommendation-card">
          <h4>💡 Rekomendasi Tindak Lanjut:</h4>
          <p>${recommendation}</p>
        </div>

        <!-- Live status pengiriman Google Sheets -->
        <div id="gSheetLiveStatus" class="mt-3" style="display:none; padding:0.8rem 1rem; border-radius:8px; font-size:0.9rem; text-align:center;"></div>

        <div class="btn-group-center mt-4">
          <button class="btn btn-wa-send btn-lg" onclick="window.app.sendResultsToWhatsApp()">
            📲 Kirim Nilai ke WhatsApp Guru
          </button>
          <button class="btn btn-primary" onclick="window.app.startQuiz()">🔄 Kerjakan Ulang Kuis</button>
          <button class="btn btn-outline" onclick="window.app.navigate('hasil')">📊 Rapor Hasil Belajar</button>
          <button class="btn btn-outline" onclick="window.app.navigate('beranda')">🏠 Beranda</button>
        </div>
      </div>
    `;
  }

  // --- GOOGLE SHEETS AUTOMATIC SUBMISSION ---
  async sendResultToGoogleSheets(reportItem) {
    let targetUrl = "";
    if (window.teacherMode && window.teacherMode.config && window.teacherMode.config.googleSheetUrl) {
      targetUrl = window.teacherMode.config.googleSheetUrl.trim();
    } else {
      try {
        const savedCfg = localStorage.getItem("mpi_teacher_cfg");
        if (savedCfg) {
          const cfg = JSON.parse(savedCfg);
          if (cfg.googleSheetUrl) targetUrl = cfg.googleSheetUrl.trim();
        }
      } catch (e) {}
    }

    const statusEl = document.getElementById("gSheetLiveStatus");
    if (!targetUrl) {
      return;
    }

    if (statusEl) {
      statusEl.style.display = "block";
      statusEl.style.background = "#e0f2fe";
      statusEl.style.color = "#0369a1";
      statusEl.style.border = "1px solid #7dd3fc";
      statusEl.innerHTML = "⏳ <em>Sedang merekap nilai kuis otomatis ke Google Sheets Guru...</em>";
    }

    try {
      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportItem)
      });

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.style.background = "#f0fdf4";
        statusEl.style.color = "#15803d";
        statusEl.style.border = "1px solid #86efac";
        statusEl.innerHTML = "✅ <strong>Nilai kuis Anda telah otomatis masuk ke Rekap Nilai Guru (Google Sheets)!</strong>";
      }
    } catch (err) {
      console.warn("GSheets submission error:", err);
      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.style.background = "#fef2f2";
        statusEl.style.color = "#b91c1c";
        statusEl.style.border = "1px solid #fca5a5";
        statusEl.innerHTML = "⚠️ Nilai kuis belum terkirim ke Google Sheets. Silakan gunakan tombol <strong>Kirim Nilai ke WhatsApp Guru</strong> di bawah.";
      }
    }
  }

  resendLatestToGoogleSheets() {
    const history = this.userData.quizHistory || [];
    if (history.length === 0) {
      alert("Belum ada riwayat kuis untuk dikirim!");
      return;
    }
    const latest = history[history.length - 1];
    this.sendResultToGoogleSheets(latest);
    this.showToast("📤 Mengirim nilai kuis terbaru ke Google Sheets...");
  }

  // --- WHATSAPP RESULT SUBMISSION ---
  sendResultsToWhatsApp() {
    const history = this.userData.quizHistory || [];
    if (history.length === 0) {
      alert("Belum ada riwayat kuis yang dapat dikirimkan. Silakan selesaikan kuis terlebih dahulu!");
      return;
    }

    const latest = history[history.length - 1];
    let teacherPhone = (window.teacherMode && window.teacherMode.config && window.teacherMode.config.teacherPhone) ? window.teacherMode.config.teacherPhone : "6285208194646";

    if (!teacherPhone) {
      const askPhone = prompt("Masukkan nomor WhatsApp Bapak/Ibu Guru (contoh: 6281234567890):");
      if (!askPhone || !askPhone.trim()) return;
      teacherPhone = askPhone.trim().replace(/[^0-9]/g, '');
    }

    if (teacherPhone.startsWith("0")) {
      teacherPhone = "62" + teacherPhone.slice(1);
    }

    // Format WhatsApp message text
    const textMsg = `*LAPORAN HASIL BELAJAR IPA KELAS IX FASE D*
*Topik: Zat Aditif & Zat Adiktif*
----------------------------------------
👤 *Nama Siswa:* ${latest.studentName || this.userData.name}
🏫 *Kelas:* ${latest.classRoom || this.userData.classRoom || '-'}
🔢 *No. Absen:* ${latest.absen || this.userData.absen || '-'}
📅 *Waktu Pengerjaan:* ${latest.date}

📊 *Nilai Kuis:* *${latest.score} / 100*
🏅 *Predikat Kategori:* *${latest.grade}*
🎯 *Jawaban Benar:* ${latest.correct} dari ${latest.total} Soal
💡 *Rekomendasi:* ${latest.recommendation || '-'}
----------------------------------------
_Dikirim otomatis via Media Pembelajaran Interaktif IPA SMP/MTs Fase D_`;

    const waUrl = `https://api.whatsapp.com/send?phone=${teacherPhone}&text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, "_blank");
    this.showToast("📲 Membuka WhatsApp untuk mengirim nilai ke Guru!");
  }

  // --- HASIL BELAJAR VIEW ---
  renderHasilBelajar() {
    const container = document.getElementById("hasilMountContainer");
    if (!container) return;

    const history = this.userData.quizHistory || [];
    const totalTaken = history.length;
    const avg = totalTaken > 0 ? Math.round(history.reduce((a, b) => a + b.score, 0) / totalTaken) : 0;
    const highest = totalTaken > 0 ? Math.max(...history.map(h => h.score)) : 0;

    container.innerHTML = `
      <div class="hasil-dashboard-card animate-fade-in">
        <div class="hd-header">
          <div>
            <h2>📊 Rapor Hasil Belajar Siswa</h2>
            <p>Laporan Capaian Pembelajaran IPA SMP/MTs Fase D</p>
          </div>
          <div>
            <button class="btn btn-sm btn-outline" onclick="window.app.openAuthModal()">
              👤 Ganti Akun / Ubah Profil
            </button>
          </div>
        </div>

        <div class="hd-summary-grid">
          <div class="hds-card">
            <span class="hdsc-icon">👤</span>
            <div>
              <small>Nama & Kelas</small>
              <strong>${this.userData.name}${this.userData.classRoom ? ` (${this.userData.classRoom})` : ''}</strong>
            </div>
          </div>
          <div class="hds-card">
            <span class="hdsc-icon">⭐</span>
            <div>
              <small>Total XP Terkumpul</small>
              <strong>${this.userData.xp} XP</strong>
            </div>
          </div>
          <div class="hds-card">
            <span class="hdsc-icon">📈</span>
            <div>
              <small>Rata-Rata Kuis</small>
              <strong>${avg} / 100</strong>
            </div>
          </div>
          <div class="hds-card">
            <span class="hdsc-icon">🏆</span>
            <div>
              <small>Skor Tertinggi</small>
              <strong>${highest} Poin</strong>
            </div>
          </div>
        </div>

        <div class="hd-table-box mt-4">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
            <h3>📜 Riwayat Penilaian Kuis</h3>
            ${history.length > 0 ? `
              <button class="btn btn-sm btn-outline text-danger" onclick="window.app.clearAllQuizHistory()" title="Hapus seluruh tabel riwayat kuis">
                🗑️ Bersihkan Semua Riwayat Kuis
              </button>
            ` : ''}
          </div>

          ${history.length > 0 ? `
            <div class="table-responsive">
              <table class="table-history">
                <thead>
                  <tr>
                    <th>Waktu</th>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Soal</th>
                    <th>Benar</th>
                    <th>Nilai</th>
                    <th>Kategori Predikat</th>
                    <th style="text-align:center;">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${history.map((h, originalIdx) => ({ item: h, idx: originalIdx })).reverse().map(entry => `
                    <tr>
                      <td>${entry.item.date}</td>
                      <td><strong>${entry.item.studentName || this.userData.name}</strong></td>
                      <td>${entry.item.classRoom || this.userData.classRoom || '-'}</td>
                      <td>${entry.item.total}</td>
                      <td>${entry.item.correct}</td>
                      <td><strong>${entry.item.score}</strong></td>
                      <td><span class="badge-grade ${entry.item.score >= 80 ? 'bg-green' : entry.item.score >= 70 ? 'bg-yellow' : 'bg-red'}">${entry.item.grade}</span></td>
                      <td style="text-align:center;">
                        <button class="btn btn-sm btn-outline" style="color:var(--coral); border-color:var(--coral); padding:0.25rem 0.6rem;" onclick="window.app.deleteQuizHistoryItem(${entry.idx})" title="Hapus baris riwayat ini">
                          🗑️ Hapus
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <p class="text-muted text-center py-4">Belum ada riwayat kuis tersimpan. Silakan kerjakan Kuis Interaktif!</p>
          `}
        </div>

        <div class="btn-group-center mt-4">
          ${history.length > 0 ? `
            <button class="btn btn-wa-send btn-lg" onclick="window.app.sendResultsToWhatsApp()">
              📲 Kirim Nilai Terbaru ke WhatsApp Guru
            </button>
            <button class="btn btn-outline" onclick="window.app.resendLatestToGoogleSheets()">
              📤 Kirim Ulang ke Google Sheets
            </button>
          ` : ''}
          <button class="btn btn-outline" onclick="window.print()">🖨️ Cetak / Simpan PDF Rapor</button>
          <button class="btn btn-primary" onclick="window.app.navigate('kuis')">📝 Mulai Kuis Baru</button>
        </div>
      </div>
    `;
  }

  // --- PENCAPAIAN (BADGE GALLERY) ---
  renderPencapaian() {
    const container = document.getElementById("pencapaianMountContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="pencapaian-wrap animate-fade-in">
        <div class="pencapaian-header text-center">
          <h2>🏆 Galeri Lencana & Penghargaan</h2>
          <p>Koleksi seluruh badge prestasi dengan belajar materi, praktikum virtual, dan memenangkan game!</p>
          <div class="pencapaian-count-pill">
            Terbuka: <strong>${this.userData.badges.length}</strong> / <strong>${this.badgeList.length}</strong> Lencana
          </div>
        </div>

        <div class="badges-grid-gallery">
          ${this.badgeList.map(b => {
            const isUnlocked = this.userData.badges.includes(b.id);
            return `
              <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'} animate-scale-in">
                <div class="badge-avatar">${b.icon}</div>
                <h4>${b.title}</h4>
                <p>${b.desc}</p>
                <div class="badge-status-tag">
                  ${isUnlocked ? '✅ Terbuka' : `🔒 Butuh ${b.xpReq} XP`}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  deleteQuizHistoryItem(originalIdx) {
    if (!this.userData.quizHistory || originalIdx < 0 || originalIdx >= this.userData.quizHistory.length) return;
    const item = this.userData.quizHistory[originalIdx];
    const confirmDelete = confirm(`Hapus riwayat kuis tanggal ${item.date} (Nilai: ${item.score})?`);
    if (confirmDelete) {
      this.userData.quizHistory.splice(originalIdx, 1);
      this.saveState();
      if (window.soundFX) window.soundFX.playClick();
      this.showToast("🗑️ Baris riwayat kuis berhasil dihapus!");
      this.renderHasilBelajar();
    }
  }

  clearAllQuizHistory() {
    if (!this.userData.quizHistory || this.userData.quizHistory.length === 0) return;
    const confirmAll = confirm("Apakah Anda yakin ingin MENGHAPUS SEMUA riwayat penilaian kuis?");
    if (confirmAll) {
      this.userData.quizHistory = [];
      this.saveState();
      if (window.soundFX) window.soundFX.playClick();
      this.showToast("🗑️ Seluruh riwayat kuis telah dibersihkan!");
      this.renderHasilBelajar();
    }
  }

  // --- RESET ALL USER DATA ---
  resetAllUserData() {
    this.userData = {
      role: "siswa",
      name: "Siswa SMP",
      classRoom: "",
      absen: "",
      isLoggedIn: false,
      school: "SMP/MTs Fase D",
      xp: 0,
      level: 1,
      completedSections: [],
      badges: [],
      quizHistory: []
    };
    this.saveState();
    this.updateUserUI();
    if (this.currentView === "hasil") this.renderHasilBelajar();
    if (this.currentView === "pencapaian") this.renderPencapaian();
  }

  // --- ACCESSIBILITY TOOLS ---
  toggleSound() {
    if (window.soundFX) {
      this.soundOn = window.soundFX.toggle();
      const btn = document.getElementById("btnToggleSound");
      if (btn) btn.innerHTML = this.soundOn ? "🔊" : "🔇";
      this.showToast(this.soundOn ? "🔊 Efek Suara AKTIF" : "🔇 Efek Suara MATI");
    }
  }

  toggleContrast() {
    this.highContrast = !this.highContrast;
    if (this.highContrast) {
      document.body.classList.add("high-contrast");
      this.showToast("👁️ Mode Kontras Tinggi AKTIF");
    } else {
      document.body.classList.remove("high-contrast");
      this.showToast("👁️ Mode Kontras Normal");
    }
  }

  changeFontSize(delta) {
    this.fontSizeLevel = Math.min(2, Math.max(0, this.fontSizeLevel + delta));
    document.body.classList.remove("font-sm", "font-md", "font-lg");
    if (this.fontSizeLevel === 0) {
      document.body.classList.add("font-sm");
      this.showToast("🔤 Ukuran Teks: Standar");
    } else if (this.fontSizeLevel === 1) {
      document.body.classList.add("font-md");
      this.showToast("🔤 Ukuran Teks: Sedang");
    } else {
      document.body.classList.add("font-lg");
      this.showToast("🔤 Ukuran Teks: Besar (IFP Ready)");
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
      this.showToast("📺 Layar Penuh (Fullscreen) Diaktifkan");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.showToast("📺 Layar Normal Diaktifkan");
      }
    }
  }

  closeModals() {
    this.closeAuthModal();
  }
}

window.app = new App();

// Boot up once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.app.init();
});
