import Image from "next/image";
import MarqueeAlongSvgPath from "@/components/MarqueeSvg";

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

const imgs = [
  { src: "/marquee/claude-color.svg", alt: "Claude" },
  { src: "/marquee/claudecode-color.svg", alt: "Claude Code" },
  { src: "/marquee/cursor.svg", alt: "Cursor" },
  { src: "/marquee/vs-code.svg", alt: "VS Code" },
  { src: "/marquee/github.svg", alt: "GitHub" },
  { src: "/marquee/githubcopilot.svg", alt: "GitHub Copilot" },
  { src: "/marquee/figma-color.svg", alt: "Figma" },
  { src: "/marquee/vercel.svg", alt: "Vercel" },
  { src: "/marquee/openai.svg", alt: "OpenAI" },
  { src: "/marquee/gemini-color.svg", alt: "Gemini" },
  { src: "/marquee/geminicli-color.svg", alt: "Gemini CLI" },
  { src: "/marquee/antigravity-color.svg", alt: "Antigravity" },
  { src: "/marquee/ollama.svg", alt: "Ollama" },
  { src: "/marquee/notion.svg", alt: "Notion" },
  { src: "/marquee/jina.svg", alt: "Jina" },
];

export default function Marquee() {
  return (
    <div className="w-full bg-white pb-16 md:pb-24">
      <div className="mx-auto aspect-[996/330] w-full max-w-5xl">
        <MarqueeAlongSvgPath
          path={path}
          viewBox="0 0 996 330"
          baseVelocity={8}
          slowdownOnHover
          draggable
          repeat={2}
          dragSensitivity={0.1}
          className="h-full w-full scale-105"
          responsive
          grabCursor
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="relative h-14 w-14 duration-300 ease-in-out hover:scale-150"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="56px"
                className="object-contain"
                draggable={false}
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </div>
  );
}
