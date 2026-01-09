import { Search, GraduationCap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "1. Talent Acquisition",
      description: "Finding the perfect match for your organizational needs.",
      features: [
        "Permanent Staffing – Long-term organizational fit",
        "Executive Search – Leadership talent acquisition",
        "Contract Staffing – Flexible, specialized talent"
      ]
    },
    {
      icon: GraduationCap,
      title: "2. Training & Development",
      description: "Cultivate a high-performance culture by equipping employees with critical skills.",
      features: [
        "Leadership Development",
        "Skill Enhancement Workshops",
        "Future-readiness Programs"
      ]
    },
    {
      icon: Shield,
      title: "3. HR Compliance",
      description: "Protecting your business today by ensuring you are compliant for tomorrow.",
      features: [
        "Regulatory Adherence",
        "Risk Mitigation",
        "Policy Implementation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative">
      {/* Background Blob */}
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-teal-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-dark mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive HR solutions that align people, optimize processes, and leverage technology for sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-teal-light to-teal-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl items-center -z-10" />
                <div className="h-full bg-white rounded-2xl p-8 shadow-sm group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:translate-y-[-5px]">
                  <div className="bg-navy-light/5 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-navy-primary group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-navy-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 min-h-[50px]">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
