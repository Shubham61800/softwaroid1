"use client";
import {
  ArrowRight,
  Shield,
  Lock,
  Cloud,
  Network,
  Database,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CTA from "@/components/CTA";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description:
        "Advanced threat detection systems that identify and neutralize security threats before they impact your business.",
      features: [
        "Real-time monitoring",
        "Behavioral analysis",
        "Automated response",
        "Threat intelligence",
      ],
    },
    {
      icon: Lock,
      title: "Data Protection",
      description:
        "Comprehensive data protection solutions that safeguard your sensitive information against unauthorized access.",
      features: [
        "End-to-end encryption",
        "Data loss prevention",
        "Access control",
        "Compliance management",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description:
        "Secure your cloud infrastructure with our specialized cloud security solutions and best practices.",
      features: [
        "Cloud posture management",
        "Workload protection",
        "Container security",
        "IAM solutions",
      ],
    },
    {
      icon: Network,
      title: "Network Defense",
      description:
        "Robust network security solutions that protect your infrastructure from external and internal threats.",
      features: [
        "Firewall management",
        "Intrusion prevention",
        "VPN solutions",
        "Network monitoring",
      ],
    },
    {
      icon: Database,
      title: "Vulnerability Management",
      description:
        "Proactive identification and remediation of vulnerabilities across your digital ecosystem.",
      features: [
        "Vulnerability scanning",
        "Risk assessment",
        "Patch management",
        "Security posture reporting",
      ],
    },
    {
      icon: Search,
      title: "Security Assessments",
      description:
        "Comprehensive security assessments to identify and address weaknesses in your security posture.",
      features: [
        "Penetration testing",
        "Security audits",
        "Compliance checks",
        "Remediation guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Shuttle Gradient Background */}
        <div className="absolute inset-0 shuttle-gradient z-0"></div>

        {/* Modern Geometric Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-background z-10 opacity-30"></div>

        <div className="container mx-auto px-4 md:px-20 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-2 px-4 py-1 bg-black/5 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-black/70">
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Comprehensive <br />
              <span className="relative">
                <span className="relative z-10 text-primary-500">
                  Security Services
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-black/5 rounded-full -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Advanced cybersecurity solutions designed to protect your business
              against evolving digital threats in today's complex landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="feature-card border border-gray-100 bg-white/80 backdrop-blur-sm hover-lift overflow-hidden"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-background z-0 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Security Process
            </h2>
            <p className="text-lg text-gray-600">
              We follow a structured approach to ensure comprehensive security
              coverage for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Assessment",
                description:
                  "Thorough analysis of your current security posture",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Custom security strategy tailored to your business needs",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Deployment of security solutions and best practices",
              },
              {
                number: "04",
                title: "Monitoring",
                description:
                  "Continuous monitoring and improvement of security measures",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-black/5 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gray-200">
                    <div className="absolute -right-3 -top-1.5 w-3 h-3 bg-primary-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA />

      {/* Client Testimonial Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 shuttle-gradient opacity-50 z-0"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across industries to deliver superior
              security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Their security solutions transformed our approach to cybersecurity. We now have confidence in our digital infrastructure.",
                author: "Sarah Johnson",
                position: "CTO, TechVision Inc.",
              },
              {
                quote:
                  "Exceptional service and expertise. They identified vulnerabilities we weren't even aware of and provided effective solutions.",
                author: "Michael Roberts",
                position: "Director of IT, Global Enterprises",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift"
              >
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-primary-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
