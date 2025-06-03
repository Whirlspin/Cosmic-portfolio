import { ArrowUp, Telescope } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        {new Date().getFullYear()} <Telescope size={18} />{" "}
        <a href="https://jethroedwards.com/" target="_blank">
          jethroedwards.com
        </a>
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
