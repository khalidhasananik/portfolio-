import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/AnimatedSlideshow";

const SLIDES = [
  {
    id: "project-coordination",
    title: "Project Coordination",
    imageUrl: "/expertise/management.svg",
  },
  {
    id: "web-development",
    title: "Web Development",
    imageUrl: "/expertise/website.svg",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    imageUrl: "/expertise/ai-ops.svg",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    imageUrl: "/expertise/workflow-automation.svg",
  },
  {
    id: "devops",
    title: "DevOps",
    imageUrl: "/expertise/devops.svg",
  },
];

export default function Expertise() {
  return (
    <HoverSlider id="expertise" className="min-h-svh place-content-center bg-white p-6 text-[#3d3929] md:px-12">
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex flex-col space-y-2 md:space-y-4">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-2xl font-bold tracking-tighter uppercase sm:text-3xl md:text-5xl"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap className="size-64 md:size-80">
          {SLIDES.map((slide, index) => (
            <div key={slide.id}>
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
  );
}
