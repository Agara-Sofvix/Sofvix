'use client';

import { getApiUrl } from "@/lib/api";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

function GetStartedForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    message: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormState(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = getApiUrl();
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: `${formState.company ? `Company: ${formState.company}. ` : ''}${formState.message}`,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit inquiry');

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "info@agara-sofvix.com",
      color: "text-[#F97316]",
      bg: "bg-[#F97316]/10",
      href: "mailto:info@agara-sofvix.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+91 94980 69292",
      color: "text-[#22C55E]",
      bg: "bg-[#22C55E]/10",
      href: "tel:+919498069292"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "View on Map",
      color: "text-[#6366F1]",
      bg: "bg-[#6366F1]/10",
      href: "https://share.google/ryAuYzrJa0tTt3g5o"
    }
  ];

  return (
    <div className="bg-gemini-light min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-[#6366F1]/5"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something
              <span className="text-[#F97316]"> Great Together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-black/5 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-[#F97316]/20 transition-all group h-full"
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-0.5">{item.title}</p>
                    <p className="text-sm font-semibold text-gray-900">{item.detail}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Whether you need a brand-new SaaS platform, a mobile app, or AI-powered features, our world-class team is ready to turn your vision into reality.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Free Initial Consultation", desc: "Get expert advice with no commitment required." },
                  { title: "Tailored Proposal in 24h", desc: "Receive a detailed plan and transparent pricing." },
                  { title: "Dedicated Project Manager", desc: "A single point of contact throughout your project." },
                  { title: "On-Time & On-Budget", desc: "We guarantee delivery without scope creep." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F97316]/10 rounded-full flex items-center justify-center text-[#F97316] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-black/5 shadow-xl"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Get in Touch</h3>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-900 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Name"
                        className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="email@company.com"
                        className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-900 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+xx xxxxxxxxx"
                        className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Organization"
                        className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-900 text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {initialService && !["infrastructure", "automation", "ai-saas", "seo", "web-app", "other"].includes(initialService.toLowerCase()) && (
                        <option value={initialService}>{initialService}</option>
                      )}
                      <option value="infrastructure">Infrastructure</option>
                      <option value="automation">Automation</option>
                      <option value="ai-saas">AI Agent & SaaS Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="web-app">Web & App Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-900 text-sm font-medium mb-2">Project Description *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full bg-gray-50 border border-black/5 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#22C55E]/30">
                    <CheckCircle2 className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function GetStartedClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gemini-light flex items-center justify-center">Loading...</div>}>
      <GetStartedForm />
    </Suspense>
  );
}
