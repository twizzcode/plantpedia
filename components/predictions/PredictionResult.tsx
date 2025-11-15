"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";

interface PredictionResultProps {
  result: {
    plant: string;
    suitability: number;
    status: string;
    recommendations: string[];
  } | null;
  onAskAI?: () => void;
  isAILoading?: boolean;
  aiAnalysis?: {
    analysis: string;
    improvements: string[];
    nextSteps: string[];
  } | null;
}

export function PredictionResult({ result, onAskAI, isAILoading, aiAnalysis }: PredictionResultProps) {
  const getGaugeColor = (status: string) => {
    if (status === 'Sangat Cocok') return "text-green-600";
    if (status === 'Cukup Cocok') return "text-yellow-600";
    if (status === 'Tidak Cocok') return "text-red-600";
    return "text-gray-600";
  };

  const getStatusBgColor = (status: string) => {
    if (status === 'Sangat Cocok') return "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800";
    if (status === 'Cukup Cocok') return "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800";
    if (status === 'Tidak Cocok') return "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800";
    return "bg-gray-50 dark:bg-gray-950/30 border-gray-200 dark:border-gray-800";
  };

  const getStatusTextColor = (status: string) => {
    if (status === 'Sangat Cocok') return "text-green-600 dark:text-green-400";
    if (status === 'Cukup Cocok') return "text-yellow-600 dark:text-yellow-400";
    if (status === 'Tidak Cocok') return "text-red-600 dark:text-red-400";
    return "text-gray-600 dark:text-gray-400";
  };

  return (
    <Card className="shadow-lg border-2 overflow-auto h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Hasil Analisis</CardTitle>
        <CardDescription className="text-sm">
          Kesesuaian tanaman untuk lahan Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
        {result ? (
          <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
            {/* Semi-Circle Gauge */}
            <div className="relative w-56 h-28 mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                {/* Background arc */}
                <path
                  d="M 20 90 A 80 80 0 0 1 180 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  className="text-muted/20"
                />
                {/* Colored arc based on result */}
                <path
                  d="M 20 90 A 80 80 0 0 1 180 90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="20"
                  strokeDasharray={`${(result.suitability / 100) * 251.2} 251.2`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop 
                      offset="0%" 
                      stopColor={result.status === 'Sangat Cocok' ? 'rgb(34 197 94)' : 
                               result.status === 'Cukup Cocok' ? 'rgb(234 179 8)' : 
                               'rgb(239 68 68)'} 
                    />
                    <stop 
                      offset="100%" 
                      stopColor={result.status === 'Sangat Cocok' ? 'rgb(22 163 74)' : 
                               result.status === 'Cukup Cocok' ? 'rgb(202 138 4)' : 
                               'rgb(220 38 38)'} 
                    />
                  </linearGradient>
                </defs>
              </svg>
              {/* Percentage in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                <div className={`text-5xl font-bold ${getGaugeColor(result.status)}`}>
                  {result.suitability}%
                </div>
                <div className="text-xs text-muted-foreground">Kesesuaian</div>
              </div>
            </div>

            {/* Plant Name */}
            <div className="text-center mb-4">
              <h3 className={`text-2xl font-bold ${getStatusTextColor(result.status)}`}>
                {result.plant}
              </h3>
              <div className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold ${getStatusBgColor(result.status)} ${getStatusTextColor(result.status)}`}>
                {result.status}
              </div>
            </div>

            {/* Recommendations */}
            <div className="w-full space-y-2">
              <h4 className="font-semibold text-sm mb-2 text-center">Rekomendasi:</h4>
              {result.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 p-2.5 rounded-lg border ${getStatusBgColor(result.status)}`}
                >
                  <span className={`mt-0.5 text-sm ${getStatusTextColor(result.status)}`}>
                    {result.status === 'Error' ? '❌' : '✓'}
                  </span>
                  <span className="text-xs leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-sm">Masukkan parameter lahan dan klik</p>
            <p className="text-sm font-semibold text-green-600">"Analisis Lahan"</p>
            <p className="text-sm mt-1">untuk melihat hasil prediksi</p>
          </div>
        )}

        {/* AI Analysis Button - Muncul setelah prediksi */}
        {result && result.status !== 'Error' && !aiAnalysis && (
          <div className="mt-6 pt-6 border-t">
            <Button
              onClick={onAskAI}
              disabled={isAILoading}
              className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAILoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  AI Sedang Menganalisis...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Tanya AI untuk Analisis Mendalam
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
