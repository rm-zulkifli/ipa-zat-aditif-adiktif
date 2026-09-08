/**
 * BANK SOAL LENGKAP (50+ SOAL) IPA SMP/MTs KELAS IX FASE D
 * Topik: Zat Aditif dan Zat Adiktif
 * Tipe: Pilihan Ganda, Benar/Salah, Pilihan Ganda Kompleks, Kasus HOTS
 */

const QUESTION_BANK = [
  // --- BAB 1: ZAT ADITIF (Soal 1 - 26) ---
  {
    id: 1,
    category: "aditif",
    type: "single",
    question: "Tujuan utama penambahan zat aditif pada bahan makanan kemasan adalah untuk...",
    options: [
      "Menggantikan seluruh kandungan karbohidrat dan protein",
      "Memperbaiki tampilan, cita rasa, tekstur, dan memperpanjang daya simpan makanan",
      "Membuat makanan menjadi obat segala macam penyakit",
      "Menurunkan kualitas bahan baku agar harga jual lebih murah"
    ],
    answer: 1,
    explanation: "Zat aditif (BTP) ditambahkan dengan sengaja untuk tujuan teknologi pangan, seperti mempercantik warna, menyedapkan rasa, menstabilkan tekstur, dan mencegah pembusukan.",
    points: 10
  },
  {
    id: 2,
    category: "aditif",
    type: "single",
    question: "Ibu ingin membuat kue klepon tradisional berwarna hijau alami yang harum. Bahan dapur yang paling tepat digunakan adalah...",
    options: [
      "Kunyit dan wortel",
      "Daun suji dan daun pandan",
      "Buah naga dan cabai merah",
      "Tartrazin dan sunset yellow"
    ],
    answer: 1,
    explanation: "Daun suji menghasilkan pigmen klorofil alami berwarna hijau pekat, sedangkan daun pandan memberikan aroma wangi khas yang sangat aman untuk makanan.",
    points: 10
  },
  {
    id: 3,
    category: "aditif",
    type: "single",
    question: "Zat pemanis buatan yang sering digunakan pada minuman berkarbonasi 'diet/zero calories' dan manisnya 200 kali gula pasir adalah...",
    options: [
      "Aspartam",
      "Sukrosa",
      "Glukosa",
      "Maltosa"
    ],
    answer: 0,
    explanation: "Aspartam adalah pemanis sintetis intensitas tinggi (sekitar 200x sukrosa) yang tidak menyumbang kalori signifikan pada takaran penggunaannya.",
    points: 10
  },
  {
    id: 4,
    category: "aditif",
    type: "boolean",
    question: "Benar atau Salah: Garam dapur dapat bertindak sebagai pengawet alami karena mampu menarik air dari sel mikroba pembusuk melalui proses osmosis sehingga bakteri tidak bisa berkembang biak.",
    options: ["Benar", "Salah"],
    answer: 0,
    explanation: "Pernyataan BENAR. Garam pekat menciptakan tekanan osmotik tinggi yang mengeringkan sel mikroorganisme (plasmolisis) sehingga makanan awet secara alami.",
    points: 10
  },
  {
    id: 5,
    category: "aditif",
    type: "single",
    question: "Pewarna tekstil yang dilarang keras untuk makanan karena bersifat karsinogenik (pemicu kanker) dan sering disalahgunakan untuk sirup merah mencolok adalah...",
    options: [
      "Allura Red",
      "Rhodamin B",
      "Karmin",
      "Eritrosin"
    ],
    answer: 1,
    explanation: "Rhodamin B adalah zat pewarna sintetis untuk industri kain, kertas, dan wol. Jika masuk ke tubuh dapat merusak hati, ginjal, dan memicu kanker ganas.",
    points: 10
  },
  {
    id: 6,
    category: "aditif",
    type: "single",
    question: "Senyawa ester sintetis 'Amil Asetat' sering ditambahkan pada sirup atau permen karena menghasilkan sensasi aroma buah...",
    options: [
      "Pisang",
      "Apel",
      "Jeruk",
      "Nanas"
    ],
    answer: 0,
    explanation: "Amil asetat (senyawa ester) memiliki karakteristik wangi harum menyerupai buah pisang ambon alami.",
    points: 10
  },
  {
    id: 7,
    category: "aditif",
    type: "single",
    question: "Zat pengawet sintetis yang umum dan diizinkan BPOM untuk produk saus tomat dan minuman sari buah dalam batas tertentu adalah...",
    options: [
      "Formalin",
      "Natrium Benzoat",
      "Boraks",
      "Methanil Yellow"
    ],
    answer: 1,
    explanation: "Natrium Benzoat adalah pengawet resmi yang efektif menghambat pertumbuhan jamur dan khamir pada produk olahan pangan yang bersifat asam.",
    points: 10
  },
  {
    id: 8,
    category: "aditif",
    type: "complex",
    question: "Manakah dari kelompok bahan berikut yang semuanya merupakan ZAT ADITIF ALAMI? (Pilih jawaban yang benar)",
    options: [
      "Kunyit, Madu, dan Daun Pandan",
      "Tartrazin, Aspartam, dan Natrium Benzoat",
      "Gula Aren, Bawang Putih, dan Wortel",
      "Sakarin, Siklamat, dan Karamel IV"
    ],
    multiAnswers: [0, 2],
    explanation: "Kunyit, madu, daun pandan, gula aren, bawang putih, dan wortel semuanya berasal dari tumbuhan alamiah tanpa proses sintesis kimia buatan.",
    points: 15
  },
  {
    id: 9,
    category: "aditif",
    type: "single",
    question: "Kuning telur dapat menyatukan campuran minyak dan cuka pada pembuatan saus mayones karena mengandung zat pengemulsi alami, yaitu...",
    options: [
      "Lesitin",
      "Kasein",
      "Albumin",
      "Gluten"
    ],
    answer: 0,
    explanation: "Lesitin adalah fosfolipid alami yang memiliki gugus hidrofilik (suka air) dan lipofilik (suka lemak), sehingga ampuh menstabilkan emulsi minyak dan air.",
    points: 10
  },
  {
    id: 10,
    category: "aditif",
    type: "single",
    question: "Zat kimia pembersih lantai yang berbahaya dan sering disalahgunakan oleh oknum untuk mengenyalkan bakso serta mie basah adalah...",
    options: [
      "Asam Sitrat",
      "Boraks",
      "Kalsium Laktat",
      "Dinatrium Fosfat"
    ],
    answer: 1,
    explanation: "Boraks (asam borat / natrium tetraborat) adalah bahan kimia industri non-pangan yang dilarang keras karena terakumulasi di otak, hati, dan ginjal.",
    points: 10
  },
  {
    id: 11,
    category: "aditif",
    type: "boolean",
    question: "Benar atau Salah: Pada label komposisi kemasan makanan berizin resmi, urutan bahan yang dicantumkan pertama kali menunjukkan bahan dengan persentase massa paling sedikit.",
    options: ["Benar", "Salah"],
    answer: 1,
    explanation: "Pernyataan SALAH. Aturan standar BPOM mewajibkan komposisi diurutkan dari bahan yang bobot/persentasenya PALING BANYAK ke paling sedikit.",
    points: 10
  },
  {
    id: 12,
    category: "aditif",
    type: "single",
    question: "Monosodium Glutamat (MSG) menghasilkan sensasi rasa dasar kelima yang dikenal dengan istilah...",
    options: [
      "Pahit",
      "Umami (Gurih)",
      "Asam",
      "Kelat"
    ],
    answer: 1,
    explanation: "MSG mengandung asam amino glutamat yang berikatan dengan reseptor rasa umami (gurih lezat) pada lidah manusia.",
    points: 10
  },
  {
    id: 13,
    category: "aditif",
    type: "single",
    question: "Batas asupan harian maksimal suatu zat aditif per kilogram berat badan yang aman dikonsumsi seumur hidup tanpa risiko kesehatan disebut...",
    options: [
      "ADI (Acceptable Daily Intake)",
      "BMR (Basal Metabolic Rate)",
      "LD50 (Lethal Dose 50)",
      "BMI (Body Mass Index)"
    ],
    answer: 0,
    explanation: "ADI (Acceptable Daily Intake) adalah batas aman konsumsi harian yang ditetapkan oleh komite gabungan FAO/WHO (JECFA) dan BPOM.",
    points: 10
  },
  {
    id: 14,
    category: "aditif",
    type: "single",
    question: "Perhatikan prinsip 'CEK KLIK' dari BPOM. Huruf 'I' dalam akronim tersebut bermakna...",
    options: [
      "Inovasi produk",
      "Izin Edar",
      "Indeks rasa",
      "Informasi harga"
    ],
    answer: 1,
    explanation: "CEK KLIK adalah Cek Kemasan, Cek Label, Cek Izin Edar (BPOM RI MD/ML atau P-IRT), dan Cek Kedaluwarsa.",
    points: 10
  },
  {
    id: 15,
    category: "aditif",
    type: "single",
    question: "Pigmen warna alami kuning yang terdapat pada rimpang kunyit dinamakan...",
    options: [
      "Klorofil",
      "Kurkumin",
      "Antosianin",
      "Karotenoid"
    ],
    answer: 1,
    explanation: "Kurkumin adalah senyawa polifenol alami pembawa warna kuning-jingga pada kunyit yang juga berfungsi sebagai antioksidan alami.",
    points: 10
  },
  {
    id: 16,
    category: "aditif",
    type: "boolean",
    question: "Benar atau Salah: Formalin adalah cairan 37% gas formaldehida dalam air yang aman digunakan untuk mengawetkan ikan segar konsumsi manusia.",
    options: ["Benar", "Salah"],
    answer: 1,
    explanation: "Pernyataan SALAH BESAR! Formalin adalah zat pengawet mayat dan spesimen biologi, bersifat racun keras dan dilarang keras untuk semua bahan pangan.",
    points: 10
  },
  {
    id: 17,
    category: "aditif",
    type: "single",
    question: "Senyawa ester yang menghasilkan aroma khas buah apel segar adalah...",
    options: [
      "Amil Valerat",
      "Etil Butirat",
      "Oktil Asetat",
      "Isobutil Asetat"
    ],
    answer: 0,
    explanation: "Amil valerat adalah ester sintetik yang memberikan aroma khas buah apel hijau segar.",
    points: 10
  },
  {
    id: 18,
    category: "aditif",
    type: "complex",
    question: "Manakah zat berikut yang termasuk kelompok pemanis sintetis berkalori sangat rendah? (Pilih jawaban yang benar)",
    options: [
      "Sakarin",
      "Sukrosa",
      "Siklamat",
      "Gula Aren"
    ],
    multiAnswers: [0, 2],
    explanation: "Sakarin dan Siklamat adalah pemanis buatan nir-gizi / rendah kalori, sedangkan sukrosa dan gula aren adalah pemanis alami berkalori tinggi.",
    points: 15
  },
  {
    id: 19,
    category: "aditif",
    type: "single",
    question: "Asam sitrat sering ditambahkan pada pembuatan selai buah dan minuman kemasan berkarbonasi berfungsi ganda sebagai...",
    options: [
      "Pengatur keasaman (pemberi rasa asam segar) dan antioksidan",
      "Pewarna biru dan pemanis",
      "Pengawet mayat dan pengemulsi",
      "Pemberi aroma pisang"
    ],
    answer: 0,
    explanation: "Asam sitrat memberikan rasa asam segar yang menyenangkan sekaligus menurunkan pH untuk membantu stabilitas produk dari oksidasi.",
    points: 10
  },
  {
    id: 20,
    category: "aditif",
    type: "single",
    question: "Tanda bahwa makanan olahan dicurigai mengandung zat pewarna sintetis tekstil terlarang seperti Rhodamin B adalah...",
    options: [
      "Warna tidak merata dan cepat pudar jika terkena sinar matahari",
      "Warnanya mencolok, berpendar (fluoresen), dan meninggalkan bercak tajam yang sulit hilang di lidah/kulit",
      "Aromanya harum khas daun suji segar",
      "Memiliki izin edar resmi BPOM RI MD di kemasannya"
    ],
    answer: 1,
    explanation: "Pewarna tekstil memiliki ciri warna sangat mencolok, berpendar tajam, dan sukar larut/terbilas dari jaringan kulit atau lidah.",
    points: 10
  },
  {
    id: 21,
    category: "aditif",
    type: "boolean",
    question: "Benar atau Salah: Penderita penyakit genetik Fenilketonuria (PKU) dilarang mengonsumsi produk berpemanis Aspartam karena tubuh mereka tidak dapat memecah asam amino fenilalanin.",
    options: ["Benar", "Salah"],
    answer: 0,
    explanation: "Pernyataan BENAR. Aspartam terurai menjadi asam aspartat, fenilalanin, dan metanol. Penderita PKU tidak mampu memetabolisme fenilalanin.",
    points: 10
  },
  {
    id: 22,
    category: "aditif",
    type: "single",
    question: "Pengawet alami yang dihasilkan dari proses fermentasi larutan gula atau alkohol oleh bakteri Acetobacter aceti dan berasa asam adalah...",
    options: [
      "Cuka (Asam Asetat)",
      "Minyak kelapa",
      "Madu",
      "Garam sendawa"
    ],
    answer: 0,
    explanation: "Asam asetat (cuka makan) menciptakan suasana asam (pH rendah) yang menghambat bakteri pembusuk, lazim dipakai pada pembuatan acar.",
    points: 10
  },
  {
    id: 23,
    category: "aditif",
    type: "single",
    question: "Antioksidan BHA (Butylated Hydroxyanisole) dan BHT sering ditambahkan pada margarin atau minyak nabati dengan tujuan...",
    options: [
      "Mencegah proses oksidasi yang menyebabkan ketengikan minyak",
      "Memberikan warna kuning menyala",
      "Meningkatkan rasa manis gula",
      "Membasmi seluruh bakteri di udara"
    ],
    answer: 0,
    explanation: "Antioksidan berfungsi mengikat radikal bebas oksigen sehingga rantai lemak tidak teroksidasi menjadi senyawa tengik berbau busuk.",
    points: 10
  },
  {
    id: 24,
    category: "aditif",
    type: "single",
    question: "Bahan pewarna alami yang menghasilkan warna biru tua dan berubah ungu jika ditambahkan air perasan jeruk nipis berasal dari...",
    options: [
      "Bunga Telang",
      "Kunyit",
      "Wortel",
      "Cabai Merah"
    ],
    answer: 0,
    explanation: "Bunga telang kaya antosianin yang sensitif terhadap tingkat keasaman (pH); warna biru akan bergeser menjadi ungu anggur saat terkena asam sitrat jeruk nipis.",
    points: 10
  },
  {
    id: 25,
    category: "aditif",
    type: "single",
    question: "Penggunaan bahan pengawet Natrium Nitrit pada sosis atau kornet bertujuan menghambat pertumbuhan bakteri mematikan penghasil racun saraf, yaitu...",
    options: [
      "Clostridium botulinum",
      "Lactobacillus bulgaricus",
      "Saccharomyces cerevisiae",
      "Escherichia coli"
    ],
    answer: 0,
    explanation: "Natrium nitrit sangat efektif mencegah spora bakteri Clostridium botulinum (penyebab penyakit botulisme mematikan) tumbuh pada olahan daging anaerob.",
    points: 10
  },
  {
    id: 26,
    category: "aditif",
    type: "complex",
    question: "Ciri-ciri fisik tahu putih yang dicurigai mengandung pengawet terlarang FORMALIN antara lain: (Pilih jawaban yang benar)",
    options: [
      "Tekstur tahu sangat kenyal membal dan tidak mudah hancur jika ditekan",
      "Tahan disimpan lebih dari 3-5 hari di suhu ruang tanpa basi atau berbau asam",
      "Sangat lunak dan cepat basi berlendir dalam waktu 24 jam pada suhu ruang",
      "Lalat enggan hinggap pada permukaan tahu"
    ],
    multiAnswers: [0, 1, 3],
    explanation: "Tahu berformalin bertekstur liat kenyal tidak wajar, tidak membusuk hingga berhari-hari, dan serangga/lalat tidak mau mendekat karena bau kimia menyengat.",
    points: 15
  },

  // --- BAB 2: ZAT ADIKTIF (Soal 27 - 52) ---
  {
    id: 27,
    category: "adiktif",
    type: "single",
    question: "Zat bukan makanan yang apabila dikonsumsi dapat menimbulkan ketergantungan fisik dan psikis sehingga pemakai ingin terus menggunakannya disebut...",
    options: [
      "Zat Aditif",
      "Zat Adiktif",
      "Zat Nutrisi",
      "Zat Katalis"
    ],
    answer: 1,
    explanation: "Zat adiktif adalah zat yang menyebabkan adiksi (ketergantungan dan kecanduan sistem saraf) jika masuk ke dalam tubuh.",
    points: 10
  },
  {
    id: 28,
    category: "adiktif",
    type: "single",
    question: "Zat adiktif utama di dalam daun tembakau rokok yang menyebabkan detak jantung meningkat, penyempitan pembuluh darah, dan kecanduan kuat adalah...",
    options: [
      "Tar",
      "Nikotin",
      "Karbon Monoksida",
      "Benzena"
    ],
    answer: 1,
    explanation: "Nikotin adalah alkaloid stimulan adiktif pada tembakau yang menstimulasi kelenjar adrenal dan memicu lonjakan dopamin di otak.",
    points: 10
  },
  {
    id: 29,
    category: "adiktif",
    type: "single",
    question: "Kondisi tubuh seorang pengguna yang membutuhkan dosis zat yang makin meningkat untuk mendapatkan sensasi efek yang sama seperti semula dinamakan...",
    options: [
      "Toleransi",
      "Resonansi",
      "Hipertensi",
      "Imunitas"
    ],
    answer: 0,
    explanation: "Toleransi terjadi saat reseptor otak terbiasa dengan paparan zat kimia, sehingga dibutuhkan takaran yang lebih besar agar memberikan efek serupa.",
    points: 10
  },
  {
    id: 30,
    category: "adiktif",
    type: "boolean",
    question: "Benar atau Salah: Tar dalam asap rokok adalah cairan kental lengket karsinogenik yang mengendap di alveolus paru-paru dan melumpuhkan silia pembersih saluran pernapasan.",
    options: ["Benar", "Salah"],
    answer: 0,
    explanation: "Pernyataan BENAR. Tar menempel lengket di saluran pernapasan, merusak sel-sel bersilia, dan menjadi penyebab utama kanker paru pada perokok.",
    points: 10
  },
  {
    id: 31,
    category: "adiktif",
    type: "single",
    question: "Gas beracun dalam asap rokok yang mengikat hemoglobin darah jauh lebih kuat daripada oksigen adalah...",
    options: [
      "Karbon Dioksida (CO2)",
      "Karbon Monoksida (CO)",
      "Sulfur Dioksida (SO2)",
      "Nitrogen Oksida (NO)"
    ],
    answer: 1,
    explanation: "Karbon monoksida (CO) mengikat hemoglobin sekitar 200-250 kali lebih kuat daripada oksigen, membentuk karboksihemoglobin (HbCO) yang membuat tubuh hipoksia.",
    points: 10
  },
  {
    id: 32,
    category: "adiktif",
    type: "single",
    question: "Berdasarkan efek kerjanya pada sistem saraf pusat, zat seperti Kokain dan Sabu-sabu (Amfetamin) digolongkan sebagai zat...",
    options: [
      "Depresan",
      "Stimulan",
      "Halusinogen",
      "Anestetik"
    ],
    answer: 1,
    explanation: "Stimulan memicu dan mempercepat denyut jantung, tekanan darah, dan laju aktivitas sistem saraf pusat secara berlebih.",
    points: 10
  },
  {
    id: 33,
    category: "adiktif",
    type: "single",
    question: "Zat yang menekan dan memperlambat aktivitas sistem saraf pusat, menimbulkan rasa mengantuk dan menurunkan refleks tubuh adalah kelompok...",
    options: [
      "Stimulan",
      "Depresan",
      "Halusinogen",
      "Karsinogen"
    ],
    answer: 1,
    explanation: "Depresan (seperti alkohol, obat sedatif, morfin) memperlambat transmisi impuls saraf sehingga respon tubuh menjadi sangat lambat.",
    points: 10
  },
  {
    id: 34,
    category: "adiktif",
    type: "single",
    question: "Zat psikoaktif yang menyebabkan penggunanya mengalami halusinasi melihat atau mendengar hal-hal yang tidak nyata serta distorsi waktu adalah...",
    options: [
      "Halusinogen (contohnya LSD)",
      "Kafein",
      "Nikotin",
      "Natrium Benzoat"
    ],
    answer: 0,
    explanation: "Halusinogen seperti LSD dan jamur psilosibin mengacaukan pemrosesan persepsi sensorik di otak sehingga timbul halusinasi visual dan auditori.",
    points: 10
  },
  {
    id: 35,
    category: "adiktif",
    type: "single",
    question: "Menurut UU Narkotika No. 35 Tahun 2009, narkotika yang hanya boleh digunakan untuk riset/ilmu pengetahuan dan TIDAK BOLEH digunakan dalam pengobatan medis karena potensi adiksinya sangat tinggi termasuk dalam...",
    options: [
      "Golongan I (seperti Ganja, Heroin, Kokain)",
      "Golongan II (seperti Morfin, Petidin)",
      "Golongan III (seperti Kodein)",
      "Golongan IV"
    ],
    answer: 0,
    explanation: "Narkotika Golongan I dilarang keras untuk terapi medis klinis karena derajat ketergantungannya yang luar biasa berbahaya.",
    points: 10
  },
  {
    id: 36,
    category: "adiktif",
    type: "boolean",
    question: "Benar atau Salah: Rokok elektronik (Vape) sepenuhnya aman bagi remaja karena uapnya hanya terdiri dari uap air murni tanpa kandungan zat beracun.",
    options: ["Benar", "Salah"],
    answer: 1,
    explanation: "Pernyataan SALAH BESAR! Liquid vape mengandung nikotin adiktif konsentrasi tinggi, perisa kimiawi karsinogenik, dan partikel logam berat pemicu penyakit paru EVALI.",
    points: 10
  },
  {
    id: 37,
    category: "adiktif",
    type: "single",
    question: "Penyalahgunaan minuman keras beralkohol dalam jangka panjang dapat menyebabkan kerusakan jaringan organ hati mengeras dan berparut permanen yang dinamakan...",
    options: [
      "Sirosis Hati",
      "Gagal Ginjal",
      "Pneumonia",
      "Bronkitis"
    ],
    answer: 0,
    explanation: "Sirosis hati adalah kerusakan lanjut pada organ hati akibat peradangan kronis oleh racun alkohol yang merusak sel-sel parenkim hati.",
    points: 10
  },
  {
    id: 38,
    category: "adiktif",
    type: "single",
    question: "Zat kimia industri yang sering dicampurkan pada miras oplosan dan dapat merusak saraf mata hingga menyebabkan kebutaan permanen dan kematian mendadak adalah...",
    options: [
      "Etanol",
      "Metanol",
      "Gliserol",
      "Aseton"
    ],
    answer: 1,
    explanation: "Metanol (spiritus) di dalam tubuh dimetabolisme oleh enzim menjadi formaldehida dan asam format beracun yang menyerang retina mata dan menekan pernapasan.",
    points: 10
  },
  {
    id: 39,
    category: "adiktif",
    type: "single",
    question: "Kondisi sakit fisik dan psikis yang sangat menyiksa ketika seorang pecandu berhenti secara mendadak menggunakan zat adiktif disebut...",
    options: [
      "Gejala putus zat (Sakaw / Withdrawal syndrome)",
      "Imunodefisiensi",
      "Respirasi anaerob",
      "Hemofilia"
    ],
    answer: 0,
    explanation: "Withdrawal syndrome (sakaw) timbul karena sistem saraf yang sudah terbiasa dengan zat adiktif mengalami ketidakseimbangan parah saat pasokan zat terhenti.",
    points: 10
  },
  {
    id: 40,
    category: "adiktif",
    type: "single",
    question: "Zat inhalansia atau solven yang sering disalahgunakan anak remaja dengan cara dihirup (istilah jalanan: 'ngelem') biasanya mengandung senyawa kimia...",
    options: [
      "Toluena dan pelarut hidrokarbon mudah menguap",
      "Asam askorbat (Vitamin C)",
      "Klorofil murni",
      "Garam mineral magnesium"
    ],
    answer: 0,
    explanation: "Uap lem perekat mengandung pelarut hidrokarbon seperti toluena yang larut dalam lemak mielin saraf otak dan membunuh neuron secara masif.",
    points: 10
  },
  {
    id: 41,
    category: "adiktif",
    type: "complex",
    question: "Manakah zat berikut yang termasuk ke dalam kelompok PSIKOTROPIKA menurut UU No. 5 Tahun 1997? (Pilih jawaban yang benar)",
    options: [
      "Ekstasi (MDMA)",
      "Sabu-sabu (Metamfetamin)",
      "Minyak kelapa sawit",
      "Diazepam (Pil penenang)"
    ],
    multiAnswers: [0, 1, 3],
    explanation: "Ekstasi, metamfetamin, dan diazepam adalah zat psikoaktif golongan psikotropika yang memengaruhi aktivitas mental dan sistem saraf pusat.",
    points: 15
  },
  {
    id: 42,
    category: "adiktif",
    type: "single",
    question: "Neurotransmiter alami di otak yang bertanggung jawab atas rasa senang, penghargaan (reward), dan motivasi yang 'dibajak' secara tidak alami oleh zat adiktif adalah...",
    options: [
      "Dopamin",
      "Insulin",
      "Hemoglobin",
      "Melanin"
    ],
    answer: 0,
    explanation: "Zat adiktif merangsang pelepasan dopamin dalam jumlah berlebihan di jalur reward limbik otak, menciptakan asosiasi palsu kenikmatan yang menipu.",
    points: 10
  },
  {
    id: 43,
    category: "adiktif",
    type: "single",
    question: "Orang yang tidak merokok tetapi turut menghirup asap rokok dari orang lain di sekitarnya dinamakan...",
    options: [
      "Perokok aktif",
      "Perokok pasif",
      "Perokok terselubung",
      "Bukan perokok"
    ],
    answer: 1,
    explanation: "Perokok pasif (secondhand smoker) menghirup asap sampingan (sidestream smoke) yang justru mengandung konsentrasi karsinogenik lebih tinggi dibanding asap hisapan utama.",
    points: 10
  },
  {
    id: 44,
    category: "adiktif",
    type: "boolean",
    question: "Benar atau Salah: Kafein yang terdapat pada biji kopi dan daun teh merupakan zat adiktif stimulan ringan yang legal dikonsumsi dalam jumlah wajar.",
    options: ["Benar", "Salah"],
    answer: 0,
    explanation: "Pernyataan BENAR. Kafein adalah zat adiktif golongan bukan narkotika/psikotropika yang menstimulasi saraf pusat agar tetap terjaga.",
    points: 10
  },
  {
    id: 45,
    category: "adiktif",
    type: "single",
    question: "Penggunaan jarum suntik secara bergantian di antara para pemakai narkoba suntik (seperti heroin/putaw) berisiko sangat tinggi menularkan penyakit mematikan...",
    options: [
      "HIV/AIDS dan Hepatitis B / C",
      "Influenza dan batuk pilek biasa",
      "Diabetes melitus",
      "Rabies"
    ],
    answer: 0,
    explanation: "Darah yang tersisa pada jarum suntik menjadi media transmisi langsung virus HIV dan virus hepatitis ke dalam aliran darah pengguna berikutnya.",
    points: 10
  },
  {
    id: 46,
    category: "adiktif",
    type: "single",
    question: "Ketika diajak atau dipaksa oleh teman sebaya untuk mencoba rokok atau obat terlarang, sikap terbaik yang harus ditunjukkan adalah...",
    options: [
      "Asertif (menolak tegas, sopan, mempertahankan prinsip, dan segera meninggalkan lokasi)",
      "Pasif (menerima ajakan agar tidak dikucilkan pertemanan)",
      "Agresif (mengajak teman tersebut berkelahi di tempat)",
      "Mencobanya sedikit untuk membuktikan diri tidak penakut"
    ],
    answer: 0,
    explanation: "Komunikasi asertif memungkinkan kita mempertahankan prinsip kesehatan dan integritas diri dengan tegas tanpa merendahkan orang lain.",
    points: 10
  },
  {
    id: 47,
    category: "adiktif",
    type: "single",
    question: "Salah satu dampak sosial paling nyata yang ditimbulkan dari penyalahgunaan zat terlarang oleh seorang pelajar adalah...",
    options: [
      "Menurunnya prestasi akademik secara drastis, sering membolos, dan keretakan hubungan dengan keluarga",
      "Meningkatnya kebugaran jasmani saat pelajaran olahraga",
      "Mendapat penghargaan dari pihak sekolah",
      "Bertambahnya uang tabungan pribadi"
    ],
    answer: 0,
    explanation: "Adiksi merusak fokus belajar, menguras keuangan untuk membeli zat terlarang, dan merusak keharmonisan komunikasi dalam keluarga.",
    points: 10
  },
  {
    id: 48,
    category: "adiktif",
    type: "boolean",
    question: "Benar atau Salah: Morfin dan Kodein adalah senyawa turunan opium (narkotika) yang memiliki fungsi bermanfaat dalam dunia medis sebagai penghilang rasa nyeri hebat dan pereda batuk kronis di bawah pengawasan resep dokter.",
    options: ["Benar", "Salah"],
    answer: 0,
    explanation: "Pernyataan BENAR. Morfin dan petidin adalah analgesik poten untuk pasien pascaoperasi, sedangkan kodein digunakan sebagai antitusif dengan resep ketat.",
    points: 10
  },
  {
    id: 49,
    category: "adiktif",
    type: "single",
    question: "Hormon endorfin dan dopamin alami yang menyehatkan tubuh serta memicu rasa bahagia sejati dapat diproduksi secara aman melalui kegiatan...",
    options: [
      "Olahraga teratur, menyalurkan hobi kreatif, dan berinteraksi sosial positif",
      "Mengkonsumsi alkohol saat sedih",
      "Mencoba rokok elektrik di tempat sepi",
      "Mengonsumsi obat penenang tanpa resep"
    ],
    answer: 0,
    explanation: "Olahraga fisik merangsang hipofisis melepas hormon endorfin (pereda nyeri dan pemicu rasa senang alami) yang memperkuat imunitas raga tanpa efek samping kecanduan.",
    points: 10
  },
  {
    id: 50,
    category: "adiktif",
    type: "single",
    question: "Bagian otak manusia yang berfungsi untuk berpikir logis, mengambil keputusan bijak, dan mengontrol impuls perilaku yang rentan mengalami kerusakan akibat zat adiktif pada usia remaja adalah...",
    options: [
      "Korteks Prefrontal (Prefrontal Cortex)",
      "Batang Otak (Brainstem)",
      "Medula Oblongata",
      "Saraf Optik"
    ],
    answer: 0,
    explanation: "Korteks prefrontal bertanggung jawab atas fungsi eksekutif, penalaran moral, dan kontrol diri yang masih terus berkembang hingga usia awal 20-an.",
    points: 10
  },
  {
    id: 51,
    category: "aditif",
    type: "single",
    question: "Bahan penyedap alami yang umum digunakan dalam masakan sup dan mengandung senyawa allisin dengan sifat antibakteri alami adalah...",
    options: [
      "Bawang putih",
      "Cabai rawit",
      "Gula pasir",
      "Tartrazin"
    ],
    answer: 0,
    explanation: "Bawang putih mengandung allisin yang memberi aroma gurih khas sekaligus berperan sebagai antibakteri dan antioksidan alami.",
    points: 10
  },
  {
    id: 52,
    category: "adiktif",
    type: "single",
    question: "Seseorang yang ditawari minuman mencurigakan di pesta oleh orang yang baru dikenalnya sebaiknya...",
    options: [
      "Menolak dengan sopan dan memilih minuman kemasan bersegel rapat yang dibuka sendiri",
      "Meminumnya langsung untuk menghargai tawaran tersebut",
      "Mencicipi sedikit untuk mengetahui rasanya",
      "Menyimpannya di dalam saku untuk diminum di rumah"
    ],
    answer: 0,
    explanation: "Minuman terbuka rawan dimasuki obat penenang atau zat berbahaya (spiking). Selalu konsumsi minuman yang segelnya masih utuh dan dibuka sendiri.",
    points: 10
  }
];
