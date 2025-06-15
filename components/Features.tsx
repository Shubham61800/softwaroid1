import { Shield, Lock, AlertCircle, Database } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Real-time monitoring and AI-powered detection to identify and neutralize threats before they cause damage."
  }, {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption protocols that secure your data both in transit and at rest."
  }, {
    icon: AlertCircle,
    title: "Vulnerability Assessment",
    description: "Continuous scanning of your systems to identify and patch security gaps before they can be exploited."
  }, {
    icon: Database,
    title: "Secure Cloud Storage",
    description: "Distributed, redundant storage solutions with automated backup and disaster recovery options."
  }];
  return <section id="features" className="py-20 bg-transparent">
      <div className="container mx-auto px-20 bg-transparent">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-hover">Comprehensive Security Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides end-to-end protection with cutting-edge technologies designed to keep your business safe in today's evolving threat landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="feature-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;