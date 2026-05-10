"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Facebook, Mail, MapPin, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/data";

const socials = [
  { icon: Github, href: personalInfo.github, label: "GitHub", color: "hover:text-white hover:border-white/30" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30" },
  { icon: Facebook, href: personalInfo.facebook, label: "Facebook", color: "hover:text-[#1877F2] hover:border-[#1877F2]/30" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-accent hover:border-accent/30" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);


  const [loading, setLoading] = useState(false);

  const handleWhatsApp = () => {
    setLoading(true);

    // Your WhatsApp number in international format (without +)
    const phoneNumber = "+8801621961907"; // replace with your number
    const message = encodeURIComponent("Hello Mahfuz, I got your contact from your portfolio. I would like to get in touch with you!");

    // Open WhatsApp link
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");

    setLoading(false);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass border border-white/7 rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/50">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Mail size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">Email</p>
                    <p className="text-sm">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <div className="w-9 h-9 rounded-lg bg-accent-2/10 border border-accent-2/20 flex items-center justify-center">
                    <MapPin size={15} className="text-accent-2" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">Location</p>
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass border border-white/7 rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-white mb-4">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl glass border border-white/10 text-white/40 text-sm font-medium transition-all duration-200 ${color}`}
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/7 rounded-2xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/40">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-white/40 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm input-glow transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/40 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm input-glow transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/40 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm input-glow transition-all duration-200 resize-none"
                    />
                  </div>

                 <div className="flex flex-col lg:flex-row gap-4">
                   <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full  md:w-1/2 flex items-center justify-center gap-2 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold shadow-glow-purple transition-all duration-200 btn-shine disabled:opacity-50 disabled:cursor-not-allowed text-xl"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  <button
                    onClick={handleWhatsApp}
                    className='bg-green-400 w-full lg:w-1/2 hover:bg-green-700 py-3 px-8 rounded-xl  text-white font-bold shadow-md shadow-primary'
                  >
                    {loading ? "Opening..." : "Contact via WhatsApp"}
                  </button>
                 </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
