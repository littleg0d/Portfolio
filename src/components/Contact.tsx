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
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "El email debe tener menos de 255 caracteres" }),
  message: z.string().trim().min(1, { message: "El mensaje es requerido" }).max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar datos del formulario
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Error de validación",
          description: error.errors[0].message,
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Reemplaza esta URL con tu endpoint de GetForm
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
          title: "¡Mensaje enviado!",
          description: "Tu mensaje ha sido enviado correctamente. Te responderé pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Contacto</h2>

        {/* Redes Sociales */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Encuéntrame en</h3>
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

        {/* Formulario de Contacto */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Envíame un mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                className="bg-card border-border"
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tuemail@email.com"
                className="bg-card border-border"
                required
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tu mensaje..."
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
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
