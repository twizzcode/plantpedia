import { Logo, LogoImage, LogoText } from "@/components/logo";
import { Leaf, Sprout, BookOpen, Users, Mail, Github, Linkedin, Instagram } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/logo.png",
    alt: "Sistem Prediksi Tanaman",
    title: "🌱 PlantPedia",
    url: "/",
  },
  tagline = "Platform prediksi tanaman berbasis Machine Learning dan AI untuk membantu petani menemukan tanaman terbaik untuk lahan mereka.",
  menuItems = [
    {
      title: "Fitur",
      links: [
        { text: "Prediksi Tanaman", url: "/predictions", icon: <Leaf className="h-4 w-4" /> },
        { text: "Panduan 22 Tanaman", url: "/blog", icon: <BookOpen className="h-4 w-4" /> },
        { text: "Analisis AI", url: "/predictions", icon: <Sprout className="h-4 w-4" /> },
      ],
    },
    {
      title: "Tentang",
      links: [
        { text: "Tentang Kami", url: "/about-us", icon: <Users className="h-4 w-4" /> },
        { text: "Tim Pengembang", url: "/about-us#team" },
        { text: "Teknologi", url: "/about-us#tech" },
      ],
    },
    {
      title: "Tanaman",
      links: [
        { text: "Padi & Jagung", url: "/blog" },
        { text: "Buah-buahan", url: "/blog" },
        { text: "Kacang-kacangan", url: "/blog" },
        { text: "Komoditas", url: "/blog" },
      ],
    },
    {
      title: "Sosial Media",
      links: [
        { text: "GitHub", url: "https://github.com", icon: <Github className="h-4 w-4" /> },
        { text: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="h-4 w-4" /> },
        { text: "Instagram", url: "https://instagram.com", icon: <Instagram className="h-4 w-4" /> },
        { text: "Email", url: "mailto:info@agripredict.com", icon: <Mail className="h-4 w-4" /> },
      ],
    },
  ],
  copyright = "© 2025 PlantPedia. Dikembangkan untuk Proyek Akhir Matematika Diskrit.",
  bottomLinks = [
    { text: "Kebijakan Privasi", url: "#" },
    { text: "Syarat & Ketentuan", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url={logo.url}>
                  <LogoText className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {logo.title}
                  </LogoText>
                </Logo>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-sm uppercase tracking-wide">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.url}
                        className="hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.icon}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
