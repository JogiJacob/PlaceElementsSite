import { Search, GraduationCap, Shield, TrendingUp, Laptop, Handshake, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Talent Acquisition",
      description: "Strategic recruitment solutions that find and attract top talent aligned with your organizational culture and goals.",
      features: ["Executive Search", "Volume Recruitment", "Employer Branding"]
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Comprehensive learning programs that develop skills, enhance performance, and prepare leaders for the future.",
      features: ["Leadership Development", "Skills Assessment", "Digital Learning"]
    },
    {
      icon: Shield,
      title: "HR Compliance",
      description: "Stay compliant with ever-changing regulations while maintaining operational efficiency and risk management.",
      features: ["Policy Development", "Audit & Assessment", "Risk Management"]
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Data-driven performance systems that align individual goals with organizational objectives and drive results.",
      features: ["Goal Setting", "360° Feedback", "Analytics Dashboard"]
    },
    {
      icon: Laptop,
      title: "HR Technology Solutions",
      description: "Cutting-edge HRIS implementations and digital transformation that streamline operations and enhance employee experience.",
      features: ["HRIS Implementation", "Automation Solutions", "Integration Support"]
    },
    {
      icon: Handshake,
      title: "Organizational Development",
      description: "Strategic change management and culture transformation that builds resilient, high-performing organizations.",
      features: ["Change Management", "Culture Transformation", "Team Building"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive HR solutions that align people, optimize processes, and leverage technology for sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:transform hover:scale-105">
                <div className="bg-teal-primary text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-teal-dark transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-teal-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
