import { Star } from "lucide-react";

export default function Clients() {
  const testimonials = [
    {
      name: "Sarah Kim",
      position: "Head of HR, TechCorp",
      initials: "SK",
      content: "PlaceElements HR transformed our recruitment process with their technology-driven approach. We reduced time-to-hire by 40% while improving candidate quality significantly."
    },
    {
      name: "Michael Rodriguez",
      position: "CEO, Manufacturing Plus",
      initials: "MR",
      content: "Their holistic approach to people, process, and technology helped us navigate a complex organizational transformation. Outstanding results and partnership."
    },
    {
      name: "Anna Johnson",
      position: "Legal Director, HealthcarePlus",
      initials: "AJ",
      content: "The compliance audit and policy development service provided by PlaceElements saved us from potential legal issues and streamlined our HR operations."
    }
  ];

  const clientLogos = [
    "TechCorp",
    "ManuPro",
    "HealthPlus",
    "EduTech",
    "RetailMax",
    "FinanceFirst"
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide to transform their HR strategies and drive business success.
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-navy-primary">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-navy-primary mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 opacity-60 hover:opacity-100">
                <div className="text-2xl font-bold text-navy-primary text-center">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
