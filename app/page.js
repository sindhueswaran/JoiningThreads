import WhatWeDo from "@/app/components/whatwedo";
import Partners from "@/app/components/partners";
import Team from "@/app/components/team";
import Support from "@/app/components/support";
import Contact from "@/app/components/contact";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main> 
      <Hero />
      <WhatWeDo />
      <Partners />
      <Team />
      <Support />
      <Contact />
    </main>
  );
}
