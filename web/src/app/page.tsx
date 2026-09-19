import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Marquee from "@/components/sections/Marquee";
import History from "@/components/sections/History";
import Projects from "@/components/sections/Projects";
import CaseStudiesLink from "@/components/sections/CaseStudiesLink";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Expertise />
      <Marquee />
      <History />
      <Projects />
      <CaseStudiesLink />
      <Contact />
    </div>
  );
}
