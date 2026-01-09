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

// Backend hanya support 8 tanaman: Kopi, Jeruk, Melon, Padi, Semangka, Jagung, Pepaya, Pisang
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
