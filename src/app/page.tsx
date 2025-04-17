"use client"


import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/hero";
import Projects from "@/components/Project";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <div >
      <section>
    
    <Hero />
    </section>
    <section >
    
      <Skills />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <ContactUs />
    </section>
    
    </div>
    
  );
}
