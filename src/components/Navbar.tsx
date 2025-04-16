"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {  Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes"
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { setTheme } = useTheme()
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-6xl mx-auto z-50 justify-between ", className)}
    >
      <Menu setActive={setActive}>
      <Link href= '/'>
      <div className="flex items-center ml-5">
        <p className="py-1">Harsh</p>
      </div>
      
      
      </Link>
      
      <div className="hidden md:flex items-center space-x-10 font-mono text-[15px] font-medium ">
        <div className="flex gap-1 items-center">
      
        <MenuItem setActive={setActive} active={active} item="Home" >
          
        </MenuItem>
        </div>
        <div className="flex gap-1 items-center">
         
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        </div>
        <div className="flex gap-1 items-center">
          
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        </div>
        
        <div className="flex gap-1 items-center">
        <Link href= "/blogs">
        <MenuItem setActive={setActive} active={active} item="Blogs">
          
        </MenuItem>
        </Link>
        </div>
        </div>
        <div className="hidden md:flex items-center  space-x-4">
        <a href="https://github.com/harshjha987" target="_blank" rel="noopener noreferrer">
           <Github />
          </a>
          <a href="https://x.com/thattallboy987" target="_blank" rel="noopener noreferrer">
           <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/hrjha987/" target="_blank" rel="noopener noreferrer">
           <Linkedin />
          </a>

        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem  onClick={() => setTheme("light")}>
            Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
        
        
      
        </div>
      </Menu>
    </div>
  );
}

export default Navbar
