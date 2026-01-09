import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-primary via-teal-light to-navy-primary" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-teal-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-teal-primary to-teal-dark text-white px-3 py-2 rounded-lg font-bold text-lg shadow-lg">
                PE
              </div>
              <span className="ml-3 font-bold text-2xl tracking-tight">PlaceElements HR</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transforming organizations through innovative people strategies, optimized processes, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 hover:bg-teal-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-teal-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-teal-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-teal-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-white">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal-primary mr-2 opacity-0 group-hover:opacity-100"></span>Talent Acquisition</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300">Training & Development</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300">HR Compliance</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300">About Us</button></li>
              <li><button onClick={() => scrollToSection("industries")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300">Industries</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-teal-primary hover:translate-x-2 transition-all duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-white">Contact Us</h3>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-teal-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-teal-primary" />
                </div>
                <span>123 Business District<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-teal-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-teal-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-teal-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-teal-primary" />
                </div>
                <span>info@placeelementshr.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PlaceElements HR. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
