import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Shortrix",
    description: "A full-stack URL shortener with user auth and analytics.",
    img: "/shortrix.jpg",
    link: "https://shortrix.vercel.app",
    
    
    tech: ["Nexjs", "Node.js", "MongoDB","Aceternity Ui"],
  },
  {
    title: "Mira Ai",
    description: "Personalised chatbot for career counseling(Currently under Construction)",
    img: "/mira.jpg",
    link: "https://gemini-chat.vercel.app",
    tech: ["React", "Gemini API"],
  },
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
    link: 'https://homehub.vercel.app',
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
