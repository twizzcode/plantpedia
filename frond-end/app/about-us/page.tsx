"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Muhammad Yafi' Taqiyuddin",
    role: "Full Stack Developer",
    nim: "NIM 2404130065",
    image: "/team/member1.jpg", // Ganti dengan path foto sebenarnya
    bio: "Bertanggung jawab atas pengembangan frontend dan integrasi AI",
    socials: {
      github: "https://github.com/twizzcode",
      linkedin: "https://linkedin.com/in/username1",
      instagram: "https://instagram.com/twizzcode",
      email: "twizzcode@gmail.com"
    }
  },
  {
    name: "Fadli Nugraha Asfino",
    role: "Data Scientist & Backend Developer",
    nim: "NIM 234567",
    image: "/team/member2.jpg",
    bio: "Fokus pada model machine learning dan pengembangan backend API",
    socials: {
      github: "https://github.com/username2",
      linkedin: "https://linkedin.com/in/username2",
      instagram: "https://instagram.com/username2",
      email: "member2@example.com"
    }
  },
  {
    name: "Hegar Ananta Damar Buana",
    role: "UI/UX Designer & Frontend Developer",
    nim: "NIM 345678",
    image: "/team/member3.jpg",
    bio: "Mendesain antarmuka pengguna dan implementasi frontend",
    socials: {
      github: "https://github.com/username3",
      linkedin: "https://linkedin.com/in/username3",
      instagram: "https://instagram.com/username3",
      email: "member3@example.com"
    }
  }
];

export default function AboutUs() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen pt-20 pb-12 bg-linear-to-b from-green-50/50 to-background dark:from-green-950/20">
        <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">
            Tentang Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim pengembang sistem prediksi kesesuaian tanaman berbasis Machine Learning
          </p>
        </div>

        {/* Project Description */}
        <Card className="mb-12 shadow-lg border-2">
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Tentang Proyek</h2>
              <p className="text-muted-foreground mb-4">
                Sistem Prediksi Kesesuaian Tanaman adalah aplikasi web yang dirancang untuk membantu petani 
                dan praktisi pertanian dalam menentukan tanaman yang paling cocok untuk lahan mereka. 
                Menggunakan teknologi Machine Learning dengan algoritma Random Forest, sistem ini mampu 
                menganalisis berbagai parameter lahan seperti kandungan nutrisi (N, P, K), suhu, kelembaban, 
                pH tanah, dan curah hujan untuk memberikan rekomendasi yang akurat.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">🎯 Akurasi Tinggi</h3>
                  <p className="text-sm text-muted-foreground">
                    Model Random Forest dengan akurasi tinggi untuk prediksi yang dapat diandalkan
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🤖 AI Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Analisis mendalam menggunakan Google Gemini AI untuk rekomendasi detail
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">📚 22 Tanaman</h3>
                  <p className="text-sm text-muted-foreground">
                    Database lengkap kondisi ideal untuk 22 jenis tanaman pangan dan industri
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Tim Pengembang</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border">
                {/* Profile Image */}
                <div className="bg-linear-to-br from-green-500 to-emerald-600 h-40 flex items-center justify-center relative">
                  <div className="w-24 h-24 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-5xl border-4 border-white/50">
                    👤
                  </div>
                </div>

                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground/70 mb-4">{member.nim}</p>
                  
                  <p className="text-sm text-muted-foreground/90 mb-6 min-h-10 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full"
                          onClick={() => window.open(member.socials.github, '_blank')}
                        >
                          <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <p>{member.socials.github.replace('https://github.com/', '@')}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors rounded-full"
                          onClick={() => window.open(member.socials.linkedin, '_blank')}
                        >
                          <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <p>{member.socials.linkedin.replace('https://linkedin.com/in/', '')}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors rounded-full"
                          onClick={() => window.open(member.socials.instagram, '_blank')}
                        >
                          <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <p>@{member.socials.instagram.replace('https://instagram.com/', '')}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors rounded-full"
                          onClick={() => window.open(`mailto:${member.socials.email}`)}
                        >
                          <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <p>{member.socials.email}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <Card className="shadow-lg border-2">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Teknologi yang Digunakan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <div className="text-3xl mb-2">⚛️</div>
                <h4 className="font-semibold">Next.js 16</h4>
                <p className="text-xs text-muted-foreground">Frontend Framework</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                <div className="text-3xl mb-2">🐍</div>
                <h4 className="font-semibold">Flask + Python</h4>
                <p className="text-xs text-muted-foreground">Backend API</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-semibold">Random Forest</h4>
                <p className="text-xs text-muted-foreground">ML Algorithm</p>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-semibold">Google Gemini</h4>
                <p className="text-xs text-muted-foreground">AI Integration</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}