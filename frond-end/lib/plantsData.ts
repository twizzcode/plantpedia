export interface PlantData {
  id: string;
  name: string;
  nameIndo: string;
  icon: string;
  color: string;
  description: string;
  idealConditions: {
    nitrogen: { min: number; max: number; avg: number };
    phosphorus: { min: number; max: number; avg: number };
    potassium: { min: number; max: number; avg: number };
    temperature: { min: number; max: number; avg: number };
    humidity: { min: number; max: number; avg: number };
    ph: { min: number; max: number; avg: number };
    rainfall: { min: number; max: number; avg: number };
  };
  benefits: string[];
  tips: string[];
}

export const plantsData: PlantData[] = [
  {
    id: "rice",
    name: "Rice",
    nameIndo: "Padi",
    icon: "🌾",
    color: "from-amber-500 to-yellow-600",
    description: "Padi adalah tanaman pangan utama yang menjadi makanan pokok sebagian besar penduduk Indonesia. Butuh kondisi lahan sawah yang tergenang air dengan nutrisi yang seimbang.",
    idealConditions: {
      nitrogen: { min: 60, max: 99, avg: 79.89 },
      phosphorus: { min: 35, max: 60, avg: 47.58 },
      potassium: { min: 35, max: 45, avg: 39.87 },
      temperature: { min: 20, max: 27, avg: 23.69 },
      humidity: { min: 80, max: 85, avg: 82.27 },
      ph: { min: 5.0, max: 7.9, avg: 6.43 },
      rainfall: { min: 182, max: 299, avg: 236.18 }
    },
    benefits: [
      "Sumber karbohidrat utama",
      "Mengandung vitamin B kompleks",
      "Menyediakan energi untuk aktivitas harian",
      "Mudah dicerna dan rendah lemak"
    ],
    tips: [
      "Pastikan lahan memiliki sistem irigasi yang baik",
      "Lakukan pengolahan tanah sebelum penanaman",
      "Gunakan bibit unggul bersertifikat",
      "Perhatikan waktu tanam sesuai musim hujan"
    ]
  },
  {
    id: "maize",
    name: "Maize",
    nameIndo: "Jagung",
    icon: "🌽",
    color: "from-yellow-500 to-orange-500",
    description: "Jagung adalah tanaman serbaguna yang dapat digunakan sebagai pangan, pakan ternak, dan bahan industri. Tahan terhadap berbagai kondisi iklim dan mudah dibudidayakan.",
    idealConditions: {
      nitrogen: { min: 60, max: 100, avg: 77.76 },
      phosphorus: { min: 35, max: 60, avg: 48.44 },
      potassium: { min: 15, max: 25, avg: 19.79 },
      temperature: { min: 18, max: 27, avg: 22.39 },
      humidity: { min: 55, max: 75, avg: 65.09 },
      ph: { min: 5.5, max: 7.0, avg: 6.25 },
      rainfall: { min: 60, max: 110, avg: 84.77 }
    },
    benefits: [
      "Sumber karbohidrat alternatif pengganti nasi",
      "Kaya akan serat dan antioksidan",
      "Mengandung vitamin A dan C",
      "Dapat diolah menjadi berbagai produk"
    ],
    tips: [
      "Tanam di lahan yang mendapat sinar matahari penuh",
      "Beri jarak tanam 20-25 cm antar tanaman",
      "Lakukan penyiangan gulma secara rutin",
      "Panen saat tongkol sudah mengering"
    ]
  },
  {
    id: "chickpea",
    name: "Chickpea",
    nameIndo: "Kacang Arab",
    icon: "🫘",
    color: "from-amber-600 to-yellow-700",
    description: "Kacang Arab atau chickpea adalah tanaman legum yang kaya protein. Cocok ditanam di daerah dengan kelembaban rendah dan suhu sejuk.",
    idealConditions: {
      nitrogen: { min: 20, max: 60, avg: 40.09 },
      phosphorus: { min: 55, max: 80, avg: 67.79 },
      potassium: { min: 75, max: 85, avg: 79.92 },
      temperature: { min: 17, max: 21, avg: 18.87 },
      humidity: { min: 14, max: 20, avg: 16.86 },
      ph: { min: 6.0, max: 8.9, avg: 7.34 },
      rainfall: { min: 65, max: 95, avg: 80.06 }
    },
    benefits: [
      "Sumber protein nabati tinggi",
      "Kaya akan serat dan zat besi",
      "Membantu mengontrol gula darah",
      "Baik untuk kesehatan jantung"
    ],
    tips: [
      "Tanam di musim kering dengan suhu dingin",
      "Hindari tanah yang terlalu lembab",
      "Rotasi tanaman untuk mencegah hama",
      "Panen saat polong sudah mengering"
    ]
  },
  {
    id: "kidneybeans",
    name: "Kidney Beans",
    nameIndo: "Kacang Merah",
    icon: "🫘",
    color: "from-red-600 to-rose-700",
    description: "Kacang merah adalah legum bergizi tinggi yang populer dalam berbagai masakan. Membutuhkan kondisi kelembaban sedang dan suhu sejuk.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 20.75 },
      phosphorus: { min: 55, max: 80, avg: 67.54 },
      potassium: { min: 15, max: 25, avg: 20.05 },
      temperature: { min: 15, max: 25, avg: 20.12 },
      humidity: { min: 18, max: 25, avg: 21.61 },
      ph: { min: 5.5, max: 6.0, avg: 5.75 },
      rainfall: { min: 60, max: 150, avg: 105.92 }
    },
    benefits: [
      "Kaya protein dan serat tinggi",
      "Mengandung antioksidan kuat",
      "Membantu menurunkan kolesterol",
      "Sumber folat dan magnesium"
    ],
    tips: [
      "Tanam setelah musim hujan",
      "Berikan penyangga untuk tanaman merambat",
      "Kontrol hama penggerek polong",
      "Simpan biji kering di tempat sejuk"
    ]
  },
  {
    id: "pigeonpeas",
    name: "Pigeon Peas",
    nameIndo: "Kacang Gude",
    icon: "🫛",
    color: "from-green-600 to-emerald-700",
    description: "Kacang gude adalah tanaman legum multiguna yang tahan kekeringan. Dapat tumbuh di berbagai kondisi tanah dan iklim tropis.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 20.73 },
      phosphorus: { min: 55, max: 80, avg: 67.73 },
      potassium: { min: 15, max: 25, avg: 20.29 },
      temperature: { min: 18, max: 37, avg: 27.74 },
      humidity: { min: 30, max: 70, avg: 48.06 },
      ph: { min: 4.5, max: 7.4, avg: 5.79 },
      rainfall: { min: 90, max: 199, avg: 149.46 }
    },
    benefits: [
      "Protein tinggi dan rendah lemak",
      "Memperbaiki kesuburan tanah",
      "Tahan terhadap kekeringan",
      "Bisa digunakan sebagai pakan ternak"
    ],
    tips: [
      "Cocok untuk tumpang sari dengan tanaman lain",
      "Tahan di lahan marginal",
      "Panen bertahap saat polong matang",
      "Gunakan sebagai pupuk hijau"
    ]
  },
  {
    id: "mothbeans",
    name: "Moth Beans",
    nameIndo: "Kacang Moth",
    icon: "🫘",
    color: "from-yellow-700 to-amber-800",
    description: "Kacang moth adalah legum yang sangat tahan kekeringan. Ideal untuk daerah panas dan kering dengan curah hujan minimal.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 21.44 },
      phosphorus: { min: 35, max: 60, avg: 48.01 },
      potassium: { min: 15, max: 25, avg: 20.23 },
      temperature: { min: 24, max: 32, avg: 28.19 },
      humidity: { min: 40, max: 65, avg: 53.16 },
      ph: { min: 3.5, max: 9.9, avg: 6.83 },
      rainfall: { min: 30, max: 75, avg: 51.20 }
    },
    benefits: [
      "Sangat tahan kekeringan",
      "Protein tinggi dan mudah dicerna",
      "Cocok untuk daerah kering",
      "Masa panen singkat"
    ],
    tips: [
      "Ideal untuk lahan kering dan panas",
      "Butuh sedikit air",
      "Tahan terhadap hama",
      "Panen 60-70 hari setelah tanam"
    ]
  },
  {
    id: "mungbean",
    name: "Mung Bean",
    nameIndo: "Kacang Hijau",
    icon: "🫛",
    color: "from-green-500 to-lime-600",
    description: "Kacang hijau adalah tanaman legum yang populer di Asia. Membutuhkan kelembaban tinggi dan suhu hangat untuk pertumbuhan optimal.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 20.99 },
      phosphorus: { min: 35, max: 60, avg: 47.28 },
      potassium: { min: 15, max: 25, avg: 19.87 },
      temperature: { min: 27, max: 30, avg: 28.53 },
      humidity: { min: 80, max: 90, avg: 85.50 },
      ph: { min: 6.2, max: 7.2, avg: 6.72 },
      rainfall: { min: 36, max: 60, avg: 48.40 }
    },
    benefits: [
      "Mudah dicerna dan rendah alergen",
      "Kaya vitamin B dan folat",
      "Detoksifikasi alami tubuh",
      "Cocok untuk diet sehat"
    ],
    tips: [
      "Tanam di musim kemarau dengan irigasi",
      "Panen muda untuk tauge",
      "Masa tanam hanya 55-65 hari",
      "Rotasi dengan padi untuk kesuburan tanah"
    ]
  },
  {
    id: "blackgram",
    name: "Black Gram",
    nameIndo: "Kacang Hitam",
    icon: "⚫",
    color: "from-gray-800 to-slate-900",
    description: "Kacang hitam adalah legum berprotein tinggi yang populer dalam masakan India. Membutuhkan suhu hangat dan kelembaban sedang.",
    idealConditions: {
      nitrogen: { min: 20, max: 60, avg: 40.02 },
      phosphorus: { min: 55, max: 80, avg: 67.47 },
      potassium: { min: 15, max: 25, avg: 19.24 },
      temperature: { min: 25, max: 35, avg: 29.97 },
      humidity: { min: 60, max: 70, avg: 65.12 },
      ph: { min: 6.5, max: 7.8, avg: 7.13 },
      rainfall: { min: 60, max: 75, avg: 67.88 }
    },
    benefits: [
      "Protein dan zat besi sangat tinggi",
      "Baik untuk kesehatan tulang",
      "Meningkatkan energi dan stamina",
      "Antioksidan kuat"
    ],
    tips: [
      "Tanam di awal musim hujan",
      "Butuh drainase baik",
      "Panen 80-90 hari setelah tanam",
      "Cocok untuk tanah lempung"
    ]
  },
  {
    id: "lentil",
    name: "Lentil",
    nameIndo: "Kacang Lentil",
    icon: "🫘",
    color: "from-orange-600 to-red-700",
    description: "Lentil adalah legum bergizi yang mudah dimasak dan dicerna. Cocok untuk daerah dengan suhu sejuk dan kelembaban sedang.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 18.77 },
      phosphorus: { min: 55, max: 80, avg: 68.36 },
      potassium: { min: 15, max: 25, avg: 19.41 },
      temperature: { min: 18, max: 30, avg: 24.51 },
      humidity: { min: 60, max: 70, avg: 64.80 },
      ph: { min: 5.9, max: 7.8, avg: 6.93 },
      rainfall: { min: 35, max: 55, avg: 45.68 }
    },
    benefits: [
      "Cepat matang, tidak perlu direndam",
      "Protein tinggi dan rendah kalori",
      "Kaya akan asam folat",
      "Baik untuk diabetes"
    ],
    tips: [
      "Tanam di musim dingin/sejuk",
      "Hindari genangan air",
      "Panen 100-110 hari",
      "Simpan di tempat kering"
    ]
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    nameIndo: "Delima",
    icon: "🍎",
    color: "from-red-500 to-pink-600",
    description: "Delima adalah buah super kaya antioksidan dengan rasa manis-asam yang khas. Tumbuh baik di daerah dengan kelembaban tinggi.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 18.87 },
      phosphorus: { min: 5, max: 30, avg: 18.75 },
      potassium: { min: 35, max: 45, avg: 40.21 },
      temperature: { min: 18, max: 25, avg: 21.84 },
      humidity: { min: 85, max: 95, avg: 90.13 },
      ph: { min: 5.6, max: 7.2, avg: 6.43 },
      rainfall: { min: 102, max: 112, avg: 107.53 }
    },
    benefits: [
      "Antioksidan super tinggi",
      "Baik untuk kesehatan jantung",
      "Anti-inflamasi alami",
      "Meningkatkan daya tahan tubuh"
    ],
    tips: [
      "Butuh sinar matahari penuh",
      "Pemangkasan rutin untuk produktivitas",
      "Panen saat kulit berwarna merah tua",
      "Mulai berbuah tahun ke-2 atau 3"
    ]
  },
  {
    id: "banana",
    name: "Banana",
    nameIndo: "Pisang",
    icon: "🍌",
    color: "from-yellow-400 to-yellow-600",
    description: "Pisang adalah buah tropis yang mudah tumbuh dan sangat produktif. Membutuhkan nitrogen tinggi dan kelembaban sedang-tinggi.",
    idealConditions: {
      nitrogen: { min: 80, max: 120, avg: 100.23 },
      phosphorus: { min: 70, max: 95, avg: 82.01 },
      potassium: { min: 45, max: 55, avg: 50.05 },
      temperature: { min: 25, max: 30, avg: 27.38 },
      humidity: { min: 75, max: 85, avg: 80.36 },
      ph: { min: 5.5, max: 6.5, avg: 5.98 },
      rainfall: { min: 90, max: 120, avg: 104.63 }
    },
    benefits: [
      "Sumber kalium dan energi instan",
      "Melancarkan pencernaan",
      "Mudah diolah berbagai produk",
      "Produktivitas tinggi per pohon"
    ],
    tips: [
      "Tanam di dekat sumber air",
      "Beri pupuk kandang secara rutin",
      "Potong tunas anakan untuk fokus produksi",
      "Panen saat buah mulai menguning"
    ]
  },
  {
    id: "mango",
    name: "Mango",
    nameIndo: "Mangga",
    icon: "🥭",
    color: "from-orange-400 to-red-500",
    description: "Mangga adalah buah tropis favorit dengan rasa manis dan harum. Membutuhkan suhu panas dan kelembaban sedang untuk pertumbuhan optimal.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 20.07 },
      phosphorus: { min: 15, max: 40, avg: 27.18 },
      potassium: { min: 25, max: 35, avg: 29.92 },
      temperature: { min: 27, max: 36, avg: 31.21 },
      humidity: { min: 45, max: 55, avg: 50.16 },
      ph: { min: 4.5, max: 7.0, avg: 5.77 },
      rainfall: { min: 89, max: 101, avg: 94.70 }
    },
    benefits: [
      "Vitamin C dan A sangat tinggi",
      "Meningkatkan sistem imun",
      "Baik untuk kesehatan mata",
      "Dapat diolah menjadi berbagai produk"
    ],
    tips: [
      "Tanam di lokasi panas dan cerah",
      "Pemangkasan untuk bentuk pohon",
      "Panen saat aroma harum muncul",
      "Mulai berbuah tahun ke-3 hingga 5"
    ]
  },
  {
    id: "grapes",
    name: "Grapes",
    nameIndo: "Anggur",
    icon: "🍇",
    color: "from-purple-500 to-violet-600",
    description: "Anggur adalah buah klimber yang membutuhkan perawatan intensif. Memerlukan fosfor dan kalium sangat tinggi untuk hasil optimal.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 23.18 },
      phosphorus: { min: 120, max: 145, avg: 132.53 },
      potassium: { min: 195, max: 205, avg: 200.11 },
      temperature: { min: 9, max: 42, avg: 23.85 },
      humidity: { min: 80, max: 84, avg: 81.88 },
      ph: { min: 5.5, max: 6.5, avg: 6.03 },
      rainfall: { min: 65, max: 75, avg: 69.61 }
    },
    benefits: [
      "Kaya antioksidan resveratrol",
      "Baik untuk kesehatan jantung",
      "Anti-aging alami",
      "Dapat dibuat wine atau jus"
    ],
    tips: [
      "Butuh penyangga atau teralis",
      "Pemangkasan intensif setiap tahun",
      "Kontrol hama jamur secara ketat",
      "Panen bertahap saat matang penuh"
    ]
  },
  {
    id: "watermelon",
    name: "Watermelon",
    nameIndo: "Semangka",
    icon: "🍉",
    color: "from-green-500 to-red-500",
    description: "Semangka adalah buah segar yang sangat tinggi kandungan airnya. Membutuhkan nitrogen tinggi dan kelembaban sedang-tinggi.",
    idealConditions: {
      nitrogen: { min: 80, max: 120, avg: 99.42 },
      phosphorus: { min: 5, max: 30, avg: 17.00 },
      potassium: { min: 45, max: 55, avg: 50.22 },
      temperature: { min: 24, max: 27, avg: 25.59 },
      humidity: { min: 80, max: 90, avg: 85.16 },
      ph: { min: 6.0, max: 7.0, avg: 6.50 },
      rainfall: { min: 40, max: 60, avg: 50.79 }
    },
    benefits: [
      "Hidrasi tinggi (92% air)",
      "Kaya likopen dan vitamin C",
      "Menyegarkan di cuaca panas",
      "Rendah kalori"
    ],
    tips: [
      "Tanam di musim kemarau dengan irigasi",
      "Beri mulsa untuk menjaga kelembaban",
      "Ketuk buah untuk cek kematangan",
      "Panen 70-90 hari setelah tanam"
    ]
  },
  {
    id: "muskmelon",
    name: "Muskmelon",
    nameIndo: "Melon",
    icon: "🍈",
    color: "from-orange-300 to-amber-400",
    description: "Melon adalah buah manis beraroma harum yang menyegarkan. Membutuhkan kelembaban sangat tinggi dan nitrogen yang cukup.",
    idealConditions: {
      nitrogen: { min: 80, max: 120, avg: 100.32 },
      phosphorus: { min: 5, max: 30, avg: 17.72 },
      potassium: { min: 45, max: 55, avg: 50.08 },
      temperature: { min: 27, max: 30, avg: 28.66 },
      humidity: { min: 90, max: 95, avg: 92.34 },
      ph: { min: 6.0, max: 6.8, avg: 6.36 },
      rainfall: { min: 20, max: 30, avg: 24.69 }
    },
    benefits: [
      "Vitamin A dan C tinggi",
      "Menyehatkan kulit dan mata",
      "Melancarkan pencernaan",
      "Aroma harum dan rasa manis"
    ],
    tips: [
      "Kelembaban tinggi sangat penting",
      "Jaga tanah tetap lembab tapi tidak tergenang",
      "Panen saat warna kulit berubah dan aroma keluar",
      "Simpan di tempat sejuk setelah panen"
    ]
  },
  {
    id: "apple",
    name: "Apple",
    nameIndo: "Apel",
    icon: "🍎",
    color: "from-red-400 to-red-600",
    description: "Apel adalah buah yang membutuhkan suhu sejuk dan kelembaban tinggi. Fosfor dan kalium sangat tinggi diperlukan untuk buah berkualitas.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 20.80 },
      phosphorus: { min: 120, max: 145, avg: 134.22 },
      potassium: { min: 195, max: 205, avg: 199.89 },
      temperature: { min: 21, max: 24, avg: 22.63 },
      humidity: { min: 90, max: 95, avg: 92.33 },
      ph: { min: 5.5, max: 6.5, avg: 5.93 },
      rainfall: { min: 100, max: 125, avg: 112.65 }
    },
    benefits: [
      "Serat tinggi baik untuk pencernaan",
      "Antioksidan melimpah",
      "Menurunkan risiko penyakit jantung",
      "Cocok untuk diet sehat"
    ],
    tips: [
      "Butuh suhu sejuk untuk berbuah",
      "Pemangkasan untuk bentuk dan produksi",
      "Kontrol hama ulat buah",
      "Panen saat warna merah penuh"
    ]
  },
  {
    id: "orange",
    name: "Orange",
    nameIndo: "Jeruk",
    icon: "🍊",
    color: "from-orange-400 to-orange-600",
    description: "Jeruk adalah buah sitrus kaya vitamin C. Membutuhkan kelembaban tinggi dan pH sedikit asam hingga netral.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 19.58 },
      phosphorus: { min: 5, max: 30, avg: 16.55 },
      potassium: { min: 5, max: 15, avg: 10.01 },
      temperature: { min: 10, max: 35, avg: 22.77 },
      humidity: { min: 90, max: 95, avg: 92.17 },
      ph: { min: 6.0, max: 8.0, avg: 7.02 },
      rainfall: { min: 100, max: 120, avg: 110.47 }
    },
    benefits: [
      "Vitamin C super tinggi",
      "Meningkatkan imunitas tubuh",
      "Menyegarkan dan mengandung air",
      "Antioksidan untuk kulit sehat"
    ],
    tips: [
      "Tanam di lokasi cerah",
      "Siram teratur, jangan sampai kering",
      "Pemupukan rutin setiap 3 bulan",
      "Panen saat warna oranye penuh"
    ]
  },
  {
    id: "papaya",
    name: "Papaya",
    nameIndo: "Pepaya",
    icon: "🫐",
    color: "from-orange-300 to-yellow-500",
    description: "Pepaya adalah buah tropis yang cepat tumbuh dan produktif. Membutuhkan kelembaban tinggi dan dapat tumbuh di berbagai curah hujan.",
    idealConditions: {
      nitrogen: { min: 31, max: 70, avg: 49.88 },
      phosphorus: { min: 46, max: 70, avg: 59.05 },
      potassium: { min: 45, max: 55, avg: 50.04 },
      temperature: { min: 23, max: 44, avg: 33.72 },
      humidity: { min: 90, max: 95, avg: 92.40 },
      ph: { min: 6.5, max: 7.0, avg: 6.74 },
      rainfall: { min: 40, max: 249, avg: 142.63 }
    },
    benefits: [
      "Enzim papain untuk pencernaan",
      "Vitamin A dan C tinggi",
      "Cepat berbuah (6-9 bulan)",
      "Multifungsi: buah, daun, biji"
    ],
    tips: [
      "Tumbuh sangat cepat",
      "Butuh drainase sempurna",
      "Pilih bibit betina untuk produktivitas",
      "Panen saat kulit mulai menguning"
    ]
  },
  {
    id: "coconut",
    name: "Coconut",
    nameIndo: "Kelapa",
    icon: "🥥",
    color: "from-green-600 to-amber-700",
    description: "Kelapa adalah pohon serbaguna khas daerah pantai tropis. Membutuhkan kelembaban sangat tinggi dan curah hujan melimpah.",
    idealConditions: {
      nitrogen: { min: 0, max: 40, avg: 21.98 },
      phosphorus: { min: 5, max: 30, avg: 16.93 },
      potassium: { min: 25, max: 35, avg: 30.59 },
      temperature: { min: 25, max: 30, avg: 27.41 },
      humidity: { min: 90, max: 100, avg: 94.84 },
      ph: { min: 5.5, max: 6.5, avg: 5.98 },
      rainfall: { min: 131, max: 226, avg: 175.69 }
    },
    benefits: [
      "Multifungsi: air, daging, minyak, sabut",
      "Elektrolit alami dari air kelapa",
      "Tumbuh di tanah berpasir pantai",
      "Ekonomis tinggi"
    ],
    tips: [
      "Ideal di daerah pantai",
      "Butuh sinar matahari penuh",
      "Mulai berbuah tahun ke-5 hingga 7",
      "Panen sepanjang tahun"
    ]
  },
  {
    id: "cotton",
    name: "Cotton",
    nameIndo: "Kapas",
    icon: "☁️",
    color: "from-blue-300 to-white",
    description: "Kapas adalah tanaman serat industri penting. Membutuhkan nitrogen sangat tinggi dan kelembaban sedang-tinggi.",
    idealConditions: {
      nitrogen: { min: 100, max: 140, avg: 117.77 },
      phosphorus: { min: 35, max: 60, avg: 46.24 },
      potassium: { min: 15, max: 25, avg: 19.56 },
      temperature: { min: 22, max: 26, avg: 23.99 },
      humidity: { min: 75, max: 85, avg: 79.84 },
      ph: { min: 5.8, max: 8.0, avg: 6.91 },
      rainfall: { min: 60, max: 100, avg: 80.40 }
    },
    benefits: [
      "Serat tekstil utama dunia",
      "Nilai ekonomi tinggi",
      "Biji menghasilkan minyak",
      "Tahan berbagai iklim"
    ],
    tips: [
      "Butuh nitrogen tinggi untuk pertumbuhan",
      "Kontrol hama penggerek buah",
      "Panen saat kapsul pecah dan serat putih",
      "Rotasi tanaman mencegah hama"
    ]
  },
  {
    id: "jute",
    name: "Jute",
    nameIndo: "Rami",
    icon: "🌿",
    color: "from-green-700 to-lime-800",
    description: "Rami adalah tanaman serat alami yang ramah lingkungan. Membutuhkan kelembaban tinggi dan curah hujan melimpah.",
    idealConditions: {
      nitrogen: { min: 60, max: 100, avg: 78.40 },
      phosphorus: { min: 35, max: 60, avg: 46.86 },
      potassium: { min: 35, max: 45, avg: 39.99 },
      temperature: { min: 23, max: 27, avg: 24.96 },
      humidity: { min: 70, max: 90, avg: 79.64 },
      ph: { min: 6.0, max: 7.5, avg: 6.73 },
      rainfall: { min: 150, max: 200, avg: 174.79 }
    },
    benefits: [
      "Serat alami biodegradable",
      "Alternatif plastik ramah lingkungan",
      "Menyerap CO2 lebih banyak",
      "Cepat tumbuh dan produktif"
    ],
    tips: [
      "Butuh curah hujan tinggi",
      "Panen 120-150 hari setelah tanam",
      "Rendam batang untuk ekstraksi serat",
      "Cocok untuk tanah aluvial"
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    nameIndo: "Kopi",
    icon: "☕",
    color: "from-amber-800 to-brown-900",
    description: "Kopi adalah tanaman perkebunan bernilai ekonomi tinggi. Membutuhkan nitrogen tinggi dan kelembaban sedang di dataran tinggi.",
    idealConditions: {
      nitrogen: { min: 80, max: 120, avg: 101.20 },
      phosphorus: { min: 15, max: 40, avg: 28.74 },
      potassium: { min: 25, max: 35, avg: 29.94 },
      temperature: { min: 23, max: 28, avg: 25.54 },
      humidity: { min: 50, max: 70, avg: 58.87 },
      ph: { min: 6.0, max: 7.5, avg: 6.79 },
      rainfall: { min: 115, max: 199, avg: 158.07 }
    },
    benefits: [
      "Komoditas ekspor bernilai tinggi",
      "Antioksidan dan kafein alami",
      "Cocok untuk dataran tinggi",
      "Berbuah sepanjang tahun"
    ],
    tips: [
      "Tanam di ketinggian 800-1800 mdpl",
      "Butuh naungan parsial",
      "Mulai berbuah tahun ke-3",
      "Panen selektif biji merah matang"
    ]
  }
];
