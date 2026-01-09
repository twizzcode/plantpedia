"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

// Helper functions
const renderMenuItem = (item: MenuItem, pathname: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      </NavigationMenuItem>
    );
  }

  const isActive = pathname === item.url;

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className={`inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
          isActive
            ? "bg-green-600 text-white hover:bg-green-700 shadow-md scale-105"
            : "hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950 dark:hover:text-green-300 hover:scale-105"
        }`}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
      </AccordionItem>
    );
  }

  const isActive = pathname === item.url;

  return (
    <Link
      key={item.title}
      href={item.url}
      className={`text-md font-semibold transition-all duration-300 block py-2 px-3 rounded-lg ${
        isActive
          ? "bg-green-600 text-white shadow-md"
          : "hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950 dark:hover:text-green-300"
      }`}
    >
      {item.title}
    </Link>
  );
};

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "PlantPedia",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Predictions",
      url: "/predictions",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
  ],
}: Navbar1Props) => {
  const pathname = usePathname();

  return (
    <section className="py-4 fixed w-full top-0 bg-background/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                className="max-h-8 w-8"
                alt={logo.alt}
              />
              <span className="text-lg font-bold text-green-700 tracking-tight">
                {logo.title}
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-3">
                {menu.map((item) => renderMenuItem(item, pathname))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                className="max-h-8 w-8"
                alt={logo.alt}
              />
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
                        <Image
                          src="/logo.png"
                          width={50}
                          height={50}
                          className="max-h-8 w-8"
                          alt={logo.alt}
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item, pathname))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar1 };
