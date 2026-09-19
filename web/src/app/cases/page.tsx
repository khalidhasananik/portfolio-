import Link from "next/link";

import { ArrowLeftIcon } from "@/components/ui/arrow-left";

export default function CasesPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <p className="text-lg text-muted-foreground">
        I&apos;m too lazy to write up case studies right now, but I&apos;ll get some out eventually. Stay tuned.
      </p>
      <Link
        href="/"
        className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeftIcon size={20} />
        Back
      </Link>
    </div>
  );
}
