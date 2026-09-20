import StaggeredMenu from "@/components/StaggeredMenu";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "Expertise", href: "/#expertise" },
  { label: "History", href: "/#history" },
  { label: "Projects", href: "/#projects" },
  { label: "Cases", href: "/#cases" },
  { label: "Contacts", href: "/#contact" },
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
      <StaggeredMenu
        position="right"
        items={STAGGERED_ITEMS}
        socialItems={SOCIAL_ITEMS}
        displaySocials
        displayItemNumbering
        menuButtonColor="#A855F7"
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen
        colors={["#B497CF", "#5227FF"]}
        accentColor="#A855F7"
        isFixed
      />
    </header>
  );
}
