import Hero from "@/components/Hero";
import { Timer } from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
    </div>
  );
}
