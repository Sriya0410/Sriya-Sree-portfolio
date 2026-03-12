import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-border py-8 mt-20">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Rachabattuni Sriya Sree. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="mailto:rssriyasree@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href="https://linkedin.com/in/sriya-sree-251b53369"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
