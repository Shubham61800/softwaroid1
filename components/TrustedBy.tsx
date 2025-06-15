import { useEffect, useRef } from "react";
import gsap from "gsap";
const TrustedBy = () => {
  const logos = [
    {
      name: "Acme Corp",
      logo: "ACME",
    },
    {
      name: "TechGiant",
      logo: "TECH",
    },
    {
      name: "Innovate Inc",
      logo: "INNOV",
    },
    {
      name: "SecureNet",
      logo: "SECURE",
    },
    {
      name: "DataFlow",
      logo: "DATA",
    },
  ];
  const sectionRef = useRef(null);
  const logosRef = useRef([]);
  useEffect(() => {
    // Animate section fade in
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate logos with stagger effect
    gsap.fromTo(
      logosRef.current,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="py-16 border-y border-gray-100 bg-black"
    >
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm uppercase font-medium tracking-widest mb-10">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              ref={(el) => (logosRef.current[index] = el)}
            >
              <div className="text-white/50 font-bold text-xl tracking-tight hover:text-black transition-colors duration-300 bg-transparent">
                {logo.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
