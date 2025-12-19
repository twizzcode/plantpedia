"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PredictionForm } from "@/components/predictions/PredictionForm";
import { PredictionResult } from "@/components/predictions/PredictionResult";
import { AIAnalysis } from "@/components/predictions/AIAnalysis";
import { getAIAnalysis } from "@/lib/aiService";
import { Sparkles, Loader2 } from "lucide-react";

interface PredictionResultType {
  plant: string;
  suitability: number;
  status: string;
  recommendations: string[];
  description?: string;
}

interface AIAnalysisResult {
  analysis: string;
  improvements: string[];
  nextSteps: string[];
}

export default function Predictions() {
  // Form states
  const [selectedPlant, setSelectedPlant] = useState("");
  const [nitrogen, setNitrogen] = useState(90);
  const [phosphorus, setPhosphorus] = useState(42);
  const [potassium, setPotassium] = useState(43);
  const [temperature, setTemperature] = useState(20.8);
  const [humidity, setHumidity] = useState(82);
  const [ph, setPh] = useState(6.5);
  const [rainfall, setRainfall] = useState(202.9);

  // Prediction states
  const [result, setResult] = useState<PredictionResultType | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // AI states
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysisResult | null>(null);
  const [isAILoading, setIsAILoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setResult(null);
    setAiAnalysis(null);
    
    const API_URL = 'https://c0f111e68671.ngrok-free.app/validate_crop';
    // const API_URL = 'http://localhost:5000/validate_crop';
    
    const dataInput = {
      target_crop: selectedPlant,
      n: nitrogen.toString(),
      p: phosphorus.toString(),
      k: potassium.toString(),
      temperature: temperature.toString(),
      humidity: humidity.toString(),
      ph: ph.toString(),
      rainfall: rainfall.toString()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataInput),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const persentaseMatch = data.persentase_kecocokan.match(/(\d+(?:\.\d+)?)/);
      const persentase = persentaseMatch ? parseFloat(persentaseMatch[0]) : 0;

      let recommendations: string[] = [];
      if (data.status_kecocokan === 'Sangat Cocok') {
        recommendations = [
          "Kondisi lahan sangat optimal untuk tanaman ini",
          "Pertahankan parameter tanah pada level saat ini",
          "Lakukan pemantauan rutin untuk hasil maksimal"
        ];
      } else if (data.status_kecocokan === 'Cukup Cocok') {
        recommendations = [
          "Kondisi lahan cukup baik namun bisa ditingkatkan",
          "Perhatikan keseimbangan nutrisi tanah",
          "Lakukan penyesuaian parameter jika diperlukan"
        ];
      } else {
        recommendations = [
          "Kondisi lahan kurang optimal untuk tanaman ini",
          "Pertimbangkan untuk meningkatkan kualitas tanah",
          "Konsultasikan dengan ahli pertanian untuk saran lebih lanjut"
        ];
      }

      setResult({
        plant: data.tanaman_target,
        suitability: persentase,
        status: data.status_kecocokan,
        description: data.deskripsi,
        recommendations: [
          data.deskripsi || "Hasil analisis berhasil",
          ...recommendations
        ]
      });
      
    } catch (error) {
      console.error('Error:', error);
      
      let errorMessage = 'Terjadi kesalahan tidak diketahui';
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'Tidak dapat terhubung ke server. Pastikan:\n• Server backend berjalan\n• URL ngrok masih aktif\n• Tidak ada pemblokiran CORS';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setResult({
        plant: selectedPlant,
        suitability: 0,
        status: 'Error',
        recommendations: [
          `❌ ${errorMessage}`,
          "Periksa console browser untuk detail lebih lanjut",
          "Pastikan backend Flask sudah running dengan benar"
        ]
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAskAI = async () => {
    if (!result) return;

    setIsAILoading(true);
    setAiError(null);

    try {
      const analysis = await getAIAnalysis({
        plant: result.plant,
        status: result.status,
        suitability: result.suitability,
        description: result.description,
        nitrogen,
        phosphorus,
        potassium,
        temperature,
        humidity,
        ph,
        rainfall,
      });

      setAiAnalysis(analysis);
    } catch (error) {
      console.error('AI Error:', error);
      setAiError(error instanceof Error ? error.message : "Gagal menganalisis dengan AI. Silakan coba lagi.");
    } finally {
      setIsAILoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setAiAnalysis(null);
    setAiError(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-4 bg-linear-to-b from-green-50/50 to-background dark:from-green-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-linear-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Analisis Lahan Pertanian
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Prediksi kesesuaian tanaman berdasarkan parameter lahan Anda
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {/* Form - Left Column */}
          <PredictionForm
            selectedPlant={selectedPlant}
            setSelectedPlant={setSelectedPlant}
            nitrogen={nitrogen}
            setNitrogen={setNitrogen}
            phosphorus={phosphorus}
            setPhosphorus={setPhosphorus}
            potassium={potassium}
            setPotassium={setPotassium}
            temperature={temperature}
            setTemperature={setTemperature}
            humidity={humidity}
            setHumidity={setHumidity}
            ph={ph}
            setPh={setPh}
            rainfall={rainfall}
            setRainfall={setRainfall}
            isAnalyzing={isAnalyzing}
            onAnalyze={handleAnalyze}
          />

          {/* Result - Right Column */}
          <PredictionResult 
            result={result}
            onAskAI={handleAskAI}
            isAILoading={isAILoading}
            aiAnalysis={aiAnalysis}
            onReset={handleReset}
          />
        </div>

        {/* AI Analysis Section - Below everything */}
        {result && result.status !== 'Error' && (aiAnalysis || isAILoading || aiError) && (
          <AIAnalysis
            aiAnalysis={aiAnalysis}
            isLoading={isAILoading}
            error={aiError}
          />
        )}
      </div>
    </div>
  );
}
