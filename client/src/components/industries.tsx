import { Factory, Laptop, Heart, Building, ShoppingCart, GraduationCap, CheckCircle } from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Laptop, name: "Technology" },
    { icon: Heart, name: "Healthcare" },
    { icon: Building, name: "Financial Services" },
    { icon: ShoppingCart, name: "Retail" },
    { icon: GraduationCap, name: "Education" }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, bringing specialized HR solutions tailored to sector-specific challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-teal-primary hover:text-white transition-all duration-300 group">
                <IconComponent className="w-12 h-12 text-teal-primary group-hover:text-white mb-4 mx-auto" />
                <h3 className="font-semibold text-navy-primary group-hover:text-white">{industry.name}</h3>
              </div>
            );
          })}
        </div>
        
        {/* Industry Focus Section */}
        <div className="mt-16 gradient-section rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Industry-Specific Expertise</h3>
              <p className="text-lg mb-6 opacity-90">
                We understand that each industry has unique challenges, regulations, and talent requirements. Our specialized consultants bring deep sector knowledge to deliver tailored solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-light" />
                  <span>Regulatory compliance expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-light" />
                  <span>Industry-specific talent pools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-light" />
                  <span>Sector benchmarking and best practices</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Business technology solutions in modern workplace" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
