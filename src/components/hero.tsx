import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "./ui/moving-border";

export function Hero() {
  return (
    <div className="relative flex h-[25rem] md:h-[32rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl pl-6 md:pl-15 pt-25 md:pt-10 ">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text   font-sans
        tracking-wide text-4xl text-purple-400 font-medium  md:text-5xl opacity: 1  gap-2 leading-none mb-1  transform: none">
          <span className="md:mr-2 font-mono">HI!</span> <span className="md:mr-2 font-mono">  I'M</span><span className="font-mono"> HARSH</span>
        </h1>
        <h3 className="md:text-2xl text-xl font-medium text-zinc-300/90 font-serif">Software Engineer.</h3>
        <p className=" mt-4 max-w-lg font-normal font-mono tracking-tight  text-base 
        md:text-lg/7 leading-7  text-zinc-300/70 mb-2">
        I’m Harsh — a final-year Computer Science student passionate about full-stack development and Gen-AI.
         I love building meaningful tech, contributing to open-source, and bringing ideas to life through code.
        </p>
        <a href="/HarshRanjanJha_CV.pdf" target="_blank" rel="noopener noreferrer">
        <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-base font-sans text-black dark:text-white border-neutral-200 dark:border-slate-800 "
         >
          Check my Resume
        </Button>
        </a>
      </div>
    </div>
  );
}
