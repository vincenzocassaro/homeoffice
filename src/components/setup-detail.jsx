"use client";


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Home, Info, Mail } from "lucide-react";

export function SetupDetailComponent({ category }) {

    const setups = [
        {
          category: "Budget-Friendly",
          color: "bg-pink-100",
          title_color: "text-[#5b2245]",
          items: [
            {
              type: "Chair",
              name: "ErgoBasic Mesh Chair",
              price: "$89.99",
              vendor: "AmazonBasics",
              image: "/ergobasic.jpg?height=100&width=100",
            },
            {
              type: "Desk",
              name: "SimpleWork Writing Desk",
              price: "$129.99",
              vendor: "Wayfair",
              image: "/simplework.webp?height=100&width=100",
            },
            {
              type: "Lamp",
              name: "LEDit Desk Lamp",
              price: "$24.99",
              vendor: "Target",
              image: "/ledit.png?height=100&width=100",
            },
          ],
        },
        {
          category: "Mid-Range",
          color: "bg-blue-100",
          title_color: "text-[#1a3e72]",
          items: [
            {
              type: "Chair",
              name: "Steelcase Series 1",
              price: "$415.00",
              vendor: "Steelcase",
              image: "/steelcase.jpg?height=100&width=100",
            },
            {
              type: "Desk",
              name: "Jarvis Standing Desk",
              price: "$569.00",
              vendor: "Fully",
              image: "/jarvis.avif?height=100&width=100",
            },
            {
              type: "Lamp",
              name: "BenQ e-Reading LED Lamp",
              price: "$199.99",
              vendor: "BenQ",
              image: "/benq.jpg?height=100&width=100",
            },
          ],
        },
        {
          category: "Premium",
          color: "bg-green-100",
          title_color: "text-[#22543d]",
          items: [
            {
              type: "Chair",
              name: "Herman Miller Aeron",
              price: "$1,395.00",
              vendor: "Herman Miller",
              image: "/aeron.webp?height=100&width=100",
            },
            {
              type: "Desk",
              name: "Uplift V2 4-Leg Desk",
              price: "$1,299.00",
              vendor: "Uplift Desk",
              image: "/uplift.jpg?height=100&width=100",
            },
            {
              type: "Lamp",
              name: "Dyson Lightcycle Morph",
              price: "$649.99",
              vendor: "Dyson",
              image: "/lightcycle.webp?height=100&width=100",
            },
          ],
        },
        {
          category: "Ikea",
          color: "bg-gradient-to-r from-[#0058AB] to-[#FFDA1A]",
          title_color: "text-[#FFFFFF]",
          items: [
            {
              type: "Chair",
              name: "MARKUS Office Chair",
              price: "$229.00",
              vendor: "Ikea",
              image: "/markus.jpeg?height=100&width=100",
            },
            {
              type: "Desk",
              name: "BEKANT Desk",
              price: "$249.00",
              vendor: "Ikea",
              image: "/bekant.jpg?height=100&width=100",
            },
            {
              type: "Lamp",
              name: "FORSÅ Work Lamp",
              price: "$29.99",
              vendor: "Ikea",
              image: "/forsa.avif?height=100&width=100",
            },
          ],
        },
      ];
  const setup = setups.find(s => s.category === category);
  if (!setup) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">HomeOffice101</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300"><Home className="inline-block mr-1" size={18} />Home</Link>
            <Link href="/about" className="hover:text-gray-300"><Info className="inline-block mr-1" size={18} />About</Link>
            <Link href="/contact" className="hover:text-gray-300"><Mail className="inline-block mr-1" size={18} />Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="mr-2" size={20} />
            </Button>
          </Link>
          <h1 className={`text-3xl font-bold ${setup.title_color}`}>{category} Home Office Setup</h1>
        </div>

        <Card className={`${setup.color} p-6`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setup.items.map((item, index) => (
              <div key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle>{item.type}</CardTitle>
                  <CardDescription>{item.name}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-square relative mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover rounded-md"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">{item.price}</span>
                    <span className="text-sm text-muted-foreground">{item.vendor}</span>
                  </div>
                  <p className="text-sm mb-4">{item.description}</p>
                  <Button className="w-full mt-auto">Buy Now</Button>
                </CardContent>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}