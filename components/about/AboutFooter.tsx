"use client"

import { CloudinaryMediaProps } from "@/utils/types"
import { CldImage } from "next-cloudinary"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutFooter = ({workMedia}: {workMedia: CloudinaryMediaProps[]}) => {

  const aboutFooterRef = useRef<HTMLElement | null>(null)

    useGSAP(() => {
      const quoteSplit = new SplitText(".quote", {type: "words", mask: "words"});

      gsap.set(quoteSplit.words, {
        yPercent: 100,
      })

      gsap.set(".workImage", {clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"})

      gsap.to(quoteSplit.words, {
        yPercent: 0,
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: aboutFooterRef.current,
          start: "top 90%",
        }
      });

      gsap.to(".workImage", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".gallery",
          start: "top 80%",
          end: "bottom bottom",
        }
      })
    }, [aboutFooterRef])

  return (
    <section ref={aboutFooterRef} className="aboutFooter h-[80dvh] md:h-[120dvh]">
        <div className=" font-mardon py-20">
            <p className="quote text-center text-[1rem] sm:text-[2rem] lg:text-[2.5rem]
                max-w-250 mx-auto ">𓏲𝄢 DRIVEN BY PASSION AND DEFINED BY PERSPECTIVE 𓏲𝄢</p>
        </div>

          <div className="gallery flex justify-center overflow-auto">
            {workMedia.map((work) => (
              <div
                key={work.public_id}
                className="max-w-110 max-h-130 md:flex-[0_0_20rem] flex-[0_0_6rem]"
              >
                <CldImage
                  src={work.secure_url}
                  alt="Portfolio image"
                  width={500} 
                  height={500}
                  className="workImage object-cover size-full"
                />
              </div>
            ))}
          </div>

    </section>
  )
}

export default AboutFooter