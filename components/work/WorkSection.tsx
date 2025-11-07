"use client"

import { useClipPathAnimation } from "@/hooks/useClipPathAnimation"
import { CloudinaryImageProps } from "@/utils/types"
import { useRef } from "react"
import { CldImage } from "next-cloudinary"

const WorkSection = ({public_id}: CloudinaryImageProps) => {
    
    const workImageRef = useRef<HTMLImageElement>(null)
    useClipPathAnimation(workImageRef)
    
    return (
            <section  className="main_work h-[50vh] md:h-screen">
                <div className="size-full">
                    <CldImage src={public_id + ".jpg"}
                    ref={workImageRef}
                    alt="Portfolio image"
                    width={800}
                    height={800}
                    loading= "lazy"
                    className="object-cover size-full"/>
                </div>
            </section>
    )
}

export default WorkSection