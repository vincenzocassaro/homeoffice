"use client";

import { setups } from "@/data/setupData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function HomeOfficeSetupsComponent() {
  // Remove the setups constant from here, as we're now importing it

  return (
    <div className="min-h-screen">
      <header className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/header.webp?height=400&width=800')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            HomeOffice101
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-2xl">
            Discover the perfect home office setup for every budget and style
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Explore Setups
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Home Office Setups
        </h2>

        {setups.map((setup, index) => (
          <section
            key={index}
            className={`mb-12 p-6 rounded-lg ${setup.color}`}
          >
            <Link
              className={`text-2xl font-semibold mb-8 ${setup.title_color} relative group`}
              href={`/details/${encodeURIComponent(setup.category)}`}
            >
              <h3 className="mb-2 inline-block">{setup.category}</h3>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setup.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="bg-white">
                  <CardHeader>
                    <CardTitle>{item.type}</CardTitle>
                    <CardDescription>{item.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover rounded-md"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.price}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.vendor}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About the Author</h2>
            <img
              src="/PropicYellow.png?height=150&width=150"
              alt="Author"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <p className="text-xl mb-6">
              Hi, I&apos;m Vincenzo Cassaro, a home office enthusiast and
              productivity expert. I&apos;ve been working remotely for over 5
              years and love sharing my experiences to help others create their
              perfect workspace.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/vincenzocassaro"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vincenzo-cassaro/"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/viciocassaro"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="mb-4">
                Subscribe to my newsletter for the latest home office tips and
                product recommendations.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
