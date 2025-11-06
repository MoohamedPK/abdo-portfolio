"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {RefObject} from "react"

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
})


export function useClipPathAnimation (ref: RefObject<HTMLDivElement | null>) {
    useGSAP(() => {
        
        if (!ref.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            fastScrollEnd: true,
            preventOverlaps: true
            },
        })

        // enter animation
        tl.fromTo(ref.current,{
            clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0 100%)"
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 3,
            ease: "none",
            overwrite: "auto"
        });

        // exit animation
        tl.to(ref.current,{
            clipPath: "polygon(0 0, 100% 0, 78% 64%, 29% 64%)",
            duration: 3,
            ease: "none",
            overwrite: "auto"
        })
        
    }, [ref])
}
