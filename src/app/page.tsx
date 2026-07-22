import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/location";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <About />
      <Gallery />
      <Location />
    </main>
  );
}