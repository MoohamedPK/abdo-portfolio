"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import AboutFooter from "./AboutFooter";

const AboutPage = () => {

    useTextRevealAnimation({trigger: [".head", ".aboutSection"], ele: [".headText",".aboutText"]});

    return (
        <main>
            <section className="head h-screen grid grid-cols-2 place-items-center">
                <div className="headText font-roleya w-200 text-center text-[3rem]">
                    <p>𓏲𝄢 STITCH MOMENTS INTO LIGHT, AND YOU WILL WEAVE MEMORIES THAT NEVER FADE 𓏲𝄢</p>
                </div>
                <div className="headVisual bg-secondary-text size-2/3">0-
                    Video Or Picture
                </div>
            </section>

            <section className="aboutSection h-[80dvh] container">
                <div className="aboutTitle font-satushi-bold ">
                    <h3>✹ ABOUT ME</h3>
                </div>

                <div className="aboutText pt-8 absolute left-1/2 -translate-x-1/2 text-center font-outfit-regular text-[1.1rem]">
                    <p className="">The Hero Section Design, pro minently featured at the webpage&apos;s top, is crucial for capturing visitor attention and conveying the site&apos;s primary purpose. Designed for showcasing key product features, it can also promote special offers or actions.</p>
                </div>
            </section>
            
            <AboutFooter/>
        </main>  
    )
}

export default AboutPage