"use client"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(SplitText, ScrollTrigger)

export function useTextRevealAnimation({
    trigger,
    ele,
    }: {
    trigger: string | string[]
    ele: string | string[]
    }) {
    useGSAP(() => {
        // Validation
        if (!trigger || !ele) return

        // Helper to create the animation
        const animateText = (element: string, section: string) => {
        const split = new SplitText(element, { type: "words", mask: "words" })

        gsap.fromTo(
            split.words,
            { yPercent: 125, skewY: 10 },
            {
            yPercent: 0,
            skewY: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            overwrite: "auto",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom bottom",
                fastScrollEnd: true,
                preventOverlaps: true
            },
            onComplete: () => split.revert(), // cleanup after animation
            },
        )
        }

        // Case 1: both are arrays
        if (Array.isArray(trigger) && Array.isArray(ele)) {
        const count = Math.max(trigger.length, ele.length)
        for (let i = 0; i < count; i++) {
            animateText(ele[i], trigger[i])
        }
        return
        }

        // Case 2: both are strings
        if (typeof trigger === "string" && typeof ele === "string") {
        animateText(ele, trigger)
        }
    }, [trigger, ele])
}
