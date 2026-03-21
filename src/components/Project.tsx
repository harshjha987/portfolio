import { BiLogoSpringBoot } from "react-icons/bi";
import { ProjectCard } from "./ProjectCard";
import { GrReactjs } from "react-icons/gr";

const projects = [
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
  return (
    <section className="py-20 px-6 bg-black text-white border-b-2 ">
      <h2 className="text-5xl font-bold mb-16 text-center font-mono text-neutral"> Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
