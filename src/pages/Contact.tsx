import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_oiz9tnr",
        "template_ml2bho3",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "nYvA0IZ5SWs1yPUw3"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-10 px-4">

      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto relative">

        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and create something amazing"
        />

        <div className="grid md:grid-cols-5 gap-8">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >

            <div className="glass p-5 rounded-xl glow-border">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-primary" size={18} />
                <h3 className="font-semibold text-foreground text-sm">
                  Email
                </h3>
              </div>

              <a
                href="mailto:rssriyasree@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                rssriyasree@gmail.com
              </a>
            </div>

            <div className="glass p-5 rounded-xl glow-border">
              <div className="flex items-center gap-3 mb-2">
                <Linkedin className="text-primary" size={18} />
                <h3 className="font-semibold text-foreground text-sm">
                  LinkedIn
                </h3>
              </div>

              <a
                href="https://linkedin.com/in/sriya-sree-251b53369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                linkedin.com/in/sriya-sree-251b53369
              </a>
            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass p-6 rounded-2xl glow-border space-y-5"
          >

            {/* Name */}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Name
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            {/* Email */}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Message
              </label>

              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-purple flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </div>
  );
};

export default Contact;