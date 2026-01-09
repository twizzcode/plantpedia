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

export async function getAIAnalysis(params: AIAnalysisParams): Promise<AIAnalysisResult> {
  // Call API route instead of direct Gemini API
  const response = await fetch('/api/ai-analysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Gagal melakukan analisis AI');
  }

  const result = await response.json();
  return result;
}
