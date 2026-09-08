/**
 * DATA MATERI PEMBELAJARAN IPA SMP/MTs KELAS IX FASE D
 * Topik: "Zat Aditif dan Zat Adiktif"
 * Sesuai Kurikulum Merdeka Fase D
 */

const MATERI_DATA = {
  bab1: {
    id: "bab1",
    title: "BAB 1: ZAT ADITIF PADA MAKANAN & MINUMAN",
    badge: "Zat Aditif",
    description: "Pelajari zat tambahan pada makanan, jenis alami vs sintetis, fungsi, membaca label, serta tips memilih makanan sehat.",
    sections: [
      {
        id: "b1_a",
        sub: "A",
        title: "Pengertian Zat Aditif",
        icon: "🥗",
        content: `
          <p><strong>Zat Aditif</strong> (bahan tambahan pangan/BTP) adalah zat yang sengaja ditambahkan ke dalam makanan atau minuman selama proses pengolahan, pengemasan, atau penyimpanan untuk tujuan tertentu.</p>
          <div class="callout tip">
            <strong>Catatan Penting:</strong> Zat aditif <em>bukanlah bahan utama</em>, melainkan bahan pelengkap yang ditambahkan dalam jumlah kecil untuk meningkatkan mutu makanan.
          </div>
        `,
        examples: ["Menambahkan garam agar sup gurih dan tahan lama", "Menambahkan daun pandan agar kue berwarna hijau dan wangi", "Menambahkan gula untuk memberikan rasa manis."],
        funFact: "Tahukah kamu? Nenek moyang kita sudah menggunakan zat aditif sejak ribuan tahun lalu, seperti garam untuk mengasinkan ikan dan asap kayu untuk mengawetkan daging!",
        question: "Apakah bumbu dapur seperti kunyit dan garam termasuk zat aditif makanan?",
        activity: {
          type: "quick_choice",
          prompt: "Manakah pernyataan yang PALING TEPAT mengenai zat aditif?",
          options: [
            { text: "Bahan pokok pembentuk sumber energi utama tubuh", correct: false },
            { text: "Zat yang sengaja ditambahkan untuk memperbaiki mutu, rasa, warna, atau keawetan makanan", correct: true },
            { text: "Zat berbahaya yang selalu menimbulkan penyakit", correct: false }
          ],
          feedback: "Tepat sekali! Zat aditif sengaja ditambahkan dalam jumlah tertentu untuk tujuan teknologi pangan yang bermanfaat."
        }
      },
      {
        id: "b1_b",
        sub: "B",
        title: "Fungsi Zat Aditif",
        icon: "⚙️",
        content: `
          <p>Zat aditif digunakan oleh industri makanan dan rumah tangga karena memiliki tujuan penting:</p>
          <ul>
            <li><strong>Meningkatkan nilai estetika & daya tarik:</strong> Memberi warna menarik dan aroma menggugah selera.</li>
            <li><strong>Meningkatkan cita rasa:</strong> Memberikan rasa manis, asin, gurih, atau asam yang pas.</li>
            <li><strong>Memperpanjang masa simpan:</strong> Mencegah kebusukan akibat mikroorganisme (bakteri/jamur) atau oksidasi.</li>
            <li><strong>Menjaga konsistensi & tekstur:</strong> Menstabilkan emulsi minyak dan air agar tidak terpisah.</li>
            <li><strong>Memperkaya nilai gizi:</strong> Fortifikasi vitamin atau mineral (misalnya iodium pada garam).</li>
          </ul>
        `,
        examples: ["Susu kental manis tetap stabil karena zat pengemulsi", "Jus kemasan tetap segar hingga berbulan-bulan karena pengawet yang aman"],
        funFact: "Tanpa zat pengawet dan pengemulsi yang aman, distribusi makanan antar pulau di Indonesia akan sangat sulit karena makanan mudah basi di perjalanan!",
        question: "Mengapa es krim tidak cepat meleleh dan terpisah antara lemak susu dan airnya?",
        activity: {
          type: "quick_choice",
          prompt: "Fungsi utama penambahan garam pada pembuatan ikan asin adalah...",
          options: [
            { text: "Hanya untuk pewarna makanan", correct: false },
            { text: "Sebagai pengawet alami dan pemberi rasa gurih", correct: true },
            { text: "Sebagai pemanis buatan", correct: false }
          ],
          feedback: "Benar! Garam menyerap air dari sel mikroba melalui proses osmosis sehingga bakteri pembusuk tidak dapat berkembang biak."
        }
      },
      {
        id: "b1_c",
        sub: "C",
        title: "Jenis-Jenis Zat Aditif",
        icon: "📋",
        content: `
          <p>Berdasarkan fungsinya menurut BPOM dan Permenkes, zat aditif dikelompokkan menjadi beberapa jenis utama:</p>
          <div class="grid-cards">
            <div class="card-item"><span class="ci-icon">🎨</span><strong>Pewarna</strong>: Memperbaiki atau memberi warna.</div>
            <div class="card-item"><span class="ci-icon">🍬</span><strong>Pemanis</strong>: Memberikan rasa manis.</div>
            <div class="card-item"><span class="ci-icon">🛡️</span><strong>Pengawet</strong>: Menghambat mikroba pembusuk.</div>
            <div class="card-item"><span class="ci-icon">🧂</span><strong>Penyedap Rasa</strong>: Mempertegas rasa gurih/umami.</div>
            <div class="card-item"><span class="ci-icon">🌸</span><strong>Pemberi Aroma</strong>: Memberikan aroma sedap.</div>
            <div class="card-item"><span class="ci-icon">🥣</span><strong>Pengemulsi</strong>: Menyatukan air dan lemak.</div>
          </div>
        `,
        examples: ["Tartrazin (pewarna)", "Aspartam (pemanis)", "Natrium Benzoat (pengawet)", "MSG (penyedap)"],
        funFact: "Tubuh manusia memiliki reseptor rasa khusus untuk rasa gurih (umami) yang ditemukan oleh ilmuwan Jepang Kikunae Ikeda pada tahun 1908!",
        question: "Berapa banyak zat aditif yang kamu konsumsi saat sarapan tadi?",
        activity: {
          type: "quick_choice",
          prompt: "Zat aditif yang berfungsi mempertahankan kestabilan campuran minyak dan air disebut...",
          options: [
            { text: "Pengemulsi (Emulsifier)", correct: true },
            { text: "Pemberi aroma (Flavouring)", correct: false },
            { text: "Pemanis (Sweetener)", correct: false }
          ],
          feedback: "Tepat! Pengemulsi seperti lesitin membuat mayones dan cokelat tetap homogen dan tercampur sempurna."
        }
      },
      {
        id: "b1_d",
        sub: "D",
        title: "Zat Aditif Alami",
        icon: "🌿",
        content: `
          <p><strong>Zat aditif alami</strong> berasal dari bahan baku alamiah (tumbuhan, hewan, atau mineral) tanpa melalui rekayasa kimia sintetik buatan pabrik.</p>
          <h4>Karakteristik Zat Aditif Alami:</h4>
          <ul>
            <li>✅ Lebih aman dikonsumsi dan hampir tidak memiliki efek samping berbahaya.</li>
            <li>✅ Beberapa mengandung zat gizi tambahan (seperti antioksidan pada kunyit).</li>
            <li>⚠️ Warna/rasa cenderung kurang pekat dan mudah pudar oleh panas atau cahaya.</li>
            <li>⚠️ Memerlukan jumlah bahan baku yang lebih banyak dalam proses pembuatannya.</li>
          </ul>
        `,
        examples: ["Kunyit (warna kuning kurkumin)", "Daun suji/pandan (warna hijau klorofil)", "Madu dan gula aren (pemanis alami)", "Bawang putih dan cengkih (pengawet alami)"],
        funFact: "Wortel berwarna oranye cerah karena mengandung senyawa beta-karoten, yang di dalam tubuh manusia akan diubah menjadi Vitamin A untuk kesehatan mata!",
        question: "Jika kamu membuat kue ulang tahun, mengapa memilih daun suji lebih sehat daripada pewarna kimia?",
        activity: {
          type: "quick_choice",
          prompt: "Bahan manakah di bawah ini yang merupakan pewarna alami warna merah?",
          options: [
            { text: "Karamel", correct: false },
            { text: "Buah naga merah atau bit", correct: true },
            { text: "Tartrazin", correct: false }
          ],
          feedback: "Tepat! Buah naga dan buah bit kaya pigmen antosianin dan betalain yang menghasilkan warna merah keunguan alami yang sangat aman."
        }
      },
      {
        id: "b1_e",
        sub: "E",
        title: "Zat Aditif Sintetis (Buatan)",
        icon: "🧪",
        content: `
          <p><strong>Zat aditif sintetis</strong> diproduksi melalui proses reaksi kimia di laboratorium atau industri farmasi/pangan.</p>
          <h4>Karakteristik Zat Aditif Sintetis:</h4>
          <ul>
            <li>✅ Warna dan rasa sangat pekat, stabil terhadap pemanasan, dan lebih tahan lama.</li>
            <li>✅ Takaran penggunaannya sedikit sehingga biaya produksi jauh lebih ekonomis.</li>
            <li>⚠️ Harus digunakan sesuai batas aman <strong>ADI (Acceptable Daily Intake)</strong> yang ditetapkan BPOM.</li>
            <li>⚠️ Jika dikonsumsi berlebihan atau dalam jangka panjang, dapat membebani organ hati dan ginjal serta memicu alergi.</li>
          </ul>
        `,
        examples: ["Tartrazin CI 19140 (kuning)", "Sakarin dan Siklamat (pemanis)", "Natrium Benzoat (pengawet)"],
        funFact: "Pemanis buatan seperti Sakarin bisa memiliki tingkat kemanisan hingga 300-500 kali lipat dibanding gula tebu biasa!",
        question: "Mengapa produsen makanan olahan kemasan lebih memilih zat sintetis dibanding alami?",
        activity: {
          type: "quick_choice",
          prompt: "Batas maksimal konsumsi harian suatu zat aditif yang aman bagi tubuh manusia disebut...",
          options: [
            { text: "BMR (Basal Metabolic Rate)", correct: false },
            { text: "ADI (Acceptable Daily Intake)", correct: true },
            { text: "BMI (Body Mass Index)", correct: false }
          ],
          feedback: "Benar sekali! ADI adalah standar internasional yang diadaptasi BPOM untuk menjamin keamanan pangan harian."
        }
      },
      {
        id: "b1_f",
        sub: "F",
        title: "Pewarna Makanan",
        icon: "🎨",
        content: `
          <p>Pewarna ditambahkan untuk memperbaiki warna makanan yang pudar selama pengolahan atau memberi tampilan yang menarik.</p>
          <div class="comparison-table">
            <table>
              <thead>
                <tr><th>Warna</th><th>Alami</th><th>Sintetis Resmi (Aman)</th><th>Pewarna Berbahaya (DILARANG!)</th></tr>
              </thead>
              <tbody>
                <tr><td>Kuning</td><td>Kunyit (Kurkumin)</td><td>Tartrazin, Sunset Yellow</td><td>Methanil Yellow (Pewarna Tekstil)</td></tr>
                <tr><td>Merah</td><td>Buah bit, Tomat, Cabai</td><td>Allura Red, Carmoisine</td><td>Rhodamin B (Pewarna Tekstil/Kertas)</td></tr>
                <tr><td>Hijau</td><td>Daun pandan, Suji (Klorofil)</td><td>Fast Green FCF</td><td>Malachite Green</td></tr>
                <tr><td>Cokelat</td><td>Gula karamel, Cokelat</td><td>Karamel kelas III/IV</td><td>-</td></tr>
                <tr><td>Biru</td><td>Bunga telang</td><td>Brilliant Blue FCF</td><td>-</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout warning">
            <strong>BAHAYA:</strong> <em>Rhodamin B</em> dan <em>Methanil Yellow</em> adalah pewarna kain/tekstil yang sering disalahgunakan pada sirup murah atau kerupuk. Efeknya memicu kanker, kerusakan ginjal, dan keracunan kronis!
          </div>
        `,
        examples: ["Kue bolu pandan memakai sari daun suji", "Sirup berperisa jeruk dengan pewarna Tartrazin resmi berizin BPOM"],
        funFact: "Bunga telang (Clitoria ternatea) memiliki keunikan pigmen antosianin: bila diberi perasan jeruk nipis (asam), warnanya berubah dari biru tua menjadi ungu cerah!",
        question: "Bagaimana cara membedakan warna makanan alami dengan pewarna tekstil berbahaya?",
        activity: {
          type: "quick_choice",
          prompt: "Pewarna tekstil berbahaya yang dilarang keras untuk makanan karena bersifat karsinogenik (pemicu kanker) adalah...",
          options: [
            { text: "Klorofil dan Kurkumin", correct: false },
            { text: "Rhodamin B dan Methanil Yellow", correct: true },
            { text: "Tartrazin dan Allura Red", correct: false }
          ],
          feedback: "Tepat! Rhodamin B (merah) dan Methanil Yellow (kuning) adalah pewarna industri kain yang sangat berbahaya jika tertelan."
        }
      },
      {
        id: "b1_g",
        sub: "G",
        title: "Pemanis Makanan",
        icon: "🍬",
        content: `
          <p>Pemanis berfungsi memberikan sensasi rasa manis pada makanan dan minuman.</p>
          <h4>1. Pemanis Alami:</h4>
          <p>Gula pasir (sukrosa), gula merah/kelapa, gula aren, madu, dan kayu manis. Mengandung kalori sebagai sumber energi tubuh.</p>
          <h4>2. Pemanis Sintetis:</h4>
          <ul>
            <li><strong>Aspartam:</strong> Manis 200x gula tebu. Tidak boleh untuk penderita fenilketonuria (PKU).</li>
            <li><strong>Sakarin:</strong> Manis 300-500x gula tebu. Tingkat kemanisan sangat tinggi dengan aftertaste agak pahit.</li>
            <li><strong>Siklamat:</strong> Manis 30-50x gula pasir, sering digunakan pada minuman saset murah.</li>
            <li><strong>Sorbitol & Xylitol:</strong> Pemanis alkohol rendah kalori, sering untuk permen karet bebas gula ramah gigi.</li>
          </ul>
        `,
        examples: ["Minuman berkarbonasi 'Zero Sugar' menggunakan Aspartam atau Sukralosa", "Gula aren pada minuman cendol tradisional"],
        funFact: "Tanaman Stevia (Stevia rebaudiana) adalah daun herbal yang manis alaminya mencapai 200-300 kali gula tebu tanpa menyumbang kalori!",
        question: "Mengapa penderita diabetes dianjurkan menggunakan pemanis buatan berkalori rendah?",
        activity: {
          type: "quick_choice",
          prompt: "Pemanis buatan yang memiliki tingkat kemanisan ratusan kali gula pasir dan umum ada di minuman 'zero calories' adalah...",
          options: [
            { text: "Sukrosa", correct: false },
            { text: "Aspartam", correct: true },
            { text: "Glukosa", correct: false }
          ],
          feedback: "Benar! Aspartam sangat manis sehingga hanya butuh dosis mikrogram, menjadikannya hampir nol kalori."
        }
      },
      {
        id: "b1_h",
        sub: "H",
        title: "Pengawet Makanan",
        icon: "🛡️",
        content: `
          <p>Pengawet ditambahkan untuk menghambat pertumbuhan mikroba (bakteri, jamur, khamir) serta mencegah reaksi oksidasi agar makanan tidak cepat basi, berjamur, atau tengik.</p>
          <div class="two-col">
            <div class="col-box">
              <h4>Pengawet Alami:</h4>
              <ul>
                <li><strong>Garam dapur:</strong> Menarik air melalui osmosis (contoh: ikan asin, telur asin).</li>
                <li><strong>Gula:</strong> Konsentrasi tinggi menghambat bakteri (contoh: selai, manisan buah).</li>
                <li><strong>Cuka (Asam Asetat):</strong> Menciptakan kondisi asam (contoh: acar sayur).</li>
                <li><strong>Bawang putih & Asap:</strong> Mengandung senyawa antibakteri alami.</li>
              </ul>
            </div>
            <div class="col-box">
              <h4>Pengawet Sintetis Resmi:</h4>
              <ul>
                <li><strong>Natrium Benzoat / Asam Benzoat:</strong> Efektif pada makanan asam (saus, kecap, sari buah).</li>
                <li><strong>Asam Sorbat & Kalium Sorbat:</strong> Mencegah jamur pada roti dan keju.</li>
                <li><strong>Natrium Nitrit:</strong> Menjaga warna merah dan mencegah botulisme pada daging olahan (sosis/kornet).</li>
              </ul>
            </div>
          </div>
          <div class="callout danger">
            <strong>ZAT PENGAWET DILARANG KERAS:</strong>
            <p><strong>Formalin (Formaldehida)</strong> (pengawet mayat/spesimen biologi) dan <strong>Boraks (Asam Borat)</strong> (pembersih lantai/pestisida). Sering disalahgunakan oknum pada bakso, tahu, mie basah agar kenyal dan tahan berhari-hari. Bersifat merusak lambung, hati, ginjal, dan memicu kanker!</p>
          </div>
        `,
        examples: ["Ikan asin dijemur dengan balutan garam", "Saus tomat kemasan diberi natrium benzoat sesuai standar BPOM"],
        funFact: "Madu murni alami tidak akan pernah basi selama ribuan tahun karena kadar airnya sangat rendah (<18%) dan tingkat keasamannya tinggi!",
        question: "Bagaimana cara mencurigai tahu atau bakso yang diduga mengandung formalin atau boraks?",
        activity: {
          type: "quick_choice",
          prompt: "Bahan berbahaya yang sebenarnya adalah pengawet mayat dan dilarang keras untuk makanan adalah...",
          options: [
            { text: "Formalin", correct: true },
            { text: "Asam Sitrat", correct: false },
            { text: "Natrium Benzoat", correct: false }
          ],
          feedback: "Benar! Formalin adalah cairan pengawet mayat yang sangat toksik dan dilarang keras digunakan pada makanan!"
        }
      },
      {
        id: "b1_i",
        sub: "I",
        title: "Penyedap & Penguat Rasa",
        icon: "🧂",
        content: `
          <p>Penyedap rasa berfungsi meningkatkan cita rasa gurih (umami) dan mempertegas kelezatan makanan.</p>
          <h4>1. Penyedap Alami:</h4>
          <p>Bawang merah, bawang putih, merica, ketumbar, lengkuas, daun salam, serai, kaldu daging/tulang, dan terasi.</p>
          <h4>2. Penyedap Sintetis / Olahan:</h4>
          <p><strong>Monosodium Glutamat (MSG) / Vetsin:</strong> Garam natrium dari asam glutamat alami (dibuat dari fermentasi tetes tebu oleh bakteri <em>Corynebacterium glutamicum</em>). Juga ada <strong>Disodium Inosinat (IMP)</strong> dan <strong>Disodium Guanilat (GMP)</strong>.</p>
          <div class="callout tip">
            <strong>Fakta Ilmiah MSG:</strong> MSG secara resmi dinyatakan aman oleh FAO/WHO dan BPOM dalam batas wajar. Namun, individu tertentu yang hipersensitif dapat mengalami sindrom pusing atau haus berlebih bila mengonsumsi berlebihan.
          </div>
        `,
        examples: ["Sop ayam dengan bumbu rempah bawang dan seledri", "Keripik kentang gurih yang ditaburi perisa bumbu MSG"],
        funFact: "Asam glutamat pada MSG sebetulnya sama persis dengan zat gurih alami yang melimpah pada tomat matang, keju parmesan, dan rumput laut!",
        question: "Mengapa masakan tradisional Indonesia terasa sangat sedap meskipun tanpa MSG kemasan?",
        activity: {
          type: "quick_choice",
          prompt: "Monosodium Glutamat (MSG) pada dasarnya memberikan sensasi rasa dasar kelima yang disebut...",
          options: [
            { text: "Pahit", correct: false },
            { text: "Umami (Gurih)", correct: true },
            { text: "Asam", correct: false }
          ],
          feedback: "Tepat! Rasa umami atau gurih melengkapi 4 rasa dasar lainnya (manis, asin, asam, dan pahit)."
        }
      },
      {
        id: "b1_j",
        sub: "J",
        title: "Pemberi Aroma (Flavour)",
        icon: "🌸",
        content: `
          <p>Pemberi aroma ditambahkan untuk memberikan wangi khas tertentu yang menggoda selera makan.</p>
          <h4>1. Pemberi Aroma Alami:</h4>
          <p>Ekstrak vanili, daun pandan wangi, daun jeruk, kayu manis, cengkih, serai, jahe, dan minyak atsiri buah.</p>
          <h4>2. Pemberi Aroma Buatan (Ester Sintetis):</h4>
          <ul>
            <li><strong>Etil butirat:</strong> Aroma buah nanas.</li>
            <li><strong>Amil asetat:</strong> Aroma buah pisang.</li>
            <li><strong>Amil valerat:</strong> Aroma buah apel.</li>
            <li><strong>Oktil asetat:</strong> Aroma buah jeruk.</li>
            <li><strong>Butil butirat:</strong> Aroma buah nanas/apel.</li>
          </ul>
        `,
        examples: ["Kolak pisang diberi daun pandan", "Permen rasa pisang diberi senyawa sintetis amil asetat"],
        funFact: "Senyawa ester sintetis memiliki rumus kimia menyerupai molekul wangi buah asli di alam sehingga hidung kita mencium aroma yang sama!",
        question: "Pernahkah kamu memakan permen rasa pisang tapi di bungkusnya tertulis 'Perisa Identik Alami'?",
        activity: {
          type: "quick_choice",
          prompt: "Senyawa ester sintetis 'Amil Asetat' umumnya memberikan sensasi aroma buah...",
          options: [
            { text: "Pisang", correct: true },
            { text: "Jeruk", correct: false },
            { text: "Nanas", correct: false }
          ],
          feedback: "Tepat sekali! Amil asetat terkenal dengan aroma pisang ambon yang sangat wangi."
        }
      },
      {
        id: "b1_k",
        sub: "K",
        title: "Pengemulsi & Penstabil",
        icon: "🥣",
        content: `
          <p><strong>Pengemulsi (Emulsifier)</strong> adalah zat yang dapat menyatukan dan mempertahankan campuran dua zat yang secara alami tidak bisa menyatu (seperti minyak dan air).</p>
          <p><strong>Penstabil (Stabilizer) & Pengental:</strong> Mencegah pemisahan komponen dan menjaga tekstur kental yang lembut.</p>
          <h4>Contoh Bahan:</h4>
          <ul>
            <li><strong>Lesitin:</strong> Ditemukan alami pada kuning telur dan kedelai (digunakan pada cokelat batangan dan mayones).</li>
            <li><strong>Gelatin & Agar-agar:</strong> Pengental dari kolagen hewan atau rumput laut.</li>
            <li><strong>Pektin:</strong> Serat alami buah untuk mengentalkan selai.</li>
            <li><strong>CMC (Carboxymethyl Cellulose):</strong> Penstabil sintetis pada es krim dan sirup.</li>
          </ul>
        `,
        examples: ["Kuning telur pada pembuatan mayones berfungsi mengikat minyak sayur dan cuka", "Lesitin kedelai membuat cokelat batangan tidak berbutir dan lumer lembut"],
        funFact: "Molekul pengemulsi itu unik! Satu ujungnya bersifat hidrofilik (suka air) dan ujung lainnya lipofilik (suka minyak), bertindak seperti jembatan perekat!",
        question: "Mengapa jika minyak dan air murni dikocok akan terpisah kembali, tapi pada susu keduanya menyatu?",
        activity: {
          type: "quick_choice",
          prompt: "Kandungan kuning telur yang berfungsi sebagai pengemulsi alami pada pembuatan mayones adalah...",
          options: [
            { text: "Lesitin", correct: true },
            { text: "Tartrazin", correct: false },
            { text: "Sakarin", correct: false }
          ],
          feedback: "Benar! Lesitin adalah agen pengemulsi alami terbaik yang menyatukan fase minyak dan air."
        }
      },
      {
        id: "b1_l",
        sub: "L",
        title: "Zat Aditif Sehari-Hari",
        icon: "🛒",
        content: `
          <p>Mari kita amati produk makanan yang sering kita konsumsi sehari-hari beserta zat aditif di dalamnya:</p>
          <div class="food-examples-grid">
            <div class="fe-card">
              <h4>🍜 Mie Instan</h4>
              <p><strong>Pengatur keasaman:</strong> Kalium karbonat</p>
              <p><strong>Penyedap:</strong> MSG, dinatrium inosinat/guanilat</p>
              <p><strong>Pewarna:</strong> Tartrazin CI 19140</p>
              <p><strong>Pengawet mie:</strong> Antioksidan TBHQ</p>
            </div>
            <div class="fe-card">
              <h4>🥤 Minuman Ringan / Soda</h4>
              <p><strong>Pemanis:</strong> Sirup fruktosa / Aspartam</p>
              <p><strong>Pengatur asam:</strong> Asam sitrat / Asam fosfat</p>
              <p><strong>Pengawet:</strong> Natrium benzoat</p>
              <p><strong>Pewarna:</strong> Karamel kelas IV</p>
            </div>
            <div class="fe-card">
              <h4>🥫 Saus Sambal Kemasan</h4>
              <p><strong>Pengawet:</strong> Natrium benzoat & Kalium sorbat</p>
              <p><strong>Pengental:</strong> Pati termodifikasi</p>
              <p><strong>Pewarna:</strong> Ponceau 4R / Sunset Yellow</p>
            </div>
          </div>
        `,
        examples: ["Cek komposisi di bagian belakang bungkus snack favoritmu!"],
        funFact: "Label 'Tanpa Pengawet' pada susu UHT bukan karena bahan kimia, melainkan karena proses sterilisasi pemanasan kilat suhu tinggi (135°C) dan kemasan tetra-pack hampa udara!",
        question: "Apakah makanan olahan modern bisa bebas total dari zat aditif?",
        activity: {
          type: "quick_choice",
          prompt: "Mengapa produsen mie instan menambahkan antioksidan TBHQ pada minyak gorengnya?",
          options: [
            { text: "Supaya mie beraroma harum buah", correct: false },
            { text: "Mencegah minyak mengalami ketengikan oksidatif", correct: true },
            { text: "Memberi rasa sangat manis", correct: false }
          ],
          feedback: "Tepat! Antioksidan mencegah lemak dan minyak teroksidasi oleh oksigen di udara."
        }
      },
      {
        id: "b1_m",
        sub: "M",
        title: "Cara Membaca Label Komposisi",
        icon: "🔍",
        content: `
          <p>Membaca label kemasan (Nutrition Facts & Komposisi) adalah keterampilan hidup penting generasi cerdas:</p>
          <div class="steps-box">
            <div class="step-num">1</div>
            <div><strong>Urutan Komposisi:</strong> Bahan dicantumkan berurutan dari jumlah <em>terbanyak ke paling sedikit</em>. Jika gula berada di urutan 1 atau 2, berarti produk tersebut didominasi gula!</div>
          </div>
          <div class="steps-box">
            <div class="step-num">2</div>
            <div><strong>Cek Izin Edar:</strong> Pastikan terdapat nomor <strong>BPOM RI MD / ML</strong> (pabrik skala besar) atau <strong>P-IRT</strong> (Industri Rumah Tangga resmi).</div>
          </div>
          <div class="steps-box">
            <div class="step-num">3</div>
            <div><strong>Cek Tanggal Kedaluwarsa:</strong> Perhatikan label <em>Best Before</em> (kualitas terbaik) atau <em>Expiry Date</em> (batas aman konsumsi).</div>
          </div>
          <div class="steps-box">
            <div class="step-num">4</div>
            <div><strong>Peringatan Alergen:</strong> Perhatikan tulisan tebal seperti 'Mengandung alergen: kedelai, kacang, susu, atau gluten'.</div>
          </div>
        `,
        examples: ["Komposisi biskuit: Tepung terigu (40%), Gula (25%), Lemak nabati (15%), Garam, Pengemulsi lesitin."],
        funFact: "Jika suatu produk mencantumkan 'Rasa Stroberi' tetapi pada komposisi hanya ada 'Perisa Sintetik Stroberi' tanpa buah stroberi asli, berarti rasanya 100% dari senyawa kimia ester!",
        question: "Apa perbedaan tanda 'Best Before' dan 'Expiry Date' pada kemasan makanan?",
        activity: {
          type: "quick_choice",
          prompt: "Pada daftar komposisi biskuit, bahan yang dicantumkan pada URUTAN PERTAMA menunjukkan...",
          options: [
            { text: "Bahan dengan persentase massa paling banyak", correct: true },
            { text: "Bahan yang paling mahal harganya", correct: false },
            { text: "Zat aditif paling berbahaya", correct: false }
          ],
          feedback: "Benar! Regulasi BPOM mewajibkan komposisi diurutkan dari bahan dengan proporsi terbanyak."
        }
      },
      {
        id: "b1_n",
        sub: "N",
        title: "Cara Memilih Makanan Aman (Tips Cerdas)",
        icon: "✅",
        content: `
          <p>Ikuti rumus <strong>CEK KLIK</strong> dari BPOM sebelum membeli atau mengonsumsi makanan kemasan:</p>
          <div class="grid-cards">
            <div class="card-item"><span class="ci-icon">📦</span><strong>K - Kemasan:</strong> Pastikan tidak sobek, tidak penyok, tidak kembung, dan segel rapat.</div>
            <div class="card-item"><span class="ci-icon">🏷️</span><strong>L - Label:</strong> Baca komposisi, peruntukan, dan cara penyajian.</div>
            <div class="card-item"><span class="ci-icon">📜</span><strong>I - Izin Edar:</strong> Terdaftar resmi BPOM RI atau P-IRT.</div>
            <div class="card-item"><span class="ci-icon">📅</span><strong>K - Kedaluwarsa:</strong> Belum melewati tanggal aman konsumsi.</div>
          </div>
          <div class="callout tip">
            <strong>Tips Tambahan di Kantin Sekolah:</strong>
            <ul>
              <li>Hindari makanan/minuman dengan warna terlalu terang menyala (mencolok) dan berpendar.</li>
              <li>Hindari jajanan yang kenyalnya luar biasa membal tidak wajar (waspada boraks).</li>
              <li>Utamakan makanan segar yang dimasak higienis dibanding jajanan ultra-proses kemasan.</li>
            </ul>
          </div>
        `,
        examples: ["Menolak membeli kerupuk yang berwarna merah menyala berpendar saat jajan di pinggir jalan."],
        funFact: "Slogan CEK KLIK BPOM adalah kampanye nasional Indonesia untuk melindungi pelajar dari bahaya pangan beracun dan ilegal!",
        question: "Bagaimana cara kamu menerapkan prinsip CEK KLIK saat jajan di kantin sekolah?",
        activity: {
          type: "quick_choice",
          prompt: "Singkatan 'CEK KLIK' dari BPOM terdiri dari Cek Kemasan, Label, Izin Edar, dan...",
          options: [
            { text: "Kedaluwarsa", correct: true },
            { text: "Kerapian", correct: false },
            { text: "Keuntungan", correct: false }
          ],
          feedback: "Sempurna! Kedaluwarsa memastikan produk belum rusak secara mikrobiologis dan kimiawi."
        }
      }
    ],
    summary: [
      "Zat aditif adalah bahan yang sengaja ditambahkan ke makanan untuk memperbaiki rupa, rasa, tekstur, aroma, dan keawetan.",
      "Zat aditif terbagi menjadi ALAMI (lebih aman, ramah tubuh) dan SINTETIS (lebih tahan lama, wajib patuh ADI/BPOM).",
      "Jenis zat aditif: Pewarna, Pemanis, Pengawet, Penyedap/Penguat Rasa, Pemberi Aroma, dan Pengemulsi/Penstabil.",
      "Bahan terlarang yang sangat berbahaya pada makanan: Pewarna tekstil (Rhodamin B, Methanil Yellow), Formalin, dan Boraks.",
      "Selalu gunakan prinsip CEK KLIK (Kemasan, Label, Izin Edar, Kedaluwarsa) untuk memilih pangan aman."
    ]
  },

  bab2: {
    id: "bab2",
    title: "BAB 2: ZAT ADIKTIF DAN DAMPAKNYA BAGI TUBUH",
    badge: "Zat Adiktif",
    description: "Pelajari pengertian ketergantungan, nikotin, alkohol, narkotika, psikotropika, inhalan, mekanisme kerja di otak, serta strategi asertif hidup sehat.",
    sections: [
      {
        id: "b2_a",
        sub: "A",
        title: "Pengertian Zat Adiktif",
        icon: "🧠",
        content: `
          <p><strong>Zat Adiktif</strong> adalah zat atau obat-obatan bukan makanan yang apabila dikonsumsi atau masuk ke dalam tubuh dapat menimbulkan efek <strong>ketergantungan (adiksi)</strong>, baik secara fisik maupun psikologis, serta memicu keinginan untuk terus menggunakannya secara terus-menerus.</p>
          <div class="callout warning">
            <strong>Perbedaan Mendasar:</strong><br>
            • <strong>Zat Aditif:</strong> Bahan <em>tambahan pangan</em> untuk mutu makanan.<br>
            • <strong>Zat Adiktif:</strong> Zat yang memicu <em>kecanduan dan ketergantungan</em> pada otak/saraf.
          </div>
        `,
        examples: ["Nikotin pada tembakau rokok", "Kafein pada kopi dan teh dalam dosis berlebih", "Obat penenang yang disalahgunakan"],
        funFact: "Kata 'Adiksi' berasal dari bahasa Latin 'addicere' yang berarti terikat atau menjadi budak dari sesuatu!",
        question: "Mengapa orang yang biasa merokok merasa gelisah jika sehari saja tidak merokok?",
        activity: {
          type: "quick_choice",
          prompt: "Perbedaan utama antara zat aditif dan zat adiktif adalah...",
          options: [
            { text: "Zat aditif untuk makanan, zat adiktif menimbulkan kecanduan/ketergantungan", correct: true },
            { text: "Keduanya adalah bahan kimia yang sama fungsinya", correct: false },
            { text: "Zat adiktif adalah pewarna alami", correct: false }
          ],
          feedback: "Tepat! Zat aditif berkaitan dengan pangan, sedangkan zat adiktif memicu ketergantungan saraf."
        }
      },
      {
        id: "b2_b",
        sub: "B",
        title: "Karakteristik Ketergantungan (Toleransi & Sakaw)",
        icon: "🔄",
        content: `
          <p>Zat adiktif menjerat penggunanya melalui tiga fenomena biologis utama:</p>
          <ul>
            <li><strong>1. Ketergantungan (Adiksi):</strong> Keadaan dorongan kompulsi tak tertahankan untuk terus mengonsumsi zat demi merasakan efek nyaman atau menghindari penderitaan.</li>
            <li><strong>2. Toleransi Tubuh:</strong> Tubuh terbiasa dengan dosis lama, sehingga membutuhkan dosis yang makin meningkat dari waktu ke waktu untuk mendapatkan sensasi efek yang sama.</li>
            <li><strong>3. Gejala Putus Zat (Withdrawal Syndrome / Sakaw):</strong> Respons fisik dan mental yang sangat menyakitkan (menggigil, mual muntah, nyeri sendi hebat, cemas akut) ketika konsumsi zat dihentikan mendadak.</li>
          </ul>
        `,
        examples: ["Seseorang awalnya merokok 1 batang per hari, lama-kelamaan meningkat menjadi 1 bungkus per hari akibat toleransi."],
        funFact: "Otak pengguna yang kecanduan mengalami perubahan struktur saraf permanen bila tidak segera mendapatkan rehabilitasi medis!",
        question: "Mengapa pemakai narkoba sulit berhenti sendiri tanpa pertolongan medis dan rehabilitasi?",
        activity: {
          type: "quick_choice",
          prompt: "Kondisi di mana tubuh memerlukan dosis zat yang semakin besar untuk merasakan efek yang sama disebut...",
          options: [
            { text: "Toleransi tubuh", correct: true },
            { text: "Metabolisme basal", correct: false },
            { text: "Imunisasi", correct: false }
          ],
          feedback: "Benar! Toleransi mendorong korban menaikkan dosis hingga risiko overdosis yang fatal."
        }
      },
      {
        id: "b2_c",
        sub: "C",
        title: "Pengelompokan Zat Adiktif",
        icon: "🗂️",
        content: `
          <p>Berdasarkan sifat farmakologis dan regulasi hukum di Indonesia, zat adiktif dikelompokkan menjadi 3 kelompok besar:</p>
          <div class="grid-cards">
            <div class="card-item"><span class="ci-icon">☕</span><strong>1. Bukan Narkotika & Psikotropika:</strong> Kafein (kopi/teh), Nikotin (rokok/vape), dan Alkohol (etanol).</div>
            <div class="card-item"><span class="ci-icon">🚫</span><strong>2. Narkotika (UU No. 35/2009):</strong> Zat penurun kesadaran, penghilang rasa nyeri (Opium, Morfin, Heroin, Kokain, Ganja).</div>
            <div class="card-item"><span class="ci-icon">💊</span><strong>3. Psikotropika (UU No. 5/1997):</strong> Zat psikoaktif memengaruhi susunan saraf pusat (Ekstasi, Sabu/Amfetamin, Pil Koplo/Diazepam).</div>
          </div>
          <p>Selain itu ada <strong>Zat Inhalansia/Solven</strong> yaitu uap pelarut mudah menguap seperti lem aibon, bensin, dan thinner.</p>
        `,
        examples: ["Kopi mengandung kafein", "Rokok mengandung nikotin", "Obat penenang diazepam termasuk psikotropika."],
        funFact: "Kafein adalah zat psikoaktif yang paling banyak dikonsumsi di seluruh dunia dalam bentuk kopi dan teh setiap harinya!",
        question: "Mengapa rokok dan kopi legal diperjualbelikan padahal mengandung zat adiktif?",
        activity: {
          type: "quick_choice",
          prompt: "Manakah zat di bawah ini yang termasuk zat adiktif BUKAN narkotika dan bukan psikotropika?",
          options: [
            { text: "Heroin dan Kokain", correct: false },
            { text: "Kafein dan Nikotin", correct: true },
            { text: "Ekstasi dan Sabu", correct: false }
          ],
          feedback: "Tepat! Kafein dan nikotin adalah zat adiktif golongan umum di luar narkotika dan psikotropika."
        }
      },
      {
        id: "b2_d",
        sub: "D",
        title: "Bahaya Nikotin & Rokok (Termasuk Vape)",
        icon: "🚬",
        content: `
          <p>Asap rokok mengandung lebih dari <strong>4.000 bahan kimia berbahaya</strong> dan minimal 60 di antaranya bersifat karsinogenik (pemicu kanker). Tiga zat paling berbahaya dalam rokok:</p>
          <ul>
            <li><strong>1. Nikotin:</strong> Zat adiktif sangat kuat yang memacu detak jantung, menyempitkan pembuluh darah, dan menimbulkan kecanduan luar biasa.</li>
            <li><strong>2. Tar:</strong> Cairan kental lengket berwarna cokelat gelap yang mengendap dan melapisi alveolus paru-paru, merusak silia pembersih, dan memicu kanker paru.</li>
            <li><strong>3. Karbon Monoksida (CO):</strong> Gas beracun tak berbau yang mengikat hemoglobin darah 200x lebih kuat daripada oksigen, sehingga sel tubuh kekurangan oksigen.</li>
          </ul>
          <div class="callout warning">
            <strong>Mitos Rokok Elektronik (Vape):</strong> Vape BUKAN uap air biasa! Liquid vape mengandung nikotin cair pekat, propilen glikol, logam berat mikroskopis, dan zat perisa yang memicu kerusakan paru-paru akut (EVALI).
          </div>
        `,
        examples: ["Perokok aktif dan perokok pasif (orang sekitar yang menghirup asap) sama-sama berisiko tinggi terkena penyakit jantung dan kanker."],
        funFact: "Hanya butuh waktu sekitar 7 hingga 10 detik bagi nikotin setelah dihisap untuk mencapai reseptor di otak manusia!",
        question: "Mengapa perokok pasif (seperti anak-anak yang orang tuanya merokok) justru memiliki risiko penyakit paru yang sangat tinggi?",
        activity: {
          type: "quick_choice",
          prompt: "Gas beracun dalam asap rokok yang mengikat hemoglobin darah dan menurunkan pasokan oksigen ke seluruh tubuh adalah...",
          options: [
            { text: "Oksigen (O2)", correct: false },
            { text: "Karbon Monoksida (CO)", correct: true },
            { text: "Karbon Dioksida (CO2)", correct: false }
          ],
          feedback: "Tepat! Karbon monoksida (CO) membuat hemoglobin tidak bisa mengangkut oksigen secara optimal."
        }
      },
      {
        id: "b2_e",
        sub: "E",
        title: "Alkohol & Bahaya Minuman Keras",
        icon: "🍷",
        content: `
          <p>Alkohol (senyawa <strong>Etanol / Etil Alkohol</strong>) adalah zat depresan yang memperlambat fungsi sistem saraf pusat.</p>
          <div class="alcohol-classes">
            <p><strong>Golongan Minuman Beralkohol:</strong></p>
            <ul>
              <li><strong>Golongan A:</strong> Kadar etanol 1% - 5% (contoh: bir).</li>
              <li><strong>Golongan B:</strong> Kadar etanol 5% - 20% (contoh: anggur / wine).</li>
              <li><strong>Golongan C:</strong> Kadar etanol 20% - 55% (contoh: wiski, vodka, rum).</li>
            </ul>
          </div>
          <div class="callout danger">
            <strong>BAHAYA ALKOHOL OPLOSAN:</strong> Alkohol oplosan sering dicampur <em>Metanol</em> (alkohol industri/spiritus). Metanol di dalam tubuh berubah menjadi asam format beracun yang menghancurkan saraf retina mata (menyebabkan <strong>kebutaan permanen</strong>) hingga kematian cepat akibat gagal napas!
          </div>
        `,
        examples: ["Pengemudi mabuk kehilangan refleks koordinasi gerak sehingga memicu kecelakaan lalu lintas fatal."],
        funFact: "Organ hati manusia bekerja sangat keras memetabolisme racun alkohol, dan paparan alkohol terus-menerus menyebabkan sel hati mati mengeras yang disebut <em>Sirosis Hati</em>.",
        question: "Mengapa orang yang berada di bawah pengaruh alkohol bicaranya melantur dan jalannya sempoyongan?",
        activity: {
          type: "quick_choice",
          prompt: "Zat berbahaya yang sering dicampurkan pada miras oplosan dan dapat memicu kebutaan mendadak hingga kematian adalah...",
          options: [
            { text: "Metanol", correct: true },
            { text: "Etanol", correct: false },
            { text: "Glukosa", correct: false }
          ],
          feedback: "Tepat! Metanol adalah bahan kimia industri beracun yang sangat mematikan bagi manusia."
        }
      },
      {
        id: "b2_f",
        sub: "F",
        title: "Narkotika (UU No. 35 Tahun 2009)",
        icon: "🚫",
        content: `
          <p><strong>Narkotika</strong> adalah zat atau obat yang berasal dari tanaman atau bukan tanaman, baik sintetis maupun semisintetis, yang menyebabkan penurunan/perubahan kesadaran, hilangnya rasa, mengurangi sampai menghilangkan rasa nyeri, dan menimbulkan ketergantungan sangat kuat.</p>
          <h4>Tiga Golongan Narkotika Menurut Hukum:</h4>
          <ul>
            <li><strong>Golongan I:</strong> Hanya untuk tujuan pengembangan ilmu pengetahuan, TIDAK DIGUNAKAN dalam terapi medis karena potensi ketergantungan <em>sangat tinggi</em>. Contoh: Tanaman Ganja (mariyuana), Tanaman Koka/Kokain, Opium mentah, Heroin (putaw).</li>
            <li><strong>Golongan II:</strong> Berkhasiat untuk pengobatan sebagai pilihan terakhir, potensi ketergantungan tinggi. Contoh: Morfin, Petidin, Metadon.</li>
            <li><strong>Golongan III:</strong> Berkhasiat luas untuk pengobatan terapi medis, potensi ketergantungan ringan. Contoh: Kodein (obat pereda batuk parah dengan resep dokter ketat).</li>
          </ul>
        `,
        examples: ["Morfin digunakan di rumah sakit dengan pengawasan dokter spesialis ketat untuk pasien pascaoperasi besar."],
        funFact: "Peredaran dan penyalahgunaan narkotika golongan I di Indonesia diancam hukuman pidana penjara sangat berat hingga hukuman mati demi melindungi generasi bangsa!",
        question: "Mengapa obat golongan narkotika hanya boleh diperoleh melalui resep dokter berizin?",
        activity: {
          type: "quick_choice",
          prompt: "Ganja, Heroin, dan Kokain digolongkan dalam Narkotika Golongan...",
          options: [
            { text: "Golongan I", correct: true },
            { text: "Golongan II", correct: false },
            { text: "Golongan III", correct: false }
          ],
          feedback: "Benar! Golongan I dilarang keras untuk terapi umum karena potensi adiksinya amat sangat tinggi."
        }
      },
      {
        id: "b2_g",
        sub: "G",
        title: "Psikotropika (UU No. 5 Tahun 1997)",
        icon: "💊",
        content: `
          <p><strong>Psikotropika</strong> adalah zat atau obat, baik alamiah maupun sintetis bukan narkotika, yang berkhasiat psikoaktif melalui pengaruh selektif pada susunan saraf pusat yang menyebabkan perubahan khas pada aktivitas mental dan perilaku.</p>
          <h4>Golongan Psikotropika:</h4>
          <ul>
            <li><strong>Golongan I:</strong> Potensi amat kuat menyebabkan ketergantungan, tidak untuk terapi medis. Contoh: Ekstasi (MDMA), LSD (Lysergic Acid Diethylamide).</li>
            <li><strong>Golongan II:</strong> Potensi kuat menyebabkan ketergantungan, terapi medis sangat terbatas. Contoh: Amfetamin, Metamfetamin (Sabu-sabu), Ritalin.</li>
            <li><strong>Golongan III:</strong> Potensi sedang menyebabkan ketergantungan, sering digunakan dalam terapi medis. Contoh: Flunitrazepam, Pentobarbital.</li>
            <li><strong>Golongan IV:</strong> Potensi ringan menyebabkan ketergantungan, sangat luas dipakai dalam terapi psikiatri. Contoh: Diazepam, Nitrazepam, Pil Koplo (Lexotan, Dumolid).</li>
          </ul>
        `,
        examples: ["Penyalahgunaan sabu-sabu menyebabkan insomnia parah, paranoid, dan halusinasi mengerikan."],
        funFact: "Ekstasi dan Sabu merangsang pelepasan neurotransmiter dopamin dan serotonin dalam jumlah masif secara tidak alami, yang kemudian membuat cadangan zat kimia otak terkuras habis!",
        question: "Apa efek berbahaya bila seseorang menyalahgunakan obat penenang seperti diazepam tanpa resep?",
        activity: {
          type: "quick_choice",
          prompt: "Sabu-sabu (Metamfetamin) dan Ekstasi adalah contoh zat berbahaya yang termasuk kelompok...",
          options: [
            { text: "Psikotropika", correct: true },
            { text: "Pemanis sintetis", correct: false },
            { text: "Pengawet alami", correct: false }
          ],
          feedback: "Benar! Keduanya adalah psikotropika stimulan yang merusak susunan saraf otak."
        }
      },
      {
        id: "b2_h",
        sub: "H",
        title: "Zat Inhalansia & Solven Berbahaya",
        icon: "⚠️",
        content: `
          <p><strong>Inhalan (Solven)</strong> adalah uap dari bahan kimia cair rumah tangga atau industri yang mudah menguap dan sering disalahgunakan dengan cara dihirup (istilah jalanan: <em>ngelem</em>).</p>
          <h4>Contoh Bahan Inhalan:</h4>
          <ul>
            <li>Lem perekat sepatu (aibon / perekat sintetis berpelarut toluena)</li>
            <li>Thinner cat, bensin, minyak tanah</li>
            <li>Cairan pembersih kuteks kuku (Aseton)</li>
            <li>Gas aerosol semprot</li>
          </ul>
          <div class="callout danger">
            <strong>DAMPAK FATAL NGELEM:</strong> Gas kimia hidrokarbon yang dihirup langsung larut merusak selaput mielin pembungkus saraf otak, menyebabkan kematian sel-sel otak secara mendadak (Sudden Sniffing Death Syndrome), kerusakan ginjal permanen, dan kehilangan kecerdasan mental.
          </div>
        `,
        examples: ["Anak jalanan yang terpapar uap lem mengalami kemunduran fungsi memori, tremor tangan, dan gangguan jiwa."],
        funFact: "Sekali sel saraf otak mati akibat racun kimia inhalan, sel tersebut tidak akan pernah bisa beregenerasi atau tumbuh kembali!",
        question: "Mengapa tindakan menghirup uap lem (ngelem) sangat merusak masa depan remaja?",
        activity: {
          type: "quick_choice",
          prompt: "Dampak fatal paling mengerikan dari penyalahgunaan uap lem (inhalan) pada remaja adalah...",
          options: [
            { text: "Kematian sel-sel saraf otak dan sindrom kematian mendadak", correct: true },
            { text: "Pertumbuhan tulang menjadi lebih cepat", correct: false },
            { text: "Meningkatkan daya konsentrasi belajar", correct: false }
          ],
          feedback: "Tepat! Uap pelarut kimia membunuh sel neuron otak secara langsung dan tak dapat dipulihkan."
        }
      },
      {
        id: "b2_i",
        sub: "I",
        title: "Pengaruh Terhadap Sistem Tubuh (Stimulan, Depresan, Halusinogen)",
        icon: "⚡",
        content: `
          <p>Berdasarkan efek kerjanya pada sistem saraf pusat (SSP), zat adiktif dibagi menjadi 3 kategori kerja:</p>
          <div class="grid-cards">
            <div class="card-item">
              <h4>⚡ 1. STIMULAN</h4>
              <p>Mempercepat kerja sistem saraf dan jantung. Pengguna merasa bertenaga semu, tidak mengantuk, dan euforia berlebih.</p>
              <p><em>Contoh: Kafein, Nikotin, Kokain, Amfetamin/Sabu.</em></p>
            </div>
            <div class="card-item">
              <h4>💤 2. DEPRESAN</h4>
              <p>Memperlambat dan menekan kerja sistem saraf pusat. Menurunkan kesadaran, membuat kantuk, detak jantung melambat.</p>
              <p><em>Contoh: Alkohol, Sedatif/Penenang, Morfin, Heroin.</em></p>
            </div>
            <div class="card-item">
              <h4>🌀 3. HALUSINOGEN</h4>
              <p>Membelokkan persepsi sensori. Pengguna melihat atau mendengar sesuatu yang tidak nyata dan mengalami distorsi realitas.</p>
              <p><em>Contoh: LSD, Jamur psilosibin (magic mushroom), Ganja dosis tertentu.</em></p>
            </div>
          </div>
        `,
        examples: ["Seseorang yang memakai stimulan tampak pupil mata melebar dan berbicara sangat cepat dengan gelisah."],
        funFact: "Efek 'bertenaga' dari stimulan sebenarnya hanyalah ilusi yang memeras habis energi cadangan tubuh tanpa disadari!",
        question: "Jika obat depresan dikonsumsi melebihi dosis, mengapa dapat menyebabkan kematian akibat henti napas?",
        activity: {
          type: "quick_choice",
          prompt: "Zat yang bekerja mempercepat aktivitas sistem saraf pusat dan denyut jantung disebut zat...",
          options: [
            { text: "Depresan", correct: false },
            { text: "Stimulan", correct: true },
            { text: "Halusinogen", correct: false }
          ],
          feedback: "Benar! Stimulan menstimulasi/memacu saraf simpatik dan hormon adrenalin bekerja di atas batas normal."
        }
      },
      {
        id: "b2_j",
        sub: "J",
        title: "Dampak Jangka Pendek",
        icon: "⏱️",
        content: `
          <p>Dampak langsung yang dirasakan tubuh sesaat setelah zat adiktif masuk:</p>
          <ul>
            <li><strong>Fisik:</strong> Detak jantung berdebar kencang atau justru sangat lambat, tekanan darah melonjak, pupil mata membesar/mengecil, mual, pusing berputar, dan hilangnya koordinasi otot.</li>
            <li><strong>Psikis & Perilaku:</strong> Hilangnya kontrol diri, emosi labil, rasa percaya diri semu berlebihan, ketakutan tanpa alasan (paranoid), hingga kebingungan arah.</li>
            <li><strong>Risiko Kritis:</strong> Keracunan akut dan overdosis yang berujung kejang-kejang, koma, dan henti napas.</li>
          </ul>
        `,
        examples: ["Muntah-muntah dan kehilangan kesadaran setelah meminum minuman keras."],
        funFact: "Tubuh kita sebenarnya berusaha menolak racun zat adiktif saat pertama kali mencoba dengan refleks batuk hebat atau mual!",
        question: "Mengapa banyak remaja salah kaprah menganggap merokok bisa menghilangkan stres?",
        activity: {
          type: "quick_choice",
          prompt: "Berikut ini yang merupakan dampak psikis jangka pendek dari zat adiktif stimulan adalah...",
          options: [
            { text: "Gelisah, cemas, paranoid, dan insomnia (sulit tidur)", correct: true },
            { text: "Rasa tenang dan daya ingat meningkat pesat", correct: false },
            { text: "Detak jantung menjadi sangat lambat dan stabil", correct: false }
          ],
          feedback: "Tepat! Stimulan merangsang saraf secara berlebihan sehingga memicu kecemasan dan insomnia."
        }
      },
      {
        id: "b2_k",
        sub: "K",
        title: "Dampak Jangka Panjang",
        icon: "📅",
        content: `
          <p>Penggunaan kronis zat adiktif berbulan-bulan hingga bertahun-tahun menyebabkan kehancuran organ tubuh:</p>
          <div class="organ-grid">
            <div class="organ-card"><strong>🫁 Paru-Paru:</strong> Kanker paru, PPOK, bronkitis kronis, emfisema.</div>
            <div class="organ-card"><strong>❤️ Jantung:</strong> Serangan jantung koroner, hipertensi, stroke pembuluh darah otak.</div>
            <div class="organ-card"><strong>🩺 Hati (Liver):</strong> Sirosis hati mengeras, kanker hati, gagal fungsi metabolisme racun.</div>
            <div class="organ-card"><strong>🩸 Sistem Imun:</strong> Kerusakan sistem kekebalan, risiko infeksi HIV/AIDS dan Hepatitis C akibat jarum suntik bergantian.</div>
          </div>
        `,
        examples: ["Pasien kanker paru-paru stadium akhir yang memiliki riwayat perokok aktif selama puluhan tahun."],
        funFact: "Kerusakan paru-paru akibat asap rokok dan tar membutuhkan waktu pemulihan hingga lebih dari 10 tahun setelah berhenti total!",
        question: "Mengapa pemakaian jarum suntik bergantian di kalangan pengguna putaw sangat rentan menularkan HIV/AIDS?",
        activity: {
          type: "quick_choice",
          prompt: "Kerusakan organ hati akibat konsumsi alkohol berlebih dalam jangka panjang dinamakan...",
          options: [
            { text: "Sirosis hati", correct: true },
            { text: "Bronkitis", correct: false },
            { text: "Gastritis", correct: false }
          ],
          feedback: "Benar! Sirosis hati adalah kondisi jaringan hati normal digantikan oleh jaringan parut yang rusak."
        }
      },
      {
        id: "b2_l",
        sub: "L",
        title: "Dampak Terhadap Otak & Sistem Saraf",
        icon: "🧠",
        content: `
          <p>Bagaimana zat adiktif 'membajak' sistem otak kita?</p>
          <div class="brain-flow">
            <div class="bf-step"><strong>1. Sistem Reward (Pemberi Hadiah):</strong> Secara alami, otak melepas hormon <em>Dopamin</em> saat kita belajar, makan enak, atau berolahraga sebagai sinyal kebahagiaan sehat.</div>
            <div class="bf-step"><strong>2. Banjir Neurotransmiter Palsu:</strong> Zat adiktif memaksa otak membanjiri celah sinapsis saraf dengan dopamin 10x lipat lebih tinggi dari alami.</div>
            <div class="bf-step"><strong>3. Reseptor Rusak & Mengecil:</strong> Otak berusaha bertahan dengan mematikan reseptor dopamin alami. Akibatnya, tanpa zat tersebut, pengguna merasa hampa, depresi berat, dan putus asa.</div>
            <div class="bf-step"><strong>4. Kerusakan Korteks Prefrontal:</strong> Bagian otak depan yang mengatur pengambilan keputusan logis, moral, dan kontrol diri menjadi tumpul.</div>
          </div>
        `,
        examples: ["Siswa yang kecanduan game/zat sulit berkonsentrasi belajar di kelas karena jalur dopamin alaminya terganggu."],
        funFact: "Otak remaja usia SMP masih dalam fase perkembangan emas (pruning sinapsis), sehingga zat adiktif dapat merusak struktur otak remaja jauh lebih cepat dibanding orang dewasa!",
        question: "Mengapa remaja usia SMP berada pada periode paling kritis untuk dilindungi dari segala bentuk zat adiktif?",
        activity: {
          type: "quick_choice",
          prompt: "Zat kimia alami di otak yang mengatur rasa senang, motivasi, dan penghargaan yang dibajak oleh zat adiktif adalah...",
          options: [
            { text: "Dopamin", correct: true },
            { text: "Insulin", correct: false },
            { text: "Hemoglobin", correct: false }
          ],
          feedback: "Tepat! Dopamin adalah neurotransmiter rasa senang alami yang dibajak oleh zat adiktif."
        }
      },
      {
        id: "b2_m",
        sub: "M",
        title: "Dampak Sosial, Ekonomi & Pendidikan",
        icon: "👨‍👩‍👧‍👦",
        content: `
          <p>Dampak zat adiktif tidak hanya merusak raga, tetapi juga menghancurkan masa depan dan kehidupan sosial:</p>
          <ul>
            <li><strong>Keluarga Berantakan:</strong> Hilangnya keharmonisan, pertengkaran terus-menerus, dan trauma psikologis bagi orang tua dan saudara.</li>
            <li><strong>Pendidikan Hancur:</strong> Prestasi belajar anjlok, sering bolos, daya ingat menurun drastis, hingga dikeluarkan dari sekolah (drop out).</li>
            <li><strong>Keruntuhan Finansial:</strong> Menghabiskan tabungan keluarga untuk membeli zat yang mahal, terjerat utang, hingga melakukan tindak pidana pencurian.</li>
            <li><strong>Konflik Hukum:</strong> Berurusan dengan kepolisian, ancaman kurungan penjara, dan hilangnya masa depan karir.</li>
          </ul>
        `,
        examples: ["Banyak kasus kriminalitas remaja seperti tawuran dan pencurian diawali oleh pengaruh minuman keras dan obat terlarang."],
        funFact: "Data BNN menunjukkan kerugian ekonomi negara akibat peredaran gelap narkoba mencapai puluhan triliun rupiah setiap tahunnya!",
        question: "Bagaimana cara kita menjaga persahabatan di sekolah agar tetap bersih dari pengaruh zat berbahaya?",
        activity: {
          type: "quick_choice",
          prompt: "Dampak sosial langsung dari penyalahgunaan zat adiktif pada pelajar adalah...",
          options: [
            { text: "Prestasi akademik turun drastis, isolasi diri, dan renggangnya hubungan keluarga", correct: true },
            { text: "Mendapatkan banyak beasiswa prestasi", correct: false },
            { text: "Meningkatkan kepercayaan guru dan masyarakat", correct: false }
          ],
          feedback: "Benar sekali! Kehidupan sosial dan prestasi sekolah menjadi korban utama jeratan adiksi."
        }
      },
      {
        id: "b2_n",
        sub: "N",
        title: "Pencegahan Penyalahgunaan Zat Adiktif",
        icon: "🛡️",
        content: `
          <p>Pencegahan adalah langkah terbaik melalui 3 pilar benteng pertahanan:</p>
          <div class="steps-box">
            <div class="step-num">1</div>
            <div><strong>Benteng Diri Sendiri (Internal):</strong> Meningkatkan keimanan, memperluas wawasan bahaya narkoba, menumbuhkan rasa percaya diri, dan memiliki cita-cita yang kuat.</div>
          </div>
          <div class="steps-box">
            <div class="step-num">2</div>
            <div><strong>Benteng Keluarga:</strong> Menjaga komunikasi terbuka dan hangat dengan orang tua, saling bercerita tentang masalah yang dihadapi tanpa takut dihakimi.</div>
          </div>
          <div class="steps-box">
            <div class="step-num">3</div>
            <div><strong>Benteng Lingkungan & Sekolah:</strong> Memilih teman bergaul yang suportif dan berakhlak baik, serta aktif dalam kegiatan ekstrakurikuler (PMR, Pramuka, Olahraga, Kesenian).</div>
          </div>
        `,
        examples: ["Mengikuti klub futsal atau musik di sekolah untuk menyalurkan energi muda ke arah yang positif dan berprestasi."],
        funFact: "Remaja yang aktif berorganisasi dan rutin berolahraga memiliki risiko 80% lebih rendah terjerumus kebiasaan merokok dan narkoba!",
        question: "Ekstrakurikuler apa di sekolahmu yang paling kamu sukai untuk menyalurkan bakat positif?",
        activity: {
          type: "quick_choice",
          prompt: "Langkah pencegahan paling mendasar dari dalam diri sendiri untuk menangkal zat adiktif adalah...",
          options: [
            { text: "Memperkuat iman, rasa percaya diri, dan pemahaman tentang bahayanya", correct: true },
            { text: "Mencoba sedikit untuk membuktikan ketahanan tubuh", correct: false },
            { text: "Menjauh dari orang tua dan guru", correct: false }
          ],
          feedback: "Tepat! Ketahanan diri dan pemahaman ilmu yang benar adalah perisai paling kokoh."
        }
      },
      {
        id: "b2_o",
        sub: "O",
        title: "Keterampilan Asertif: Cara Menolak Tawaran",
        icon: "✋",
        content: `
          <p>Sering kali ajakan pertama datang dari teman sebaya dengan alasan 'solidaritas' atau diejek 'penakut'. Gunakan <strong>Teknik Komunikasi Asertif (Tolak Tegas & Santun)</strong>:</p>
          <div class="assertive-techniques">
            <div class="at-card">
              <h4>1. Metode "TIDAK Tegas & Lugas"</h4>
              <p>Katakan langsung dengan kontak mata tegas: <em>"Tidak, terima kasih. Saya tidak merokok/minum itu."</em></p>
            </div>
            <div class="at-card">
              <h4>2. Metode "Beri Alasan Kesehatan"</h4>
              <p><em>"Maaf, saya atlet sekolah/punya asma, saya harus menjaga paru-paru saya."</em></p>
            </div>
            <div class="at-card">
              <h4>3. Metode "Alihkan Topik (Distraksi)"</h4>
              <p><em>"Ah daripada itu, mending kita main basket yuk, atau cari es kelapa di seberang!"</em></p>
            </div>
            <div class="at-card">
              <h4>4. Metode "Tinggalkan Lokasi (Walk Away)"</h4>
              <p>Bila teman terus memaksa dan memojokkan, segera pamit pergi: <em>"Aku pulang dulu ya, ditunggu orang tua."</em> Teman sejati tidak akan menjerumuskanmu!</p>
            </div>
          </div>
        `,
        examples: ["Saat ditawari rokok di belakang sekolah: 'Nggak usah sob, makasih. Paru-paruku buat main bola besok!'"],
        funFact: "Menolak hal buruk justru membutuhkan keberanian dan kepribadian yang jauh lebih kuat dibanding sekadar ikut-ikutan tren yang salah!",
        question: "Apa yang akan kamu lakukan jika ada teman dekat yang memaksamu mencoba rokok atau vape?",
        activity: {
          type: "quick_choice",
          prompt: "Respon asertif terbaik saat ada yang mengejekmu 'penakut' karena menolak rokok adalah...",
          options: [
            { text: "Menatap tenang dan berkata tegas: 'Aku peduli kesehatanku, dan keputusanku sudah bulat.'", correct: true },
            { text: "Akhirnya mengalah dan ikut merokok agar dianggap keren", correct: false },
            { text: "Marah dan langsung memukul teman tersebut", correct: false }
          ],
          feedback: "Sangat bijak! Asertif berarti mempertahankan prinsip benar secara tenang, percaya diri, tanpa kekerasan."
        }
      },
      {
        id: "b2_p",
        sub: "P",
        title: "Pentingnya Gaya Hidup Sehat",
        icon: "🌱",
        content: `
          <p>Masa remaja adalah fondasi emas pembentukan tubuh dan masa depan. Investasikan waktu dan ragamu pada gaya hidup sehat:</p>
          <div class="grid-cards">
            <div class="card-item"><span class="ci-icon">🥗</span><strong>Gizi Seimbang:</strong> Perbanyak sayur buah segar, cukupi protein, kurangi makanan ultra-proses berpengawet tinggi.</div>
            <div class="card-item"><span class="ci-icon">🏃</span><strong>Aktif Bergerak:</strong> Olahraga minimal 30 menit sehari membakar kalori dan merangsang endorfin alami.</div>
            <div class="card-item"><span class="ci-icon">💧</span><strong>Cukup Air Putih:</strong> Minum minimal 8 gelas (2 liter) air putih sehari membantu ginjal menyaring metabolisme.</div>
            <div class="card-item"><span class="ci-icon">😴</span><strong>Tidur Berkualitas:</strong> Istirahat 7-8 jam setiap malam untuk regenerasi sel otak dan pertumbuhan tulang.</div>
          </div>
          <div class="callout tip">
            <strong>KATA KUNCI MASA DEPAN CERAH:</strong><br>
            <em>"Sayangi Otakmu, Lindungi Tubuhmu, Raih Mimpimu Tanpa Narkoba!"</em>
          </div>
        `,
        examples: ["Membawa botol air minum dan bekal makanan sehat dari rumah ke sekolah."],
        funFact: "Saat tidur nyenyak di malam hari, sistem 'Glimfatik' otak bekerja membersihkan sisa-sisa racun metabolik saraf seperti mencuci mobil di malam hari!",
        question: "Kebiasaan sehat apa yang sudah kamu terapkan secara rutin setiap hari?",
        activity: {
          type: "quick_choice",
          prompt: "Cara alami dan paling sehat untuk mendapatkan hormon bahagia (endorfin) tanpa zat adiktif adalah...",
          options: [
            { text: "Berolahraga secara teratur, hobi kreatif, dan berkumpul bersama keluarga", correct: true },
            { text: "Mencoba obat-obatan penenang", correct: false },
            { text: "Bergadang semalaman bermain gawai", correct: false }
          ],
          feedback: "Tepat sekali! Olahraga dan kegiatan positif menghasilkan endorfin dan dopamin alami yang sehat dan membahagiakan."
        }
      }
    ],
    summary: [
      "Zat adiktif adalah zat bukan makanan yang menyebabkan ketergantungan (adiksi) fisik dan psikis pada manusia.",
      "Tiga fenomena ketergantungan: Adiksi (kecanduan), Toleransi (dosis kian naik), dan Sakaw / Withdrawal (gejala putus obat).",
      "Kelompok utama: Kafein, Nikotin (rokok/vape), Alkohol, Narkotika (Gol I, II, III), Psikotropika (Gol I-IV), dan Inhalansia pelarut.",
      "Berdasarkan efek kerja SSP: Stimulan (mempercepat), Depresan (memperlambat), dan Halusinogen (mengubah persepsi).",
      "Zat adiktif merusak reseptor dopamin alami otak dan merusak organ vital (paru-paru, jantung, hati, ginjal).",
      "Bentengi diri dengan komunikasi asertif, pertemanan positif, dan komitmen gaya hidup sehat aktif."
    ]
  }
};
