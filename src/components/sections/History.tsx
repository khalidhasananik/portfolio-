import FlowArt, { FlowSection } from "@/components/StoryScrool";
import { BriefcaseBusinessIcon } from "@/components/ui/briefcase-business";
import { GraduationCapIcon } from "@/components/ui/graduation-cap";

const AWTOMATIG_ROLES = [
  { title: "Technical Project Coordinator", dates: "Feb 2026 – Present" },
  { title: "AI Ops & Automation Engineer", dates: "Nov 2025 – Feb 2026" },
  { title: "Intern", dates: "Jul 2025 – Oct 2025" },
];

export default function History() {
  return (
    <div id="history">
      <FlowArt aria-label="Career history">
        <FlowSection
          aria-label="AWTOMATIG"
          style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase">01 — Experience</p>
          <hr className="my-[2vw] border-t border-white/20" />
          <h1 className="text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-bold tracking-tight uppercase">
            AWTOMATIG
          </h1>
          <p className="text-sm opacity-60">Dhaka, Bangladesh · On-site · 1 yr 2 mos</p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div className="mt-auto flex flex-col gap-[2vw]">
            {AWTOMATIG_ROLES.map((role) => (
              <div key={role.title} className="flex items-center gap-4">
                <BriefcaseBusinessIcon size={28} />
                <div>
                  <p className="text-[clamp(1.1rem,2vw,1.6rem)] font-semibold">{role.title}</p>
                  <p className="text-sm opacity-60">{role.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </FlowSection>

        <FlowSection
          aria-label="Ahsan Technologies Ltd."
          style={{ backgroundColor: "#F5F0E8", color: "#000" }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase">02 — Experience</p>
          <hr className="my-[2vw] border-t border-black/20" />
          <h2 className="text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-bold tracking-tight uppercase">
            Ahsan
            <br />
            Technologies
          </h2>
          <hr className="my-[2vw] border-t border-black/20" />
          <div className="mt-auto flex items-center gap-4">
            <BriefcaseBusinessIcon size={28} />
            <div>
              <p className="text-[clamp(1.1rem,2vw,1.6rem)] font-semibold">
                Software Development Intern
              </p>
              <p className="text-sm opacity-60">Sep 2024 – Dec 2024</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Education" style={{ backgroundColor: "#1A3DE8", color: "#fff" }}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase">03 — Education</p>
          <hr className="my-[2vw] border-t border-white/30" />
          <h2 className="text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-bold tracking-tight uppercase">
            North South
            <br />
            University
          </h2>
          <hr className="my-[2vw] border-t border-white/30" />
          <div className="mt-auto flex items-center gap-4">
            <GraduationCapIcon size={28} />
            <div>
              <p className="text-[clamp(1.1rem,2vw,1.6rem)] font-semibold">
                BSc in Computer Science and Engineering
              </p>
              <p className="text-sm opacity-60">Feb 2021 – Jan 2025</p>
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
}
