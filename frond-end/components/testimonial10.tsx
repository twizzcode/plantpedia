import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial10Props {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const Testimonial10 = ({
  quote = "Only when the last tree has died and the last river been poisoned and the last fish been caught will we realize we cannot eat money.",
  author = {
    name: "- Pepatah Suku Cree",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: Testimonial10Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 max-w-4xl px-8 font-medium text-green-600 lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-lg font-bold md:text-base">{author.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial10 };
