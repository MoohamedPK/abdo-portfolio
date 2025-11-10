"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export function useClipPathAnimation (ref: RefObject<HTMLImageElement | null>) {
    
    useGSAP(() => {
    if (!ref.current) return

    // Detect mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // Simpler animation for mobile (better performance)
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5, // Faster scrub for mobile
            }
        })

        tl.fromTo(
            ref.current,
            { opacity: 0.2, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 2, ease: "none" }
        ).to(ref.current, {
            opacity: 0.5,
            scale: 0.95,
            duration: 2,
            ease: "none"
        })

        return () => tl.kill()
        }

        // Desktop: use clip-path
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true
        },
        defaults: {
            duration: 3,
            ease: "none"
        }
        })

        tl.fromTo(
        ref.current,
        { clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }
        ).to(ref.current, {
        clipPath: "polygon(0 0, 100% 0, 78% 64%, 29% 64%)"
        })

        return () => tl.kill()
    }, { scope: ref, dependencies: [] })
}
