# 🤖 Panduan Setup AI Gemini untuk Analisis Lahan

## 📋 Ringkasan Fitur

Website analisis lahan Anda sekarang dilengkapi dengan **Gemini AI** dari Google yang memberikan:

✅ **Analisis Mendalam** - Penjelasan detail kenapa tanaman cocok/tidak cocok  
✅ **Langkah Perbaikan** - Saran praktis untuk meningkatkan kondisi lahan  
✅ **Langkah Selanjutnya** - Action plan yang bisa langsung diterapkan  
✅ **UI yang Cantik** - Modal dengan gradient warna-warni dan animasi smooth  

## 🎯 Cara Kerja

1. **User melakukan prediksi** dengan Random Forest (seperti biasa)
2. **Setelah hasil muncul**, muncul tombol **"Tanya AI untuk Analisis Mendalam"**
3. **Form input HILANG otomatis** setelah prediksi (beri ruang untuk hasil AI)
4. **Klik tombol AI** → Modal muncul dengan loading animation
5. **AI menganalisis** data lahan + hasil prediksi + dataset knowledge
6. **Tampil 3 section**:
   - 🔍 **Analisis Mendalam** (paragraf panjang)
   - 🌱 **Langkah Perbaikan** (bullet points)
   - 🎯 **Langkah Selanjutnya** (numbered list)

## 🔑 Setup API Key (WAJIB!)

### 1. Dapatkan API Key Gemini

1. Buka [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Login dengan akun Google Anda
3. Klik **"Get API Key"** atau **"Create API Key"**
4. Copy API key yang dihasilkan

### 2. Tambahkan ke Environment Variable

Buka file `.env.local` di root project Anda, kemudian paste:

```env
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSy... (paste API key Anda di sini)
```

**⚠️ PENTING:** 
- File `.env.local` sudah dibuat di root project
- Jangan commit API key ke GitHub!
- File `.env.local` sudah ada di `.gitignore`

### 3. Restart Development Server

```bash
# Stop server dengan Ctrl+C
# Start ulang
npm run dev
```

## 🎨 UI/UX Features

### Perubahan Layout
- **Form input HILANG** setelah prediksi berhasil
- **Hasil prediksi mengambil full width** (2 kolom di desktop)
- **Tombol "Analisis Lahan Baru"** untuk reset dan munculkan form lagi

### Animasi
- ✨ Smooth fade-in untuk hasil AI
- 🌀 Loading spinner dengan pulse animation
- 🎯 Hover effects pada tombol AI (scale + shadow)
- 📊 Slide-in animation untuk modal sections

### Color Scheme
- 🟣 **Purple-Pink gradient** untuk tombol AI (standout dari tema hijau)
- 🟣 **Purple section** untuk Analisis Mendalam
- 🟢 **Green section** untuk Langkah Perbaikan
- 🔵 **Blue section** untuk Langkah Selanjutnya
- 🔴 **Red section** untuk error messages

## 📊 AI Prompt Strategy

AI menerima context lengkap:
- Data tanaman yang dipilih
- Semua parameter lahan (N, P, K, temp, humidity, pH, rainfall)
- Hasil prediksi Random Forest
- Persentase kesesuaian
- Status kecocokan

Prompt dirancang untuk:
1. **Penjelasan scientific** tapi mudah dipahami petani
2. **Actionable recommendations** bukan teori
3. **Specific to Indonesian agriculture context**
4. **Structured output** (3 bagian jelas)

## 🧪 Testing

### Test Case 1: Tanaman Sangat Cocok
```
Tanaman: Padi
N: 90, P: 42, K: 43
Temp: 20.8°C, Humidity: 82%, pH: 6.5, Rainfall: 202.9mm
Expected: AI explain kenapa sangat cocok + tips maintenance
```

### Test Case 2: Tanaman Tidak Cocok
```
Tanaman: Kopi
N: 20, P: 10, K: 10
Temp: 35°C, Humidity: 20%, pH: 4.0, Rainfall: 50mm
Expected: AI explain kenapa tidak cocok + major improvements needed
```

## 🐛 Troubleshooting

### Error: "API key tidak ditemukan"
**Solusi:** 
1. Cek file `.env.local` ada dan benar
2. Pastikan variablenya `NEXT_PUBLIC_GEMINI_API_KEY`
3. Restart dev server

### Error: "Failed to fetch" atau CORS
**Solusi:**
- Ini error dari backend Flask, bukan AI
- Pastikan ngrok backend masih running
- Cek console untuk detail error

### AI response tidak terstruktur
**Solusi:**
- AI kadang tidak follow format exact
- Sudah ada fallback parsing
- Hasilnya tetap ditampilkan walaupun format berbeda

### Loading terlalu lama
**Normal:**
- First request ke Gemini bisa 5-10 detik
- Subsequent requests lebih cepat
- Jika > 30 detik, cek koneksi internet

## 📦 Dependencies Installed

```json
{
  "@google/generative-ai": "^0.21.0"  // Gemini AI SDK
}
```

## 🎓 Cara Modifikasi

### Ubah Prompt AI
Edit file `app/predictions/page.tsx` line ~130-160:

```typescript
const prompt = `Saya adalah seorang petani yang baru saja...
// Edit prompt sesuai kebutuhan
`;
```

### Ubah Warna Modal
Edit file `app/predictions/page.tsx` line ~600+:

```tsx
// Ganti class bg-linear-to-br from-purple-50 to-pink-50
// dengan warna lain sesuai selera
```

### Tambah Section Baru
Tambah section di modal dengan struktur:

```tsx
<div className="bg-linear-to-br from-orange-50 to-red-50 ...">
  <h3>Judul Section Baru</h3>
  <p>{aiAnalysis.customField}</p>
</div>
```

## 📱 Responsive Design

- ✅ Mobile: Modal scroll dengan max-height
- ✅ Tablet: 2 kolom jadi 1 kolom
- ✅ Desktop: Full width untuk hasil setelah prediksi

## 🚀 Next Steps (Untuk Development)

1. **Rate Limiting** - Batasi berapa kali user bisa tanya AI
2. **Caching** - Simpan hasil AI untuk input yang sama
3. **History** - Simpan riwayat analisis user
4. **Export PDF** - Download hasil analisis sebagai PDF
5. **Share Link** - Generate shareable link untuk hasil

## 📞 Support

Jika ada masalah:
1. Cek console browser (F12)
2. Cek terminal dev server
3. Pastikan API key valid di [AI Studio](https://makersuite.google.com/app/apikey)

---

**Created by:** GitHub Copilot ❤️  
**Last Updated:** November 2025  
**Version:** 1.0.0
