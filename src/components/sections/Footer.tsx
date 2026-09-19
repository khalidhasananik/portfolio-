import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "History", href: "#history" },
  { label: "Projects", href: "#projects" },
  { label: "Cases", href: "/cases" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/khalidhasananik", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khalidhasananik/", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B090D] px-[5%] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-heading text-xl font-bold">Khalid Hasan Anik</span>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-150 hover:border-white/40 hover:text-[#A855F7]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Khalid Hasan Anik. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-150 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
