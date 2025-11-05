"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { CloudinaryImageProps } from "@/utils/types"
import WorkSection from "./WorkSection"

const WorkShowcase = ({images}: {images: CloudinaryImageProps[]}) => {

    useTextRevealAnimation({ trigger: ".workShowcase", ele: ".work_quote" })
return (
<div>

    <div className="workShowcase h-screen centerlizeItems">

            <div className="work_quote text-[3rem] max-w-300 text-center uppercase font-roleya">
                <p>𓏲𝄢 A thing that you see in my pictures is that I was not afraid to fall in love with these people. 𓏲𝄢</p>
            </div>
        </div>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image: CloudinaryImageProps) => (
            <WorkSection secure_url={image.secure_url} public_id={image.public_id} key={image.public_id}/>
        ) )}
    </div>
</div>
)
}

export default WorkShowcase