import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: t("contact.validation.nameRequired") }).max(100, { message: t("contact.validation.nameMax") }),
    email: z.string().trim().email({ message: t("contact.validation.emailInvalid") }).max(255, { message: t("contact.validation.emailMax") }),
    message: z.string().trim().min(1, { message: t("contact.validation.messageRequired") }).max(1000, { message: t("contact.validation.messageMax") }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: t("contact.toast.validationError"),
          description: error.errors[0].message,
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/awnyljnb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: t("contact.toast.sent"),
          description: t("contact.toast.sentDesc"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Sending error");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("contact.toast.error"),
        description: t("contact.toast.errorDesc"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">{t("contact.title")}</h2>

        {/* Social Media */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t("contact.findme")}</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:federicorojas2k17@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>federicorojas2k17@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/littleg0d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">{t("contact.sendmessage")}</h3>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t("contact.namePlaceholder")}
                className="bg-card border-border"
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t("contact.emailPlaceholder")}
                className="bg-card border-border"
                required
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("contact.messagePlaceholder")}
                className="bg-card border-border min-h-[150px]"
                required
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
