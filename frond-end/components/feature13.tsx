"use client";

import { FadeIn } from "@/components/ui/fade-in";

interface Feature {
  id: string;
  heading: string;
  label: string;
  description: string;
  image: string;
  url: string;
}

interface Feature13Props {
  title?: string;
  features?: Feature[];
}

const Feature13 = ({
  title = "Fitur Unggulan Sistem Prediksi Tanaman",
  features = [
    {
      id: "feature-1",
      heading: "Prediksi Tanaman Otomatis",
      label: "MACHINE LEARNING",
      description:
        "Analisis lahan menggunakan algoritma Random Forest dengan akurasi tinggi. Input 7 parameter lahan (N, P, K, suhu, kelembaban, pH, curah hujan) dan dapatkan rekomendasi tanaman terbaik dalam hitungan detik.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      url: "/predictions",
    },
    {
      id: "feature-2",
      heading: "Ensiklopedia 22 Tanaman",
      label: "KNOWLEDGE BASE",
      description:
        "Panduan lengkap budidaya 22 jenis tanaman dari padi, jagung, buah-buahan, hingga komoditas. Setiap tanaman dilengkapi statistik kondisi ideal, manfaat ekonomi, dan tips praktis untuk hasil panen maksimal.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      url: "/blog",
    },
    {
      id: "feature-3",
      heading: "Analisis AI Google Gemini",
      label: "AI POWERED",
      description:
        "Setelah prediksi, dapatkan analisis mendalam dari Google Gemini AI. Penjelasan detail mengapa lahan cocok atau tidak, rekomendasi perbaikan lahan, dan langkah-langkah konkret untuk optimasi hasil panen.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      url: "/predictions",
    },
    {
      id: "feature-4",
      heading: "Visualisasi Data Interaktif",
      label: "USER FRIENDLY",
      description:
        "Interface modern dengan grafik parameter lahan, badge kategori nutrisi, dan layout responsif. Hasil prediksi ditampilkan dalam card yang mudah dibaca dengan informasi terstruktur dan actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      url: "/predictions",
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {title && (
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-pretty text-4xl font-medium lg:text-5xl hover:text-primary transition-colors duration-300">
                {title}
              </h2>
            </div>
          </FadeIn>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="bg-muted flex flex-col justify-between rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex justify-between gap-10 border-b">
                  <div className="flex flex-col justify-between gap-8 py-6 pl-4 md:gap-14 md:py-10 md:pl-8 lg:justify-normal">
                    <span className="text-muted-foreground font-mono text-xs group-hover:text-primary transition-colors duration-300">
                      {feature.label}
                    </span>
                    <a href={feature.url}>
                      <h3 className="hover:text-primary text-2xl transition-all duration-300 hover:translate-x-2 sm:text-3xl lg:text-4xl">
                        {feature.heading}
                      </h3>
                    </a>
                  </div>
                  <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l overflow-hidden">
                    <a href={feature.url}>
                      <img
                        src={feature.image}
                        alt={feature.heading}
                        className="h-full w-full rounded-t-lg object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground p-4 md:p-8 group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
