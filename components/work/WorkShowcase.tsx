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
        if (!textRef.current || imageRefs.current.length === 0) return;

        const mm = gsap.matchMedia();
        // Text animation
        const paragraphSplited = new SplitText(textRef.current, { type: "lines", mask: "lines" });
        gsap.set(paragraphSplited.lines, {yPercent: 100 })

        gsap.to(
        paragraphSplited.lines,
        { yPercent: 0, duration: 1.5, ease: "power3.inOut", stagger: 0.05, scrollTrigger: {
            trigger: containerRef.current,
            start :"top 80%",
            end: "bottom bottom",
        } }
        );

        // Individual scroll animation for each image
        imageRefs.current.forEach((img) => {
        if (!img) return;

        mm.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "top top",
                scrub: 1.5,
                invalidateOnRefresh: true,
            },
            });

            gsap.set(img, {
                opacity: 0.3, scale: 0.8
            })
            tl.to(
            img,
            { opacity: 1, scale: 1, duration: 1.5 }
            );
        });

        mm.add("(min-width: 769px)", () => {
            ScrollTrigger.create({
            trigger: img,
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
            animation: gsap.fromTo(
                img,
                { clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)" },
                {
                clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "none",
                }
            ),
            });

            ScrollTrigger.create({
            trigger: img,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
            animation: gsap.fromTo(
                img,
                {
                clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                {
                clipPath:
                    "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
                ease: "none",
                }
            ),
            });
        });
        });

        return () => {
        paragraphSplited.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [containerRef, imageRefs]);

    return (
        <section ref={containerRef} id="work" className="">
        <div className="py-15 md:py-20 flex items-center justify-center px-4 sm:px-6 md:px-10">
            <p ref={textRef} className="font-mardon italic work_quote text-[1rem] sm:text-[2rem] lg:text-[2.5rem] text-center max-w-250 uppercase leading-relaxed">𓏲𝄢 A thing that you see in my pictures is that I was not afraid to fall in love with these people. 𓏲𝄢</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, i) => (
            <div
                key={image.public_id}
                className="main_work size-full h-[50svh] md:h-screen relative overflow-hidden"
            >
                <CldImage
                src={image.public_id}
                ref={(el) => {
                    if (el) imageRefs.current[i] = el;
                }}
                alt="Portfolio image"
                fill
                loading="lazy"
                className="object-cover size-full will-change-[clip-path]"
                />
            </div>
            ))}
        </div>
        </section>
    );
};

export default WorkShowcase;
