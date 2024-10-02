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
import Link from "next/link";
import { ArrowLeft, Home, Info, Mail } from "lucide-react";

export function SetupDetailComponent({ category }) {
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