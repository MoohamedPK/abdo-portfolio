"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { CloudinaryMediaProps } from "@/utils/types"
import { CldImage } from "next-cloudinary"

const AboutFooter = ({workMedia}: {workMedia: CloudinaryMediaProps[]}) => {

    useTextRevealAnimation({trigger: ".aboutFooter", ele: ".quote"})
  return (
    <section className="aboutFooter h-[75svh] md:h-screen py-20">
        <div className="quote font-roleya text-center text-[1.5rem] md:text-[2.5rem]">
            <p>𓏲𝄢 DRIVEN BY PASSION AND DEFINED BY PERSPECTIVE 𓏲𝄢</p>
        </div>

        <div className="workFlex min-h-[80svh] flex justify-center items-center">
  <div className="gallery 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-4 
      px-4 
      md:px-8 
      w-full 
      max-w-7xl 
      mx-auto 
      py-10">
    {workMedia.map((work) => (
      <div
        key={work.public_id}
        className="relative w-full aspect-4/3 overflow-hidden rounded-2xl"
      >
        <CldImage
          src={work.secure_url}
          alt="Portfolio image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>

    </section>
  )
}

export default AboutFooter