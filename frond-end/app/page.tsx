import { Feature13 } from "@/components/feature13";
import { Hero1 } from "@/components/hero1";
import { Testimonial10 } from "@/components/testimonial10";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="px-4 ms:px-0">
      <Hero1
        heading="Welcome to Our PlantPedia"
        description="Discover the perfect plants for your environment, made easy. ❤️"
        buttons={{
          primary: {
            text: "Prediction Your Place",
            url: "/predictions",
          },
          secondary: {
            text: "Read Blog",
            url: "/blog",
          },
        }}
        image={{
          src: "./hero.png",
          alt: "Hero section demo image showing interface components",
        }}
      />
      <FadeIn delay={100}>
        <Feature13
          title="Our Features You Can Use ❤️"
        />
      </FadeIn>
      <FadeIn delay={200}>
        <Testimonial10 />
      </FadeIn>
    </div>
  );
}
