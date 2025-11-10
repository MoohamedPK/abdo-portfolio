"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { CloudinaryMediaProps } from "@/utils/types"
import WorkSection from "./WorkSection"

const WorkShowcase = ({images}: {images: CloudinaryMediaProps[]}) => {

    useTextRevealAnimation({ trigger: ".workShowcase", ele: ".work_quote" })

return (
    <section id="work" className="pt-10 bg-black">

        <div className="
            workShowcase 
            h-[50svh] sm:h-[60svh] md:h-[70vh] lg:h-[80vh] 
            flex items-center justify-center 
            px-4 sm:px-6 md:px-10
            ">

            <div className="
                work_quote 
                text-[1.5rem] sm:text-[2rem] md:text-[3rem] 
                max-w-xl lg:max-w-6xl 
                text-center uppercase font-roleya 
                leading-9 md:leading-normal
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