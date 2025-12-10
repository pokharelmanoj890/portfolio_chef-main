import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-2">Chef Asim Khanal</h4>
            <p className="text-background/70 text-sm">
              Personal Trainer Chef • Kathmandu, Nepal
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+9779766832875"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:asim56998@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/asim-khanal-b5a299345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Chef Asim Khanal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
