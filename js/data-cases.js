/**
 * DATA SIMULASI, KASUS KRITIS, LABEL PRODUK, DAN LABORATORIUM VIRTUAL
 * IPA SMP/MTs KELAS IX FASE D
 */

// 1. DATA LABORATORIUM VIRTUAL (3 EKSPERIMEN AMAN & EDUKATIF)
const LAB_EXPERIMENTS = [
  {
    id: "lab1",
    title: "Eksperimen 1: Identifikasi Pewarna Makanan (Uji Benang Wol / Kertas)",
    subtitle: "Membedakan Pewarna Alami/Aman dengan Pewarna Tekstil Berbahaya (Rhodamin B / Methanil Yellow)",
    purpose: "Peserta didik dapat menganalisis perbedaan daya serap dan sifat pencucian antara zat pewarna alami/makanan aman dengan zat pewarna tekstil sintetis berbahaya.",
    tools: ["3 Tabung Reaksi", "Gelas Kimia 100 mL", "Pipet Tetes", "Benang Wol Putih", "Larutan Asam Cuka 10%", "Air Bersih", "Deterjen Pencuci"],
    samples: [
      { id: "s1", name: "Sampel A (Sari Sirup Stroberi Alami)", color: "#e11d48", type: "alami", trueColor: "Merah Lembut Alami (Antosianin)", desc: "Sari buah asli buatan rumah." },
      { id: "s2", name: "Sampel B (Sirup Jajanan Murah Mencolok)", color: "#ff007f", type: "tekstil", trueColor: "Merah Menyala Berpendar (Rhodamin B)", desc: "Jajanan tanpa izin edar dari pinggir jalan." },
      { id: "s3", name: "Sampel C (Sirup Pabrik Resmi BPOM)", color: "#dc2626", type: "sintetis_aman", trueColor: "Merah Sintetis Resmi (Ponceau 4R)", desc: "Produk bermerek dengan izin BPOM RI MD." }
    ],
    steps: [
      { step: 1, title: "Persiapan Sampel", instruction: "Pilih sampel sirup yang ingin diuji dan masukkan ke dalam tabung reaksi berisi larutan asam cuka." },
      { step: 2, title: "Pencelupan Benang Wol", instruction: "Masukkan serat benang wol putih ke dalam tabung reaksi untuk menyerap zat warna." },
      { step: 3, title: "Pemanasan & Perendaman", instruction: "Rendam selama 10 menit agar partikel pigmen menempel pada serat wol." },
      { step: 4, title: "Uji Pencucian dengan Sabun", instruction: "Cuci dan bilas benang wol dengan air deterjen untuk melihat ketahanan warna." }
    ],
    results: {
      alami: {
        woolColor: "Warna luntur pucat pudar setelah dibilas air sabun.",
        conclusion: "Pewarna alami memiliki ikatan serat lemah sehingga mudah luntur tercuci. AMAN DIKONSUMSI."
      },
      tekstil: {
        woolColor: "Warna merah tetap sangat terang berpendar dan menempel kuat di benang wol meski dicuci sabun.",
        conclusion: "Mengandung PEWARNA TEKSTIL BERBAHAYA (Rhodamin B)! Pewarna kain dirancang melekat kuat permanen pada serat dan SANGAT BERACUN jika masuk ke organ tubuh!"
      },
      sintetis_aman: {
        woolColor: "Warna sebagian besar luntur dan memudar signifikan setelah dicuci sabun.",
        conclusion: "Pewarna makanan sintetis resmi (food grade) terikat lemah pada wol dan aman sesuai takaran ADI BPOM."
      }
    }
  },

  {
    id: "lab2",
    title: "Eksperimen 2: Mengamati Pengaruh Bahan Pengawet pada Pembusukan Roti",
    subtitle: "Perbandingan Efektivitas Garam, Cuka, Natrium Benzoat, dan Kontrol Tanpa Pengawet",
    purpose: "Peserta didik dapat memahami mekanisme pengawetan makanan dalam menghambat pertumbuhan koloni jamur (Rhizopus stolonifer) selama 7 hari.",
    tools: ["4 Piring Petri Steril", "Kaca Pembesar (Lup)", "Pipet Tetes", "Sprayer Air", "Inkubator Suhu Ruang"],
    samples: [
      { id: "b1", name: "Roti 1: Kontrol (Hanya Air Murni)", treat: "air", desc: "Roti dibasahi 1 mL air suling steril." },
      { id: "b2", name: "Roti 2: Larutan Garam Dapur (NaCl 10%)", treat: "garam", desc: "Roti dibasahi 1 mL larutan garam pekat alami." },
      { id: "b3", name: "Roti 3: Larutan Cuka Dapur (Asam Asetat 5%)", treat: "cuka", desc: "Roti dibasahi 1 mL larutan asam cuka alami." },
      { id: "b4", name: "Roti 4: Natrium Benzoat (0.1% Food Grade)", treat: "benzoat", desc: "Roti dibasahi 1 mL larutan natrium benzoat sintetis resmi." }
    ],
    timeline: [
      { day: 1, label: "Hari ke-1", observation: "Semua roti masih tampak bersih, segar, dan belum ada tanda spora jamur." },
      { day: 3, label: "Hari ke-3", observation: "Roti Kontrol mulai muncul bercak putih halus. Roti Garam, Cuka, dan Benzoat masih bersih." },
      { day: 5, label: "Hari ke-5", observation: "Roti Kontrol dipenuhi koloni jamur hitam tebal. Roti Garam ada bercak kecil di sudut. Cuka dan Benzoat masih bebas jamur." },
      { day: 7, label: "Hari ke-7", observation: "Roti Kontrol hancur berjamur pekat dan berbau busuk. Roti Garam berjamur 30%. Roti Cuka asam tahan jamur. Roti Benzoat tetap bersih bebas jamur." }
    ],
    conclusion: "Pengawet alami (garam dan cuka) maupun sintetis resmi (natrium benzoat) bekerja dengan menurunkan aktivitas air (Aw) atau menciptakan keasaman tinggi sehingga spora jamur gagal berkecambah."
  },

  {
    id: "lab3",
    title: "Eksperimen 3: Deteksi Cepat Boraks pada Bakso Menggunakan Ekstrak Kunyit",
    subtitle: "Uji Reaksi Senyawa Kurkumin dengan Senyawa Boron Menghasilkan Kompleks Rososianin Merah",
    purpose: "Peserta didik dapat melakukan uji kimia sederhana dan aman untuk mendeteksi kontaminasi bahan pengawet/pengenyal terlarang boraks pada makanan.",
    tools: ["Mortir dan Alu Penggerus", "Tusuk Gigi Bambu / Kertas Saring Kunyit", "Pipet Tetes", "Plat Tetes Porselen"],
    samples: [
      { id: "bk1", name: "Sampel Bakso A (Kantin Sekolah Resmi)", hasBorax: false, desc: "Bakso kenyal wajar, warna abu-abu daging alami, mudah basi jika diinapkan." },
      { id: "bk2", name: "Sampel Bakso B (Pedagang Ilegal Pinggir Jalan)", hasBorax: true, desc: "Bakso kenyal membal seperti bola karet, warna sangat putih cerah, awet 3 hari tanpa lalat." }
    ],
    reagent: "Ekstrak Kunyit Segar (Mengandung Kurkumin Kuning-Oranye)",
    reactionDesc: "Kurkumin dalam suasana basa akibat ion borat akan membentuk senyawa kompleks baru berwarna merah kecokelatan gelap (Rososianin).",
    results: {
      safe: {
        colorResult: "Kuning cerah tetap stabil (tidak berubah warna merah).",
        status: "NEGATIF BORAKS. Bakso aman dari bahan pengenyal berbahaya!"
      },
      danger: {
        colorResult: "Kertas/tusuk gigi kunyit seketika BERUBAH MENJADI MERAH KECOKELATAN PEKAT!",
        status: "POSITIF BORAKS (DILARANG)! Bakso terbukti dicampur bahan kimia pembersih/boraks yang merusak ginjal dan hati!"
      }
    }
  }
];

