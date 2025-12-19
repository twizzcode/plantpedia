"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { plantsData, PlantData } from "@/lib/plantsData";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Thermometer, Droplets, FlaskConical, CloudRain, Leaf } from "lucide-react";

export default function PlantDetail() {
  const params = useParams();
  const router = useRouter();
  const plant = plantsData.find((p) => p.id === params.slug);

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tanaman Tidak Ditemukan</h1>
          <Button onClick={() => router.push("/blog")}>Kembali ke Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-linear-to-b from-green-50/50 to-background dark:from-green-950/20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.push("/blog")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Tanaman
        </Button>

        {/* Hero Section */}
        <Card className={`mb-8 overflow-hidden border-2 shadow-xl`}>
          <div className={`bg-linear-to-br ${plant.color} text-white p-8 md:p-12`}>
            <div className="flex items-center gap-6 mb-4">
              <span className="text-8xl md:text-9xl">{plant.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{plant.nameIndo}</h1>
                <p className="text-xl md:text-2xl opacity-90">{plant.name}</p>
              </div>
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              {plant.description}
            </p>
          </div>
        </Card>

        {/* Kondisi Ideal Section */}
        <Card className="mb-8 shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              Kondisi Lahan Ideal
            </CardTitle>
            <CardDescription>
              Parameter optimal untuk pertumbuhan maksimal {plant.nameIndo}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nutrisi Tanah */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-purple-600" />
                  Nutrisi Tanah
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-400">Nitrogen (N)</span>
                      <Badge className="bg-green-600">{plant.idealConditions.nitrogen.avg.toFixed(1)} kg/ha</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.nitrogen.min} - {plant.idealConditions.nitrogen.max} kg/ha
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">Fosfor (P)</span>
                      <Badge className="bg-blue-600">{plant.idealConditions.phosphorus.avg.toFixed(1)} kg/ha</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.phosphorus.min} - {plant.idealConditions.phosphorus.max} kg/ha
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-purple-700 dark:text-purple-400">Kalium (K)</span>
                      <Badge className="bg-purple-600">{plant.idealConditions.potassium.avg.toFixed(1)} kg/ha</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.potassium.min} - {plant.idealConditions.potassium.max} kg/ha
                    </div>
                  </div>
                </div>
              </div>

              {/* Kondisi Iklim & Tanah */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-600" />
                  Kondisi Iklim & Tanah
                </h3>

                <div className="space-y-3">
                  <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-orange-700 dark:text-orange-400">Suhu</span>
                      <Badge className="bg-orange-600">{plant.idealConditions.temperature.avg.toFixed(1)}°C</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.temperature.min.toFixed(1)}°C - {plant.idealConditions.temperature.max.toFixed(1)}°C
                    </div>
                  </div>

                  <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-cyan-700 dark:text-cyan-400">Kelembaban</span>
                      <Badge className="bg-cyan-600">{plant.idealConditions.humidity.avg.toFixed(1)}%</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.humidity.min.toFixed(1)}% - {plant.idealConditions.humidity.max.toFixed(1)}%
                    </div>
                  </div>

                  <div className="bg-pink-50 dark:bg-pink-950/30 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-pink-700 dark:text-pink-400">pH Tanah</span>
                      <Badge className="bg-pink-600">{plant.idealConditions.ph.avg.toFixed(2)}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.ph.min.toFixed(2)} - {plant.idealConditions.ph.max.toFixed(2)}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">Curah Hujan</span>
                      <Badge className="bg-blue-600">{plant.idealConditions.rainfall.avg.toFixed(1)} mm/tahun</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Range: {plant.idealConditions.rainfall.min.toFixed(1)} - {plant.idealConditions.rainfall.max.toFixed(1)} mm/tahun
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manfaat & Tips Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Manfaat */}
          <Card className="shadow-lg border-2">
            <CardHeader className="bg-green-50 dark:bg-green-950/30">
              <CardTitle className="text-xl text-green-700 dark:text-green-400">🌟 Manfaat & Keunggulan</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {plant.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="shadow-lg border-2">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/30">
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400">💡 Tips Budidaya</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {plant.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-sm leading-relaxed pt-0.5">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-8 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-3">Siap Membudidayakan {plant.nameIndo}?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Gunakan kalkulator prediksi kami untuk menganalisis kesesuaian lahan Anda dengan kondisi ideal {plant.nameIndo}
            </p>
            <Button 
              size="lg"
              className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={() => router.push("/predictions")}
            >
              Analisis Lahan Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
