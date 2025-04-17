"use client"


import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/hero";
import Projects from "@/components/Project";
import { Skills } from "@/components/Skills";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div >
      <section id = "hero">
    
    <Hero />
    </section>
    <section id = "skills">
    
      <Skills />
    </section>
    <section id = "projects">
      <Projects />
    </section>
    <section id = "contactUs">
      <ContactUs />
    </section>
    {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:scale-105 transition"
        >
          <ArrowUp />
        </button>
      )}
    
    </div>
    
  );
}
