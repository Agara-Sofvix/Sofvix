'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Heart,
  Users,
  CheckCircle2,
  Rocket,
  BarChart3,
  Terminal,
  ChevronRight,
  Zap,
  Award
} from 'lucide-react';
import { Button } from '@/components/Button';

export function AboutClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const expertise = [
    {
      title: "Enterprise Architecture",
      desc: "Building scalable, high-availability systems for global institutions.",
      icon: <Layers className="w-6 h-6" />,
      tag: "Core"
    },
    {
      title: "AI Integration",
      desc: "Deploying intelligent agents and predictive models into production workflows.",
      icon: <Cpu className="w-6 h-6" />,
      tag: "Advanced"
    },
    {
      title: "Custom SaaS",
      desc: "Multi-tenant platforms optimized for growth and conversion.",
      icon: <Rocket className="w-6 h-6" />,
      tag: "Innovation"
    },
    {
      title: "Data Intelligence",
      desc: "Processing massive datasets into actionable business insights.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "Strategic"
    }
  ];

  return (
    <div className="bg-gemini-light text-gray-900 min-h-screen selection:bg-[#F97316]/10">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-black/5 bg-gemini-light">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] opacity-60" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F97316]/5 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full opacity-50" />
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/5 text-[#F97316] text-[10px] font-bold uppercase tracking-wider mb-8 border border-[#F97316]/10">
                Engineering Excellence First
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-gray-900 leading-[1.1]">
                Scalable Solutions Built on <br /> <span className="text-[#F97316]">Purpose & Belief.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
                Agara Sofvix is a global software engineering partner dedicated to building resilient digital products that foster growth, innovation, and human-centered impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button href="/services" size="lg">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/get-started" variant="outline" size="lg">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Successful Deployments", value: "200+" },
              { label: "Engineering Experts", value: "50+" },
              { label: "Client Retention", value: "98%" },
              { label: "Global Reach", value: "15+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316] mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">Crafting Software that Defines Markets.</h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                  Agara Sofvix was founded to bridge the gap between complex technological demands and the human purpose behind them. We believe that software should not just solve problems—it should create opportunities.
                </p>
                <p>
                  From our headquarters, we oversee a global operation of architects and developers who prioritize clean code, architectural purity, and long-term scalability. We are not just a vendor; we are your strategic engineering partner.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm w-fit">
                 <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316]">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
                 <p className="text-sm font-bold text-gray-900">Enterprise-Grade Security & Compliance</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="aspect-video bg-white rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Terminal className="w-20 h-20 text-gray-100 group-hover:text-gray-200 transition-colors" />
                  </div>
                  <div className="absolute top-6 left-6 flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-yellow-400" />
                     <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-[#F97316] p-8 rounded-3xl shadow-2xl text-white">
                 <p className="text-4xl font-black mb-1 leading-none">24/7</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Global Operations</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-32 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Our Technical Prowess</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Delivering complex solutions with surgical precision and modern patterns.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/40 backdrop-blur-md border border-black/5 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-[#F97316]/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#F97316] mb-6 group-hover:bg-[#F97316] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316] mb-2 block">{item.tag}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 md:py-40 bg-gemini-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gray-900 leading-none">
              Engineering <span className="italic text-gray-400 font-serif">Culture</span> Over Code.
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              We believe that the quality of our systems is a direct reflection of our cultural principles. We hire for character and train for elite performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Radical Transparency", desc: "Honest communication and clear roadmaps ensure zero surprises in the development lifecycle.", icon: <Users /> },
              { title: "Execution Focus", desc: "We prioritize tangible outcomes over theoretical discussions. We ship clean, working code.", icon: <Zap /> },
              { title: "Human Centricity", desc: "Every feature is designed to empower a human being. UX is not a layer; it's the core.", icon: <Heart /> }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-left"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#F97316] mb-8">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{v.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-48 bg-gemini-light overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-gray-900 leading-[0.95]">
              Let’s Engineer Your <br /> Future Together.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
              Ready to deploy your next high-impact digital product? Join a community of forward-thinking enterprise leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="/services" size="lg" className="h-20 px-12 text-xl group">
                Begin a Project
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/get-started" variant="outline" size="lg" className="h-20 px-12 font-bold">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
