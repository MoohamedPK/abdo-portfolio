"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText)

export const useParagraphAnimation = ({ref, trigger}: {ref: RefObject<HTMLElement | null>, trigger?: RefObject<HTMLElement | null>}) => {

    useGSAP(() => {
        const paragraphSplited = new SplitText(ref.current, {type: "words", mask: "words"});

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger?.current ,
                start: "top 80%",
                end: "bottom bottom"
            }
        })

        tl.fromTo(paragraphSplited.words, {
            yPercent: 100,
            rotateY: 40
        }, {
            yPercent: 0,
            rotateY: 0,
            duration: 1.5,
            ease: "power3.inOut",
            stagger: 0.05
        })
    }, [])

}