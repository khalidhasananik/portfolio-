import Image from "next/image";

const PROJECTS = [
  {
    title: "Real-Time Soil Analysis and Predictive Analytics",
    description:
      "Developed a real-time soil analysis system by integrating a 7-in-1 soil sensor, efficient large-scale data processing, a 90% accurate crop yield prediction ML model, and API-driven data retrieval system.",
    imageUrl: "/projects/3.png",
    link: "https://huggingface.co/spaces/khalidhasananik/CSE499",
  },
  {
    title: "Dengue Cases Prediction",
    description:
      "Developed a machine learning model to predict dengue outbreaks using weather and historical data, with optimized data processing for improved efficiency.",
    imageUrl: "/projects/2.png",
    link: "https://github.com/khalidhasananik/CSE445-Project",
  },
  {
    title: "AutoDoc: VS Code Extension",
    description:
      "AutoDoc is an AI-powered chatbot extension for Visual Studio Code designed to enhance your coding experience with AI-based assistance.",
    imageUrl: "/projects/4.png",
    link: "https://github.com/khalidhasananik/AutoDoc_VSCode_Extension",
  },
  {
    title: "Linux Task Manager",
    description:
      "Developed a simple task manager for Linux systems that allows users to monitor system information, CPU and memory usage, system uptime, the number of background processes, and network information.",
    imageUrl: "/projects/5.png",
    link: "https://github.com/khalidhasananik/LinuxTaskmanager",
  },
  {
    title: "Crossy Road",
    description: "A simple crossing game built using Three.js",
    imageUrl: "/projects/6.png",
    link: "https://github.com/khalidhasananik/crossyroad",
  },
  {
    title: "Coin Game",
    description:
      "A simple game built with Unity and C#, you control a rolling ball to hit and collect coins. If you score 5 points, you win the game!",
    imageUrl: "/projects/1.png",
    link: "https://github.com/khalidhasananik/myfirstgame",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col bg-black px-[5%] py-[5%] text-left text-white" id="projects">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter uppercase sm:text-5xl md:text-7xl">
        Personal Projects
      </h1>
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.title} className="text-left">
            <a href={project.link} target="_blank" rel="noreferrer">
              <Image
                src={project.imageUrl}
                width={2125}
                height={1400}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="mx-auto h-auto w-full rounded-[5px] transition-transform duration-200 hover:scale-105"
                alt="thumbnail"
              />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2 className="mt-4 text-xl font-semibold hover:underline">{project.title}</h2>
            </a>
            <p className="mt-2 text-sm text-white/60">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
