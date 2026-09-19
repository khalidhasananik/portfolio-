import { InteractiveHoverLinks } from "@/components/ui/interactive-hover-links";

export default function CaseStudiesLink() {
  return (
    <InteractiveHoverLinks
      links={[
        {
          heading: "Case Studies",
          subheading: "A closer look at how the work came together",
          href: "/cases",
        },
      ]}
    />
  );
}
