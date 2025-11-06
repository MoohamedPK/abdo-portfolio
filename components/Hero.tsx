"use client"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText";
import gsap from "gsap"
import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import Link from "next/link";

gsap.registerPlugin(SplitText);
const Hero = () => {
    
    useGSAP(() => {
        
        const tl = gsap.timeline({
            defaults:{
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            }
        });
        
        const HeroTextSplit = new SplitText(".HeroName", {type: "chars", mask: "chars"})
        const paraTextSplit = new SplitText(".heroParagraph", {type: "words", mask: "words"})
        
        tl.fromTo(HeroTextSplit.chars, {
            yPercent: 125,
            skewY: 25,
            opacity: 0
        }, {
            opacity: 1,
            yPercent: 0,
            skewY: 0,
        }, "<0.5")

        .fromTo(paraTextSplit.words, {
            yPercent: 125,
            opacity: 0,
            skewY: 25,
        }, {
            opacity: 1,
            yPercent: 0,
            skewY: 0,
        }, "<0.7")

        .fromTo(".hero-btn", {
            opacity: 0,
            yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            
        }, "<0.7")

        return () => {
            HeroTextSplit.revert();
            paraTextSplit.revert();
        }
    }, [])
    
    useTextRevealAnimation({trigger: ".heroText", ele: ".initialText"})

return (
<section className="h-[80dvh] md:h-screen space-y-8 font-outfit-medium flex flex-col justify-center">
    <div className="heroText uppercase  font-satushi-bold space-y-5">
        <div className="flex justify-around items-center text-[2rem] md:text-[4rem]">
            <div className="initialText">This</div>
            <div className="initialText">Is</div>
            <div className="initialText">Me</div>
        </div>

        <div className="text-center space-y-5 md:space-y-0">
            <h1 className="HeroName text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-satushi-bold italic tracking-widest text-black">Abdorahman</h1>
            <p className="heroParagraph font-outfit-light lowercase text-[1.2rem]">Welcome to my lens  where light, emotion, and creativity come to life</p>
        </div>
    </div>

    <div className=" text-center flex justify-center items-center space-x-8 pt-8">
            <Link href={"#contact"} className="">
                <button className="hero-btn bg-black rounded-full py-2 px-6 cursor-pointer">
                    Contact Me
                </button>
            </Link>

            <Link href={"#work"} className="">
                <button className="hero-btn bg-black rounded-full py-2 px-6 cursor-pointer">
                    My Work
                </button>
            </Link>
    </div>
</section>
)
}

export default Hero