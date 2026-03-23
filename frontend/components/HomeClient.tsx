'use client';

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { 
  ArrowRight, 
  Users, 
  Award, 
  Zap,
  Shield,
  Terminal,
  Layers,
  Monitor,
  Cpu,
  Bookmark,
  ShoppingCart,
  Megaphone,
  BarChart3,
  Globe,
  Lock,
  PieChart
} from "lucide-react";
import { Button } from "@/components/Button";
import { CATEGORIES } from "@/app/(main)/products/data";
import { useRouter } from "next/navigation";

const ICON_MAP: Record<string, any> = {
  Users,
  Megaphone,
  ShoppingCart,
  BarChart3,
  Mail: Layers,
  Box: Layers,
  Lock,
  PieChart,
  Globe,
  Zap
};

export function HomeClient() {
  const router = useRouter();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Infrastructure",
      description: "Scalable cloud and local infrastructure solutions designed for maximum uptime and security."
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Automation",
      description: "Streamline your workflows with custom automation tools and intelligent process optimization."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Agent & SaaS",
      description: "Next-gen AI agents and multi-tenant SaaS platforms built with cutting-edge technology."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web & App Dev",
      description: "High-performance web and mobile applications with premium user experiences."
    }
  ];

  const featuredCategories = CATEGORIES.slice(0, 3);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Development Pipeline",
      description: "Agile methodology ensuring rapid delivery without compromising quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security standards and compliance certifications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "200+ certified developers and architects with proven expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Results-Driven Delivery",
      description: "Consistent, measurable outcomes aligned with your business goals"
    }
  ];

  return (
    <div className="bg-gemini-light min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-transparent"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering Scalable Digital Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build enterprise-grade software solutions that drive growth, enhance efficiency, and transform businesses globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-20 w-full sm:w-auto">
                <Button href="/services" size="lg" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/products" variant="outline" size="lg" className="w-full sm:w-auto">
                  View Products
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video"
            >
              <Image
                src="/hero_card_banner.png"
                alt="Infrastructure overview"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end software development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 border border-black/5 hover:border-[#F97316]/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316] mb-4 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="outline">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-black/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative SaaS products designed for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => {
              const IconComponent = ICON_MAP[category.icon] || Layers;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => router.push(`/products?category=${category.id}`)}
                  className="group bg-white rounded-xl overflow-hidden border border-black/5 hover:border-[#F97316]/50 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-[#F97316]/5 via-white to-orange-50/30 flex items-center justify-center border-b border-black/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 from-[#F97316]/10" />
                    <IconComponent className="w-16 h-16 text-[#F97316] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="inline-block bg-[#F97316]/10 text-[#F97316] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit">
                      {category.id.replace('-', ' ')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors">{category.name}</h3>
                    <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">{category.overview}</p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5">
                      <span className="text-[#F97316] text-sm font-bold flex items-center gap-2 group/link">
                        Explore System
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button href="/products" variant="primary">
              Explore All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">Why Choose Agara-Sofvix</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#F97316]/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 via-transparent to-[#22C55E]/10"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-12 lg:p-16 border border-black/5 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-center">
              <Button href="/get-started" size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
