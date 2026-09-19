import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import StaggeredMenu from "@/components/StaggeredMenu";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "History", href: "#history" },
  { label: "Projects", href: "#projects" },
  { label: "Cases", href: "#cases" },
  { label: "Contacts", href: "#contact" },
];

const STAGGERED_ITEMS = NAV_ITEMS.map((item) => ({
  label: item.label,
  ariaLabel: `Go to ${item.label}`,
  link: item.href,
}));

const SOCIAL_ITEMS = [
  { label: "GitHub", link: "https://github.com/khalidhasananik" },
  { label: "LinkedIn", link: "https://linkedin.com/in/khalidhasananik" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden justify-center pt-6 md:flex">
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href}>
              <RandomLetterSwap
                className="cursor-pointer text-2xl font-medium text-white"
                label={item.label}
                staggerDuration={0.025}
                transition={{ duration: 0.6, type: "spring" }}
              />
            </a>
          ))}
        </nav>
      </div>

      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={STAGGERED_ITEMS}
          socialItems={SOCIAL_ITEMS}
          displaySocials
          displayItemNumbering
          menuButtonColor="#ffffff"
          openMenuButtonColor="#111111"
          changeMenuColorOnOpen
          colors={["#B497CF", "#5227FF"]}
          logoUrl="/favicon.ico"
          accentColor="#A855F7"
          isFixed
        />
      </div>
    </header>
  );
}
