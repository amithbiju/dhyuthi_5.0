import About from "@/components/About";
import Hero from "@/components/Hero";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Timer />
      <Venue />
    </div>
  );
}
