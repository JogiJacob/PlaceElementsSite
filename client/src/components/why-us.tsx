import { Lightbulb, UserCog, BarChart, Handshake, Users, ServerCog, Laptop, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const advantages = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We don't just follow trends – we create them. Our forward-thinking approach ensures your organization stays ahead of the curve."
    },
    {
      icon: UserCog,
      title: "Expert Team",
      description: "Our consultants bring decades of combined experience across industries, functions, and technologies."
    },
    {
      icon: BarChart,
      title: "Data-Driven Results",
      description: "Every recommendation is backed by comprehensive analytics and industry benchmarks for measurable impact."
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "We work as an extension of your team, ensuring knowledge transfer and sustainable long-term success."
    }
  ];

  const pillars = [
    {
      icon: Users,
      title: "People",
      description: "Unlock human potential through strategic talent management, development programs, and culture transformation initiatives."
    },
    {
      icon: ServerCog,
      title: "Process",
      description: "Streamline operations with optimized workflows, standardized procedures, and efficient HR service delivery models."
    },
    {
      icon: Laptop,
      title: "Technology",
      description: "Leverage cutting-edge HRIS, AI-powered analytics, and digital platforms to drive efficiency and insights."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-dark mb-6"
          >
            Why Choose <span className="text-gradient">PlaceElements HR?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our unique approach combining people expertise, process optimization, and technology innovation sets us apart in the HR consultancy landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-teal-primary/5 rounded-3xl blur-2xl transform -rotate-1" />
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Professional consultation"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl z-20 hidden md:block max-w-[240px]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-teal-primary/10 p-2 rounded-lg">
                  <Target className="w-5 h-5 text-teal-primary" />
                </div>
                <span className="font-bold text-navy-primary">Strategy First</span>
              </div>
              <p className="text-xs text-gray-600 leading-tight">We align every HR initiative with your core business objectives for maximum impact.</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div key={index} variants={item} className="group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-teal-primary/20">
                    <div className="bg-teal-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-primary mb-3">{advantage.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-pretty">{advantage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Three Pillars Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50/50 rounded-[2.5rem] p-12 lg:p-20 shadow-xl border border-gray-100 overflow-hidden relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-navy-dark">Our Three-Pillar Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="bg-teal-primary/10 text-teal-primary w-24 h-24 rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-5 text-navy-primary">{pillar.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                    <div className="mt-6 flex items-center text-teal-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      <span className="text-sm tracking-wide">Pillar {index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
