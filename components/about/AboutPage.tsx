"use client";

// import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import AboutFooter from "./AboutFooter";
import { CloudinaryMediaProps } from "@/utils/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
// import { useParagraphAnimation } from "@/hooks/useParagraphAnimation";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import AboutBody from "./AboutBody";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AboutPageProps {
  media: CloudinaryMediaProps[];
  workMedia: CloudinaryMediaProps[];
}

const AboutPage = ({ media, workMedia }: AboutPageProps) => {
  const handleBackHistory = () => {
    window.history.back();
  };
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const aboutHeadTextSplit = new SplitText(".aboutHeadText", {
      type: "lines",
      mask: "lines",
    });
    gsap.set(aboutHeadTextSplit.lines, {
      opacity: 0,
      yPercent: 100,
      rotateY: 40,
    });

    gsap.to(aboutHeadTextSplit.lines, {
      opacity: 1,
      yPercent: 0,
      rotateY: 0,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.09,
    });
  }, [".aboutHead"]);

  return (
    <main className="">
      <section className="aboutHead h-screen relative">
        <div
          onClick={handleBackHistory}
          className="backBtn fixed top-7 left-7 md:top-15 md:left-15 z-90"
        >
          <button
            ref={backButtonRef}
            className="border border-primary-accent text-primary-accent p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-95 hover:bg-white hover:text-black"
          >
            <ArrowLeft />
          </button>
        </div>

        <div className=" font-mardon text-white w-full md:w-2/3 text-center text-[1.5rem] md:text-[3rem] lg:text-[3.5rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="aboutHeadText">
            𓏲𝄢 STITCH MOMENTS INTO LIGHT, AND YOU WILL WEAVE MEMORIES THAT NEVER
            FADE 𓏲𝄢
          </p>
        </div>
        <div className="headVisual bg-secondary-text size-full">
          <video
            src={`${media[0].secure_url}`}
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
          />
        </div>
      </section>

      <AboutBody />

      <AboutFooter workMedia={workMedia} />
    </main>
  );
};

export default AboutPage;