// 2. DATA FITUR "KENALI ZATNYA" (Interactive Identifier Game)
const IDENTIFY_ITEMS = [
  {
    id: "id1",
    name: "Kunyit (Kurkumin)",
    category: "aditif",
    sub: "Pewarna & Penyedap Alami",
    imageEmoji: "🟡",
    explanation: "Kunyit adalah rimpang tumbuhan alami yang digunakan sebagai zat aditif (pewarna kuning dan bumbu masakan)."
  },
  {
    id: "id2",
    name: "Nikotin dalam Asap Rokok",
    category: "adiktif",
    sub: "Zat Adiktif Bukan Narkotika",
    imageEmoji: "🚬",
    explanation: "Nikotin adalah zat adiktif kuat pada tembakau yang memicu ketergantungan saraf dan memacu detak jantung."
  },
  {
    id: "id3",
    name: "Nasi Putih Hangat",
    category: "bukan",
    sub: "Makanan Pokok (Karbohidrat)",
    imageEmoji: "🍚",
    explanation: "Nasi putih adalah bahan pangan pokok sumber energi utama tubuh, bukan zat aditif maupun zat adiktif."
  },
  {
    id: "id4",
    name: "Aspartam pada Minuman Diet",
    category: "aditif",
    sub: "Pemanis Sintetis",
    imageEmoji: "🥤",
    explanation: "Aspartam adalah zat aditif pemanis buatan intensitas tinggi berkalori rendah."
  },
  {
    id: "id5",
    name: "Sabu-sabu (Metamfetamin)",
    category: "adiktif",
    sub: "Psikotropika Golongan II",
    imageEmoji: "🚫",
    explanation: "Sabu-sabu adalah zat adiktif psikotropika stimulan berbahaya yang merusak otak dan dilarang keras hukum."
  },
  {
    id: "id6",
    name: "Air Mineral Murni",
    category: "bukan",
    sub: "Kebutuhan Pokok Tubuh",
    imageEmoji: "💧",
    explanation: "Air mineral murni adalah kebutuhan vital hidrasi tubuh manusia, bukan zat aditif maupun adiktif."
  },
  {
    id: "id7",
    name: "Monosodium Glutamat (MSG)",
    category: "aditif",
    sub: "Penyedap Rasa (Umami)",
    imageEmoji: "🧂",
    explanation: "MSG adalah zat aditif pangan untuk mempertegas cita rasa gurih pada masakan."
  },
  {
    id: "id8",
    name: "Alkohol (Etanol pada Miras)",
    category: "adiktif",
    sub: "Depresan Sistem Saraf Pusat",
    imageEmoji: "🍷",
    explanation: "Alkohol adalah zat adiktif depresan yang menekan fungsi otak, menurunkan refleks, dan merusak organ hati."
  },
  {
    id: "id9",
    name: "Natrium Benzoat",
    category: "aditif",
    sub: "Pengawet Sintetis Resmi",
    imageEmoji: "🥫",
    explanation: "Natrium benzoat adalah zat aditif pengawet makanan untuk mencegah pertumbuhan jamur dan ragi."
  },
  {
    id: "id10",
    name: "Uap Lem Aibon (Toluena)",
    category: "adiktif",
    sub: "Zat Inhalan Berbahaya",
    imageEmoji: "⚠️",
    explanation: "Uap pelarut lem mengandung toluena yang adiktif, dihirup merusak lapisan saraf otak hingga kematian mendadak."
  },
  {
    id: "id11",
    name: "Telur Ayam Rebus",
    category: "bukan",
    sub: "Bahan Pangan Sumber Protein",
    imageEmoji: "🥚",
    explanation: "Telur rebus adalah bahan makanan bergizi tinggi sumber protein alami, bukan bahan tambahan pangan."
  },
  {
    id: "id12",
    name: "Rhodamin B",
    category: "aditif",
    sub: "Pewarna Tekstil ILEGAL pada Pangan",
    imageEmoji: "🧪",
    explanation: "Rhodamin B adalah zat pewarna industri kain yang secara ilegal sering disalahgunakan sebagai zat aditif berbahaya."
  },
  {
    id: "id13",
    name: "Heroin (Putaw)",
    category: "adiktif",
    sub: "Narkotika Golongan I",
    imageEmoji: "☠️",
    explanation: "Heroin adalah narkotika semisintetis turunan morfin yang menimbulkan ketergantungan luar biasa dan sakaw berat."
  },
  {
    id: "id14",
    name: "Madu Hutan Alami",
    category: "aditif",
    sub: "Pemanis & Pengawet Alami",
    imageEmoji: "🍯",
    explanation: "Madu dapat berfungsi sebagai pemanis alami sekaligus pengawet alami karena kadar gulanya tinggi dan higroskopis."
  },
  {
    id: "id15",
    name: "Apel Segar Utuh",
    category: "bukan",
    sub: "Buah Segar Sumber Vitamin & Serat",
    imageEmoji: "🍎",
    explanation: "Buah apel utuh adalah makanan bergizi alami, bukan bahan aditif atau zat adiktif."
  }
];

