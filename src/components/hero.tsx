import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "./ui/moving-border";

export function Hero() {
  return (
    <div className="relative flex h-[32rem] md:h-[32rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl pl-6 md:pl-15 pt-25 md:pt-30  ">
       
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text   font-sans
        tracking-tight text-4xl text-white  tracking-tight md:text-5xl lg:text-6xl opacity: 1   leading-[0.95] mb-1  transform: none">
          <span className="md:mr-2 font-sans">Hi,</span> <span className="md:mr-2 font-sans">  I'm</span><span className="font-sans text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text"> Harsh</span>
        </h1>
        <h3 
  className="md:text-2xl mt-3 text-xl tracking-normal leading-none text-zinc-500 font-mono"
  style={{ opacity: 1, transform: 'none' }}
    >Software Engineer.</h3>
    <div className="mt-6 w-16 h-px bg-gradient-to-r from-purple-500/60 to-transparent" ></div>
        <p className=" mt-4 max-w-lg font-normal font-mono tracking-tight  text-base 
        md:text-lg/7 leading-7  text-zinc-300/70 mb-4">
        I’m Harsh, a Software Developer passionate about full-stack development and Gen-AI. I enjoy building meaningful tech,
         contributing to open-source, and bringing ideas to life through code.
        </p>
        <a href="/harshCV.pdf" target="_blank" rel="noopener noreferrer">
        <Button borderRadius="1.75rem"
        className="bg-slate-900 dark:bg-slate-900 font-semibold text-base font-sans  text-purple-400 dark:text-purple-400 dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
         border-slate-800 dark:border-slate-800 "
         >
          Check my Resume
        </Button>
        </a>
      </div>
    </div>
  );
}
