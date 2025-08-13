import { Button } from "@/components/ui/button";

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
    <section id="home" className="pt-16 gradient-hero text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your <span className="text-teal-light">Workforce</span> Strategy
            </h1>
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-4 text-xl md:text-2xl font-medium">
                <span className="bg-white text-navy-primary px-4 py-2 rounded-lg">People</span>
                <span className="text-teal-light">|</span>
                <span className="bg-white text-navy-primary px-4 py-2 rounded-lg">Process</span>
                <span className="text-teal-light">|</span>
                <span className="bg-white text-navy-primary px-4 py-2 rounded-lg">Technology</span>
              </div>
            </div>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Leading HR consultancy bridging the gap between people, streamlined processes, and cutting-edge technology to drive organizational success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-teal-primary hover:bg-teal-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Explore Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                size="lg"
              >
                Get Consultation
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional HR consultancy team collaborating" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-navy-primary p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-teal-primary">500+</div>
              <div className="text-sm font-medium">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
