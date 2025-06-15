"use client";
import {
  Shield,
  Users,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const About = () => {
  const stats = [
    { number: "500+", label: "Clients Protected", icon: Shield },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "Security Monitoring", icon: Target },
    { number: "50+", label: "Security Experts", icon: Users },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every decision we make is guided by our commitment to maximum security and protection.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We're dedicated to helping your business thrive securely.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in cybersecurity solutions and customer service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Staying ahead of threats with cutting-edge technology and proactive solutions.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      description: "15+ years in cybersecurity leadership",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security",
      description: "Former NSA cybersecurity specialist",
    },
    {
      name: "Emily Watson",
      role: "Lead Developer",
      description: "Expert in security architecture",
    },
    {
      name: "David Kim",
      role: "Client Success Manager",
      description: "Dedicated to customer satisfaction",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-24 shuttle-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-black/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-black/5 blob-shape blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black/3 rounded-lg rotate-45 blur-xl"></div>

        <div className="container mx-auto px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              About <span className="text-gradient-black">Softwaroid</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a team of cybersecurity experts dedicated to protecting
              businesses from evolving digital threats with innovative, reliable
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover-lift frosted-glass border-0"
              >
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-black" />
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2018 by a team of cybersecurity veterans, Softwaroid
                emerged from a simple belief: every business deserves
                enterprise-grade security, regardless of size.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  From Vision to Reality
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a small team of passionate security experts
                  has grown into a trusted partner for over 500 businesses
                  worldwide. We've prevented countless cyber attacks and helped
                  organizations build robust security frameworks.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to innovate and adapt to the ever-changing
                  threat landscape, ensuring our clients stay protected against
                  emerging cybersecurity challenges.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl text-black/20">🛡️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our
              commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift border-0 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in cybersecurity, technology, and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default About;
