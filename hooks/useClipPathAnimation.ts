"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export function useClipPathAnimation(ref: RefObject<HTMLImageElement | null>) {
    useGSAP(() => {
    if (!ref.current) return

    const mm = gsap.matchMedia()

    mm.add("(max-width: 768px)", () => {
      // Mobile animation (simpler)
      gsap.fromTo(
        ref.current,
        { opacity: 0.2, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      )
    })

    mm.add("(min-width: 769px)", () => {
      // Desktop animation (clip-path)
      gsap.fromTo(
        ref.current,
        { clipPath: "polygon(20% 20%, 80% 20%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      )
    })

    return () => mm.revert()
  }, [ref])
}
