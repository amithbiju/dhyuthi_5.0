import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Event />
      <Timer />
      <Venue />
    </div>
  );
}
