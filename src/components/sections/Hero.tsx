import AeroShards from "@/components/AeroShards";
import TextType from "@/components/TextType";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";

const ROLES = ["Software Engineer", "Project Coordinator", "Tech Enthusiast"];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/khalidhasananik", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khalidhasananik/", Icon: LinkedinIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen">
      <AeroShards
        backgroundColor="#120F17"
        shardColor="#896ABD"
        accentColor="#A855F7"
        placement="full"
        flow="stream"
        material="pearl"
        detail="balanced"
        effect="none"
        scale={1}
        spread={1}
        depth={1}
        speed={1}
        spin={1}
        interaction="repel"
        density={1.25}
        shardSize={1.1}
        stretch={1}
        turbulence={1}
        glow={1.25}
        edgeSoftness={2}
        bloom={0.5}
        grain={0.05}
        chromaticAberration={0.0075}
        transitionDuration={1}
        interactionRadius={1.5}
        interactionStrength={0.5}
        rippleIntensity={1}
        holdToGather
        paused={false}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center px-[15%]">
        <div className="pointer-events-auto flex flex-col items-start gap-6 text-left">
          <div className="flex flex-row items-center gap-[10px] text-white">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors duration-150 ease-in-out hover:text-[#5000ca]"
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
          <h1 className="m-0 font-sans text-[5.5rem] leading-tight font-bold text-white">
            Khalid Hasan
          </h1>
          <TextType
            as="p"
            className="m-0 font-sans text-[1.65rem] leading-tight text-white"
            text={ROLES}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
          />
        </div>
      </div>
    </section>
  );
}
