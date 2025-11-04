"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"

const AboutFooter = () => {

    useTextRevealAnimation({trigger: ".aboutFooter", ele: ".quote"})

  return (
    <section className="aboutFooter h-screen">
        <div className="quote  font-roleya text-center text-[2.5rem]">
            <p>𓏲𝄢 DRIVEN BY PASSION AND DEFINED BY PERSPECTIVE 𓏲𝄢</p>
        </div>

        <div className="workSlide">
            
        </div>
    </section>
  )
}

export default AboutFooter