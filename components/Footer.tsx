"use client";

// import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { media, navLinks } from "@/utils/data";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer = () => {
  // useTextRevealAnimation({ trigger: ".footer", ele: ".mediaLink" })
  // useTextRevealAnimation({ trigger: ".footer", ele: ".link" })
  // useTextRevealAnimation({ trigger: ".footer", ele: ".footerTag" })

  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const footerTagSplit = new SplitText(".footerTag", {
      type: "words",
      mask: "words",
    });
    const mediaLinksSplit = new SplitText(".mediaLink", {
      type: "words",
      mask: "words",
    });
    const linksSplit = new SplitText(".link", { type: "words", mask: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
      defaults: {
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.05,
      },
    });

    gsap.set([mediaLinksSplit.words, linksSplit.words, footerTagSplit.words], {
      yPercent: 100,
    });

    tl.to(mediaLinksSplit.words, {
      yPercent: 0,
    })

      .to(
        linksSplit.words,
        {
          yPercent: 0,
        },
        "<0.3"
      )

      .to(
        footerTagSplit.words,
        {
          yPercent: 0,
        },
        "<0.3"
      );
  }, [footerRef]);

  return (
    <footer
      ref={footerRef}
      className="footer bg-black text-white pt-20 pb-8 min-h-[60vh] flex flex-col justify-between font-mardon"
    >
      <div className="md:container mx-auto px-4 sm:px-6 lg:px-12 flex justify-around gap-12 text-center sm:text-left">
        {/* Left column */}
        <div>
          <h1 className="pb-6 text-xl  tracking-wide">INTERESTING</h1>
          <div className="flex flex-col space-y-3 text-gray-300">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="link hover:text-primary-accent transition-colors duration-300 "
                key={link.link}
              >
                {link.link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h1 className="pb-6 text-xl tracking-wide">MORE ABOUT ME</h1>
          <div className="flex flex-col space-y-3 text-gray-300">
            {media.map((m) => (
              <Link
                href={m.link}
                target="_blank"
                className="mediaLink hover:text-primary-accent transition-colors duration-300"
                key={m.media}
              >
                {m.media}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer tag */}
      <div className="text-center pt-16 font-mardon text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] tracking-wider text-white/90">
        <h1 className="footerTag">✶ LENSE & LIGHT ✶</h1>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm sm:text-base mt-8 font-sans">
        <p>
          © {new Date().getFullYear()} HML Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
