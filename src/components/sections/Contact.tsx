import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Loader2, Send, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { useCopyToClipboard } from '@/components/hooks/useCopyToClipboard';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: t('contact.validation.nameRequired') })
      .max(100, { message: t('contact.validation.nameMax') }),
    email: z
      .string()
      .trim()
      .email({ message: t('contact.validation.emailInvalid') })
      .max(255, { message: t('contact.validation.emailMax') }),
    message: z
      .string()
      .trim()
      .min(1, { message: t('contact.validation.messageRequired') })
      .max(1000, { message: t('contact.validation.messageMax') }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: 'destructive',
          title: t('contact.toast.validationError'),
          description: error.errors[0].message,
        });
        setStatus('error'); // Set error status
        return;
      }
    }

    setIsSubmitting(true);
    setStatus('idle'); // Reset status on new attempt

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: t('contact.toast.sent'),
        description: t('contact.toast.sentDesc'),
        className: 'bg-green-800 text-white border-none', // Enhanced Toast Style
      });
      setStatus('success'); // Set success status

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="border-border relative border-t px-6 py-20">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-4 text-4xl font-bold">{t('contact.title')}</h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">{t('contact.findme')}</h3>
            <div className="space-y-6">
              <a
                href="https://github.com/littleg0d"
                className="bg-secondary/50 hover:bg-secondary flex items-center gap-4 rounded-xl p-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-muted-foreground text-sm">@littleg0d</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="bg-secondary/50 hover:bg-secondary flex items-center gap-4 rounded-xl p-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-muted-foreground text-sm">Connect with me</p>
                </div>
              </a>
              <div className="bg-secondary/50 hover:bg-secondary group relative flex items-center gap-4 rounded-xl p-4 transition-colors">
                <a href={`mailto:${siteConfig.email}`} className="flex flex-1 items-center gap-4">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground group-hover:text-foreground text-sm transition-colors">
                      {siteConfig.email}
                      <span className="text-primary ml-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                        (Send Mail)
                      </span>
                    </p>
                  </div>
                </a>

                <CopyButton email={siteConfig.email} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              'bg-card rounded-2xl border p-8 transition-colors duration-500',
              status === 'success' ? 'border-green-500 ring-2 ring-green-500/20' : '',
              status === 'error' ? 'border-red-500 ring-2 ring-red-500/20' : 'border-border'
            )}
          >
            <h3
              className={cn(
                'mb-6 text-2xl font-bold transition-colors',
                status === 'success' ? 'text-green-500' : '',
                status === 'error' ? 'text-red-500' : ''
              )}
            >
              {t('contact.sendmessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && <p className="text-destructive text-sm">{t(errors.name)}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className="text-destructive text-sm">{t(errors.email)}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && <p className="text-destructive text-sm">{t(errors.message)}</p>}
              </div>
              <Button
                type="submit"
                className={cn(
                  'w-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]',
                  status === 'success' ? 'bg-green-600 hover:bg-green-700' : '',
                  status === 'error' ? 'bg-red-600 hover:bg-red-700' : ''
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : status === 'success' ? (
                  'Sent Successfully!'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CopyButton = ({ email }: { email: string }) => {
  const { copiedText, copy } = useCopyToClipboard();
  const isCopied = !!copiedText;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.preventDefault(); // Prevent mailto link if nested (though here it's sibling)
        copy(email);
      }}
      className="hover:bg-background/50 relative rounded-full"
      aria-label="Copy Email Address"
    >
      <span
        className={`absolute transition-all duration-300 ${isCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Copy className="h-4 w-4" />
      </span>
      <span
        className={`absolute text-green-500 transition-all duration-300 ${isCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <Check className="h-4 w-4" />
      </span>
    </Button>
  );
};

export default Contact;
