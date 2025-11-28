"use client";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function useTextRevealAnimation({
  trigger,
  ele,
}: {
  trigger: string | string[];
  ele: string | string[];
}) {
  useGSAP(() => {
    if (!trigger || !ele) return;

    const animateText = (element: string, section: string) => {
      const split = new SplitText(element, { type: "words", mask: "words" });

      gsap.set(split.words, { yPercent: 90, rotateX: 30 });
      gsap.to(split.words, {
        rotateX: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom bottom",
        },
        onComplete: () => split.revert(),
      });
    };

    // Case 1: both are arrays
    if (Array.isArray(trigger) && Array.isArray(ele)) {
      const count = Math.max(trigger.length, ele.length);
      for (let i = 0; i < count; i++) {
        animateText(ele[i], trigger[i]);
      }
      return;
    }

    // Case 2: both are strings
    if (typeof trigger === "string" && typeof ele === "string") {
      animateText(ele, trigger);
    }
  }, [trigger, ele]);
}
