"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "✨ Your Best Plant Website",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Prediction Your Place",
      url: "/predictions",
    },
    secondary: {
      text: "Read Blog",
      url: "/blog",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="min-h-dvh flex items-center py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-in fade-in slide-in-from-left duration-700">
            {badge && (
              <Badge variant="outline" className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-in fade-in zoom-in duration-500">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl hover:text-primary transition-colors duration-300 animate-in fade-in slide-in-from-bottom delay-150 duration-700">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl animate-in fade-in slide-in-from-bottom delay-300 duration-700">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start animate-in fade-in slide-in-from-bottom delay-500 duration-700">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto hover:scale-105 transition-all duration-300 bg-green-700 hover:bg-green-600 hover:shadow-lg">
                  <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                  <Link href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div className="">
            <Image
              src="/hero.jpg"
              alt={image.alt}
              width={500}
              height={500}
              className="max-h-96 w-full rounded-md object-cover hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
