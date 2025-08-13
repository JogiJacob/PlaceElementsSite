import { Users, ServerCog, Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-6">About PlaceElements HR</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking HR consultancy that believes in the power of integrating people, processes, and technology to create exceptional workplace experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office environment with collaborative spaces" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-primary mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To revolutionize human resource management by seamlessly integrating innovative people strategies, efficient processes, and cutting-edge technology solutions that drive organizational growth and employee satisfaction.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-teal-primary text-white p-2 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary">People First</h4>
                  <p className="text-gray-600">Putting human potential at the center of every strategy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-teal-primary text-white p-2 rounded-lg">
                  <ServerCog className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary">Process Excellence</h4>
                  <p className="text-gray-600">Streamlined workflows that enhance productivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-teal-primary text-white p-2 rounded-lg">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary">Technology Innovation</h4>
                  <p className="text-gray-600">Leveraging digital solutions for competitive advantage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
