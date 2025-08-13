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
    <footer className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-teal-primary text-white px-3 py-2 rounded-lg font-bold text-lg">
                PE
              </div>
              <span className="ml-3 font-bold text-xl">PlaceElements HR</span>
            </div>
            <p className="text-gray-300 mb-6">Transforming organizations through innovative people strategies, optimized processes, and cutting-edge technology solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-teal-primary hover:bg-teal-dark p-3 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-primary hover:bg-teal-dark p-3 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-primary hover:bg-teal-dark p-3 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-primary hover:bg-teal-dark p-3 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">Talent Acquisition</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">Training & Development</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">HR Compliance</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">Performance Management</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">HR Technology</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-primary transition-colors duration-300">Organizational Development</button></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-teal-primary transition-colors duration-300">About Us</button></li>
              <li><button onClick={() => scrollToSection("industries")} className="hover:text-teal-primary transition-colors duration-300">Industries</button></li>
              <li><button onClick={() => scrollToSection("clients")} className="hover:text-teal-primary transition-colors duration-300">Client Stories</button></li>
              <li><button onClick={() => scrollToSection("why-us")} className="hover:text-teal-primary transition-colors duration-300">Why Choose Us</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-teal-primary transition-colors duration-300">Contact</button></li>
              <li><a href="#" className="hover:text-teal-primary transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-primary mt-1 flex-shrink-0" />
                <span>123 Business District<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-primary flex-shrink-0" />
                <span>info@placeelementshr.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 PlaceElements HR. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-300">
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-teal-primary transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
