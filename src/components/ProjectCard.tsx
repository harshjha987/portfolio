"use client";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
    title : string;
    description : string;
    img : string;
    link : string;
    tech? : string[]
    avatar? : string;

}

export function ProjectCard({ title, description, img, link, tech = [] }: ProjectCardProps) {
  return (
    <div className="max-w-xs w-full rounded-md shadow-xl overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Top Image */}
      <div className="h-48 w-full">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Below */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-xs text-black dark:text-white px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 underline"
        >
          Visit Project ↗
        </a>
      </div>
    </div>
  );
}
