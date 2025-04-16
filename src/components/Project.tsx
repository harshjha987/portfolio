import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Shortrix",
    description: "A full-stack URL shortener with user auth and analytics.",
    img: "/images/shortrix.png",
    link: "https://shortrix.vercel.app",
    
    
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Gemini Chatbot",
    description: "UI for a chatbot powered by Gemini API.",
    img: "/images/gemini-chat.png",
    link: "https://gemini-chat.vercel.app",
    tech: ["React", "Gemini API"],
  },
  {
    title: 'HomeHub',
    description: 'Real estate listing platform built with MERN stack and JWT auth.',
    img: '/images/homehub.png',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    link: 'https://homehub.vercel.app',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">🚀 Projects</h2>
      <div className="grid md:grid-cols-2  gap-10 place-items-center">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
