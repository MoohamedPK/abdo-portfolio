"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import AboutFooter from "./AboutFooter";
import { CloudinaryMediaProps } from "@/utils/types";

interface AboutPageProps {
    media: CloudinaryMediaProps[],
    workMedia: CloudinaryMediaProps[]
}

const AboutPage = ({media, workMedia}: AboutPageProps) => { 

    useTextRevealAnimation({trigger: [".head", ".aboutSection"], ele: [".headText",".aboutText"]});

    return (
        <main>
            <section className="head h-[90svh] md:h-screen relative">
                <div className="headText font-roleya w-full md:w-2/3 text-center text-[1.5rem] md:text-[3rem] lg:text-[4rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

            <section className="aboutSection h-[70svh] md:h-[80svh]  md:container py-24! bg-black md:bg-primary-accent size-full text-white container">

                <div className="">

                    <div className="aboutTitle font-satushi-bold text-red-800 md:text-black font-bold">
                        <h3>✹ ABOUT ME</h3>
                    </div>

                    <div className="aboutText w-full md:w-4/6 px-4 pt-8 absolute left-1/2 -translate-x-1/2 text-start md:text-center font-outfit-regular text-[1.1rem]">
                        <p className="">The Hero Section Design, pro minently featured at the webpage&apos;s top, is crucial for capturing visitor attention and conveying the site&apos;s primary purpose. Designed for showcasing key product features, it can also promote special offers or actions.</p>
                    </div>
                </div>
            </section>
            
            <AboutFooter workMedia={workMedia}/>
        </main>  
    )
}

export default AboutPage