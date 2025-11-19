"use client"

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)

const AboutBody = () => {

    //refs
    const aboutBodyRef = useRef<HTMLElement>(null)
    const aboutLableRef = useRef<HTMLDivElement>(null)
    const aboutParaRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {

        const mm = gsap.matchMedia();
        // text split
        const aboutLableSplit = new SplitText(aboutLableRef.current, {type: "chars", mask: "chars"});
        const aboutParaSplit = new SplitText(aboutParaRef.current, {type: "lines", mask: "lines"});
        
        gsap.set([aboutLableSplit.chars, aboutParaSplit.lines], {yPercent: 100})
        gsap.set(".aboutImage", {clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", rotateY: 50})

        mm.add("(max-width: 767px)", () =>{
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutBodyRef.current,
                    start: "top 80%",
                    end: "bottom bottom",
                },
                defaults: {
                    duration: 1.5,
                    ease: "power3.inOut",
                    stagger: 0.05
                }
            })

            tl.to(aboutLableSplit.chars, {
                yPercent: 0
            })
    
            .to(aboutParaSplit.lines, {
                yPercent: 0
            }, "<0.4")
    
            .to(".aboutImage", {clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", rotateY: 0}, "<0.3")
        })


        mm.add("(min-width: 767px)", () =>{
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutBodyRef.current,
                    start: "top center",
                    end: "bottom bottom",
                },
                defaults: {
                    duration: 1.5,
                    ease: "power3.inOut",
                    stagger: 0.05
                }
            })

            tl.to(aboutLableSplit.chars, {
                yPercent: 0
            })
    
            .to(aboutParaSplit.lines, {
                yPercent: 0
            }, "<0.4")
    
            .to(".aboutImage", {clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", rotateY: 0}, "<0.3")
        })

    }, [aboutBodyRef])
    
  return (
    <section ref={aboutBodyRef} className="aboutSection bg-white h-[120dvh] flex justify-center ">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 w-full">
            <div className="aboutTitle text-sm font-mardon text-primary-accent font-bold space-y-8 px-5 md:px-0">
                <h3 ref={aboutLableRef}>✹ ABOUT ME</h3>

                <div className="md:max-w-200 leading-6 text-xs md:text-sm text-black">
                    <p ref={aboutParaRef} className="">The Hero Section Design, pro minently featured at the webpage&apos;s top, is crucial for capturing visitor attention and conveying the site&apos;s primary purpose. Designed for showcasing key product features, it can also promote special offers or actions.</p>
                </div>
            </div>

            <div className="aboutBodyImg">
                <Image src={"/about-img.jfif"} alt="about image" className="aboutImage object-cover max-h-130 max-w-90" width={350} height={350}/>
            </div>
        </div>
    </section>
  )
}

export default AboutBody
