"use client";

import { CloudinaryMediaProps } from "@/utils/types";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WorkShowcase = ({ images }: { images: CloudinaryMediaProps[] }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useGSAP(() => {
    const images = gsap.utils.toArray(".work_image") as HTMLImageElement[];
    const containers = gsap.utils.toArray(".main_work") as HTMLElement[];

    //   Text animation
    const paragraphSplited = new SplitText(textRef.current, {
      type: "lines",
      mask: "lines",
    });
    gsap.set(paragraphSplited.lines, { yPercent: 100 });

    gsap.to(paragraphSplited.lines, {
      yPercent: 0,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.09,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
    });

    containers.forEach((container, i) => {
      gsap.set(images[i], { z: -90, scale: 0.6, opacity: 0.4 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      tl.to(images[i], {
        scale: 1,
        z: 0,
        duration: 2,
        opacity: 1,
        ease: "none",
      });
    });
  }, []);

  return (
    <section ref={containerRef} id="work" className="bg-black text-white">
      <div className="py-15 md:py-20 flex items-center justify-center px-4 sm:px-6 md:px-10">
        <p
          ref={textRef}
          className="font-mardon italic work_quote text-[1rem] sm:text-[2rem] lg:text-[2.5rem] text-center max-w-250 uppercase leading-relaxed"
        >
          𓏲𝄢 A thing that you see in my pictures is that I was not afraid to
          fall in love with these people. 𓏲𝄢
        </p>
      </div>
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
      <div className="flex flex-col justify-center items-center perspective-distant">
        {images.map((image, i) => (
          <div
            key={image.public_id}
            className="main_work size-150 relative overflow-hidden"
          >
            <CldImage
              src={image.public_id}
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
              alt="Portfolio image"
              fill={true}
              loading="lazy"
              className="work_image object-cover size-full will-change-[clip-path]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
//
export default WorkShowcase;
