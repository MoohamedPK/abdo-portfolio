"use client";

// import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ContactPage = () => {
  const contactSectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const splitContactTitle = new SplitText(".contactTitle", {
      type: "words",
      mask: "words",
    });
    const splitContactQuote = new SplitText(".contactQuote", {
      type: "words",
      mask: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
    });

    gsap.set([splitContactTitle.words, splitContactQuote.words], {
      yPercent: 100,
    });

    tl.to(splitContactTitle.words, {
      yPercent: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: "power3.inOut",
    })
    .to(
      splitContactQuote.words,
      {
        yPercent: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      },
      "<0.3"
    );
  }, [contactSectionRef]);

  return (
    <section
      ref={contactSectionRef}
      id="contact"
      className="contactSection  min-h-screen md:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-12 py-16"
    >
      <div className="space-y-8 text-center lg:text-left">
        <div className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-satushi-bold">
          <h1 className="contactTitle">⬤ Let&apos;s Get In Touch</h1>
        </div>

        <div className="contactQuote text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-mardon text-primary-accent uppercase">
          <p>𓏲𝄢 Your vision, my lens. Let&apos;s make magic happen. 𓏲𝄢</p>
        </div>
      </div>

      <div className="w-full max-w-xl mx-auto lg:max-w-none">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
