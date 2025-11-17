"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import AboutFooter from "./AboutFooter";
import { CloudinaryMediaProps } from "@/utils/types";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useParagraphAnimation } from "@/hooks/useParagraphAnimation";
import { useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText)

interface AboutPageProps {
    media: CloudinaryMediaProps[],
    workMedia: CloudinaryMediaProps[]
}

const AboutPage = ({media, workMedia}: AboutPageProps) => { 
    const handleBackHistory = () => {
        window.history.back()
    }
    
    const aboutParaRef = useRef<HTMLDivElement>(null)
    const aboutSecRef = useRef<HTMLElement>(null)
    const aboutLableRef = useRef<HTMLDivElement>(null)
    const backButtonRef = useRef<HTMLButtonElement>(null)

    useTextRevealAnimation({trigger:".head", ele:".headText"});
    useParagraphAnimation({ref: aboutParaRef, trigger: aboutSecRef})

    // Use GSAP to animate button color on scroll
    useEffect(() => {
        if (!backButtonRef.current) return

        const button = backButtonRef.current

        ScrollTrigger.create({
            trigger: ".aboutSection",
            start: "top 10%",
            end: "bottom bottom",
            onEnter: () => {
                // When entering about section
                gsap.to(button, {
                    borderColor: "#000",
                    color: "#000",
                    duration: 0.3
                })
            },
            onLeaveBack: () => {
                // When going back to hero section
                gsap.to(button, {
                    borderColor: "#fff",
                    color: "#fff",
                    duration: 0.3
                })
            }
        })
    }, [])

    return (
        <main className="">
            <section className="head h-screen relative">
                <div onClick={handleBackHistory} className="backBtn fixed top-7 left-7 md:top-15 md:left-15 z-90">
                    <button 
                        ref={backButtonRef}
                        className="border border-white text-white p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-95 hover:bg-white hover:text-black"
                    >
                        <ArrowLeft/>
                    </button>
                </div>

                <div className="headText font-mardon text-white w-full md:w-2/3 text-center text-[1.5rem] md:text-[3rem] lg:text-[3.5rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p>𓏲𝄢 STITCH MOMENTS INTO LIGHT, AND YOU WILL WEAVE MEMORIES THAT NEVER FADE 𓏲𝄢</p>
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

            <section ref={aboutSecRef} className="aboutSection bg-white h-[60svh] md:h-[80svh] md:container py-24! size-full container">
                <div className="">
                    <div ref={aboutLableRef} className="aboutTitle text-sm font-mardon text-primary-accent font-bold">
                        <h3>✹ ABOUT ME</h3>
                    </div>
                    <div ref={aboutParaRef} className="w-full md:w-4/6 px-4 pt-8 absolute left-1/2 -translate-x-1/2 text-start md:text-center font-outfit-regular text-sm md:text-[1.1rem]">
                        <p className="">The Hero Section Design, pro minently featured at the webpage&apos;s top, is crucial for capturing visitor attention and conveying the site&apos;s primary purpose. Designed for showcasing key product features, it can also promote special offers or actions.</p>
                    </div>
                </div>
            </section>
            
            <AboutFooter workMedia={workMedia}/>
        </main>  
    )
}

export default AboutPage