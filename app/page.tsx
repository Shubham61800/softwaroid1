"use client";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import gsap from "gsap";

const Index = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const trustGroupRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Staggered text entrance
    gsap.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 16,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      }
    );
    gsap.fromTo(
      btnsRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      trustGroupRef.current,
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 1,
      }
    );
    // Animate floating background shapes
    if (bgRef1.current && bgRef2.current) {
      gsap.to(bgRef1.current, {
        y: 24,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(bgRef2.current, {
        y: -20,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Shuttle Gradient */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Shuttle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>
        {/* Modern Geometric Shapes with parallax/floating */}
        <div
          ref={bgRef1}
          className="absolute top-20 right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl transition-transform"
        ></div>
        <div
          ref={bgRef2}
          className="absolute bottom-10 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl transition-transform"
        ></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-background z-10 opacity-30"></div>

        <div className="container mx-auto px-4 md:px-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-2 px-4 py-1 bg-black/5 backdrop-blur-sm rounded-full animate-fade-in">
                <span className="text-sm font-medium text-black/70">
                  Next-Gen Security Platform
                </span>
              </div>
              <h1
                ref={headlineRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0"
              >
                Secure Your <br />
                <span className="relative inline-block group">
                  <span className="relative z-10 text-primary-500 text-primary-hover transition-colors group-hover:text-primary-cta">
                    Digital Future
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-black/5 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg text-gray-600 mb-8 max-w-lg opacity-0"
              >
                Comprehensive cybersecurity services designed to protect your
                business from evolving threats in the digital landscape.
              </p>
              {/* Interactive buttons */}
              <div
                ref={btnsRef}
                className="flex flex-col sm:flex-row gap-4 opacity-0"
              >
                <Button
                  size="lg"
                  style={{
                    boxShadow: "0 0 0 rgba(189,165,255,0)",
                  }}
                  className="bg-primary-500 relative overflow-hidden group text-white button-glow transition-all border border-transparent hover:scale-105 focus-visible:scale-105 shadow-lg shadow-primary-100 bg-primary-hover"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black transition-colors bg-black text-white relative hover:bg-primary-500 hover:text-white group"
                >
                  <span className="relative flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                  </span>
                </Button>
              </div>

              {/* Modern Trust Indicators with micro-interactions */}
              <div
                ref={trustGroupRef}
                className="mt-10 flex items-center space-x-4 opacity-0"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold transition-all hover:ring-4 hover:ring-primary-500/30 scale-100 hover:scale-105 hover:shadow-lg cursor-pointer"
                      style={{
                        transition:
                          "box-shadow 0.2s, transform 0.2s, ring 0.2s",
                      }}
                      tabIndex={0}
                      aria-label={`Trusted user ${i}`}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Trusted by <span className="font-semibold">500+</span>{" "}
                  companies worldwide
                </div>
              </div>
            </div>
            {/* 
              <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
              <div className="relative z-10 transform hover:-rotate-2 hover:scale-105 transition-transform duration-500">
                <DashboardMockup />
              </div>
             </div> 
             */}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Features Section */}
      <Features />

      {/* Stats Section with Modern Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                value: "99.9%",
                label: "Uptime",
              },
              {
                value: "24/7",
                label: "Monitoring",
              },
              {
                value: "<30min",
                label: "Response Time",
              },
              {
                value: "500+",
                label: "Threats Blocked Daily",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 bg-transparent"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Index;
