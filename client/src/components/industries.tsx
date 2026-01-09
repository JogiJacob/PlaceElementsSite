import { Factory, Laptop, Heart, Building, ShoppingCart, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    { icon: Factory, name: "1. Manufacturing" },
    { icon: Laptop, name: "2. Information Technology" },
    { icon: Heart, name: "3. Healthcare" },
    { icon: Building, name: "4. Financial Services" },
    { icon: ShoppingCart, name: "5. Retail" }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-dark mb-6"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our expertise spans across diverse industries, bringing specialized HR solutions tailored to sector-specific challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-teal-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                <div className="relative bg-gray-50 group-hover:bg-white p-6 rounded-2xl border border-gray-100 group-hover:border-transparent transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <IconComponent className="w-10 h-10 text-navy-light group-hover:text-teal-primary mb-4 transition-colors duration-300" />
                  <h3 className="font-semibold text-navy-primary">{industry.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-teal-primary/5"
        >
          <div className="absolute inset-0 bg-gray-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 via-transparent to-navy-primary/5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-teal-primary/10 text-teal-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-primary"></span>
                </span>
                <span>Our Expertise</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">Industry-Specific Expertise</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that each industry has unique challenges, regulations, and talent requirements. Our specialized consultants bring deep sector knowledge to deliver tailored solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-teal-primary" />
                  </div>
                  <span className="font-medium">Regulatory compliance expertise</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-teal-primary" />
                  </div>
                  <span className="font-medium">Industry-specific talent pools</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-teal-primary" />
                  </div>
                  <span className="font-medium">Sector benchmarking and best practices</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden hidden lg:block shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Business analysis and expertise"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
