import { GoogleGenerativeAI } from "@google/generative-ai";

interface AIAnalysisParams {
  plant: string;
  status: string;
  suitability: number;
  description?: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

interface AIAnalysisResult {
  analysis: string;
  improvements: string[];
  nextSteps: string[];
}

// Function to clean AI response from markdown formatting
function cleanAIText(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold **text**
    .replace(/\*([^*]+)\*/g, '$1')     // Remove italic *text*
    .replace(/#{1,6}\s/g, '')           // Remove markdown headers
    .replace(/`([^`]+)`/g, '$1')        // Remove code backticks
    .replace(/\n{3,}/g, '\n\n')         // Remove excessive newlines
    .trim();
}

// Function to parse bullet points from text
function parseBulletPoints(text: string): string[] {
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
  
  const bulletPoints: string[] = [];
  
  for (const line of lines) {
    // Match various bullet formats: -, *, •, numbers, etc.
    const cleaned = line
      .replace(/^[-*•]\s+/, '')           // Remove - * • bullets
      .replace(/^\d+\.\s+/, '')           // Remove numbered lists
      .replace(/^[a-z]\)\s+/i, '')        // Remove a) b) c) format
      .trim();
    
    if (cleaned.length > 10) { // Only include substantial points
      bulletPoints.push(cleanAIText(cleaned));
    }
  }
  
  return bulletPoints;
}

export async function getAIAnalysis(params: AIAnalysisParams): Promise<AIAnalysisResult> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("API key tidak ditemukan. Silakan tambahkan NEXT_PUBLIC_GEMINI_API_KEY di .env.local");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
  });

  const statusText = params.status === 'Sangat Cocok' ? 'COCOK' : 
                    params.status === 'Cukup Cocok' ? 'CUKUP COCOK' : 'TIDAK COCOK';

  const prompt = `Kamu adalah ahli pertanian. Analisis kondisi lahan untuk menanam ${params.plant}.

DATA LAHAN:
- Tanaman target: ${params.plant}
- Status prediksi: ${params.status} (${params.suitability}%)
- Nitrogen: ${params.nitrogen} kg/ha
- Fosfor: ${params.phosphorus} kg/ha  
- Kalium: ${params.potassium} kg/ha
- Suhu: ${params.temperature}°C
- Kelembaban: ${params.humidity}%
- pH: ${params.ph}
- Curah hujan: ${params.rainfall} mm/tahun

Jawab dalam 3 bagian (gunakan bahasa sederhana, JANGAN pakai **, *, #):

BAGIAN 1 - KENAPA ${statusText}:
Jelaskan kenapa lahan ini ${statusText} untuk ${params.plant}. Bahas:
- Nutrisi (N, P, K) sudah pas atau belum?
- Suhu dan kelembaban cocok atau tidak?
- pH bagus atau perlu disesuaikan?
- Curah hujan cukup atau kurang?
- Apa yang perlu diperbaiki?
(Tulis 4-5 paragraf, jelaskan dengan detail)

BAGIAN 2 - CARA PERBAIKAN:
Kasih 5-7 saran konkret untuk perbaiki lahan:
- Apa yang harus dilakukan
- Pupuk apa dan berapa dosisnya
- Cara atur irigasi
- Tips praktis lainnya
(Tulis dalam bentuk list)

BAGIAN 3 - LANGKAH SELANJUTNYA:
Buat rencana 4-5 langkah yang harus dilakukan:
1. Apa yang harus dilakukan minggu ini
2. Persiapan bulan depan
3. Perawatan jangka panjang
4. Kapan mulai tanam${params.status === 'Tidak Cocok' ? '\n5. Rekomendasi tanaman alternatif yang lebih cocok' : ''}
(Tulis langkah-langkah yang jelas)

PENTING: Jangan pakai markdown (**, *, #). Tulis lengkap, jangan potong. Minimal 400 kata total.`;

  const chatSession = await model.generateContent(prompt);
  const response = await chatSession.response;
  const fullText = cleanAIText(response.text());

  // Parse sections dengan regex yang lebih fleksibel
  const bagian1Match = fullText.match(/BAGIAN 1[\s\S]*?(?=BAGIAN 2|$)/i);
  const bagian2Match = fullText.match(/BAGIAN 2[\s\S]*?(?=BAGIAN 3|$)/i);
  const bagian3Match = fullText.match(/BAGIAN 3[\s\S]*$/i);

  let analysis = "";
  let improvements: string[] = [];
  let nextSteps: string[] = [];

  // Ekstrak BAGIAN 1 - Analisis
  if (bagian1Match) {
    analysis = bagian1Match[0]
      .replace(/BAGIAN 1.*?:/i, '')
      .replace(/KENAPA.*?:/i, '')
      .trim();
  }

  // Ekstrak BAGIAN 2 - Perbaikan
  if (bagian2Match) {
    const perbaikanText = bagian2Match[0]
      .replace(/BAGIAN 2.*?:/i, '')
      .replace(/CARA PERBAIKAN.*?:/i, '')
      .trim();
    improvements = parseBulletPoints(perbaikanText);
  }

  // Ekstrak BAGIAN 3 - Langkah Selanjutnya
  if (bagian3Match) {
    const langkahText = bagian3Match[0]
      .replace(/BAGIAN 3.*?:/i, '')
      .replace(/LANGKAH SELANJUTNYA.*?:/i, '')
      .trim();
    nextSteps = parseBulletPoints(langkahText);
  }

  // Fallback jika parsing gagal - tampilkan semua sebagai analysis
  if (!analysis && !bagian1Match) {
    analysis = fullText;
  }

  // Minimal fallback untuk improvements
  if (improvements.length === 0) {
    improvements = ["Tingkatkan nutrisi tanah", "Atur irigasi yang baik", "Monitor pH secara berkala"];
  }

  // Minimal fallback untuk nextSteps  
  if (nextSteps.length === 0) {
    nextSteps = ["Konsultasi dengan ahli pertanian", "Lakukan uji tanah", "Mulai persiapan bertahap"];
  }

  return {
    analysis,
    improvements,
    nextSteps,
  };
}
