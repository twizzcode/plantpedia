"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, XCircle } from "lucide-react";

interface AIAnalysisProps {
  aiAnalysis: {
    analysis: string;
    improvements: string[];
    nextSteps: string[];
  } | null;
  isLoading: boolean;
  error: string | null;
}

export function AIAnalysis({
  aiAnalysis,
  isLoading,
  error,
}: AIAnalysisProps) {
  if (!aiAnalysis && !isLoading && !error) {
    return null;
  }

  return (
    <Card className="shadow-lg border-2 overflow-auto col-span-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          Analisis AI - Powered by Google Gemini
        </CardTitle>
        <CardDescription className="text-sm">
          Analisis mendalam menggunakan kecerdasan buatan
        </CardDescription>
      </CardHeader>
      <CardContent>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
            <p className="text-muted-foreground animate-pulse">
              AI sedang menganalisis data lahan Anda...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-red-600 mb-1">Terjadi Kesalahan</h4>
              <p className="text-sm text-red-600/80">{error}</p>
            </div>
          </div>
        )}

        {aiAnalysis && !isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Single Combined Analysis Section */}
            <div className="bg-linear-to-br from-purple-50 via-green-50 to-blue-50 dark:from-purple-950/30 dark:via-green-950/30 dark:to-blue-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <div className="prose prose-sm max-w-none">
                <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line space-y-4">
                  {/* Analisis Utama */}
                  <div>
                    {aiAnalysis.analysis}
                  </div>

                  {/* Improvements - inline */}
                  {aiAnalysis.improvements.length > 0 && (
                    <div className="mt-6">
                      <p className="font-semibold text-green-700 dark:text-green-400 mb-2">Langkah Perbaikan:</p>
                      <ul className="list-none space-y-1.5 ml-0">
                        {aiAnalysis.improvements.map((improvement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps - inline */}
                  {aiAnalysis.nextSteps.length > 0 && (
                    <div className="mt-6">
                      <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Langkah Selanjutnya:</p>
                      <ol className="list-none space-y-1.5 ml-0">
                        {aiAnalysis.nextSteps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-bold text-blue-600">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
