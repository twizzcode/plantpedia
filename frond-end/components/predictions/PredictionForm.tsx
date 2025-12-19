"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PredictionFormProps {
  selectedPlant: string;
  setSelectedPlant: (value: string) => void;
  nitrogen: number;
  setNitrogen: (value: number) => void;
  phosphorus: number;
  setPhosphorus: (value: number) => void;
  potassium: number;
  setPotassium: (value: number) => void;
  temperature: number;
  setTemperature: (value: number) => void;
  humidity: number;
  setHumidity: (value: number) => void;
  ph: number;
  setPh: (value: number) => void;
  rainfall: number;
  setRainfall: (value: number) => void;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

const PLANT_OPTIONS = [
  { value: "Padi", label: "🌾 Padi (Rice)" },
  { value: "Jagung", label: "🌽 Jagung (Maize)" },
  { value: "Kacang Arab", label: "🫘 Kacang Arab (Chickpea)" },
  { value: "Kacang Merah", label: "🫘 Kacang Merah (Kidney Beans)" },
  { value: "Kacang Gude", label: "🫛 Kacang Gude (Pigeon Peas)" },
  { value: "Kacang Moth", label: "🫘 Kacang Moth (Moth Beans)" },
  { value: "Kacang Hijau", label: "🫛 Kacang Hijau (Mung Bean)" },
  { value: "Kacang Hitam", label: "⚫ Kacang Hitam (Black Gram)" },
  { value: "Lentil", label: "🫘 Lentil (Lentil)" },
  { value: "Delima", label: "🍎 Delima (Pomegranate)" },
  { value: "Pisang", label: "🍌 Pisang (Banana)" },
  { value: "Mangga", label: "🥭 Mangga (Mango)" },
  { value: "Anggur", label: "🍇 Anggur (Grapes)" },
  { value: "Semangka", label: "🍉 Semangka (Watermelon)" },
  { value: "Melon", label: "🍈 Melon (Muskmelon)" },
  { value: "Apel", label: "🍎 Apel (Apple)" },
  { value: "Jeruk", label: "🍊 Jeruk (Orange)" },
  { value: "Pepaya", label: "🫐 Pepaya (Papaya)" },
  { value: "Kelapa", label: "🥥 Kelapa (Coconut)" },
  { value: "Kapas", label: "☁️ Kapas (Cotton)" },
  { value: "Rami", label: "🌿 Rami (Jute)" },
  { value: "Kopi", label: "☕ Kopi (Coffee)" },
];

export function PredictionForm({
  selectedPlant,
  setSelectedPlant,
  nitrogen,
  setNitrogen,
  phosphorus,
  setPhosphorus,
  potassium,
  setPotassium,
  temperature,
  setTemperature,
  humidity,
  setHumidity,
  ph,
  setPh,
  rainfall,
  setRainfall,
  isAnalyzing,
  onAnalyze,
}: PredictionFormProps) {
  return (
    <Card className="shadow-lg border-2 overflow-auto h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Parameter Lahan</CardTitle>
        <CardDescription className="text-sm">
          Masukkan data kondisi lahan untuk analisis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Plant Selection */}
        <div className="space-y-2">
          <Label htmlFor="plant" className="text-sm font-semibold">
            Pilih Tanaman
          </Label>
          <select
            id="plant"
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="w-full p-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          >
            <option value="">-- Pilih tanaman --</option>
            {PLANT_OPTIONS.map((plant) => (
              <option key={plant.value} value={plant.value}>
                {plant.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Nitrogen */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Nitrogen (N)</Label>
            <Input
              type="number"
              value={nitrogen}
              onChange={(e) => setNitrogen(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 90"
            />
          </div>

          {/* Phosphorus */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Fosfor (P)</Label>
            <Input
              type="number"
              value={phosphorus}
              onChange={(e) => setPhosphorus(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 42"
            />
          </div>

          {/* Potassium */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Kalium (K)</Label>
            <Input
              type="number"
              value={potassium}
              onChange={(e) => setPotassium(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 43"
            />
          </div>

          {/* Temperature */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Suhu (°C)</Label>
            <Input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 20.8"
              step="0.1"
            />
          </div>

          {/* Humidity */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Kelembaban (%)</Label>
            <Input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 82"
            />
          </div>

          {/* Rainfall */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Curah Hujan (mm)</Label>
            <Input
              type="number"
              value={rainfall}
              onChange={(e) => setRainfall(Number(e.target.value))}
              className="text-sm h-9"
              placeholder="Contoh: 202.9"
              step="0.1"
            />
          </div>
        </div>

        {/* pH with Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-semibold">pH Tanah</Label>
            <span className="text-sm font-medium text-green-600">{ph.toFixed(1)}</span>
          </div>
          <Slider
            value={[ph]}
            onValueChange={(v: number[]) => setPh(v[0])}
            min={0}
            max={14}
            step={0.1}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Asam (0)</span>
            <span>Netral (7)</span>
            <span>Basa (14)</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={onAnalyze}
          disabled={isAnalyzing || !selectedPlant}
          className="w-full py-5 text-base font-semibold bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-[1.02] shadow-lg"
        >
          {isAnalyzing ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Menganalisis...
            </span>
          ) : (
            "Analisis Lahan"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
