"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { CloudinaryImageProps } from "@/utils/types"
import WorkSection from "./WorkSection"

const WorkShowcase = ({images}: {images: CloudinaryImageProps[]}) => {

    useTextRevealAnimation({ trigger: ".workShowcase", ele: ".work_quote" })

return (
    <section id="work" className="pt-10">

        <div className="
            workShowcase 
            h-[50dvh] sm:h-[60dvh] md:h-[70dvh] lg:h-[80dvh] 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 sm:px-4 md:px-0">
            {images.map((image: CloudinaryImageProps) => (
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