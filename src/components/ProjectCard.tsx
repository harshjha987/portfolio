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

export function ProjectCard({title,description,img,link,tech=[],avatar}:ProjectCardProps) {

  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto  flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0
        transition duration-300 group-hover/card:bg-black opacity-60">
            <div className="relative  justify-between flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-row itms-center space-x-2">
               
                <div className="flex flex-col ">
                    <p className="font-normal text-base text-gray-50">{title}</p>

                </div>
                </div>


            </div>
            <div className="z-10">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 my-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
                {Array.isArray(tech) &&
                  tech.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white text-black px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
