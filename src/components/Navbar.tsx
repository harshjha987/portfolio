"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
import {  Github, Instagram, Linkedin, MenuIcon,  Twitter } from "lucide-react";
// import { useTheme } from "next-themes"
import Link from "next/link";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
 
} from "@/components/ui/command"
import {
  Sheet,
  SheetClose,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"





function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [open ,setOpen] = React.useState(false)
  const [sheetOpen, setSheetOpen] = React.useState(false);
  // const { setTheme } = useTheme()
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-6xl mx-auto z-50 justify-between  ", className)}
    >
      <Menu setActive={setActive}>
      <Link href= '/'>
      <div className="flex items-center ">
        <img src= "/s (1).png" className="md:h-10 md:w-26 h-8 w-22 "/>
      </div>
      
      
      </Link>
      
      <div className="hidden md:flex items-center space-x-10 font-mono text-[15px] font-medium ">
        <div className="flex gap-1 items-center">
        <Link href= '/'>
        <MenuItem setActive={setActive} active={active} item="Home" >
          
        </MenuItem>
        </Link>
        </div>
        <div className="flex gap-1 items-center">
          <Link href = "#hero">
         
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        </Link>
        </div>
        <div className="flex gap-1 items-center">
          <Link href = "#projects">
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        </Link>
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
          </div>
          <div className="md:hidden flex gap-4 px-2 ">
          <button onClick={() => setOpen(true)}>
        <kbd className="pointer-events-none inline-flex h-10 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium text-white opacity-100">
          <span className="text-base mb-2.5">⌘</span>
        </kbd>
        </button>
      
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          
          <CommandGroup heading="Social">
            <CommandItem onSelect={() => window.open("https://github.com/harshjha987", "_blank")}>
              <Github />
              <span>Github</span>
            </CommandItem>
            <CommandItem onSelect={() => window.open("https://www.linkedin.com/in/hrjha987/", "_blank")}>
              <Linkedin />
              <span>Linked In</span>
            </CommandItem>
            <CommandItem onSelect={() => window.open("https://x.com/thattallboy987", "_blank")}>
              <Twitter />
              <span>Twitter</span>
            </CommandItem>
            <CommandItem onSelect={() => window.open("https://www.instagram.com/_.that_tall_boy._/", "_blank")}>
              <Instagram />
              <span>Instagram</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          
        </CommandList>
      </CommandDialog>
      
       <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
  <SheetTrigger asChild>
    
    <MenuIcon className="h-5 w-5 mt-[5px]" />
    
    
  </SheetTrigger>
  
  <SheetContent>
  
    
      <div className="space-y-4 pl-6 font-mono">
      <div className="flex gap-1 items-center mt-6">
      <Link href= '/' onClick={() => setSheetOpen(false)}>
        <MenuItem setActive={setActive} active={active} item="Home" >
          
        </MenuItem>
        </Link>
        </div>
        <div className="flex gap-1 items-center">
        <button onClick={() => setSheetOpen(false)}>
         
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        </button>
        </div>
        <div className="flex gap-1 items-center">
        <button onClick={() => setSheetOpen(false)}>
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        </button>
        </div>
        
        <div className="flex gap-1 items-center">
        <Link href= "/blogs" onClick={() => setSheetOpen(false)}>
        <MenuItem setActive={setActive} active={active} item="Blogs">
          
        </MenuItem>
        </Link>
        </div>
        
      
      
    </div>
    
  </SheetContent>
  </Sheet>

</div>
        
        {/* <DropdownMenu>
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
        
        
       */}
        
      </Menu>
    </div>
  );
}

export default Navbar
