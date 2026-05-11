import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Assets
import img1 from '../../assets/testimonials/daniel2.png';
import img2 from '../../assets/testimonials/hendry2.png';
import img3 from '../../assets/testimonials/marco1.jpeg';
import img4 from '../../assets/testimonials/michael2.png';
import img5 from '../../assets/testimonials/nalin.jpeg';
import img6 from '../../assets/testimonials/sarah1.jpeg';
import img7 from '../../assets/testimonials/thenuka.jpeg';
import img8 from '../../assets/testimonials/andrew.jpeg';
import img9 from '../../assets/testimonials/kevin.png';


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Kevin Marshall",
    role: "Founder (SaaS Startup)",
    image: img9,
    rating: 4.8,
    description: "Great experience working with Axstar. They understood our vision and built an MVP that perfectly matched our initial product goals.",
  },
  {
    name: "Nalin Prasanga",
    role: "Business Owner- Green Wild Safari Resort",
    image: img5,
    rating: 4,
    description: "The team Axstar delivered a fast, modern website that significantly improved our online presence. Their attention to detail, responsive communication, and ability to understand our requirements made the entire process smooth and efficient",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager – Day dream LLC",
    image: img6,
    rating: 5,
    description: "After working with Axstar, our website started ranking better on search engines, and we received more consistent inquiries from potential customers",
  },
  {
    name: "Marco Rossi",
    role: "Casa di lapasa Pizza",
    image: img3,
    rating: 4.5,
    description: "Axstar created a modern website and digital menu that perfectly matches our restaurant’s style. Our customers love how easy it is to use",
  },
  {
    name: "Hendry Earns",
    role: "Founder, StartupX",
    image: img2,
    rating: 5,
    description: "Great experience working with the team. The UI/UX design was modern, smooth, and exactly what we needed for our startup.",
  },
  {
    name: "Daniel Carter",
    role: "Founder (E-commerce Brand)",
    image: img1,
    rating: 5,
    description: "Working with Axstar was a great experience. Their team delivered a fast, reliable solution that helped streamline our e-commerce operations.",
  },
  {
    name: "Thenuka Nanayakkara",
    role: "Managing Director, Bird Paradise Inn",
    image: img7,
    rating: 4.7,
    description: "Axstar delivered a modern, user-friendly website that perfectly represents our hotel. It has made it much easier for guests to explore our services and make inquiries.",
  },
  {
    name: "Michael Reeves",
    role: "Business Consultant",
    image: img4,
    rating: 5,
    description: "What impressed me most about Axstar was their structured, data-driven approach to business consulting. They analyzed our processes, identified key gaps, and provided clear strategies that delivered measurable improvements within a short time.",
  },
  {
    name: "Andrew Collins",
    role: "Director EFG",
    image: img8,
    rating: 4.8,
    description: "The level of detail and strategic thinking Axstar brought to our business was impressive. Their data-driven consulting approach and consistent communication led to noticeable performance improvements early on.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);

  // Doubling the array for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useGSAP(() => {
    // We use a small timeout or requestAnimationFrame to ensure the DOM has rendered 
    // and scrollWidth is accurate (important for images/dynamic content)
    const scrollWidth = scrollRef.current.scrollWidth;
    const halfWidth = scrollWidth / 2;

    // Main Infinite Animation
    tweenRef.current = gsap.to(scrollRef.current, {
      x: `-=${halfWidth}`, 
      duration: 60, // Slower is usually smoother for text
      ease: "none",
      repeat: -1,
      force3D: true, // Key for GPU acceleration (fixes glitches)
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % halfWidth) // Mathematical loop safety
      }
    });

    // Entrance Animation
    gsap.from(".testimonial-header", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  // Hover handlers with smooth slow-down/speed-up instead of hard pause
  const handleMouseEnter = () => {
    gsap.to(tweenRef.current, { timeScale: 0, duration: 0.8, ease: "power2.out" });
  };
  
  const handleMouseLeave = () => {
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: "power2.inOut" });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#000000] py-24 overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(24,109,96,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="testimonial-header text-center mb-20 px-6">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           Where client success meets trust
          </span>
          <h3 className="text-4xl md:text-5xl font-light text-[#e9e7e2] tracking-tight">
             What Our Clients Say
          </h3>
        </div>

        {/* Carousel Wrapper */}
<div 
  className="relative w-full overflow-hidden py-10"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {/* Scrolling Container */}
  <div 
    ref={scrollRef} 
    className="flex gap-4 md:gap-8 will-change-transform"
    style={{ display: 'inline-flex' }} 
  >
    {duplicatedTestimonials.map((item, index) => (
      <div
        key={index}
        className="
          /* Width Logic: 280px on mobile, 350px on tablets, 400px on desktops */
          w-[280px] sm:w-[350px] md:w-[400px] 
          shrink-0 
          relative
          group
          overflow-hidden
          rounded-2xl 
          p-6 md:p-8 
          bg-neutral-950/50
          backdrop-blur-xl 
          border border-white/5 
          transition-all duration-500 
          hover:border-white/20 
          hover:bg-neutral-900/40
        "
      >
        {/* Subtle Gradient Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
  
  {/* Avatar (LOCKED SIZE - NO SHRINK) */}
  <div className="w-[52px] h-[52px] md:w-[68px] md:h-[68px] lg:w-[76px] lg:h-[76px] flex-shrink-0">
    <img
      src={item.image}
      alt={`${item.name} sharing a testimonial about Axstar web app development in Colombo Sri Lanka`}
      className="w-full h-full object-cover rounded-full border border-white/10"
      loading="lazy"
    />
  </div>

  {/* Text Block */}
  <div className="text-left min-w-0">
    <h4 className="text-zinc-100 font-semibold tracking-tight text-sm md:text-base line-clamp-1">
      {item.name}
    </h4>

    <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold line-clamp-3 md:line-clamp-2 lg:line-clamp-2">
      {item.role}
    </p>

    {/* Rating */}
    <div className="flex mt-1.5 space-x-0.5 text-emerald-500/80 text-[10px]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (item.rating >= star) return <FaStar key={star} />;
        if (item.rating >= star - 0.5) return <FaStarHalfAlt key={star} />;
        return <FaRegStar key={star} />;
      })}
    </div>
  </div>

</div>

          <p className="relative text-zinc-300 text-sm md:text-base leading-relaxed italic font-light whitespace-normal">
            <span className="text-2xl text-[#02b96d] leading-none absolute -top-2 -left-1 opacity-50">“</span>
            {item.description}
            <span className="text-2xl text-[#02b96d] leading-none inline-block align-bottom opacity-50">”</span>
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Edge Fades */}
      <div className="hidden  absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="hidden  absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;