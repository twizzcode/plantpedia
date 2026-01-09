import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const params: AIAnalysisParams = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key tidak ditemukan di server configuration" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

    const statusText = params.status === 'Sangat Cocok' ? 'sangat cocok' : 
                      params.status === 'Cukup Cocok' ? 'cukup cocok' : 'kurang cocok';

    const prompt = `Kamu adalah ahli pertanian Indonesia. Analisis kondisi lahan ini untuk menanam ${params.plant}.

DATA LAHAN:
- Tanaman: ${params.plant}
- Status: ${params.status} (${params.suitability}%)
- Nitrogen (N): ${params.nitrogen} kg/ha
- Fosfor (P): ${params.phosphorus} kg/ha  
- Kalium (K): ${params.potassium} kg/ha
- Suhu: ${params.temperature}°C
- Kelembaban: ${params.humidity}%
- pH tanah: ${params.ph}
- Curah hujan: ${params.rainfall} mm/bulan

Berikan analisis lengkap dalam format berikut (WAJIB gunakan keyword yang tepat):

BAGIAN 1 - ANALISIS:
[Tulis 1 paragraf analisis kondisi lahan, jelaskan kenapa ${statusText} untuk ${params.plant}. Sebutkan parameter mana yang sudah bagus dan mana yang perlu perbaikan.]

BAGIAN 2 - PERBAIKAN:
- [Rekomendasi 1: spesifik dan actionable]
- [Rekomendasi 2: spesifik dan actionable]
- [Rekomendasi 3: spesifik dan actionable]
- [Rekomendasi 4: spesifik dan actionable]

BAGIAN 3 - LANGKAH:
1. [Langkah pertama yang harus dilakukan]
2. [Langkah kedua untuk persiapan]
3. [Langkah ketiga untuk perawatan]
4. [Langkah keempat untuk monitoring]

Gunakan bahasa Indonesia sederhana. Jangan gunakan markdown formatting (**bold**, *italic*, dll).`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const fullText = response.text();

    // Parse the response into sections
    const sections = fullText.split(/BAGIAN \d+ - /i);
    
    let analysisText = '';
    let improvementsText = '';
    let nextStepsText = '';

    for (const section of sections) {
      const trimmed = section.trim();
      if (trimmed.startsWith('ANALISIS:')) {
        analysisText = trimmed.replace(/^ANALISIS:\s*/i, '');
      } else if (trimmed.startsWith('PERBAIKAN:')) {
        improvementsText = trimmed.replace(/^PERBAIKAN:\s*/i, '');
      } else if (trimmed.startsWith('LANGKAH:')) {
        nextStepsText = trimmed.replace(/^LANGKAH:\s*/i, '');
      }
    }

    // Fallback if sections not found - split by double newlines
    if (!analysisText && !improvementsText && !nextStepsText) {
      const parts = fullText.split('\n\n').filter(p => p.trim().length > 0);
      analysisText = parts[0] || fullText;
      improvementsText = parts.slice(1, Math.ceil(parts.length / 2)).join('\n\n');
      nextStepsText = parts.slice(Math.ceil(parts.length / 2)).join('\n\n');
    }

    const analysis = cleanAIText(analysisText);
    const improvements = parseBulletPoints(improvementsText);
    const nextSteps = parseBulletPoints(nextStepsText);

    // Ensure we have at least some data
    if (improvements.length === 0) {
      improvements.push("Pertahankan kondisi lahan saat ini");
      improvements.push("Lakukan monitoring rutin parameter tanah");
      improvements.push("Konsultasikan dengan ahli pertanian lokal untuk optimasi lebih lanjut");
    }

    if (nextSteps.length === 0) {
      nextSteps.push("Lakukan pengukuran parameter tanah secara berkala");
      nextSteps.push("Dokumentasikan perubahan kondisi lahan");
      nextSteps.push("Terapkan praktik pertanian berkelanjutan");
    }

    return NextResponse.json({
      analysis,
      improvements,
      nextSteps,
    });

  } catch (error) {
    console.error('AI Analysis Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Terjadi kesalahan saat analisis AI" },
      { status: 500 }
    );
  }
}
