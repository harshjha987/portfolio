import { BiLogoSpringBoot } from "react-icons/bi";
import { ProjectCard } from "./ProjectCard";
import { GrReactjs } from "react-icons/gr";
import { useState } from "react";

const projects = [
  {
    title: "KaamKaaj",
    description:"A streamlined task management platform built for teams that value clarity over complexity.",
    img: "/kaamkaajlogo.png",
    link:"https://kaamkaaj.site",
    tech : ["SpringBoot", "Reactjs", "MySql", "AWS EC2", "AWS S3"],

  },
  {
    title: "DocVault",
    description:"A complete document management solution for all your personal and professional files.",
    img: "/docvault.png",
    link:"https://docvault.site",
    tech : ["SpringBoot", "Reactjs", "MySql", "AWS EC2", "AWS S3"],

  },
  {
    title: "NOMADCabs",
    description:"Real Time Cab Management Application.",
    img: "/logo-dark.png",
    link:"https://github.com/harshjha987/nomad_Cabs",
    tech : ["SpringBoot", "Reactjs", "MySql"],
  }
  ,
  {
    title: "Shortrix",
    description: "A full-stack URL shortener with user auth and analytics.",
    img: "/shortrix.jpg",
    link: "https://shortrix.vercel.app/",
    
    
    tech: ["Nexjs", "Node.js", "MongoDB","Aceternity Ui"],
  },
  // {
  //   title: "Mira Ai",
  //   description: "Personalised chatbot for career counseling(Currently under Construction)",
  //   img: "/mira.jpg",
  //   link: "https://simplebot-delta.vercel.app/",
  //   tech: ["React", "Gemini API"],
  // },
  {
    title: 'HomeHub',
    description: 'HomeHub is a real estate platform where buyers can purchase homes and sellers can list properties for sale.',
    img: '/homehub.jpg',
    tech: ['React', 'Express', 'MongoDB', 'Nodejs'],
    link: 'https://homehub-jwy1.onrender.com/',
  },
  {
    title: 'CryptoWeather Nexus',
    description: 'Multi-page dashboard that integrates real-time weather data, cryptocurrency information, and news updates.',
    img: '/crypto.jpg',
    tech: ['Nexjs', 'Nodejs', 'MongoDB', 'Aceternity Ui'],
    link: 'https://cryptoweathernexus-two.vercel.app/',
  },
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? projects : projects.slice(0, 3);

    return (
      <section className="py-20 px-6 bg-black text-white border-b-2">
         <h2 className="text-5xl font-semibold mb-16 text-center font-mono text-transparent bg-gradient-to-r from-purple-400 to-pink-500
  bg-clip-text">Projects</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 place-items-center">
          {displayed.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>

        {projects.length > 3 && (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => setShowAll(!showAll)}
        className="font-mono text-sm text-gray-400 border border-white/20 px-6 py-2.5 rounded-lg hover:text-white
  hover:border-white/50 transition-all duration-200"
      >
        {showAll ? "↑ Show Less" : "View All Projects →"}
      </button>
    </div>
  )}
      </section>
    );
  }

