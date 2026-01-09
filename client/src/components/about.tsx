import { Users, ServerCog, Laptop, Target, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -left-20 top-40 w-96 h-96 bg-teal-light/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy-dark mb-6"
          >
            About <span className="text-gradient">PlaceElements HR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking HR consultancy firm that believes in the power of integrating people, processes, and technology to create exceptional workplace experiences. We are dedicated to providing end-to-end talent acquisition support. We help organisations identify and connect with the right talent that aligns with their business requirements. Our focus on quality and commitment enables companies to build strong teams that drive sustainable success.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Mission Card - Large */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center space-x-2 bg-teal-light/10 text-teal-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-4 leading-tight">
                  “To empower organisations by delivering the right talent solutions, fostering growth, and creating lasting value through trust, quality, and commitment in every hire.”
                </h3>
                <p className="text-gray-600">
                  We believe in building strong teams that drive sustainable success through our focus on quality and commitment.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Mission"
                  className="rounded-xl shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Core Values / Vertical Card */}
          <motion.div variants={item} className="p-8 rounded-2xl bg-navy-primary text-white relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-primary/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <h3 className="text-xl font-bold mb-6 relative z-10">Why Choose Us?</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-teal-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">People First</h4>
                  <p className="text-sm text-gray-300">Human potential at the center</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <ServerCog className="w-5 h-5 text-teal-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Process Excellence</h4>
                  <p className="text-sm text-gray-300">Streamlined workflows</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Laptop className="w-5 h-5 text-teal-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Tech Innovation</h4>
                  <p className="text-sm text-gray-300">Digital competitive advantage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-teal-primary">
            <div className="bg-teal-light/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-teal-primary" />
            </div>
            <div className="text-4xl font-bold text-navy-primary mb-2">7+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-teal-primary">
            <div className="bg-teal-light/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-teal-primary" />
            </div>
            <div className="text-4xl font-bold text-navy-primary mb-2">100+</div>
            <div className="text-gray-600 font-medium">Clients Served</div>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-teal-primary">
            <div className="bg-teal-light/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-teal-primary" />
            </div>
            <div className="text-4xl font-bold text-navy-primary mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
