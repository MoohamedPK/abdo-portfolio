"use client"

import { useClipPathAnimation } from "@/hooks/useClipPathAnimation"
import { CloudinaryImageProps } from "@/utils/types"
import { useRef } from "react"
import { CldImage } from "next-cloudinary"

const WorkSection = ({public_id}: CloudinaryImageProps) => {
    
    const workImageRef = useRef<HTMLDivElement>(null)
    useClipPathAnimation(workImageRef)
    
    return (
        <main className="projectsHolder">
            <section  className="main_work h-[80dvh] md:h-screen">
                <div ref={workImageRef} className="size-full">
                    <CldImage src={public_id}
                    alt="Portfolio image"
                    width={1000}
                    height={1000}
                    className="object-cover size-full"/>
                </div>
            </section>

        </main>
    )
}

export default WorkSection