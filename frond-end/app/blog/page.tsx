"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plantsData } from "@/lib/plantsData";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Panduan Lengkap Budidaya Tanaman
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pelajari kondisi ideal, manfaat, dan tips praktis untuk membudidayakan {plantsData.length} jenis tanaman
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantsData.map((plant) => (
            <Link key={plant.id} href={`/blog/${plant.id}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2 hover:border-green-500 overflow-hidden rounded-2xl">
                <div className={`bg-linear-to-br ${plant.color} text-white p-6 pb-8`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl">{plant.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{plant.nameIndo}</h3>
                      <p className="text-white/90 text-sm">{plant.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90 line-clamp-2">
                    {plant.description}
                  </p>
                </div>
                
                <CardContent className="pt-4 pb-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Suhu Ideal</p>
                      <p className="font-semibold text-sm">{plant.idealConditions.temperature.avg.toFixed(1)}°C</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">pH Tanah</p>
                      <p className="font-semibold text-sm">{plant.idealConditions.ph.avg.toFixed(1)}</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Kelembaban</p>
                      <p className="font-semibold text-sm">{plant.idealConditions.humidity.avg.toFixed(0)}%</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Curah Hujan</p>
                      <p className="font-semibold text-sm">{plant.idealConditions.rainfall.avg.toFixed(0)} mm</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">N: {plant.idealConditions.nitrogen.avg.toFixed(0)}</Badge>
                    <Badge variant="secondary" className="text-xs">P: {plant.idealConditions.phosphorus.avg.toFixed(0)}</Badge>
                    <Badge variant="secondary" className="text-xs">K: {plant.idealConditions.potassium.avg.toFixed(0)}</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}