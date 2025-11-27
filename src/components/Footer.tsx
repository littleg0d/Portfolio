import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

const AppFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Backend Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-foreground font-semibold mb-4">{t("footer.quicklinks")}</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {t("nav.about")}
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://github.com/littleg0d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/federico-gomez-700b0825a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:federicogomez1999@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Federico. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
