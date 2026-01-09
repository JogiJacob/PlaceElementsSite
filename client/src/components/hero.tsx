import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-teal-light/10 text-teal-primary rounded-full text-sm font-semibold tracking-wide mb-6 border border-teal-light/20"
            >
              HR CONSULTANCY & PLACEMENT
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-navy-dark tracking-tight">
              Empowering <br />
              <span className="text-gradient">Workforce Success</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Bridging the gap between <span className="font-semibold text-navy-primary">People</span>, <span className="font-semibold text-navy-primary">Process</span>, and <span className="font-semibold text-navy-primary">Technology</span> to build world-class teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-navy-primary hover:bg-navy-dark text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-navy-light/20 text-navy-primary hover:bg-navy-light/5 text-lg px-8 py-6 rounded-xl"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-primary to-navy-primary rounded-[2rem] rotate-6 opacity-10" />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern HR Strategy"
                className="relative rounded-[2rem] shadow-2xl object-cover w-full aspect-[4/3] border-4 border-white"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-xl max-w-[200px]"
              >
                <div className="text-4xl font-bold text-teal-primary mb-1">500+</div>
                <div className="text-sm font-medium text-navy-primary leading-tight">Successful Placements</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 glass-panel p-6 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="font-semibold text-navy-primary">98% Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
