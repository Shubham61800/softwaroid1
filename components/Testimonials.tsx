import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QuoteIcon } from 'lucide-react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
}
const Testimonial = ({
  content,
  author,
  position,
  company
}: TestimonialProps) => <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
    <QuoteIcon className="h-10 w-10 text-gray-300 mb-4" />
    <p className="text-gray-800 mb-6 font-light leading-relaxed text-lg">
      "{content}"
    </p>
    <div>
      <p className="font-semibold text-primary-cta">{author}</p>
      <p className="text-gray-500 text-sm">
        {position}, {company}
      </p>
    </div>
  </div>;
const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const testimonials = [{
    content: "CyberShield has completely transformed our security infrastructure. Their proactive approach to threat detection has prevented numerous potential breaches.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "GlobalTech Solutions"
  }, {
    content: "The team's expertise and responsiveness is unmatched. Since implementing their security protocols, we've seen a 98% reduction in vulnerabilities.",
    author: "Michael Chen",
    position: "Security Director",
    company: "DataFlow Systems"
  }, {
    content: "Working with CyberShield has given our entire organization peace of mind. Their dashboard provides real-time insights that help us make informed decisions quickly.",
    author: "Alicia Rodriguez",
    position: "CEO",
    company: "Innovate Inc"
  }];
  useEffect(() => {
    // Create animation for the heading
    gsap.fromTo(headingRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Create staggered animation for testimonial cards
    gsap.fromTo(testimonialRefs.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });
  }, []);
  return <section ref={sectionRef} className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-primary-hover">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide to secure their digital assets and protect against evolving cyber threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} ref={el => testimonialRefs.current[index] = el as HTMLDivElement}>
              <Testimonial {...testimonial} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;