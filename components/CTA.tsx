import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
const CTA = () => {
  const ctaRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          // Start animation when top of element reaches 80% from top of viewport
          toggleActions: "play none none none",
        },
      });

      // Add animations to timeline
      tl.fromTo(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      )
        .fromTo(
          titleRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4" // Overlap with previous animation
        )
        .fromTo(
          textRef.current,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
        )
        .fromTo(
          buttonsRef.current,
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, ctaRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="mx-auto rounded-2xl p-8 md:p-12 border border-gray-200 relative overflow-hidden bg-white">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Our security experts are ready to help you protect your digital
              assets and build a resilient security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-500/90 text-white button-glow relative overflow-hidden group bg-primary-hover"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <span className="relative z-10 flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black transition-colors bg-black text-white"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
