"use client"


import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <div>
      <section>
    
    <Hero />
    </section>
    <section >
    
      <Skills />
    </section>
    <section>
      <ContactUs />
    </section>
    
    </div>
    
  );
}
