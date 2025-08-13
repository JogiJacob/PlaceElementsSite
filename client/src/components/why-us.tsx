import { Lightbulb, UserCog, BarChart, Handshake, Users, ServerCog, Laptop } from "lucide-react";

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

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-6">Why Choose PlaceElements HR?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique approach combining people expertise, process optimization, and technology innovation sets us apart in the HR consultancy landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Corporate client meeting with professional consultation" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-teal-primary text-white p-3 rounded-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-primary mb-2">{advantage.title}</h3>
                    <p className="text-gray-700">{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Three Pillars Showcase */}
        <div className="gradient-section rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Three-Pillar Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white text-navy-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
                  <p className="opacity-90">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