// 3. DATA FITUR "BACA LABEL MAKANAN" (Kemasan Interaktif)
const FOOD_PACKAGES = [
  {
    id: "pkg1",
    name: "Biskuit Cokelat Renyah 'ChocoMax'",
    typeBadge: "Biskuit Olahan",
    bpom: "BPOM RI MD 235610023456",
    expiry: "15-12-2027",
    netto: "120 gram",
    ingredients: [
      { name: "Tepung Terigu (45%)", role: "Bahan Utama", type: "Alami", desc: "Sumber karbohidrat pembentuk adonan biskuit." },
      { name: "Gula Pasir (20%)", role: "Pemanis Alami", type: "Alami", desc: "Memberi rasa manis dan tekstur renyah." },
      { name: "Minyak Nabati (15%)", role: "Bahan Lemak", type: "Alami", desc: "Memberikan kelembutan biskuit." },
      { name: "Bubuk Kakao (10%)", role: "Perisa & Pewarna Alami", type: "Alami", desc: "Cokelat asli memberikan rasa dan warna cokelat." },
      { name: "Lesitin Kedelai", role: "Pengemulsi", type: "Alami", desc: "Menyatukan lemak nabati dan air adonan agar homogen." },
      { name: "Amonium Bikarbonat", role: "Pengembang", type: "Sintetis Aman", desc: "Membantu biskuit mengembang berpori saat dipanggang." },
      { name: "Perisa Sintetik Vanila", role: "Pemberi Aroma", type: "Sintetis Aman", desc: "Memberikan wangi aroma vanili khas." },
      { name: "Garam Dapur", role: "Penguat Rasa Alami", type: "Alami", desc: "Menyeimbangkan rasa manis dan gurih." }
    ],
    taskPrompt: "Temukan zat aditif yang berfungsi sebagai PENGEMULSI pada label biskuit ini!",
    correctTarget: "Lesitin Kedelai"
  },

  {
    id: "pkg2",
    name: "Minuman Soda Segar 'Orangy Fizz'",
    typeBadge: "Minuman Berkarbonasi",
    bpom: "BPOM RI MD 167810088912",
    expiry: "01-08-2027",
    netto: "330 mL",
    ingredients: [
      { name: "Air Berkarbonasi", role: "Bahan Utama", type: "Alami", desc: "Air murni yang diinfus dengan gas CO2 bertekanan." },
      { name: "Sirup Fruktosa", role: "Pemanis Alami Olahan", type: "Alami", desc: "Memberikan rasa manis cair pekat." },
      { name: "Asam Sitrat", role: "Pengatur Keasaman", type: "Alami/Sintetis", desc: "Memberikan sensasi segar asam jeruk." },
      { name: "Natrium Benzoat", role: "Pengawet Sintetis", type: "Sintetis Aman", desc: "Mencegah kontaminasi ragi dan jamur pada minuman asam." },
      { name: "Tartrazin CI 19140", role: "Pewarna Sintetis", type: "Sintetis Aman", desc: "Pewarna kuning cerah food grade berizin BPOM." },
      { name: "Sunset Yellow CI 15985", role: "Pewarna Sintetis", type: "Sintetis Aman", desc: "Memberikan rona oranye khas buah jeruk." },
      { name: "Perisa Alami Jeruk", role: "Pemberi Aroma", type: "Alami", desc: "Minyak atsiri kulit jeruk asli." }
    ],
    taskPrompt: "Identifikasi zat aditif PENGAWET SINTETIS pada minuman soda di atas!",
    correctTarget: "Natrium Benzoat"
  },

  {
    id: "pkg3",
    name: "Saus Sambal Ekstra Pedas 'Cabe Juara'",
    typeBadge: "Bumbu & Saus Kemasan",
    bpom: "BPOM RI MD 255610034111",
    expiry: "20-04-2027",
    netto: "250 gram",
    ingredients: [
      { name: "Cabai Merah Segar (35%)", role: "Bahan Utama & Pewarna Alami", type: "Alami", desc: "Memberikan sensasi pedas dan warna merah alami kapaisin." },
      { name: "Air Bersih", role: "Pelarut", type: "Alami", desc: "Bahan pelarut olahan saus." },
      { name: "Gula & Garam", role: "Pemanis & Pengawet Alami", type: "Alami", desc: "Bumbu dasar penyeimbang rasa." },
      { name: "Pati Termodifikasi", role: "Pengental & Penstabil", type: "Olahan Aman", desc: "Membuat tekstur saus kental lembut dan tidak encer." },
      { name: "Monosodium Glutamat (MSG)", role: "Penyedap Rasa (Umami)", type: "Olahan Aman", desc: "Mempertegas kelezatan gurih kaldu cabai." },
      { name: "Kalium Sorbat", role: "Pengawet Sintetis", type: "Sintetis Aman", desc: "Menghambat jamur setelah botol saus dibuka." },
      { name: "Pewarna Ponceau 4R", role: "Pewarna Sintetis", type: "Sintetis Aman", desc: "Mempertahankan warna merah saus agar tidak kusam." }
    ],
    taskPrompt: "Pilihlah zat aditif yang berfungsi sebagai PENYEDAP RASA GURIH (UMAMI)!",
    correctTarget: "Monosodium Glutamat (MSG)"
  }
];

