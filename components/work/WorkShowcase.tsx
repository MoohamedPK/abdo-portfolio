"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { CloudinaryMediaProps } from "@/utils/types"
import WorkSection from "./WorkSection"
import { useParagraphAnimation } from "@/hooks/useParagraphAnimation"
import { useRef } from "react"

const WorkShowcase = ({images}: {images: CloudinaryMediaProps[]}) => {

    // useTextRevealAnimation({ trigger: ".workShowcase", ele: ".work_quote"})
    const workShowcaseRef = useRef<HTMLDivElement>(null)
    const workQuoteRef = useRef<HTMLDivElement>(null)

    useParagraphAnimation({ref: workQuoteRef, trigger: workShowcaseRef})

return (
    <section id="work" className="bg-black">

        <div ref={workShowcaseRef} className="
        
            workShowcase
            py-15
            md:py-20
            flex items-center justify-center 
            px-4 sm:px-6 md:px-10
            ">

            <div ref={workQuoteRef} className="
                work_quote 
                text-[1rem] sm:text-[2rem] lg:text-[2.5rem]
                max-w-250
                text-center uppercase font-roleya 
                leading-8 md:leading-15
                ">
                <p>𓏲𝄢 A thing that you see in my pictures is that I was not afraid to fall in love with these people. 𓏲𝄢</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image: CloudinaryMediaProps) => (
                <WorkSection 
                    secure_url={image.secure_url} 
                    public_id={image.public_id} 
                    key={image.public_id}
                />
            ) )}
        </div>
    </section>
)
}

export default WorkShowcase