// 4. DATA STUDI KASUS KRITIS & PENGAMBILAN KEPUTUSAN SEHAT
const CASE_STUDIES = [
  {
    id: "cs1",
    title: "Kasus 1: Godaan Minuman Berwarna Mencolok di Bazar Sekolah",
    story: "Saat istirahat festival sekolah, Rian melihat pedagang keliling menjual es sirop dengan warna merah dan kuning yang sangat menyala berpendar, harganya jauh lebih murah dari kantin resmi dan wadahnya tidak memiliki label BPOM.",
    dilemma: "Teman Rian mengajak membeli karena warnanya sangat menarik di foto medsos dan murah meriah. Apa yang sebaiknya Rian lakukan?",
    questions: [
      {
        q: "Apa tanda fisik utama yang patut dicurigai dari minuman tersebut?",
        options: [
          "Harganya murah dan warnanya sangat menyala berpendar tidak wajar (diduga pewarna tekstil Rhodamin B)",
          "Menggunakan es batu dingin",
          "Wadah botol terbuat dari plastik",
          "Rasanya terlalu manis"
        ],
        answer: 0,
        explanation: "Warna yang mencolok menyala dan berpendar adalah ciri khas zat pewarna kain (tekstil) yang dilarang keras untuk dikonsumsi."
      },
      {
        q: "Tindakan paling bijak dan bertanggung jawab yang harus diambil Rian adalah...",
        options: [
          "Tetap membeli banyak untuk dibagikan ke teman-teman",
          "Menolak dengan sopan, mengajak temannya membeli minuman higienis berlabel BPOM di kantin, dan melaporkan pedagang mencurigakan ke guru",
          "Mencicipi sedikit dulu untuk memastikan apakah beracun",
          "Memarahi pedagang keliling di depan umum"
        ],
        answer: 1,
        explanation: "Menjaga kesehatan diri dan sahabat serta menginformasikan pihak sekolah adalah wujud peduli keselamatan bersama."
      }
    ]
  },

  {
    id: "cs2",
    title: "Kasus 2: Tekanan Teman Sebaya di Pojok Lapangan",
    story: "Dodi adalah siswa kelas IX yang aktif di tim basket sekolah. Suatu sore seusai latihan, beberapa senior mengajaknya ke sudut sepi dan menyodorkan sebatang rokok elektrik (vape) sambil mengejek: 'Payah lu kalau nggak berani coba! Ini cuma uap rasa buah, nggak bahaya kok!'",
    dilemma: "Dodi merasa tertekan karena takut dikucilkan dari pergaulan tim basket, namun ia tahu rokok elektrik merusak paru-paru.",
    questions: [
      {
        q: "Fakta ilmiah yang tepat mengenai rokok elektrik (vape) adalah...",
        options: [
          "Vape 100% hanya uap air tanpa racun",
          "Liquid vape mengandung nikotin adiktif, bahan kimia karsinogenik perisa, dan partikel logam berat pemicu penyakit EVALI",
          "Vape bisa menyembuhkan asma",
          "Vape dianjurkan oleh dokter untuk remaja"
        ],
        answer: 1,
        explanation: "Rokok elektronik bukan uap air biasa; aerosolnya sarat nikotin konsentrat dan zat kimia yang merusak jaringan alveolus paru-paru."
      },
      {
        q: "Bagaimana cara Dodi merespons secara asertif tanpa harus mengorbankan integritas kesehatannya?",
        options: [
          "Ikut menghisap demi solidaritas tim basket",
          "Menatap mantap dan berkata tegas: 'Nggak usah bang, makasih. Paru-paruku aset buat kejuaraan basket minggu depan!' lalu pamit bergabung dengan teman lain",
          "Menangis ketakutan dan lari pulang",
          "Mengambil vape tersebut lalu membuangnya ke parit"
        ],
        answer: 1,
        explanation: "Menolak dengan tegas mengaitkan alasan prestasi olahraga menunjukkan kematangan kepribadian tanpa perlu bermusuhan."
      }
    ]
  },

  {
    id: "cs3",
    title: "Kasus 3: Misteri Tahu Putih Kenyal Berhari-Hari",
    story: "Pak Danu membeli tahu putih di pasar tradisional. Setelah ditinggal di atas meja makan selama 4 hari di suhu ruangan terbuka tanpa lemari es, tahu tersebut sama sekali tidak membusuk, tidak berbau asam, lalat enggan hinggap, dan teksturnya kenyal seperti penghapus karet saat ditekan.",
    dilemma: "Keluarga Pak Danu hendak memasak tahu tersebut untuk lauk makan malam.",
    questions: [
      {
        q: "Berdasarkan ciri-ciri di atas, zat terlarang apa yang kemungkinan besar ditambahkan pada tahu tersebut?",
        options: [
          "Formalin (pengawet mayat)",
          "Vitamin C dosis tinggi",
          "Garam dapur murni",
          "Klorofil pandan"
        ],
        answer: 0,
        explanation: "Formalin mengeraskan protein tahu menjadi liat kenyal luar biasa, membunuh semua mikroba pembusuk sehingga tidak basi berhari-hari, dan membuat lalat menjauh."
      },
      {
        q: "Apa bahaya kesehatan jika tahu berformalin ini terus dikonsumsi?",
        options: [
          "Menambah massa otot secara cepat",
          "Merusak lapisan lambung kronis, meracuni fungsi hati dan ginjal, serta memicu kanker",
          "Membuat kulit menjadi awet muda",
          "Menyebabkan gigi berlubang"
        ],
        answer: 1,
        explanation: "Formaldehida adalah zat mutagenik dan karsinogenik golongan 1 yang merusak sel-sel hidup dan memicu kegagalan multi-organ."
      }
    ]
  }
];

// 5. DATA 5 GAME EDUKASI INTERAKTIF
const GAMES_DATA = {
  game1_sort: {
    title: "GAME 1 — SORTIR ZAT CEPAT",
    desc: "Seret dan letakkan kartu zat ke dalam 4 wadah yang benar sebelum waktu habis!",
    categories: [
      { id: "alami", name: "Zat Aditif Alami", icon: "🌿", color: "#10b981" },
      { id: "sintetis", name: "Zat Aditif Sintetis", icon: "🧪", color: "#0ea5e9" },
      { id: "adiktif", name: "Zat Adiktif", icon: "⚠️", color: "#f43f5e" },
      { id: "bukan", name: "Bukan Keduanya (Pangan Pokok)", icon: "🥣", color: "#8b5cf6" }
    ],
    items: [
      { id: "it1", name: "Kunyit Segar", cat: "alami", icon: "🟡" },
      { id: "it2", name: "Tartrazin Kuning", cat: "sintetis", icon: "🧪" },
      { id: "it3", name: "Nikotin Tembakau", cat: "adiktif", icon: "🚬" },
      { id: "it4", name: "Beras Putih", cat: "bukan", icon: "🍚" },
      { id: "it5", name: "Daun Suji", cat: "alami", icon: "🍃" },
      { id: "it6", name: "Aspartam", cat: "sintetis", icon: "🍬" },
      { id: "it7", name: "Alkohol Etanol", cat: "adiktif", icon: "🍷" },
      { id: "it8", name: "Daging Sapi Segar", cat: "bukan", icon: "🥩" },
      { id: "it9", name: "Madu Hutan", cat: "alami", icon: "🍯" },
      { id: "it10", name: "Natrium Benzoat", cat: "sintetis", icon: "🥫" },
      { id: "it11", name: "Sabu / Metamfetamin", cat: "adiktif", icon: "🚫" },
      { id: "it12", name: "Minyak Zaitun Murni", cat: "bukan", icon: "🫒" }
    ]
  },

  game2_guess: {
    title: "GAME 2 — TEBAK ZAT (CLUE HUNTER)",
    desc: "Buka petunjuk satu per satu dan tebak nama zat secara tepat. Makin sedikit petunjuk dibuka, skor makin tinggi!",
    riddles: [
      {
        id: "g1",
        name: "Kurkumin (Kunyit)",
        clues: [
          "Saya adalah zat pigmen berwarna kuning-jingga alami.",
          "Saya berasal dari rimpang tumbuhan bumbu dapur Indonesia.",
          "Jika saya ditetesi boraks, warna saya seketika berubah menjadi merah kecokelatan!",
          "Saya sering digunakan untuk memberi warna nasi kuning dan jamu tradisional."
        ]
      },
      {
        id: "g2",
        name: "Nikotin",
        clues: [
          "Saya adalah senyawa alkaloid adiktif yang sangat kuat.",
          "Saya terkandung dalam daun tembakau dan cairan rokok elektronik.",
          "Saya hanya butuh waktu 7 detik untuk mencapai reseptor otak manusia.",
          "Saya menyebabkan penyempitan pembuluh darah dan kecanduan berat."
        ]
      },
      {
        id: "g3",
        name: "Monosodium Glutamat (MSG)",
        clues: [
          "Saya berwujud kristal putih mirip jarum kecil.",
          "Saya dihasilkan dari fermentasi tetes tebu oleh bakteri khusus.",
          "Saya memberikan sensasi rasa gurih dasar kelima (umami).",
          "Nama populernya di dapur sering disebut vetsin atau micin."
        ]
      },
      {
        id: "g4",
        name: "Karbon Monoksida (CO)",
        clues: [
          "Saya adalah gas beracun tak berwarna dan tak berbau.",
          "Saya keluar bersama asap pembakaran rokok dan knalpot kendaraan.",
          "Daya ikat saya ke hemoglobin darah 200 kali lipat lebih kuat daripada oksigen.",
          "Saya menyebabkan sel-sel tubuh kekurangan oksigen dan cepat lelah."
        ]
      },
      {
        id: "g5",
        name: "Formalin",
        clues: [
          "Saya adalah larutan kimia dengan bau sangat menyengat dan menusuk hidung.",
          "Fungsi asli saya adalah untuk mengawetkan jenazah dan spesimen biologi.",
          "Oknum jahat sering menyalahgunakan saya untuk mengawetkan tahu dan mie basah.",
          "Saya dilarang keras untuk makanan karena merusak organ dan bersifat karsinogenik!"
        ]
      }
    ]
  },

  game3_match: {
    title: "GAME 3 — PASANGKAN KARTU (ZAT ↔ FUNGSI ↔ CONTOH)",
    desc: "Temukan kecocokan antara Nama Zat, Fungsi Teknologisnya, dan Contoh Produknya!",
    sets: [
      { id: "set1", zat: "Lesitin Kedelai", fungsi: "Pengemulsi Minyak & Air", contoh: "Mayones & Cokelat Batang" },
      { id: "set2", zat: "Tartrazin CI 19140", fungsi: "Pewarna Sintetis Kuning", contoh: "Minuman Soda Rasa Jeruk" },
      { id: "set3", zat: "Natrium Benzoat", fungsi: "Pengawet Anti-Jamur", contoh: "Saus Sambal & Kecap Manis" },
      { id: "set4", zat: "Etil Butirat", fungsi: "Pemberi Aroma Ester Buah", contoh: "Sirup & Permen Nanas" },
      { id: "set5", zat: "Aspartam", fungsi: "Pemanis Rendah Kalori", contoh: "Minuman Diet Zero Sugar" },
      { id: "set6", zat: "Garam Dapur", fungsi: "Pengawet Alami Osmosis", contoh: "Ikan Asin & Telur Asin" }
    ]
  },

  game4_detective: {
    title: "GAME 4 — DETEKTIF LABEL KEMASAN",
    desc: "Periksa label makanan dengan cermat menggunakan kaca pembesar. Temukan zat aditif tersembunyi sesuai misi!",
    missions: [
      {
        id: "m1",
        targetRole: "Pengawet Sintetis",
        targetHint: "Cari zat yang bertugas menghentikan pembusukan mikroba.",
        correctAnswer: "Natrium Benzoat",
        options: ["Tepung Terigu", "Natrium Benzoat", "Minyak Kelapa", "Gula Pasir"]
      },
      {
        id: "m2",
        targetRole: "Pewarna Sintetis Kuning",
        targetHint: "Cari zat aditif berkode indeks warna CI.",
        correctAnswer: "Tartrazin CI 19140",
        options: ["Garam", "Perisa Vanila", "Tartrazin CI 19140", "Asam Sitrat"]
      },
      {
        id: "m3",
        targetRole: "Pengemulsi Alami",
        targetHint: "Cari zat dari kedelai atau telur pengikat emulsi.",
        correctAnswer: "Lesitin",
        options: ["Lesitin", "Sakarin", "Formalin", "Amil Asetat"]
      }
    ]
  },

  game5_healthy_mission: {
    title: "GAME 5 — MISI HIDUP SEHAT: KEPUTUSAN GENERASI EMAS",
    desc: "Hadapi 4 skenario kehidupan nyata remaja. Pilih keputusan terbaik untuk melindungi kesehatan fisik, mental, dan masa depanmu!",
    scenarios: [
      {
        id: "sc1",
        scene: "Sore hari setelah pulang sekolah, seorang teman mengajak mampir ke sebuah rumah kosong dan mengeluarkan bungkusan berisi lem perekat berbau menyengat untuk dihirup bersama.",
        question: "Keputusan cerdas apa yang kamu ambil?",
        choices: [
          { text: "Mencoba menghirup sedikit karena penasaran efeknya", scoreDelta: -20, feedback: "Salah besar! Menghirup uap lem (inhalan) membunuh jutaan sel saraf otak secara langsung dan memicu kematian mendadak!" },
          { text: "Menolak tegas: 'Nggak mau sob, itu uap racun pembunuh sel otak!', segera tinggalkan lokasi dan ajak temanmu menjauh dari bahaya tersebut", scoreDelta: +30, feedback: "Hebat! Keputusan asertif menyelamatkan sel otakmu dan menunjukkan karakter pemimpin sejati." },
          { text: "Diam saja menemani teman menghirup tanpa ikut mencoba", scoreDelta: -10, feedback: "Kurang tepat. Menghirup uap sampingannya tetap berbahaya bagi paru-parumu dan membuatmu terjebak dalam bahaya hukum." }
        ]
      },
      {
        id: "sc2",
        scene: "Menjelang ujian akhir semester, kamu merasa sangat mengantuk saat belajar di malam hari. Seorang kenalan menawarkan pil obat penenang tanpa resep agar katanya pikiranmu tenang.",
        question: "Apa tindakan terbaik yang harus kamu lakukan?",
        choices: [
          { text: "Meminum pil tersebut karena ingin segera tenang dan tertidur", scoreDelta: -20, feedback: "Bahaya! Mengonsumsi obat penenang/psikotropika tanpa resep dokter adalah penyalahgunaan zat ilegal dan merusak sistem saraf." },
          { text: "Menolak obat tersebut, memilih cuci muka dengan air dingin, peregangan ringan, tidur cukup 7 jam, dan bangun lebih pagi untuk mengulang belajar", scoreDelta: +30, feedback: "Sempurna! Manajemen waktu tidur yang sehat adalah kunci performa otak maksimal saat ujian." },
          { text: "Meminum 5 cangkir kopi pekat berturut-turut sampai pagi", scoreDelta: 0, feedback: "Kurang baik. Kafein dosis berlebih memicu palpitasi jantung berdebar dan justru membuat otak panik saat ujian." }
        ]
      },
      {
        id: "sc3",
        scene: "Di kantin, ada penjual es sirup berwarna merah sangat menyala berpendar tanpa merk dan tanpa tanggal kedaluwarsa dengan harga seribu rupiah.",
        question: "Bagaimana keputusan belanjamu?",
        choices: [
          { text: "Memilih air mineral atau jus buah murni berizin edar BPOM yang jelas komposisinya", scoreDelta: +30, feedback: "Tepat sekali! Memilih pangan aman dengan prinsip CEK KLIK melindungi organ hati dan ginjal dari zat karsinogenik." },
          { text: "Membeli es sirup merah menyala tersebut karena sangat haus dan murah", scoreDelta: -20, feedback: "Waspada! Warna menyala berpendar adalah indikasi pewarna tekstil berbahaya Rhodamin B pemicu kanker." }
        ]
      }
    ]
  }
};
